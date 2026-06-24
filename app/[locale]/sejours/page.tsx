import { useTranslations, useLocale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { stays } from '@/data/stays'
import StayCard from '@/components/StayCard'

export default function SejoursPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale)
  const t = useTranslations('stays')
  const currentLocale = useLocale()
  return (
    <div className="min-h-screen bg-noir-profond pt-20">
      <section className="relative py-24 flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=1600)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-noir-profond/80" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-bebas text-5xl md:text-7xl text-blanc-casse tracking-widest">{t('title')}</h1>
          <p className="text-blanc-attenue text-lg mt-4 max-w-2xl mx-auto">{t('subtitle')}</p>
          <div className="w-16 h-0.5 bg-rouge-sang mx-auto mt-6" />
        </div>
      </section>
      <div className="bg-noir-carte border-y border-noir-leger py-4 text-center">
        <p className="text-or-mat text-sm uppercase tracking-widest">{t('noPriceLine')}</p>
      </div>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {stays.map((stay) => (
              <StayCard
                key={stay.id}
                title={currentLocale === 'en' ? stay.titleEn : currentLocale === 'es' ? stay.titleEs : stay.title}
                duration={currentLocale === 'en' ? stay.durationEn : currentLocale === 'es' ? stay.durationEs : stay.duration}
                image={stay.image}
                description={currentLocale === 'en' ? stay.descriptionEn : currentLocale === 'es' ? stay.descriptionEs : stay.description}
                includes={currentLocale === 'en' ? stay.includesEn : currentLocale === 'es' ? stay.includesEs : stay.includes}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
