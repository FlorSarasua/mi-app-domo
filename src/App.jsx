import { useMemo, useState } from 'react'
import { properties, getLocalizedProperty } from './data/properties'
import { useLanguage } from './i18n/LanguageContext'
import Header from './components/Header'
import Hero from './components/Hero'
import PropertyFilters from './components/PropertyFilters'
import PropertyCard from './components/PropertyCard'
import Footer from './components/Footer'
import './App.css'

function matchesSearch(property, query) {
  const haystack = [
    property.title.es,
    property.title.en,
    property.location.es,
    property.location.en,
  ]
    .join(' ')
    .toLowerCase()
  return haystack.includes(query)
}

function filterAndSort(list, { search, typeFilter, sortBy }) {
  const query = search.trim().toLowerCase()

  let result = list.filter((p) => {
    const matchesQuery = !query || matchesSearch(p, query)
    const matchesType = typeFilter === 'all' || p.type === typeFilter
    return matchesQuery && matchesType
  })

  result = [...result].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price - b.price
      case 'price-desc':
        return b.price - a.price
      case 'area-desc':
        return b.area - a.area
      case 'featured':
      default:
        return Number(b.featured) - Number(a.featured)
    }
  })

  return result
}

export default function App() {
  const { language, t } = useLanguage()
  const [search, setSearch] = useState('')
  const [typeFilter, setTypeFilter] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [selectedProperty, setSelectedProperty] = useState(null)

  const filtered = useMemo(
    () => filterAndSort(properties, { search, typeFilter, sortBy }),
    [search, typeFilter, sortBy],
  )

  const localized = useMemo(
    () => filtered.map((p) => getLocalizedProperty(p, language)),
    [filtered, language],
  )

  const featured = localized.filter((p) => p.featured)

  return (
    <>
      <Header />
      <main>
        <Hero totalProperties={properties.length} />
        {featured.length > 0 && (
          <section id="destacadas" className="section section--featured">
            <h2 className="section__title">{t('sections.featured')}</h2>
            <div className="property-grid property-grid--featured">
              {featured.slice(0, 3).map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  onContact={setSelectedProperty}
                />
              ))}
            </div>
          </section>
        )}
        <section id="propiedades" className="section">
          <h2 className="section__title">{t('sections.all')}</h2>
          <PropertyFilters
            search={search}
            onSearchChange={setSearch}
            typeFilter={typeFilter}
            onTypeChange={setTypeFilter}
            sortBy={sortBy}
            onSortChange={setSortBy}
            resultCount={localized.length}
          />
          {localized.length === 0 ? (
            <p className="empty-state">{t('empty')}</p>
          ) : (
            <div className="property-grid">
              {localized.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  onContact={setSelectedProperty}
                />
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
      {selectedProperty && (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={() => setSelectedProperty(null)}
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal__close"
              aria-label={t('modal.close')}
              onClick={() => setSelectedProperty(null)}
            >
              ×
            </button>
            <h2 id="modal-title">
              {t('modal.title', {
                title: selectedProperty.displayTitle ?? selectedProperty.title,
              })}
            </h2>
            <p className="modal__location">
              {selectedProperty.displayLocation ?? selectedProperty.location}
            </p>
            <p>
              {t('modal.body')} <strong>+34 900 123 456</strong>.
            </p>
            <button type="button" className="modal__btn" onClick={() => setSelectedProperty(null)}>
              {t('modal.close')}
            </button>
          </div>
        </div>
      )}
    </>
  )
}
