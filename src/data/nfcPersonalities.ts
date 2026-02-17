import type { NFCPersonalityDescription, MBTIType } from '../types'

const mbtiBaseInfo: Record<MBTIType, Omit<NFCPersonalityDescription, 'type' | 'warmth' | 'decisiveness' | 'warmthDesc' | 'decisivenessDesc'>> = {
  INTJ: {
    baseType: 'INTJ',
    group: 'analyst',
    name: '建筑师',
    nameEn: 'Architect',
    nickname: '富有想象力和战略性的思想家',
    tagline: '一切皆有可能，一切皆有计划',
    description: 'INTJ是天生的战略家，拥有独特的视角和强烈的内在驱动力。他们善于发现系统中的缺陷并设计创新的解决方案。虽然外表冷静，但内心充满野心和决心。',
    strengths: ['战略思维', '独立自主', '意志坚定', '追求卓越', '善于规划'],
    weaknesses: ['过于傲慢', '对他人的评判过于苛刻', '感情表达困难'],
    careers: ['科学家', '系统分析师', '法官', '企业战略家'],
    famous: ['伊隆·马斯克', '马克·扎克伯格', '克里斯托弗·诺兰'],
    emoji: '🎯',
  },
  INTP: {
    baseType: 'INTP',
    group: 'analyst',
    name: '逻辑学家',
    nameEn: 'Logician',
    nickname: '富有创造力的发明家',
    tagline: '在知识的海洋中探索无限可能',
    description: 'INTP对知识有着无法满足的渴望，他们是天生的理论家和问题解决者。他们喜欢分析复杂的系统，寻找其中的逻辑和规律，常常能提出令人惊叹的见解。',
    strengths: ['分析能力', '思维开放', '客观公正', '追求真理', '独立思考'],
    weaknesses: ['不切实际', '不善于社交', '容易过度思考'],
    careers: ['物理学家', '数学家', '软件工程师', '哲学家'],
    famous: ['比尔·盖茨', '阿尔伯特·爱因斯坦', '亚伯拉罕·林肯'],
    emoji: '🧠',
  },
  ENTJ: {
    baseType: 'ENTJ',
    group: 'analyst',
    name: '指挥官',
    nameEn: 'Commander',
    nickname: '大胆、富有想象力的领导者',
    tagline: '引领变革，创造未来',
    description: 'ENTJ天生具有领导魅力，他们善于组织人员和资源来实现远大的目标。他们自信、果断，敢于挑战权威，总是追求更高的成就。',
    strengths: ['领导才能', '自信果断', '效率至上', '战略眼光', '意志坚强'],
    weaknesses: ['固执己见', '对他人缺乏耐心', '可能显得傲慢'],
    careers: ['企业高管', '律师', '管理咨询师', '创业者'],
    famous: ['史蒂夫·乔布斯', '玛格丽特·撒切尔', '富兰克林·罗斯福'],
    emoji: '👑',
  },
  ENTP: {
    baseType: 'ENTP',
    group: 'analyst',
    name: '辩论家',
    nameEn: 'Debater',
    nickname: '聪明好奇的思想家',
    tagline: '挑战一切，质疑一切',
    description: 'ENTP热爱智力挑战，他们善于从不同角度看待问题，常常能提出令人耳目一新的观点。他们机智幽默，喜欢辩论，追求精神上的刺激。',
    strengths: ['思维敏捷', '创新能力', '表达能力强', '适应性好', '知识面广'],
    weaknesses: ['喜欢争论', '缺乏耐心', '难以完成任务'],
    careers: ['企业家', '律师', '顾问', '记者'],
    famous: ['托马斯·爱迪生', '塞琳娜·威廉姆斯', '马克·吐温'],
    emoji: '🎭',
  },
  INFJ: {
    baseType: 'INFJ',
    group: 'diplomat',
    name: '提倡者',
    nameEn: 'Advocate',
    nickname: '安静而神秘的理想主义者',
    tagline: '改变世界，从一个想法开始',
    description: 'INFJ拥有深刻的洞察力和强烈的使命感。他们追求有意义的生活，致力于帮助他人实现潜能。虽然人数稀少，但他们的影响力往往超出预期。',
    strengths: ['洞察力强', '富有同情心', '有远见', '坚持原则', '创意丰富'],
    weaknesses: ['过于理想化', '容易倦怠', '对批评敏感'],
    careers: ['心理咨询师', '作家', '教师', '非营利组织领导者'],
    famous: ['马丁·路德·金', '特蕾莎修女', '纳尔逊·曼德拉'],
    emoji: '🌟',
  },
  INFP: {
    baseType: 'INFP',
    group: 'diplomat',
    name: '调停者',
    nameEn: 'Mediator',
    nickname: '诗意、善良的利他主义者',
    tagline: '在平凡中寻找不凡',
    description: 'INFP拥有丰富的内心世界和强烈的价值观。他们追求真实和美好，渴望通过自己的努力让世界变得更好。虽然外表安静，但内心充满热情。',
    strengths: ['富有同情心', '创意无限', '开放包容', '热情理想', '深度思考'],
    weaknesses: ['过于理想化', '对现实失望', '难以接受批评'],
    careers: ['作家', '心理咨询师', '艺术家', '社会工作者'],
    famous: ['威廉·莎士比亚', '约翰·列侬', 'J.R.R.托尔金'],
    emoji: '🕊️',
  },
  ENFJ: {
    baseType: 'ENFJ',
    group: 'diplomat',
    name: '主人公',
    nameEn: 'Protagonist',
    nickname: '富有魅力的领导者',
    tagline: '激励他人，成就更好',
    description: 'ENFJ天生具有感染力和领导力。他们善于理解他人的需求，激励人们朝着共同的目标努力。他们充满热情，致力于帮助他人成长。',
    strengths: ['领导力强', '富有同理心', '沟通能力', '责任感强', '乐观积极'],
    weaknesses: ['过于敏感', '自我牺牲', '对批评过于在意'],
    careers: ['教师', '政治家', '人力资源经理', '公关专家'],
    famous: ['巴拉克·奥巴马', '奥普拉·温弗瑞', '马丁·路德'],
    emoji: '🔥',
  },
  ENFP: {
    baseType: 'ENFP',
    group: 'diplomat',
    name: '竞选者',
    nameEn: 'Campaigner',
    nickname: '热情、有创造力的社交者',
    tagline: '生活是一场精彩的冒险',
    description: 'ENFP充满活力和热情，他们善于发现生活中的美好和可能性。他们具有强烈的好奇心，喜欢探索新事物，能够感染和激励周围的人。',
    strengths: ['热情洋溢', '创意丰富', '善于交际', '乐观积极', '适应性强'],
    weaknesses: ['注意力分散', '过度理想化', '情绪波动大'],
    careers: ['记者', '演员', '市场营销', '咨询师'],
    famous: ['罗宾·威廉姆斯', '罗伯特·唐尼', '威尔·史密斯'],
    emoji: '🌈',
  },
  ISTJ: {
    baseType: 'ISTJ',
    group: 'sentinel',
    name: '物流师',
    nameEn: 'Logistician',
    nickname: '务实、专注的事实主义者',
    tagline: '责任与秩序是成功的基石',
    description: 'ISTJ以可靠和尽责著称。他们重视传统和秩序，一丝不苟地完成每一项任务。他们是组织的中流砥柱，用行动而非言语来证明自己的价值。',
    strengths: ['可靠负责', '注重细节', '耐心持久', '有条不紊', '诚实正直'],
    weaknesses: ['固执己见', '不愿改变', '情感表达不足'],
    careers: ['会计师', '审计师', '警察', '项目经理'],
    famous: ['沃伦·巴菲特', '乔治·华盛顿', '安格拉·默克尔'],
    emoji: '📋',
  },
  ISFJ: {
    baseType: 'ISFJ',
    group: 'sentinel',
    name: '守卫者',
    nameEn: 'Defender',
    nickname: '非常专注和温暖的守护者',
    tagline: '默默守护，无私奉献',
    description: 'ISFJ是忠诚而温暖的守护者。他们善于照顾他人，总是愿意伸出援手。他们虽然安静，但对家人和朋友有着深厚的感情和责任感。',
    strengths: ['忠诚可靠', '观察力强', '耐心细致', '热心助人', '执行力强'],
    weaknesses: ['过于谦虚', '不善拒绝', '容易过度付出'],
    careers: ['护士', '教师', '社会工作者', '行政助理'],
    famous: ['贝永·诺尔斯', '凯特王妃', '维尼·普'],
    emoji: '🛡️',
  },
  ESTJ: {
    baseType: 'ESTJ',
    group: 'sentinel',
    name: '总经理',
    nameEn: 'Executive',
    nickname: '出色的管理者',
    tagline: '秩序带来效率，规则创造公平',
    description: 'ESTJ是天生的组织者和管理者。他们重视秩序和传统，善于制定和执行规则。他们果断而高效，能够带领团队实现目标。',
    strengths: ['组织能力', '果断执行', '责任感强', '直接坦诚', '注重实效'],
    weaknesses: ['固执己见', '不够灵活', '对他人要求过高'],
    careers: ['法官', '财务经理', '银行家', '学校管理者'],
    famous: ['米歇尔·奥巴马', '桑德拉·戴·奥康纳', '约翰·D·洛克菲勒'],
    emoji: '💼',
  },
  ESFJ: {
    baseType: 'ESFJ',
    group: 'sentinel',
    name: '执政官',
    nameEn: 'Consul',
    nickname: '极富同情心、爱交际的人',
    tagline: '用心关怀，用爱连接',
    description: 'ESFJ是温暖而乐于助人的人。他们善于建立和谐的人际关系，总是关心他人的需求。他们是优秀的团队合作者，为创造良好的氛围而努力。',
    strengths: ['忠诚友善', '热心助人', '善于社交', '可靠负责', '组织能力强'],
    weaknesses: ['对批评敏感', '过于在意他人看法', '难以接受改变'],
    careers: ['护士', '教师', '人力资源', '公关专员'],
    famous: ['泰勒·斯威夫特', '休·杰克曼', '珍妮弗·加纳'],
    emoji: '💝',
  },
  ISTP: {
    baseType: 'ISTP',
    group: 'explorer',
    name: '鉴赏家',
    nameEn: 'Virtuoso',
    nickname: '大胆而实际的实验家',
    tagline: '动手解决问题是最好的学习',
    description: 'ISTP是天生的工匠和问题解决者。他们喜欢通过实践来理解世界，擅长操作工具和机械。他们冷静、灵活，在危机中表现出色。',
    strengths: ['动手能力强', '适应性好', '冷静理性', '善于解决实际问题', '独立自主'],
    weaknesses: ['情感表达不足', '容易厌倦', '不喜欢承诺'],
    careers: ['工程师', '技师', '飞行员', '运动员'],
    famous: ['克林特·伊斯特伍德', '迈克尔·乔丹', '汤姆·克鲁斯'],
    emoji: '🔧',
  },
  ISFP: {
    baseType: 'ISFP',
    group: 'explorer',
    name: '探险家',
    nameEn: 'Adventurer',
    nickname: '灵活而有魅力的艺术家',
    tagline: '用行动诠释生活的美',
    description: 'ISFP拥有敏锐的审美和温和的性格。他们善于用行动而非言语来表达自己，追求自由和真实的生活体验。他们是天生的艺术家。',
    strengths: ['艺术天赋', '温和友善', '观察力强', '适应性强', '好奇心强'],
    weaknesses: ['过于敏感', '难以规划', '不喜欢冲突'],
    careers: ['艺术家', '设计师', '厨师', '按摩师'],
    famous: ['迈克尔·杰克逊', '玛丽莲·梦露', '大卫·贝克汉姆'],
    emoji: '🎨',
  },
  ESTP: {
    baseType: 'ESTP',
    group: 'explorer',
    name: '企业家',
    nameEn: 'Entrepreneur',
    nickname: '聪明、精力充沛的冒险家',
    tagline: '把握当下，享受刺激',
    description: 'ESTP充满活力和冒险精神。他们善于把握机会，喜欢行动而非空谈。他们机智幽默，能够迅速应对变化，是天生的谈判者。',
    strengths: ['行动力强', '机智敏捷', '善于社交', '适应性强', '观察力敏锐'],
    weaknesses: ['缺乏耐心', '冒险冲动', '难以长期规划'],
    careers: ['销售', '企业家', '演员', '急救医生'],
    famous: ['唐纳德·特朗普', '麦当娜', '杰克·尼克尔森'],
    emoji: '⚡',
  },
  ESFP: {
    baseType: 'ESFP',
    group: 'explorer',
    name: '表演者',
    nameEn: 'Entertainer',
    nickname: '自发而精力充沛的表演者',
    tagline: '活在当下，尽情享受',
    description: 'ESFP是天生的表演者。他们热爱生活，善于娱乐他人。他们热情、友好，总是能带来欢乐和活力，让周围的人感到愉悦。',
    strengths: ['热情友好', '善于表演', '观察力强', '适应性强', '乐于助人'],
    weaknesses: ['难以专注', '逃避冲突', '缺乏长期规划'],
    careers: ['演员', '主持人', '销售', '旅游导游'],
    famous: ['玛丽莲·梦露', '埃尔维斯·普雷斯利', '威尔·史密斯'],
    emoji: '🎭',
  },
}

const warmthDescriptions = {
  H: {
    trait: '温暖亲和型',
    desc: '你是一个温暖友善的人，善于与人建立联系。你容易察觉他人的情感需求，乐于提供帮助和支持。',
    shortDesc: '温暖亲和、善解人意',
  },
  C: {
    trait: '高冷距离型',
    desc: '你倾向于保持一定的社交距离，更专注于自己的世界。你独立自主，不轻易让他人走进内心。',
    shortDesc: '独立内敛、保持距离',
  },
}

const decisivenessDescriptions = {
  A: {
    trait: '果断进取型',
    desc: '你是一个果断的人，能够迅速做出决定并付诸行动。你相信自己的判断，不会被犹豫所困扰。',
    shortDesc: '果断决策、雷厉风行',
  },
  O: {
    trait: '纠结犹豫型',
    desc: '你在做决定时会仔细权衡各种因素，考虑周全。虽然有时会犹豫，但这让你避免冲动决策。',
    shortDesc: '深思熟虑、谨慎决策',
  },
}

function generateNFCPersonalities(): Record<string, NFCPersonalityDescription> {
  const result: Record<string, NFCPersonalityDescription> = {}
  const types: MBTIType[] = ['INTJ', 'INTP', 'ENTJ', 'ENTP', 'INFJ', 'INFP', 'ENFJ', 'ENFP', 'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ', 'ISTP', 'ISFP', 'ESTP', 'ESFP']
  const warmthOptions: ('H' | 'C')[] = ['H', 'C']
  const decisivenessOptions: ('A' | 'O')[] = ['A', 'O']

  for (const baseType of types) {
    const base = mbtiBaseInfo[baseType]
    for (const warmth of warmthOptions) {
      for (const decisiveness of decisivenessOptions) {
        const nfcType: `${MBTIType}-${'H' | 'C'}-${'A' | 'O'}` = `${baseType}-${warmth}-${decisiveness}`
        const warmthInfo = warmthDescriptions[warmth]
        const decisivenessInfo = decisivenessDescriptions[decisiveness]

        result[nfcType] = {
          type: nfcType,
          baseType: base.baseType,
          group: base.group,
          name: base.name,
          nameEn: base.nameEn,
          nickname: base.nickname,
          tagline: base.tagline,
          description: base.description,
          strengths: base.strengths,
          weaknesses: base.weaknesses,
          careers: base.careers,
          famous: base.famous,
          emoji: base.emoji,
          warmth,
          decisiveness,
          warmthDesc: warmthInfo.shortDesc,
          decisivenessDesc: decisivenessInfo.shortDesc,
        }
      }
    }
  }

  return result
}

export const nfcPersonalities = generateNFCPersonalities()

export const warmthInfo = warmthDescriptions
export const decisivenessInfo = decisivenessDescriptions

export const suffixDescriptions = {
  'H-A': '温暖亲和 · 果断进取',
  'H-O': '温暖亲和 · 深思熟虑',
  'C-A': '独立内敛 · 果断进取',
  'C-O': '独立内敛 · 深思熟虑',
}
