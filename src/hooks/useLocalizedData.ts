import { useTranslation } from 'react-i18next'
import type { Question, MBTIType, PersonalityDescription, PersonalityGroup, Dimension } from '../types'
import { questions as zhQuestions } from '../data/questions'
import { personalityDescriptions as zhPersonalities } from '../data/personalities'

import enQuestionsRaw from '../locales/en/questions.json'
import jaQuestionsRaw from '../locales/ja/questions.json'
import enPersonalitiesRaw from '../locales/en/personalities.json'
import jaPersonalitiesRaw from '../locales/ja/personalities.json'

interface RawQuestion {
  id: number
  question: string
  choiceA: string
  choiceB: string
}

interface RawPersonality {
  name: string
  nickname: string
  tagline: string
  description: string
  strengths: string[]
  weaknesses: string[]
  careers: string[]
  famous: string[]
}

const enQuestions = enQuestionsRaw as RawQuestion[]
const jaQuestions = jaQuestionsRaw as RawQuestion[]
const enPersonalities = enPersonalitiesRaw as Record<string, RawPersonality>
const jaPersonalities = jaPersonalitiesRaw as Record<string, RawPersonality>

const questionMap: Record<string, RawQuestion[]> = {
  'zh-CN': zhQuestions.map(q => ({
    id: q.id,
    question: q.question,
    choiceA: q.choiceA.text,
    choiceB: q.choiceB.text,
  })),
  en: enQuestions,
  ja: jaQuestions,
}

const personalityMap: Record<string, Record<string, RawPersonality>> = {
  'zh-CN': Object.fromEntries(
    Object.entries(zhPersonalities).map(([key, val]) => [key, {
      name: val.name,
      nickname: val.nickname,
      tagline: val.tagline,
      description: val.description,
      strengths: val.strengths,
      weaknesses: val.weaknesses,
      careers: val.careers,
      famous: val.famous,
    }])
  ) as Record<string, RawPersonality>,
  en: enPersonalities,
  ja: jaPersonalities,
}

export function useLocalizedData() {
  const { t, i18n } = useTranslation()

  const getQuestions = (): Question[] => {
    const lang = i18n.language === 'zh' ? 'zh-CN' : i18n.language
    const rawQuestions = questionMap[lang] || questionMap['zh-CN']
    
    return rawQuestions.map((q, index) => ({
      id: q.id,
      question: q.question,
      choiceA: {
        value: zhQuestions[index].choiceA.value as Dimension,
        text: q.choiceA,
      },
      choiceB: {
        value: zhQuestions[index].choiceB.value as Dimension,
        text: q.choiceB,
      },
    })) as Question[]
  }

  const getPersonality = (type: MBTIType): PersonalityDescription => {
    const lang = i18n.language === 'zh' ? 'zh-CN' : i18n.language
    const original = zhPersonalities[type]
    const personalities = personalityMap[lang] || personalityMap['zh-CN']
    const localized = personalities[type]
    
    if (!localized) return original
    
    return {
      type: original.type,
      group: original.group,
      name: localized.name,
      nameEn: original.nameEn,
      nickname: localized.nickname,
      tagline: localized.tagline,
      description: localized.description,
      strengths: localized.strengths,
      weaknesses: localized.weaknesses,
      careers: localized.careers,
      famous: localized.famous,
      emoji: original.emoji,
    }
  }

  const getGroupName = (group: PersonalityGroup): string => {
    return t(`groups.${group}`)
  }

  return {
    getQuestions,
    getPersonality,
    getGroupName,
  }
}
