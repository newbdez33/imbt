import { useState, useCallback } from 'react'
import type { NFCAnswer, NFCTestResult } from '../types'
import { calculateNfcResult } from '../utils/calculateNfcResult'

const NFC_STORAGE_KEY = 'imbt-nfc-test-state'
const NFC_HISTORY_KEY = 'imbt-nfc-test-history'

export function useNFCTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<NFCAnswer[]>(() => {
    if (typeof window === 'undefined') return []
    const stored = localStorage.getItem(NFC_STORAGE_KEY)
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
  const [result, setResult] = useState<NFCTestResult | null>(null)

  const saveToHistory = useCallback((testResult: NFCTestResult) => {
    const record = {
      id: Date.now().toString(),
      testType: 'nfc' as const,
      type: testResult.type,
      baseType: testResult.baseType,
      group: testResult.group,
      percentages: testResult.percentages,
      completedAt: new Date().toISOString(),
    }

    const stored = localStorage.getItem(NFC_HISTORY_KEY)
    let history: typeof record[] = []
    if (stored) {
      try {
        history = JSON.parse(stored)
      } catch {
        history = []
      }
    }

    localStorage.setItem(NFC_HISTORY_KEY, JSON.stringify([record, ...history]))
  }, [])

  const answerQuestion = useCallback((value: -2 | -1 | 0 | 1 | 2) => {
    const newAnswer: NFCAnswer = {
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
    localStorage.setItem(NFC_STORAGE_KEY, JSON.stringify(newAnswers))
  }, [currentQuestion, answers])

  const goToNext = useCallback((totalQuestions: number) => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      const finalResult = calculateNfcResult(answers)
      setResult(finalResult)
      setIsComplete(true)
      saveToHistory(finalResult)
    }
  }, [currentQuestion, answers, saveToHistory])

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

  const startNewTest = useCallback(() => {
    setCurrentQuestion(0)
    setAnswers([])
    setIsComplete(false)
    setResult(null)
    localStorage.removeItem(NFC_STORAGE_KEY)
  }, [])

  const resetTest = useCallback(() => {
    setCurrentQuestion(0)
    setAnswers([])
    setIsComplete(false)
    setResult(null)
    localStorage.removeItem(NFC_STORAGE_KEY)
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
    startNewTest,
    resetTest,
    getCurrentAnswer,
  }
}
