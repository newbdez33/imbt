import { useNavigate } from 'react-router-dom'
import { useTest } from '../hooks/useTest'
import { questions } from '../data/questions'
import { personalityDescriptions } from '../data/personalities'

export function TestPage() {
  const navigate = useNavigate()
  const {
    currentQuestion,
    isComplete,
    result,
    answerQuestion,
    goToNext,
    goToPrevious,
    goToQuestion,
    resetTest,
    getCurrentAnswer,
  } = useTest()

  const totalQuestions = questions.length
  const question = questions[currentQuestion]
  const currentAnswer = getCurrentAnswer()
  const progress = ((currentQuestion + 1) / totalQuestions) * 100

  if (isComplete && result) {
    const personality = personalityDescriptions[result.type]

    return (
      <div className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-md mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {result.type}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {personality.name}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {personality.nickname}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm space-y-4">
            <h2 className="font-semibold text-gray-900 dark:text-white">维度分析</h2>
            <div className="space-y-3">
              <DimensionBar label="外向 E" value={result.percentages.E} />
              <DimensionBar label="内向 I" value={result.percentages.I} />
              <DimensionBar label="实感 S" value={result.percentages.S} />
              <DimensionBar label="直觉 N" value={result.percentages.N} />
              <DimensionBar label="思考 T" value={result.percentages.T} />
              <DimensionBar label="情感 F" value={result.percentages.F} />
              <DimensionBar label="判断 J" value={result.percentages.J} />
              <DimensionBar label="感知 P" value={result.percentages.P} />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm space-y-4">
            <h2 className="font-semibold text-gray-900 dark:text-white">性格描述</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {personality.description}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm space-y-4">
            <h2 className="font-semibold text-gray-900 dark:text-white">优势</h2>
            <div className="flex flex-wrap gap-2">
              {personality.strengths.map((strength, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm"
                >
                  {strength}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm space-y-4">
            <h2 className="font-semibold text-gray-900 dark:text-white">适合职业</h2>
            <div className="flex flex-wrap gap-2">
              {personality.careers.map((career, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                >
                  {career}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm space-y-4">
            <h2 className="font-semibold text-gray-900 dark:text-white">代表人物</h2>
            <div className="flex flex-wrap gap-2">
              {personality.famous.map((person, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm"
                >
                  {person}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={resetTest}
              className="flex-1 py-3 px-4 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-medium rounded-xl transition-colors"
            >
              重新测试
            </button>
            <button
              onClick={() => navigate('/menu')}
              className="flex-1 py-3 px-4 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-xl transition-colors"
            >
              返回菜单
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <div className="p-4 bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-md mx-auto flex items-center gap-4">
          <button
            onClick={() => navigate('/menu')}
            className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex-1">
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary-600 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-center">
              {currentQuestion + 1} / {totalQuestions}
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 p-6">
        <div className="max-w-md mx-auto space-y-6">
          <div className="text-center space-y-2">
            <p className="text-sm text-gray-500 dark:text-gray-400">问题 {currentQuestion + 1}</p>
            <h2 className="text-xl font-medium text-gray-900 dark:text-white">
              {question.question}
            </h2>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => answerQuestion(question.choiceA.value)}
              className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                currentAnswer === question.choiceA.value
                  ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/30'
                  : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-primary-300'
              }`}
            >
              <span className="text-gray-900 dark:text-white">{question.choiceA.text}</span>
            </button>

            <button
              onClick={() => answerQuestion(question.choiceB.value)}
              className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                currentAnswer === question.choiceB.value
                  ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/30'
                  : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-primary-300'
              }`}
            >
              <span className="text-gray-900 dark:text-white">{question.choiceB.text}</span>
            </button>
          </div>

          <div className="flex gap-3">
            <button
              onClick={goToPrevious}
              disabled={currentQuestion === 0}
              className="flex-1 py-3 px-4 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-medium rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              上一题
            </button>
            <button
              onClick={() => goToNext(totalQuestions)}
              disabled={!currentAnswer}
              className="flex-1 py-3 px-4 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentQuestion === totalQuestions - 1 ? '完成' : '下一题'}
            </button>
          </div>

          <div className="flex justify-center gap-1 flex-wrap">
            {Array.from({ length: Math.min(totalQuestions, 20) }).map((_, i) => (
              <button
                key={i}
                onClick={() => goToQuestion(i, totalQuestions)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  i === currentQuestion
                    ? 'bg-primary-600'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function DimensionBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span className="text-gray-600 dark:text-gray-300">{label}</span>
        <span className="text-gray-900 dark:text-white font-medium">{value}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-primary-600 transition-all duration-500"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  )
}
