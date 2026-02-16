import { useState, useCallback } from 'react'
import type { Answer, TestResult, Dimension } from '../types'
import { calculateResult } from '../utils/calculateResult'

const STORAGE_KEY = 'imbt-test-state'

export function useTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Answer[]>(() => {
    if (typeof window === 'undefined') return []
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        return JSON.parse(stored)
      } catch {
        return []
      }
    }
    return []
  })
  const [isComplete, setIsComplete] = useState(false)
  const [result, setResult] = useState<TestResult | null>(null)

  const answerQuestion = useCallback((value: Dimension) => {
    const newAnswer: Answer = {
      questionId: currentQuestion,
      value,
    }
    
    const newAnswers = [...answers]
    const existingIndex = newAnswers.findIndex(a => a.questionId === currentQuestion)
    
    if (existingIndex >= 0) {
      newAnswers[existingIndex] = newAnswer
    } else {
      newAnswers.push(newAnswer)
    }
    
    setAnswers(newAnswers)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newAnswers))
  }, [currentQuestion, answers])

  const goToNext = useCallback((totalQuestions: number) => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      const finalResult = calculateResult(answers)
      setResult(finalResult)
      setIsComplete(true)
    }
  }, [currentQuestion, answers])

  const goToPrevious = useCallback(() => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1)
    }
  }, [currentQuestion])

  const goToQuestion = useCallback((index: number, totalQuestions: number) => {
    if (index >= 0 && index < totalQuestions) {
      setCurrentQuestion(index)
    }
  }, [])

  const resetTest = useCallback(() => {
    setCurrentQuestion(0)
    setAnswers([])
    setIsComplete(false)
    setResult(null)
    localStorage.removeItem(STORAGE_KEY)
  }, [])

  const getCurrentAnswer = useCallback((questionIndex?: number) => {
    const index = questionIndex !== undefined ? questionIndex : currentQuestion
    return answers.find(a => a.questionId === index)?.value ?? null
  }, [answers, currentQuestion])

  return {
    currentQuestion,
    answers,
    isComplete,
    result,
    answerQuestion,
    goToNext,
    goToPrevious,
    goToQuestion,
    resetTest,
    getCurrentAnswer,
  }
}
