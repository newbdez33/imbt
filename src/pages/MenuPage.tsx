import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useSound } from '../hooks/useSound'

export function MenuPage() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const { play } = useSound()

  const testTypes = [
    {
      label: t('landing.startTest') + ' - MBTI',
      description: '16种人格 · 60题 · 约8分钟',
      path: '/test',
      icon: '🧩',
      color: 'from-analyst-500 to-diplomat-500',
    },
    {
      label: t('landing.startTest') + ' - NFC 64型',
      description: '64种人格 · 95题 · 约12分钟',
      path: '/test/nfc',
      icon: '🔬',
      color: 'from-explorer-500 to-sentinel-500',
      badge: '新',
    },
  ]

  const menuItems = [
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

  return (
    <div className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
          {t('app.title')}
        </h1>

        <div className="space-y-3">
          <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
            {t('landing.startTest')}
          </div>
          {testTypes.map((item) => (
            <button
              key={item.path}
              onClick={() => { play('click'); navigate(item.path) }}
              className="relative w-full p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow text-left flex items-center gap-4"
            >
              {item.badge && (
                <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-green-500 text-white text-xs font-medium rounded-full">
                  {item.badge}
                </span>
              )}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-xl flex-shrink-0`}>
                {item.icon}
              </div>
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

        <div className="space-y-3 pt-2">
          {menuItems.map((item) => (
            <button
              key={item.path}
              onClick={() => { play('click'); navigate(item.path) }}
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
