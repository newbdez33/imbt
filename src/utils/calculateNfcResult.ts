import type { NFCAnswer, NFCTestResult, MBTIType, NFCType } from '../types'
import { nfcQuestions } from '../data/nfcQuestions'
import { getPersonalityGroup } from '../types'

const dimensionPairs: [string, string][] = [
  ['E', 'I'],
  ['S', 'N'],
  ['T', 'F'],
  ['J', 'P'],
  ['H', 'C'],
  ['A', 'O'],
]

export function calculateNfcResult(answers: NFCAnswer[]): NFCTestResult {
  const scores: Record<string, number> = {
    E: 0, I: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0,
    H: 0, C: 0,
    A: 0, O: 0,
  }

  answers.forEach((answer) => {
    const question = nfcQuestions.find(q => q.id === answer.questionId + 1)
    if (!question) return

    const dimension = question.dimension
    const value = answer.value

    if (dimensionPairs.some(([a, b]) => a === dimension || b === dimension)) {
      const pair = dimensionPairs.find(([a, b]) => a === dimension || b === dimension)!
      const [leftDim, rightDim] = pair
      const isLeft = dimension === leftDim

      if (isLeft) {
        if (value < 0) {
          scores[leftDim] += Math.abs(value)
        } else if (value > 0) {
          scores[rightDim] += value
        }
      } else {
        if (value < 0) {
          scores[rightDim] += Math.abs(value)
        } else if (value > 0) {
          scores[leftDim] += value
        }
      }
    }
  })

  const percentages: Record<string, number> = {}
  dimensionPairs.forEach(([left, right]) => {
    const leftScore = scores[left]
    const rightScore = scores[right]
    const total = leftScore + rightScore

    if (total === 0) {
      percentages[left] = 50
      percentages[right] = 50
    } else {
      percentages[left] = Math.round((leftScore / total) * 100)
      percentages[right] = 100 - percentages[left]
    }
  })

  const eResult = percentages.E >= 50 ? 'E' : 'I'
  const sResult = percentages.S >= 50 ? 'S' : 'N'
  const tResult = percentages.T >= 50 ? 'T' : 'F'
  const jResult = percentages.J >= 50 ? 'J' : 'P'
  const hResult = percentages.H >= 50 ? 'H' : 'C'
  const aResult = percentages.A >= 50 ? 'A' : 'O'

  const baseType = `${eResult}${sResult}${tResult}${jResult}` as MBTIType
  const group = getPersonalityGroup(baseType)
  const type = `${baseType}-${hResult}-${aResult}` as NFCType

  return {
    testType: 'nfc',
    type,
    baseType,
    group,
    suffix: {
      warmth: hResult,
      decisiveness: aResult,
    },
    scores: {
      E: scores.E,
      I: scores.I,
      S: scores.S,
      N: scores.N,
      T: scores.T,
      F: scores.F,
      J: scores.J,
      P: scores.P,
      H: scores.H,
      C: scores.C,
      A: scores.A,
      O: scores.O,
    },
    percentages: {
      E: percentages.E,
      I: percentages.I,
      S: percentages.S,
      N: percentages.N,
      T: percentages.T,
      F: percentages.F,
      J: percentages.J,
      P: percentages.P,
      H: percentages.H,
      C: percentages.C,
      A: percentages.A,
      O: percentages.O,
    },
  }
}
