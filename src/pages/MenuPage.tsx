import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useSound } from '../hooks/useSound'
import { TestTypeSelector } from '../components/TestTypeSelector'
import type { TestType } from '../types'

export function MenuPage() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const { play } = useSound()
  const [showTestSelector, setShowTestSelector] = useState(false)

  const handleTestTypeSelect = (type: TestType) => {
    play('click')
    if (type === 'nfc') {
      navigate('/test/nfc')
    } else {
      navigate('/test')
    }
  }

  const menuItems = [
    {
      label: t('landing.startTest'),
      description: t('landing.questions'),
      onClick: () => { play('click'); setShowTestSelector(true) },
      icon: '🎯',
    },
    {
      label: t('history.title'),
      description: t('history.empty').replace('暂无测试记录', '').replace('No test records yet', '').replace('テスト記録がありません', ''),
      path: '/history',
      icon: '📋',
    },
    {
      label: t('landing.settings'),
      description: t('settings.display') + ', ' + t('settings.sound'),
      path: '/settings',
      icon: '⚙️',
    },
    {
      label: t('landing.about'),
      description: t('about.title'),
      path: '/about',
      icon: 'ℹ️',
    },
  ]

  if (showTestSelector) {
    return (
      <div className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-md mx-auto">
          <button
            onClick={() => { play('click'); setShowTestSelector(false) }}
            className="mb-4 p-2 -ml-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <TestTypeSelector onSelect={handleTestTypeSelect} />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
          {t('app.title')}
        </h1>

        <div className="space-y-3">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={item.onClick || (() => { play('click'); navigate(item.path!) })}
              className="w-full p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow text-left flex items-center gap-4"
            >
              <span className="text-2xl">{item.icon}</span>
              <div>
                <div className="font-medium text-gray-900 dark:text-white">
                  {item.label}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {item.description}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
