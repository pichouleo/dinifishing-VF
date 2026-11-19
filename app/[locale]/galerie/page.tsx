import { useTranslations } from 'next-intl'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'

interface Props { params: { locale: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params
  const m = await getTranslations({ locale, namespace: 'meta.gallery' })
  return {
    title: m('title'),
    description: m('description'),
    alternates: {
      canonical: `https://dinifishing.com/${locale}/galerie`,
      languages: {
        'fr': 'https://dinifishing.com/fr/galerie',
        'en': 'https://dinifishing.com/en/galerie',
        'es': 'https://dinifishing.com/es/galerie',
      },
    },
    openGraph: {
      title: m('ogTitle'),
      description: m('ogDescription'),
      locale,
      images: ['/galerie/photo-01.jpg'],
    },
  }
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
  { src: '/galerie/photo-17.jpg', caption: 'Départ au lever du jour, lac de Valdecaballeros' },
  { src: '/galerie/photo-18.jpg', caption: 'Black Bass pêché au lac Garcia Sola' },
  { src: '/galerie/photo-19.jpg', caption: 'Sandre pêché en Extremadura' },
  { src: '/galerie/photo-20.jpg', caption: 'Beau Black Bass pris depuis le bateau' },
  { src: '/galerie/photo-21.jpg', caption: 'Black Bass à l’épuisette, pêche no-kill' },
  { src: '/galerie/photo-22.jpg', caption: 'Doublé de carnassiers entre pêcheurs' },
  { src: '/galerie/photo-23.jpg', caption: 'Brochet pêché au lac Garcia Sola' },
  { src: '/galerie/photo-24.jpg', caption: 'Mise à l’eau des bass boats, Valdecaballeros' },
  { src: '/galerie/photo-25.jpg', caption: 'Brochet du lac, guidage Dini Fishing' },
  { src: '/galerie/photo-26.jpg', caption: 'Renard au bord du lac, nature préservée d’Extremadura' },
  { src: '/galerie/photo-27.jpg', caption: 'Barbeau Comizo pêché en Extremadura' },
  { src: '/galerie/photo-28.jpg', caption: 'Bass boat au pied des falaises du lac' },
]

export default function GaleriePage({ params: { locale } }: Props) {
  setRequestLocale(locale)
  const t = useTranslations('gallery')
  return (
    <div className="min-h-screen bg-noir-profond pt-20">
      <AnimatedSection>
      <section className="py-16 text-center px-4">
        <h1 className="font-bebas text-5xl md:text-7xl text-blanc-casse tracking-widest">{t('title')}</h1>
        <p className="text-blanc-attenue text-lg mt-4">{t('subtitle')}</p>
        <div className="w-16 h-0.5 bg-rouge-sang mx-auto mt-6" />
        <p className="text-or-mat text-xs uppercase tracking-widest mt-4 italic">{t('notice')}</p>
      </section>
      </AnimatedSection>
      <AnimatedSection>
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
      </AnimatedSection>
    </div>
  )
}