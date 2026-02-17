export type Dimension = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P'

export type PersonalityGroup = 'analyst' | 'diplomat' | 'sentinel' | 'explorer'

export interface Question {
  id: number
  question: string
  choiceA: {
    value: Dimension
    text: string
  }
  choiceB: {
    value: Dimension
    text: string
  }
}

export interface Answer {
  questionId: number
  value: Dimension
}

export interface TestResult {
  type: MBTIType
  group: PersonalityGroup
  percentages: {
    E: number
    I: number
    S: number
    N: number
    T: number
    F: number
    J: number
    P: number
  }
}

export type MBTIType = 
  | 'ISTJ' | 'ISFJ' | 'INFJ' | 'INTJ'
  | 'ISTP' | 'ISFP' | 'INFP' | 'INTP'
  | 'ESTP' | 'ESFP' | 'ENFP' | 'ENTP'
  | 'ESTJ' | 'ESFJ' | 'ENFJ' | 'ENTJ'

export interface PersonalityDescription {
  type: MBTIType
  group: PersonalityGroup
  name: string
  nameEn: string
  nickname: string
  tagline: string
  description: string
  strengths: string[]
  weaknesses: string[]
  careers: string[]
  famous: string[]
  emoji: string
}

export type Language = 'zh-CN' | 'en' | 'ja'

export interface AppSettings {
  fontSize: 'small' | 'medium' | 'large'
  darkMode: boolean
  soundEnabled: boolean
  language: Language
}

export interface TestHistoryRecord {
  id: string
  type: MBTIType
  group: PersonalityGroup
  percentages: TestResult['percentages']
  completedAt: string
}

export function getPersonalityGroup(type: MBTIType): PersonalityGroup {
  const second = type[1]
  const third = type[2]
  
  if (second === 'N' && (third === 'T')) return 'analyst'
  if (second === 'N' && third === 'F') return 'diplomat'
  if (second === 'S' && (third === 'T' || third === 'F')) {
    const fourth = type[3]
    if (fourth === 'J') return 'sentinel'
    return 'explorer'
  }
  return 'analyst'
}
