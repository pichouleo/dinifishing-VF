import { useTranslations, useLocale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { villas } from '@/data/villas'
import VillaCard from '@/components/VillaCard'
import Link from 'next/link'

export default function HebergementPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale)
  const t = useTranslations('accommodation')
  const currentLocale = useLocale()
  return (
    <div className="min-h-screen bg-noir-profond pt-20">
      <section className="relative py-24 flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1600)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-noir-profond/80" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-bebas text-5xl md:text-7xl text-blanc-casse tracking-widest">{t('title')}</h1>
          <p className="text-blanc-attenue text-lg mt-4 max-w-2xl mx-auto">{t('subtitle')}</p>
          <div className="w-16 h-0.5 bg-rouge-sang mx-auto mt-6" />
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {villas.map((villa) => (
              <VillaCard 
  key={villa.id} 
  name={villa.name} 
  images={villa.images} 
  capacity={villa.capacity} 
  description={villa.description} 
  equipments={villa.features}
/>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-noir-carte">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-bebas text-4xl md:text-5xl text-blanc-casse tracking-widest mb-6">{t('combine.title')}</h2>
          <p className="text-blanc-attenue text-lg mb-8">{t('combine.subtitle')}</p>
          <Link href={`/${currentLocale}/sejours`} className="inline-block bg-rouge-sang hover:bg-rouge-fonce text-white font-bebas tracking-widest text-lg px-10 py-4 transition-colors">
            {t('combine.cta')} →
          </Link>
        </div>
      </section>
    </div>
  )
}
