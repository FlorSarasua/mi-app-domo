import { PROPERTY_TYPE_KEYS } from '../i18n/translations'
import { useLanguage } from '../i18n/LanguageContext'

export default function PropertyFilters({
  search,
  onSearchChange,
  typeFilter,
  onTypeChange,
  sortBy,
  onSortChange,
  resultCount,
}) {
  const { t } = useLanguage()

  return (
    <section className="filters" aria-label={t('filters.label')}>
      <div className="filters__row">
        <label className="filters__search">
          <span className="visually-hidden">{t('filters.search')}</span>
          <input
            type="search"
            placeholder={t('filters.searchPlaceholder')}
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </label>
        <label className="filters__select">
          <span>{t('filters.type')}</span>
          <select value={typeFilter} onChange={(e) => onTypeChange(e.target.value)}>
            {PROPERTY_TYPE_KEYS.map((typeKey) => (
              <option key={typeKey} value={typeKey}>
                {t(`propertyTypes.${typeKey}`)}
              </option>
            ))}
          </select>
        </label>
        <label className="filters__select">
          <span>{t('filters.sort')}</span>
          <select value={sortBy} onChange={(e) => onSortChange(e.target.value)}>
            <option value="featured">{t('filters.sortFeatured')}</option>
            <option value="price-asc">{t('filters.sortPriceAsc')}</option>
            <option value="price-desc">{t('filters.sortPriceDesc')}</option>
            <option value="area-desc">{t('filters.sortAreaDesc')}</option>
          </select>
        </label>
      </div>
      <p className="filters__count">
        {resultCount}{' '}
        {resultCount === 1 ? t('filters.resultOne') : t('filters.resultMany')}
      </p>
    </section>
  )
}
