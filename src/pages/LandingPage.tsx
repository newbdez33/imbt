import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export function LandingPage() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-lg mx-auto px-6 py-12">
        <div className="text-center space-y-6 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-analyst-500 to-sentinel-500 shadow-lg mb-4">
            <span className="text-4xl">🧠</span>
          </div>
          
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {t('app.title')}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {t('landing.subtitle')}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 card-shadow-lg">
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{t('landing.duration')}</span>
              <span className="mx-2">·</span>
              <span>{t('landing.questions')}</span>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
              {t('landing.description')}
            </p>

            <button
              onClick={() => navigate('/test')}
              className="w-full py-4 px-6 bg-gradient-to-r from-analyst-600 to-sentinel-600 hover:from-analyst-700 hover:to-sentinel-700 text-white font-semibold rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] card-shadow"
            >
              {t('landing.startTest')}
            </button>
          </div>
        </div>

        <div className="mt-12 space-y-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white text-center mb-6">
            {t('landing.fourTypes')}
          </h2>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 card-shadow border-l-4 border-analyst-500">
              <div className="text-2xl mb-2">🔮</div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{t('groups.analyst')}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">INTJ · INTP · ENTJ · ENTP</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 card-shadow border-l-4 border-diplomat-500">
              <div className="text-2xl mb-2">💚</div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{t('groups.diplomat')}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">INFJ · INFP · ENFJ · ENFP</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 card-shadow border-l-4 border-sentinel-500">
              <div className="text-2xl mb-2">💙</div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{t('groups.sentinel')}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">ISTJ · ISFJ · ESTJ · ESFJ</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 card-shadow border-l-4 border-explorer-500">
              <div className="text-2xl mb-2">💛</div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{t('groups.explorer')}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">ISTP · ISFP · ESTP · ESFP</p>
            </div>
          </div>
        </div>

        <div className="mt-12 space-y-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white text-center mb-6">
            {t('landing.fourDimensions')}
          </h2>
          
          <div className="space-y-3">
            <DimensionCard
              title={t('dimensions.energy.title')}
              left={{ code: 'E', name: t('dimensions.energy.E'), desc: t('dimensions.energy.E_desc') }}
              right={{ code: 'I', name: t('dimensions.energy.I'), desc: t('dimensions.energy.I_desc') }}
            />
            <DimensionCard
              title={t('dimensions.information.title')}
              left={{ code: 'S', name: t('dimensions.information.S'), desc: t('dimensions.information.S_desc') }}
              right={{ code: 'N', name: t('dimensions.information.N'), desc: t('dimensions.information.N_desc') }}
            />
            <DimensionCard
              title={t('dimensions.decision.title')}
              left={{ code: 'T', name: t('dimensions.decision.T'), desc: t('dimensions.decision.T_desc') }}
              right={{ code: 'F', name: t('dimensions.decision.F'), desc: t('dimensions.decision.F_desc') }}
            />
            <DimensionCard
              title={t('dimensions.lifestyle.title')}
              left={{ code: 'J', name: t('dimensions.lifestyle.J'), desc: t('dimensions.lifestyle.J_desc') }}
              right={{ code: 'P', name: t('dimensions.lifestyle.P'), desc: t('dimensions.lifestyle.P_desc') }}
            />
          </div>
        </div>

        <div className="mt-12 flex justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <button
            onClick={() => navigate('/settings')}
            className="flex items-center gap-2 px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sm">{t('landing.settings')}</span>
          </button>
          <button
            onClick={() => navigate('/about')}
            className="flex items-center gap-2 px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm">{t('landing.about')}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

function DimensionCard({ 
  title, 
  left, 
  right 
}: { 
  title: string
  left: { code: string; name: string; desc: string }
  right: { code: string; name: string; desc: string }
}) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 card-shadow">
      <div className="text-xs text-gray-500 dark:text-gray-400 text-center mb-3">{title}</div>
      <div className="flex items-center justify-between">
        <div className="flex-1 text-center">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white font-bold mb-1">
            {left.code}
          </div>
          <div className="text-sm font-medium text-gray-900 dark:text-white">{left.name}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">{left.desc}</div>
        </div>
        <div className="text-gray-300 dark:text-gray-600 px-4">/</div>
        <div className="flex-1 text-center">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white font-bold mb-1">
            {right.code}
          </div>
          <div className="text-sm font-medium text-gray-900 dark:text-white">{right.name}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">{right.desc}</div>
        </div>
      </div>
    </div>
  )
}
