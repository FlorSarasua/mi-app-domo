import { useLanguage } from '../i18n/LanguageContext'

export default function Hero({ totalProperties }) {
  const { t } = useLanguage()

  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">{t('hero.eyebrow')}</p>
        <h1 className="hero__title">
          {t('hero.titleLine1')}
          <br />
          <em>{t('hero.titleEm')}</em>
        </h1>
        <p className="hero__subtitle">{t('hero.subtitle', { count: totalProperties })}</p>
        <a href="#propiedades" className="hero__cta">
          {t('hero.cta')}
        </a>
      </div>
      <div className="hero__visual" aria-hidden="true">
        <div className="hero__card hero__card--1">
          <span>+120</span>
          <small>{t('hero.statClients')}</small>
        </div>
        <div className="hero__card hero__card--2">
          <span>{t('hero.statYears')}</span>
          <small>{t('hero.statExperience')}</small>
        </div>
      </div>
    </section>
  )
}
