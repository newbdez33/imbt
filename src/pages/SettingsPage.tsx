import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useSettings } from '../hooks/useSettings'
import { useSound } from '../hooks/useSound'
import type { Language } from '../types'

const languages: { code: Language; label: string }[] = [
  { code: 'zh-CN', label: '简体中文' },
  { code: 'en', label: 'English' },
  { code: 'ja', label: '日本語' },
]

export function SettingsPage() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const { settings, updateSettings } = useSettings()
  const { play } = useSound()

  const handleLanguageChange = (code: Language) => {
    play('click')
    updateSettings({ language: code })
  }

  const handleDarkModeToggle = () => {
    play('switch')
    updateSettings({ darkMode: !settings.darkMode })
  }

  const handleFontSizeChange = (size: 'small' | 'medium' | 'large') => {
    play('click')
    updateSettings({ fontSize: size })
  }

  const handleSoundToggle = () => {
    updateSettings({ soundEnabled: !settings.soundEnabled })
  }

  const handleClearData = () => {
    play('click')
    localStorage.clear()
    window.location.reload()
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-8">
      <div className="max-w-lg mx-auto px-6 pt-6">
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => { play('click'); navigate('/') }}
            className="p-2 -ml-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{t('settings.title')}</h1>
        </div>

        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden card-shadow">
            <h2 className="px-6 py-4 text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/50">
              {t('settings.language')}
            </h2>
            
            <div className="px-6 py-4">
              <div className="mb-3">
                <div className="text-gray-900 dark:text-white font-medium">{t('settings.languageDesc')}</div>
              </div>
              <div className="flex gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`flex-1 py-2.5 px-4 rounded-xl font-medium transition-all ${
                      settings.language === lang.code
                        ? 'bg-analyst-500 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden card-shadow">
            <h2 className="px-6 py-4 text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/50">
              {t('settings.display')}
            </h2>
            
            <div className="divide-y divide-gray-100 dark:divide-gray-700">
              <div className="px-6 py-4 flex items-center justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <div className="text-gray-900 dark:text-white font-medium">{t('settings.darkMode')}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{t('settings.darkModeDesc')}</div>
                </div>
                <button
                  onClick={handleDarkModeToggle}
                  className={`relative w-12 h-7 rounded-full transition-colors flex-shrink-0 ${
                    settings.darkMode ? 'bg-analyst-500' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                >
                  <div
                    className="absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white shadow transition-transform duration-200"
                    style={{ transform: settings.darkMode ? 'translateX(20px)' : 'translateX(0)' }}
                  />
                </button>
              </div>

              <div className="px-6 py-4">
                <div className="mb-3">
                  <div className="text-gray-900 dark:text-white font-medium">{t('settings.fontSize')}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{t('settings.fontSizeDesc')}</div>
                </div>
                <div className="flex gap-2">
                  {(['small', 'medium', 'large'] as const).map((size) => (
                    <button
                      key={size}
                      onClick={() => handleFontSizeChange(size)}
                      className={`flex-1 py-2.5 px-4 rounded-xl font-medium transition-all ${
                        settings.fontSize === size
                          ? 'bg-analyst-500 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      {size === 'small' ? t('settings.fontSizeSmall') : size === 'medium' ? t('settings.fontSizeMedium') : t('settings.fontSizeLarge')}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden card-shadow">
            <h2 className="px-6 py-4 text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/50">
              {t('settings.sound')}
            </h2>
            
            <div className="px-6 py-4 flex items-center justify-between gap-4">
              <div className="min-w-0 flex-1">
                <div className="text-gray-900 dark:text-white font-medium">{t('settings.soundEnabled')}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{t('settings.soundEnabledDesc')}</div>
              </div>
              <button
                onClick={handleSoundToggle}
                className={`relative w-12 h-7 rounded-full transition-colors flex-shrink-0 ${
                  settings.soundEnabled ? 'bg-analyst-500' : 'bg-gray-300 dark:bg-gray-600'
                }`}
              >
                <div
                  className="absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white shadow transition-transform duration-200"
                  style={{ transform: settings.soundEnabled ? 'translateX(20px)' : 'translateX(0)' }}
                />
              </button>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden card-shadow">
            <h2 className="px-6 py-4 text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/50">
              {t('settings.data')}
            </h2>
            
            <div className="px-6 py-4">
              <button
                onClick={handleClearData}
                className="w-full py-3 px-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 font-medium rounded-xl transition-colors hover:bg-red-100 dark:hover:bg-red-900/30"
              >
                {t('settings.clearData')}
              </button>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
                {t('settings.clearDataDesc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
