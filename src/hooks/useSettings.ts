import { useState, useEffect, useRef } from 'react'
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

function loadSavedSettings(): Partial<AppSettings> | null {
  if (typeof window === 'undefined') return null
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored) {
    try {
      return JSON.parse(stored)
    } catch {
      return null
    }
  }
  return null
}

export function useSettings() {
  const isInitialized = useRef(false)
  const savedSettings = useRef(loadSavedSettings())
  
  const [settings, setSettings] = useState<AppSettings>(() => {
    const saved = savedSettings.current
    return {
      fontSize: saved?.fontSize || 'medium',
      darkMode: saved?.darkMode ?? getSystemDarkMode(),
      soundEnabled: saved?.soundEnabled ?? true,
      language: saved?.language || getBrowserLanguage(),
    }
  })

  useEffect(() => {
    if (!isInitialized.current) {
      isInitialized.current = true
      return
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
  }, [settings])

  useEffect(() => {
    if (settings.darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    
    const fontSizes = { small: '14px', medium: '16px', large: '18px' }
    document.documentElement.style.fontSize = fontSizes[settings.fontSize]
  }, [settings.darkMode, settings.fontSize])

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
