import { useState, useEffect } from 'react'
import type { AppSettings } from '../types'

const STORAGE_KEY = 'imbt-settings'

function getSystemDarkMode(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

const defaultSettings: AppSettings = {
  fontSize: 'medium',
  darkMode: getSystemDarkMode(),
  soundEnabled: true,
}

export function useSettings() {
  const [settings, setSettings] = useState<AppSettings>(() => {
    if (typeof window === 'undefined') return defaultSettings
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        return { ...defaultSettings, ...parsed }
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
