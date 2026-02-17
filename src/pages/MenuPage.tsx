import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export function MenuPage() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const menuItems = [
    {
      label: t('landing.startTest'),
      description: t('landing.questions'),
      path: '/test',
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

  return (
    <div className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
          {t('app.title')}
        </h1>

        <div className="space-y-3">
          {menuItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
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
