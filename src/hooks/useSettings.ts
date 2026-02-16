import { useState, useEffect } from 'react'
import type { AppSettings } from '../types'

const STORAGE_KEY = 'imbt-settings'

const defaultSettings: AppSettings = {
  fontSize: 'medium',
  darkMode: false,
  soundEnabled: true,
}

export function useSettings() {
  const [settings, setSettings] = useState<AppSettings>(() => {
    if (typeof window === 'undefined') return defaultSettings
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        return { ...defaultSettings, ...JSON.parse(stored) }
      } catch {
        return defaultSettings
      }
    }
    return defaultSettings
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
    
    if (settings.darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    
    const fontSizes = { small: '14px', medium: '16px', large: '18px' }
    document.documentElement.style.fontSize = fontSizes[settings.fontSize]
  }, [settings])

  const updateSettings = (updates: Partial<AppSettings>) => {
    setSettings(prev => ({ ...prev, ...updates }))
  }

  return { settings, updateSettings }
}
