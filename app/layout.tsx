import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dini Fishing — Guide de pêche en Extremadura, Espagne',
  description: 'Séjours de pêche guidés aux carnassiers en Extremadura, Espagne. Black Bass, Brochet, Sandre. Venez avec votre propre bateau ou float tube.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Dini Fishing',
  description: 'Guide de pêche professionnel en Extremadura, Espagne. Séjours aux carnassiers, pêche à la mouche, float tube et bateau.',
  url: 'https://dinifishing.com',
  telephone: '+33668178743',
  email: 'dini.extremadura@hotmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Valdecaballeros',
    addressRegion: 'Extremadura',
    addressCountry: 'ES',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 39.2167,
    longitude: -5.1167,
  },
  image: 'https://dinifishing.com/image-hero.png',
  priceRange: '€€',
  openingHours: 'Mo-Su 07:00-21:00',
  sameAs: [
    'https://www.facebook.com/DINI.FISHING',
    'https://www.instagram.com/dinifishing',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}