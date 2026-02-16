import { useState, useCallback } from 'react'
import type { TestHistoryRecord, TestResult } from '../types'

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

export function useTestHistory() {
  const [history, setHistory] = useState<TestHistoryRecord[]>(loadHistory)

  const saveToHistory = useCallback((result: TestResult) => {
    const record: TestHistoryRecord = {
      id: Date.now().toString(),
      type: result.type,
      group: result.group,
      percentages: result.percentages,
      completedAt: new Date().toISOString(),
    }
    
    setHistory(prev => {
      const newHistory = [record, ...prev]
      localStorage.setItem(HISTORY_KEY, JSON.stringify(newHistory))
      return newHistory
    })
    
    return record
  }, [])

  const deleteRecord = useCallback((id: string) => {
    setHistory(prev => {
      const newHistory = prev.filter(r => r.id !== id)
      localStorage.setItem(HISTORY_KEY, JSON.stringify(newHistory))
      return newHistory
    })
  }, [])

  const clearHistory = useCallback(() => {
    setHistory([])
    localStorage.removeItem(HISTORY_KEY)
  }, [])

  return {
    history,
    saveToHistory,
    deleteRecord,
    clearHistory,
  }
}
