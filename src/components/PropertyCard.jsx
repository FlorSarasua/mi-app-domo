import { useLanguage } from '../i18n/LanguageContext'

function formatPrice(price, locale) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(price)
}

export default function PropertyCard({ property, onContact }) {
  const { t, locale } = useLanguage()
  const { title, location, price, bedrooms, bathrooms, area, type, featured, image } =
    property

  return (
    <article className="property-card">
      <div className="property-card__image-wrap">
        <img src={image} alt={title} className="property-card__image" loading="lazy" />
        <span className="property-card__type">{t(`propertyTypes.${type}`)}</span>
        {featured && (
          <span className="property-card__badge">{t('propertyCard.featured')}</span>
        )}
      </div>
      <div className="property-card__body">
        <h3 className="property-card__title">{title}</h3>
        <p className="property-card__location">{location}</p>
        <p className="property-card__price">{formatPrice(price, locale)}</p>
        <ul className="property-card__features" aria-label={t('propertyCard.featuresLabel')}>
          <li>{t('propertyCard.bedrooms', { count: bedrooms })}</li>
          <li>{t('propertyCard.bathrooms', { count: bathrooms })}</li>
          <li>{t('propertyCard.area', { count: area })}</li>
        </ul>
        <button
          type="button"
          className="property-card__btn"
          onClick={() => onContact({ ...property, displayTitle: title, displayLocation: location })}
        >
          {t('propertyCard.requestInfo')}
        </button>
      </div>
    </article>
  )
}
