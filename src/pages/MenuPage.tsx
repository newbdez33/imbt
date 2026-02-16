import { useNavigate } from 'react-router-dom'

export function MenuPage() {
  const navigate = useNavigate()

  const menuItems = [
    {
      label: '开始测试',
      description: '完成 60 道题目，发现你的人格类型',
      path: '/test',
      icon: '🎯',
    },
    {
      label: '测试历史',
      description: '查看以往的测试记录',
      path: '/history',
      icon: '📋',
    },
    {
      label: '设置',
      description: '字体大小、暗色模式、音效',
      path: '/settings',
      icon: '⚙️',
    },
    {
      label: '关于',
      description: '关于此应用的更多信息',
      path: '/about',
      icon: 'ℹ️',
    },
  ]

  return (
    <div className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
          IMBT 人格测试
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
