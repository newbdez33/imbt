import { useState, useEffect } from 'react'
import i18n from '../locales/i18n'
import type { AppSettings } from '../types'

const STORAGE_KEY = 'imbt-settings'

function getSystemDarkMode(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function getBrowserLanguage(): AppSettings['language'] {
  if (typeof window === 'undefined') return 'zh-CN'
  const lang = navigator.language
  if (lang.startsWith('ja')) return 'ja'
  if (lang.startsWith('en')) return 'en'
  return 'zh-CN'
}

const defaultSettings: AppSettings = {
  fontSize: 'medium',
  darkMode: getSystemDarkMode(),
  soundEnabled: true,
  language: getBrowserLanguage(),
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

  useEffect(() => {
    if (i18n.language !== settings.language) {
      i18n.changeLanguage(settings.language)
    }
  }, [settings.language])

  const updateSettings = (updates: Partial<AppSettings>) => {
    setSettings(prev => ({ ...prev, ...updates }))
  }

  return { settings, updateSettings }
}
