import type { Answer, TestResult, MBTIType, Dimension, PersonalityGroup } from '../types'

function getPersonalityGroup(type: MBTIType): PersonalityGroup {
  const second = type[1]
  const third = type[2]
  const fourth = type[3]
  
  if (second === 'N' && third === 'T') return 'analyst'
  if (second === 'N' && third === 'F') return 'diplomat'
  if (second === 'S' && fourth === 'J') return 'sentinel'
  if (second === 'S' && fourth === 'P') return 'explorer'
  return 'analyst'
}

export function calculateResult(answers: Answer[]): TestResult {
  const counts: Record<Dimension, number> = {
    E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0
  }
  
  answers.forEach(answer => {
    counts[answer.value]++
  })
  
  const totalEI = counts.E + counts.I
  const totalSN = counts.S + counts.N
  const totalTF = counts.T + counts.F
  const totalJP = counts.J + counts.P
  
  const percentages = {
    E: totalEI > 0 ? Math.round((counts.E / totalEI) * 100) : 50,
    I: totalEI > 0 ? Math.round((counts.I / totalEI) * 100) : 50,
    S: totalSN > 0 ? Math.round((counts.S / totalSN) * 100) : 50,
    N: totalSN > 0 ? Math.round((counts.N / totalSN) * 100) : 50,
    T: totalTF > 0 ? Math.round((counts.T / totalTF) * 100) : 50,
    F: totalTF > 0 ? Math.round((counts.F / totalTF) * 100) : 50,
    J: totalJP > 0 ? Math.round((counts.J / totalJP) * 100) : 50,
    P: totalJP > 0 ? Math.round((counts.P / totalJP) * 100) : 50,
  }
  
  const type: MBTIType = `${counts.E >= counts.I ? 'E' : 'I'}${counts.S >= counts.N ? 'S' : 'N'}${counts.T >= counts.F ? 'T' : 'F'}${counts.J >= counts.P ? 'J' : 'P'}` as MBTIType
  const group = getPersonalityGroup(type)
  
  return { type, group, percentages }
}
