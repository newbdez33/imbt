interface NFCSliderProps {
  optionA: string
  optionB: string
  value: number | null
  onChange: (value: -2 | -1 | 0 | 1 | 2) => void
}

export function NFCSlider({ optionA, optionB, value, onChange }: NFCSliderProps) {
  const options: { value: -2 | -1 | 0 | 1 | 2; label: string }[] = [
    { value: -2, label: '完全符合A' },
    { value: -1, label: '比较符合A' },
    { value: 0, label: '中立' },
    { value: 1, label: '比较符合B' },
    { value: 2, label: '完全符合B' },
  ]

  const getColorClass = (optValue: number) => {
    if (value === null) return 'bg-gray-200 dark:bg-gray-700'
    if (optValue === value) {
      if (optValue < 0) return 'bg-red-500'
      if (optValue > 0) return 'bg-green-500'
      return 'bg-gray-400'
    }
    return 'bg-gray-200 dark:bg-gray-700'
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between text-sm">
        <span className="text-red-600 dark:text-red-400 font-medium max-w-[40%] text-left">
          {optionA}
        </span>
        <span className="text-green-600 dark:text-green-400 font-medium max-w-[40%] text-right">
          {optionB}
        </span>
      </div>

      <div className="flex items-center gap-2 justify-center">
        {options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            className={`w-12 h-12 rounded-full transition-all flex items-center justify-center text-xs font-medium ${
              getColorClass(opt.value)
            } ${
              value === opt.value
                ? 'ring-4 ring-offset-2 ring-offset-gray-50 dark:ring-offset-gray-900 ring-gray-300 dark:ring-gray-600 scale-110'
                : 'hover:scale-105'
            }`}
            title={opt.label}
          >
            {opt.value === -2 && 'A'}
            {opt.value === -1 && 'a'}
            {opt.value === 0 && '○'}
            {opt.value === 1 && 'b'}
            {opt.value === 2 && 'B'}
          </button>
        ))}
      </div>

      <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
        <span>完全符合A</span>
        <span>中立</span>
        <span>完全符合B</span>
      </div>
    </div>
  )
}
