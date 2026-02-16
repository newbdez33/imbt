export type Dimension = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P'

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
  name: string
  nickname: string
  description: string
  strengths: string[]
  weaknesses: string[]
  careers: string[]
  famous: string[]
}

export interface AppSettings {
  fontSize: 'small' | 'medium' | 'large'
  darkMode: boolean
  soundEnabled: boolean
}
