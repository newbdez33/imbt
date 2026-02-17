import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import type { TestHistoryRecord } from '../types'
import { useLocalizedData } from '../hooks/useLocalizedData'

const HISTORY_KEY = 'imbt-test-history'

function loadHistory(): TestHistoryRecord[] {
  if (typeof window === 'undefined') return []
  const stored = localStorage.getItem(HISTORY_KEY)
  if (stored) {
    try {
      return JSON.parse(stored)
    } catch {
      return []
    }
  }
  return []
}

const groupColors = {
  analyst: { bg: 'bg-analyst-500', light: 'bg-analyst-100 dark:bg-analyst-900/30', text: 'text-analyst-600 dark:text-analyst-400', border: 'border-analyst-500' },
  diplomat: { bg: 'bg-diplomat-500', light: 'bg-diplomat-100 dark:bg-diplomat-900/30', text: 'text-diplomat-600 dark:text-diplomat-400', border: 'border-diplomat-500' },
  sentinel: { bg: 'bg-sentinel-500', light: 'bg-sentinel-100 dark:bg-sentinel-900/30', text: 'text-sentinel-600 dark:text-sentinel-400', border: 'border-sentinel-500' },
  explorer: { bg: 'bg-explorer-500', light: 'bg-explorer-100 dark:bg-explorer-900/30', text: 'text-explorer-600 dark:text-explorer-400', border: 'border-explorer-500' },
}

export function HistoryPage() {
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()
  const { getPersonality, getGroupName } = useLocalizedData()
  const [history, setHistory] = useState<TestHistoryRecord[]>(loadHistory)

  const deleteRecord = (id: string) => {
    const newHistory = history.filter(r => r.id !== id)
    setHistory(newHistory)
    localStorage.setItem(HISTORY_KEY, JSON.stringify(newHistory))
  }

  const clearHistory = () => {
    if (confirm(t('history.confirmClear'))) {
      setHistory([])
      localStorage.removeItem(HISTORY_KEY)
    }
  }

  const formatDate = (isoString: string) => {
    const date = new Date(isoString)
    const locale = i18n.language === 'ja' ? 'ja-JP' : i18n.language === 'en' ? 'en-US' : 'zh-CN'
    return date.toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="sticky top-0 z-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-lg mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/menu')}
              className="p-2 -ml-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">{t('history.title')}</h1>
            {history.length > 0 && (
              <button
                onClick={clearHistory}
                className="ml-auto text-sm text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300"
              >
                {t('history.clearAll')}
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-6 py-6">
        {history.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📋</div>
            <p className="text-gray-500 dark:text-gray-400">{t('history.empty')}</p>
            <button
              onClick={() => navigate('/test')}
              className="mt-4 px-6 py-2 bg-gradient-to-r from-analyst-600 to-sentinel-600 text-white font-medium rounded-xl hover:opacity-90 transition-opacity"
            >
              {t('landing.startTest')}
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {history.map((record) => {
              const personality = getPersonality(record.type)
              const colors = groupColors[record.group]

              return (
                <div
                  key={record.id}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-5 card-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl ${colors.light} flex items-center justify-center`}>
                        <span className="text-2xl">{personality.emoji}</span>
                      </div>
                      <div>
                        <div className="font-bold text-xl text-gray-900 dark:text-white">{record.type}</div>
                        <div className={`text-sm ${colors.text}`}>{personality.name}</div>
                      </div>
                    </div>
                    <button
                      onClick={() => deleteRecord(record.id)}
                      className="p-1.5 text-gray-400 hover:text-red-500 dark:text-gray-500 dark:hover:text-red-400 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>

                  <div className="space-y-2 mb-3">
                    <DimensionBar left="E" leftValue={record.percentages.E} />
                    <DimensionBar left="S" leftValue={record.percentages.S} />
                    <DimensionBar left="T" leftValue={record.percentages.T} />
                    <DimensionBar left="J" leftValue={record.percentages.J} />
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className={`inline-block px-2 py-0.5 rounded ${colors.light} ${colors.text}`}>{getGroupName(record.group)}</span>
                    <span className="text-gray-400 dark:text-gray-500">{formatDate(record.completedAt)}</span>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

function DimensionBar({ 
  left, 
  leftValue, 
}: { 
  left: string
  leftValue: number
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-5 text-xs font-medium text-gray-500 dark:text-gray-400">{left}</span>
      <div className="flex-1 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden flex">
        <div
          className="h-full bg-gradient-to-r from-analyst-500 to-analyst-400"
          style={{ width: `${leftValue}%` }}
        />
      </div>
      <span className="w-8 text-xs font-medium text-gray-600 dark:text-gray-300 text-right">{leftValue}%</span>
    </div>
  )
}
