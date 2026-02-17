import type { TestType } from '../types'

interface TestTypeSelectorProps {
  onSelect: (type: TestType) => void
}

export function TestTypeSelector({ onSelect }: TestTypeSelectorProps) {
  const testTypes = [
    {
      type: 'mbti' as TestType,
      title: '经典 MBTI',
      subtitle: '16种人格',
      description: '60题 · 二选一 · 约8分钟',
      features: ['4个维度分析', '16种人格类型', '经典测试'],
      color: 'from-analyst-500 to-diplomat-500',
      icon: '🧩',
    },
    {
      type: 'nfc' as TestType,
      title: 'NFC 64型',
      subtitle: '64种人格',
      description: '95题 · 五级量表 · 约12分钟',
      features: ['6个维度分析', '64种人格类型', '非迫选模式'],
      color: 'from-explorer-500 to-sentinel-500',
      icon: '🔬',
      badge: '新',
    },
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white text-center mb-4">
        选择测试类型
      </h2>
      <div className="grid gap-4">
        {testTypes.map((testType) => (
          <button
            key={testType.type}
            onClick={() => onSelect(testType.type)}
            className="relative p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all text-left group border-2 border-transparent hover:border-gray-200 dark:hover:border-gray-700"
          >
            {testType.badge && (
              <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-green-500 text-white text-xs font-medium rounded-full">
                {testType.badge}
              </span>
            )}
            <div className="flex items-start gap-4">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${testType.color} flex items-center justify-center text-2xl flex-shrink-0`}>
                {testType.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {testType.title}
                  </h3>
                  <span className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
                    {testType.subtitle}
                  </span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {testType.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {testType.features.map((feature, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-0.5 bg-gray-50 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400 rounded"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              <svg
                className="w-5 h-5 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors flex-shrink-0 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
