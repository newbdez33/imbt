import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export function AboutPage() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-8">
      <div className="max-w-lg mx-auto px-6 pt-6">
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate('/')}
            className="p-2 -ml-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{t('about.title')}</h1>
        </div>

        <div className="text-center py-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-analyst-500 to-sentinel-500 shadow-lg mb-4">
            <span className="text-4xl">🧠</span>
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">{t('app.title')}</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-1">{t('app.version')}</p>
        </div>

        <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 card-shadow">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <span className="text-xl">📚</span>
              {t('about.aboutMBTI')}
            </h3>
            <div className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed space-y-3">
              <p>
                {t('about.aboutMBTIDesc1')}
              </p>
              <p>
                {t('about.aboutMBTIDesc2')}
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 card-shadow animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <span className="text-xl">🎨</span>
              {t('about.fourTypes')}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-analyst-50 dark:bg-analyst-900/20">
                <span className="text-xl">🔮</span>
                <div>
                  <div className="font-medium text-analyst-700 dark:text-analyst-300">{t('groups.analyst')}</div>
                  <div className="text-xs text-analyst-600 dark:text-analyst-400">INTJ, INTP, ENTJ, ENTP</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-diplomat-50 dark:bg-diplomat-900/20">
                <span className="text-xl">💚</span>
                <div>
                  <div className="font-medium text-diplomat-700 dark:text-diplomat-300">{t('groups.diplomat')}</div>
                  <div className="text-xs text-diplomat-600 dark:text-diplomat-400">INFJ, INFP, ENFJ, ENFP</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-sentinel-50 dark:bg-sentinel-900/20">
                <span className="text-xl">💙</span>
                <div>
                  <div className="font-medium text-sentinel-700 dark:text-sentinel-300">{t('groups.sentinel')}</div>
                  <div className="text-xs text-sentinel-600 dark:text-sentinel-400">ISTJ, ISFJ, ESTJ, ESFJ</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-explorer-50 dark:bg-explorer-900/20">
                <span className="text-xl">💛</span>
                <div>
                  <div className="font-medium text-explorer-700 dark:text-explorer-300">{t('groups.explorer')}</div>
                  <div className="text-xs text-explorer-600 dark:text-explorer-400">ISTP, ISFP, ESTP, ESFP</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 card-shadow animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <span className="text-xl">⚠️</span>
              {t('about.disclaimer')}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {t('about.disclaimerDesc')}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 card-shadow animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <span className="text-xl">⚙️</span>
              {t('about.techStack')}
            </h3>
            <div className="flex flex-wrap gap-2">
              {['React 19', 'TypeScript', 'Vite 7', 'Tailwind CSS 4', 'PWA', 'i18next'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="text-center text-sm text-gray-500 dark:text-gray-400 py-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <p>Made with ❤️</p>
          </div>
        </div>
      </div>
    </div>
  )
}
