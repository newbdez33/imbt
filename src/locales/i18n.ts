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

const savedLanguage = typeof window !== 'undefined' 
  ? localStorage.getItem('imbt-settings')
    ? JSON.parse(localStorage.getItem('imbt-settings') || '{}').language || 'zh-CN'
    : 'zh-CN'
  : 'zh-CN'

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage,
    fallbackLng: 'zh-CN',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
