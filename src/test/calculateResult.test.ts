import { describe, it, expect } from 'vitest'
import { calculateResult } from '../utils/calculateResult'
import type { Answer } from '../types'

describe('calculateResult', () => {
  it('should return INTJ for mostly I, N, T, J answers', () => {
    const answers: Answer[] = [
      { questionId: 1, value: 'I' },
      { questionId: 2, value: 'N' },
      { questionId: 3, value: 'T' },
      { questionId: 4, value: 'J' },
      { questionId: 5, value: 'I' },
      { questionId: 6, value: 'N' },
      { questionId: 7, value: 'T' },
      { questionId: 8, value: 'J' },
    ]
    
    const result = calculateResult(answers)
    expect(result.type).toBe('INTJ')
  })

  it('should return ESFP for mostly E, S, F, P answers', () => {
    const answers: Answer[] = [
      { questionId: 1, value: 'E' },
      { questionId: 2, value: 'S' },
      { questionId: 3, value: 'F' },
      { questionId: 4, value: 'P' },
      { questionId: 5, value: 'E' },
      { questionId: 6, value: 'S' },
      { questionId: 7, value: 'F' },
      { questionId: 8, value: 'P' },
    ]
    
    const result = calculateResult(answers)
    expect(result.type).toBe('ESFP')
  })

  it('should calculate correct percentages', () => {
    const answers: Answer[] = [
      { questionId: 1, value: 'E' },
      { questionId: 2, value: 'I' },
      { questionId: 3, value: 'S' },
      { questionId: 4, value: 'N' },
      { questionId: 5, value: 'T' },
      { questionId: 6, value: 'F' },
      { questionId: 7, value: 'J' },
      { questionId: 8, value: 'P' },
    ]
    
    const result = calculateResult(answers)
    expect(result.percentages.E).toBe(50)
    expect(result.percentages.I).toBe(50)
    expect(result.percentages.S).toBe(50)
    expect(result.percentages.N).toBe(50)
  })

  it('should return default 50% when no answers for a dimension', () => {
    const result = calculateResult([])
    expect(result.type).toBe('ESTJ')
    expect(result.percentages.E).toBe(50)
    expect(result.percentages.I).toBe(50)
  })

  it('should handle all E answers', () => {
    const answers: Answer[] = [
      { questionId: 1, value: 'E' },
      { questionId: 2, value: 'E' },
      { questionId: 3, value: 'E' },
    ]
    
    const result = calculateResult(answers)
    expect(result.percentages.E).toBe(100)
    expect(result.percentages.I).toBe(0)
    expect(result.type).toContain('E')
  })
})
