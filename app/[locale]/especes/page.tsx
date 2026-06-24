import { useTranslations, useLocale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { species } from '@/data/species'
import Link from 'next/link'

export default function EspecesPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale)
  const t = useTranslations('species')
  const currentLocale = useLocale()
  return (
    <div className="min-h-screen bg-noir-profond pt-20">
      <section className="relative py-24 flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=1600)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-noir-profond/80" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-bebas text-5xl md:text-7xl text-blanc-casse tracking-widest">{t('title')}</h1>
          <p className="text-blanc-attenue text-lg mt-4 max-w-2xl mx-auto">{t('subtitle')}</p>
          <div className="w-16 h-0.5 bg-rouge-sang mx-auto mt-6" />
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {species.map((sp, i) => {
            const name = currentLocale === 'en' ? sp.nameEn : currentLocale === 'es' ? sp.nameEs : sp.name
            const behavior = currentLocale === 'en' ? sp.behaviorEn : currentLocale === 'es' ? sp.behaviorEs : sp.behavior
            const techniques = currentLocale === 'en' ? sp.techniquesEn : currentLocale === 'es' ? sp.techniquesEs : sp.techniques
            const season = currentLocale === 'en' ? sp.seasonEn : currentLocale === 'es' ? sp.seasonEs : sp.season
            return (
              <div key={sp.id} id={sp.slug} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <img src={sp.image} alt={name} className="w-full aspect-video object-cover" />
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <h2 className="font-bebas text-4xl md:text-5xl text-rouge-sang tracking-widest mb-4">{name}</h2>
                  <div className="mb-4">
                    <h3 className="text-or-mat text-xs uppercase tracking-widest mb-2">{t('behavior')}</h3>
                    <p className="text-blanc-attenue">{behavior}</p>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-or-mat text-xs uppercase tracking-widest mb-2">{t('techniques')}</h3>
                    <div className="flex flex-wrap gap-2">
                      {techniques.map((tech) => (
                        <span key={tech} className="bg-noir-carte border border-rouge-sang text-rouge-sang text-xs px-3 py-1 uppercase tracking-widest">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-or-mat text-xs uppercase tracking-widest mb-2">{t('season')}</h3>
                    <p className="text-blanc-casse font-medium">{season}</p>
                  </div>
                  <Link href={`/${currentLocale}/contact`} className="inline-block bg-rouge-sang hover:bg-rouge-fonce text-white font-bebas tracking-widest px-6 py-3 transition-colors">
                    {t('contactCta')} →
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>
      <section className="py-12 bg-noir-carte text-center">
        <Link href={`/${currentLocale}/sejours`} className="text-rouge-sang hover:text-rouge-fonce font-bebas tracking-widest text-xl transition-colors">
          Voir nos séjours →
        </Link>
      </section>
    </div>
  )
}
