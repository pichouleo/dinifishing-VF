import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Galerie — Pêche en Extremadura, Espagne — Dini Fishing',
  description: 'Photos de pêche aux carnassiers en Extremadura — Black Bass, Brochet, Sandre, float tube, bateau. Séjours guidés avec Dini Fishing.',
  openGraph: {
    title: 'Galerie — Dini Fishing Extremadura',
    description: 'Photos de pêche en Extremadura, Espagne. Carnassiers, float tube et lacs sauvages.',
    images: ['/galerie/photo-01.jpg'],
  },
}


const photos = [
  { src: '/galerie/photo-01.jpg', caption: 'Pêche carnassiers Extremadura' },
  { src: '/galerie/photo-02.jpg', caption: 'Black Bass lac Garcia Sola' },
  { src: '/galerie/photo-03.jpg', caption: 'Pêche en float tube Extremadura' },
  { src: '/galerie/photo-04.jpg', caption: 'Brochet pêche Espagne' },
  { src: '/galerie/photo-05.jpg', caption: 'Lac Valdecaballeros Extremadura' },
  { src: '/galerie/photo-06.jpg', caption: 'Guide pêche Dini Fishing' },
  { src: '/galerie/photo-07.jpg', caption: 'Pêche bateau Garcia Sola' },
  { src: '/galerie/photo-08.jpg', caption: 'Sandre pêche Extremadura' },
  { src: '/galerie/photo-09.jpg', caption: 'Coucher de soleil lac Extremadura' },
  { src: '/galerie/photo-10.jpg', caption: 'Pêche carnassiers Espagne' },
  { src: '/galerie/photo-11.jpg', caption: 'Black Bass Valdecaballeros' },
  { src: '/galerie/photo-12.jpg', caption: 'Séjour pêche Extremadura' },
  { src: '/galerie/photo-13.jpg', caption: 'Pêche à la mouche Espagne' },
  { src: '/galerie/photo-14.jpg', caption: 'Barbeau Comizo Extremadura' },
  { src: '/galerie/photo-15.jpg', caption: 'Nature préservée Extremadura' },
  { src: '/galerie/photo-16.jpg', caption: 'Pêche sportive Espagne' },
]

export default function GaleriePage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale)
  const t = useTranslations('gallery')
  return (
    <div className="min-h-screen bg-noir-profond pt-20">
      <section className="py-16 text-center px-4">
        <h1 className="font-bebas text-5xl md:text-7xl text-blanc-casse tracking-widest">{t('title')}</h1>
        <p className="text-blanc-attenue text-lg mt-4">{t('subtitle')}</p>
        <div className="w-16 h-0.5 bg-rouge-sang mx-auto mt-6" />
        <p className="text-or-mat text-xs uppercase tracking-widest mt-4 italic">{t('notice')}</p>
      </section>
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {photos.map((photo, i) => (
              <div key={i} className="break-inside-avoid group relative overflow-hidden mb-4">
                <img 
                    src={photo.src} 
                    alt={photo.caption || 'Dini Fishing - pêche Extremadura'} 
                    loading="lazy"
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-noir-profond/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-blanc-casse text-sm">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
