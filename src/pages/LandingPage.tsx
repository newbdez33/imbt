import { useNavigate } from 'react-router-dom'

export function LandingPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            IMBT 人格测试
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            探索你的性格类型
          </p>
        </div>

        <div className="space-y-4 text-left bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            如何使用
          </h2>
          <ul className="space-y-3 text-gray-600 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 flex items-center justify-center text-sm font-medium">
                1
              </span>
              <span>完成 60 道选择题</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 flex items-center justify-center text-sm font-medium">
                2
              </span>
              <span>根据你的真实想法选择</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 flex items-center justify-center text-sm font-medium">
                3
              </span>
              <span>获取详细的人格分析报告</span>
            </li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            四个维度
          </h2>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="font-medium text-gray-900 dark:text-white">E / I</div>
              <div className="text-gray-500 dark:text-gray-400">外向 / 内向</div>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="font-medium text-gray-900 dark:text-white">S / N</div>
              <div className="text-gray-500 dark:text-gray-400">实感 / 直觉</div>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="font-medium text-gray-900 dark:text-white">T / F</div>
              <div className="text-gray-500 dark:text-gray-400">思考 / 情感</div>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="font-medium text-gray-900 dark:text-white">J / P</div>
              <div className="text-gray-500 dark:text-gray-400">判断 / 感知</div>
            </div>
          </div>
        </div>

        <button
          onClick={() => navigate('/menu')}
          className="w-full py-4 px-6 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-xl transition-colors"
        >
          开始
        </button>
      </div>
    </div>
  )
}
