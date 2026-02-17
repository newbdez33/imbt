import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import zhTranslation from './zh-CN/translation.json'
import enTranslation from './en/translation.json'
import jaTranslation from './ja/translation.json'
import zhQuestions from './zh-CN/questions.json'
import enQuestions from './en/questions.json'
import jaQuestions from './ja/questions.json'
import zhPersonalities from './zh-CN/personalities.json'
import enPersonalities from './en/personalities.json'
import jaPersonalities from './ja/personalities.json'

const resources = {
  'zh-CN': {
    translation: zhTranslation,
    questions: zhQuestions,
    personalities: zhPersonalities,
  },
  en: {
    translation: enTranslation,
    questions: enQuestions,
    personalities: enPersonalities,
  },
  ja: {
    translation: jaTranslation,
    questions: jaQuestions,
    personalities: jaPersonalities,
  },
}

function getBrowserLanguage(): string {
  const lang = navigator.language
  if (lang.startsWith('ja')) return 'ja'
  if (lang.startsWith('en')) return 'en'
  return 'zh-CN'
}

function getInitialLanguage(): string {
  if (typeof window === 'undefined') return 'zh-CN'
  const stored = localStorage.getItem('imbt-settings')
  if (stored) {
    try {
      const parsed = JSON.parse(stored)
      if (parsed.language) return parsed.language
    } catch {
      // ignore
    }
  }
  return getBrowserLanguage()
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getInitialLanguage(),
    fallbackLng: 'zh-CN',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
