export const properties = [
  {
    id: 1,
    title: {
      es: 'Piso luminoso en el centro',
      en: 'Bright apartment in the city center',
    },
    location: {
      es: 'Madrid, Chamberí',
      en: 'Madrid, Chamberí',
    },
    price: 385000,
    bedrooms: 3,
    bathrooms: 2,
    area: 98,
    type: 'apartment',
    featured: true,
    image:
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
  },
  {
    id: 2,
    title: {
      es: 'Chalet con jardín y piscina',
      en: 'Villa with garden and pool',
    },
    location: {
      es: 'Valencia, La Cañada',
      en: 'Valencia, La Cañada',
    },
    price: 620000,
    bedrooms: 5,
    bathrooms: 3,
    area: 240,
    type: 'villa',
    featured: true,
    image:
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
  },
  {
    id: 3,
    title: {
      es: 'Ático con terraza panorámica',
      en: 'Penthouse with panoramic terrace',
    },
    location: {
      es: 'Barcelona, Eixample',
      en: 'Barcelona, Eixample',
    },
    price: 540000,
    bedrooms: 2,
    bathrooms: 2,
    area: 85,
    type: 'penthouse',
    featured: false,
    image:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
  },
  {
    id: 4,
    title: {
      es: 'Estudio reformado cerca del mar',
      en: 'Renovated studio near the sea',
    },
    location: {
      es: 'Málaga, Pedregalejo',
      en: 'Málaga, Pedregalejo',
    },
    price: 195000,
    bedrooms: 1,
    bathrooms: 1,
    area: 42,
    type: 'studio',
    featured: false,
    image:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
  },
  {
    id: 5,
    title: {
      es: 'Casa adosada familiar',
      en: 'Family townhouse',
    },
    location: {
      es: 'Sevilla, Nervión',
      en: 'Seville, Nervión',
    },
    price: 298000,
    bedrooms: 4,
    bathrooms: 2,
    area: 145,
    type: 'townhouse',
    featured: false,
    image:
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
  },
  {
    id: 6,
    title: {
      es: 'Loft industrial en zona trendy',
      en: 'Industrial loft in a trendy area',
    },
    location: {
      es: 'Bilbao, Abando',
      en: 'Bilbao, Abando',
    },
    price: 410000,
    bedrooms: 2,
    bathrooms: 1,
    area: 110,
    type: 'loft',
    featured: true,
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
  },
]

export function getLocalizedProperty(property, language) {
  return {
    ...property,
    title: property.title[language],
    location: property.location[language],
  }
}
