import { useLanguage } from '../i18n/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const { t } = useLanguage()

  return (
    <header className="header">
      <div className="header__brand">
        <span className="header__logo">Domo</span>
        <span className="header__tagline">{t('header.tagline')}</span>
      </div>
      <nav className="header__nav" aria-label={t('header.navLabel')}>
        <LanguageSwitcher />
        <a href="#propiedades">{t('header.properties')}</a>
        <a href="#destacadas">{t('header.featured')}</a>
        <a href="#contacto" className="header__cta">
          {t('header.contact')}
        </a>
      </nav>
    </header>
  )
}
