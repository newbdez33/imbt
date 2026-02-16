import { useNavigate } from 'react-router-dom'

export function AboutPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md mx-auto space-y-6">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/menu')}
            className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">关于</h1>
        </div>

        <div className="text-center py-8">
          <div className="w-20 h-20 mx-auto mb-4 bg-primary-100 dark:bg-primary-900 rounded-2xl flex items-center justify-center">
            <span className="text-4xl">🧠</span>
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">IMBT 人格测试</h2>
          <p className="text-gray-500 dark:text-gray-400">版本 1.0.0</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm space-y-4">
          <h3 className="font-semibold text-gray-900 dark:text-white">关于 MBTI</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            MBTI（迈尔斯-布里格斯类型指标）是一种人格类型评估工具，基于卡尔·荣格的心理类型理论发展而来。
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            该测试通过四个维度（外向/内向、实感/直觉、思考/情感、判断/感知）来评估人格类型，共可组合成16种不同的人格类型。
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm space-y-4">
          <h3 className="font-semibold text-gray-900 dark:text-white">免责声明</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            本应用仅供娱乐和自我探索参考，测试结果不构成任何专业心理诊断。如需专业心理评估，请咨询专业人士。
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm space-y-4">
          <h3 className="font-semibold text-gray-900 dark:text-white">技术栈</h3>
          <div className="flex flex-wrap gap-2">
            {['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'PWA'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Made with ❤️</p>
        </div>
      </div>
    </div>
  )
}
