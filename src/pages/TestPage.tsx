import { useNavigate } from 'react-router-dom'
import { useTest } from '../hooks/useTest'
import { questions } from '../data/questions'
import { personalityDescriptions, personalityGroups } from '../data/personalities'

const groupColors = {
  analyst: { bg: 'bg-analyst-500', light: 'bg-analyst-100 dark:bg-analyst-900/30', text: 'text-analyst-600 dark:text-analyst-400', border: 'border-analyst-500' },
  diplomat: { bg: 'bg-diplomat-500', light: 'bg-diplomat-100 dark:bg-diplomat-900/30', text: 'text-diplomat-600 dark:text-diplomat-400', border: 'border-diplomat-500' },
  sentinel: { bg: 'bg-sentinel-500', light: 'bg-sentinel-100 dark:bg-sentinel-900/30', text: 'text-sentinel-600 dark:text-sentinel-400', border: 'border-sentinel-500' },
  explorer: { bg: 'bg-explorer-500', light: 'bg-explorer-100 dark:bg-explorer-900/30', text: 'text-explorer-600 dark:text-explorer-400', border: 'border-explorer-500' },
}

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
    const group = personalityGroups[result.group]
    const colors = groupColors[result.group]

    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-8">
        <div className="max-w-lg mx-auto px-6 pt-8">
          <div className="text-center space-y-4 animate-fade-in">
            <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full ${colors.light} mb-2`}>
              <span className="text-5xl">{personality.emoji}</span>
            </div>
            
            <div>
              <div className={`inline-block px-3 py-1 rounded-full ${colors.light} ${colors.text} text-sm font-medium mb-3`}>
                {group.name} · {group.nameEn}
              </div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {result.type}
              </h1>
              <h2 className="text-xl text-gray-700 dark:text-gray-300 font-medium">
                {personality.name}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {personality.nameEn} · {personality.nickname}
              </p>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto leading-relaxed">
              {personality.tagline}
            </p>
          </div>

          <div className="mt-8 space-y-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 card-shadow-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-sentinel-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                维度分析
              </h3>
              <div className="space-y-4">
                <DimensionResult label="外向" leftCode="E" rightCode="I" leftValue={result.percentages.E} rightValue={result.percentages.I} />
                <DimensionResult label="实感" leftCode="S" rightCode="N" leftValue={result.percentages.S} rightValue={result.percentages.N} />
                <DimensionResult label="思考" leftCode="T" rightCode="F" leftValue={result.percentages.T} rightValue={result.percentages.F} />
                <DimensionResult label="判断" leftCode="J" rightCode="P" leftValue={result.percentages.J} rightValue={result.percentages.P} />
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 card-shadow animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">性格描述</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {personality.description}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 card-shadow animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="text-green-500">✓</span>
                优势
              </h3>
              <div className="flex flex-wrap gap-2">
                {personality.strengths.map((strength, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm"
                  >
                    {strength}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 card-shadow animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="text-blue-500">💼</span>
                适合职业
              </h3>
              <div className="flex flex-wrap gap-2">
                {personality.careers.map((career, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                  >
                    {career}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 card-shadow animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="text-purple-500">⭐</span>
                代表人物
              </h3>
              <div className="flex flex-wrap gap-2">
                {personality.famous.map((person, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm"
                  >
                    {person}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <button
                onClick={resetTest}
                className="flex-1 py-3 px-4 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-medium rounded-xl transition-colors hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                重新测试
              </button>
              <button
                onClick={() => navigate('/')}
                className={`flex-1 py-3 px-4 ${colors.bg} text-white font-medium rounded-xl transition-colors hover:opacity-90`}
              >
                返回首页
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <div className="sticky top-0 z-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-lg mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/')}
              className="p-2 -ml-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex-1">
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
                <span>问题 {currentQuestion + 1} / {totalQuestions}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-analyst-500 to-sentinel-500 transition-all duration-300 ease-out rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 py-8 px-6">
        <div className="max-w-lg mx-auto">
          <div className="animate-fade-in" key={currentQuestion}>
            <h2 className="text-xl font-medium text-gray-900 dark:text-white text-center mb-8 leading-relaxed">
              {question.question}
            </h2>

            <div className="space-y-3">
              <button
                onClick={() => answerQuestion(question.choiceA.value)}
                className={`w-full p-5 rounded-2xl border-2 transition-all text-left group ${
                  currentAnswer === question.choiceA.value
                    ? 'border-analyst-500 bg-analyst-50 dark:bg-analyst-900/20'
                    : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-analyst-300 dark:hover:border-analyst-600'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex-shrink-0 mt-0.5 flex items-center justify-center transition-all ${
                    currentAnswer === question.choiceA.value
                      ? 'border-analyst-500 bg-analyst-500'
                      : 'border-gray-300 dark:border-gray-600 group-hover:border-analyst-400'
                  }`}>
                    {currentAnswer === question.choiceA.value && (
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <span className={`text-base ${
                    currentAnswer === question.choiceA.value
                      ? 'text-gray-900 dark:text-white'
                      : 'text-gray-700 dark:text-gray-300'
                  }`}>
                    {question.choiceA.text}
                  </span>
                </div>
              </button>

              <button
                onClick={() => answerQuestion(question.choiceB.value)}
                className={`w-full p-5 rounded-2xl border-2 transition-all text-left group ${
                  currentAnswer === question.choiceB.value
                    ? 'border-analyst-500 bg-analyst-50 dark:bg-analyst-900/20'
                    : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-analyst-300 dark:hover:border-analyst-600'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex-shrink-0 mt-0.5 flex items-center justify-center transition-all ${
                    currentAnswer === question.choiceB.value
                      ? 'border-analyst-500 bg-analyst-500'
                      : 'border-gray-300 dark:border-gray-600 group-hover:border-analyst-400'
                  }`}>
                    {currentAnswer === question.choiceB.value && (
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <span className={`text-base ${
                    currentAnswer === question.choiceB.value
                      ? 'text-gray-900 dark:text-white'
                      : 'text-gray-700 dark:text-gray-300'
                  }`}>
                    {question.choiceB.text}
                  </span>
                </div>
              </button>
            </div>
          </div>

          <div className="flex gap-3 mt-8">
            <button
              onClick={goToPrevious}
              disabled={currentQuestion === 0}
              className="flex-1 py-3.5 px-4 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-medium rounded-xl transition-colors disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              上一题
            </button>
            <button
              onClick={() => goToNext(totalQuestions)}
              disabled={!currentAnswer}
              className="flex-1 py-3.5 px-4 bg-gradient-to-r from-analyst-600 to-sentinel-600 text-white font-medium rounded-xl transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90"
            >
              {currentQuestion === totalQuestions - 1 ? '查看结果' : '下一题'}
            </button>
          </div>

          <div className="flex justify-center gap-1.5 flex-wrap mt-6 px-4">
            {Array.from({ length: Math.min(totalQuestions, 60) }).map((_, i) => {
              const isAnswered = getCurrentAnswer(i) !== null
              const isCurrent = i === currentQuestion
              return (
                <button
                  key={i}
                  onClick={() => goToQuestion(i, totalQuestions)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    isCurrent
                      ? 'bg-analyst-500 scale-125'
                      : isAnswered
                      ? 'bg-sentinel-400'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

function DimensionResult({ 
  label, 
  leftCode, 
  rightCode, 
  leftValue, 
  rightValue 
}: { 
  label: string
  leftCode: string
  rightCode: string
  leftValue: number
  rightValue: number
}) {
  return (
    <div>
      <div className="flex items-center justify-between text-sm mb-1.5">
        <span className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-xs font-bold text-gray-600 dark:text-gray-300">
            {leftCode}
          </span>
          <span className="text-gray-600 dark:text-gray-300">{label}</span>
        </span>
        <span className="flex items-center gap-2">
          <span className="text-gray-600 dark:text-gray-300">直觉</span>
          <span className="w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-xs font-bold text-gray-600 dark:text-gray-300">
            {rightCode}
          </span>
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-gray-900 dark:text-white w-10 text-right">{leftValue}%</span>
        <div className="flex-1 h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden flex">
          <div
            className="h-full bg-gradient-to-r from-analyst-500 to-analyst-400 transition-all duration-500"
            style={{ width: `${leftValue}%` }}
          />
        </div>
        <span className="text-sm font-medium text-gray-900 dark:text-white w-10">{rightValue}%</span>
      </div>
    </div>
  )
}
