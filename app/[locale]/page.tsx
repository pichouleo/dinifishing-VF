import { useTranslations, useLocale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import SpeciesCard from '@/components/SpeciesCard'
import { species } from '@/data/species'

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale)
  const t = useTranslations('home')
  const currentLocale = useLocale()

  const featuredSpecies = species.slice(0, 3)
  const arguments_ = [
    { key: 'nature', icon: '🌿' },
    { key: 'guide', icon: '🎣' },
    { key: 'custom', icon: '⚙️' },
    { key: 'passion', icon: '❤️' },
  ] as const

  return (
    <>
      <HeroSection
        title1={t('heroTitle1')}
        title2={t('heroTitle2')}
        tagline={t('heroTagline')}
        subtitle={t('heroSubtitle')}
        cta1Label={t('heroCta1')}
        cta1Href={`/${currentLocale}/sejours`}
        cta2Label={t('heroCta2')}
        cta2Href={`/${currentLocale}/contact`}
        imageUrl="/hero.png"
      />

      {/* Arguments */}
      <section className="py-20 bg-noir-profond">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-bebas text-4xl md:text-5xl text-blanc-casse tracking-widest text-center mb-12">
            {t('arguments.title')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {arguments_.map(({ key, icon }) => (
              <div key={key} className="bg-noir-carte border border-noir-leger p-6 hover:border-rouge-sang transition-colors text-center">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="font-bebas text-xl text-rouge-sang tracking-widest mb-2">
                  {t(`arguments.${key}`)}
                </h3>
                <p className="text-blanc-attenue text-sm">{t(`arguments.${key}Desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured species */}
      <section className="py-20 bg-noir-carte">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="font-bebas text-4xl md:text-5xl text-blanc-casse tracking-widest">
                {t('species.title')}
              </h2>
              <p className="text-blanc-attenue mt-2 max-w-2xl">{t('species.subtitle')}</p>
            </div>
            <Link href={`/${currentLocale}/especes`} className="hidden md:block text-rouge-sang hover:text-rouge-fonce font-bebas tracking-widest transition-colors">
              {t('species.cta')} →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredSpecies.map((sp) => (
              <SpeciesCard
                key={sp.id}
                name={currentLocale === 'en' ? sp.nameEn : currentLocale === 'es' ? sp.nameEs : sp.name}
                image={sp.image}
                description={currentLocale === 'en' ? sp.descriptionEn : currentLocale === 'es' ? sp.descriptionEs : sp.description}
                slug={sp.slug}
                locale={currentLocale}
              />
            ))}
          </div>
          <div className="text-center mt-8 md:hidden">
            <Link href={`/${currentLocale}/especes`} className="text-rouge-sang font-bebas tracking-widest">
              {t('species.cta')} →
            </Link>
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section className="py-20 bg-noir-profond">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-bebas text-4xl md:text-5xl text-blanc-casse tracking-widest mb-6">
                {t('accommodation.title')}
              </h2>
              <p className="text-blanc-attenue text-lg mb-8">{t('accommodation.subtitle')}</p>
              <Link href={`/${currentLocale}/hebergement`} className="inline-block border border-blanc-casse text-blanc-casse hover:border-rouge-sang hover:text-rouge-sang font-bebas tracking-widest px-8 py-3 transition-colors">
                {t('accommodation.cta')} →
              </Link>
            </div>
            <div className="relative h-80 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800" alt="Villa bord du lac" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-noir-profond/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-16 bg-rouge-sang">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-bebas text-4xl md:text-5xl text-white tracking-widest mb-4">{t('whatsapp.title')}</h2>
          <p className="text-white/80 text-lg mb-8">{t('whatsapp.subtitle')}</p>
          <a href="https://wa.me/33668178743" target="_blank" rel="noopener noreferrer"
            className="inline-block bg-white text-rouge-sang hover:bg-blanc-casse font-bebas tracking-widest text-xl px-10 py-4 transition-colors">
            {t('whatsapp.cta')}
          </a>
        </div>
      </section>
    </>
  )
}
