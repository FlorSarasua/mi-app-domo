import { useLanguage } from '../i18n/LanguageContext'

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <div
      className="lang-switcher"
      role="group"
      aria-label={t('header.langSwitch')}
    >
      <button
        type="button"
        className={`lang-switcher__btn ${language === 'es' ? 'lang-switcher__btn--active' : ''}`}
        onClick={() => setLanguage('es')}
        aria-pressed={language === 'es'}
      >
        ES
      </button>
      <button
        type="button"
        className={`lang-switcher__btn ${language === 'en' ? 'lang-switcher__btn--active' : ''}`}
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
      >
        EN
      </button>
    </div>
  )
}
