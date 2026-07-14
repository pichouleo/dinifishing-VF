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
      {/* Matériel perso */}
<section className="py-16 bg-noir-carte border-t border-rouge-sang/30">
  <div className="max-w-6xl mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <img 
          src="/bateau.jpg" 
          alt="Bateau de pêche Dini Fishing" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noir-profond/60 to-transparent" />
        <div className="absolute bottom-4 left-4 bg-rouge-sang text-white font-bebas tracking-widest text-sm px-4 py-2">
          LE SEUL À LE PROPOSER
        </div>
      </div>
      {/* Texte */}
      <div>
        <p className="text-rouge-sang font-bebas tracking-widest text-sm mb-2">CE QUI NOUS REND UNIQUE</p>
        <h2 className="font-bebas text-4xl md:text-5xl text-blanc-casse tracking-widest mb-4">
          VOTRE MATÉRIEL EST LE BIENVENU
        </h2>
        <p className="text-blanc-attenue text-lg mb-8">
          Contrairement à la plupart des guides, Dini Fishing vous accueille avec votre propre bateau, float tube ou matériel de pêche. Vous pêchez comme vous aimez, nous connaissons les spots.
        </p>
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex items-center gap-4 border-l-2 border-rouge-sang pl-4">
            <span className="text-2xl">🚤</span>
            <div>
              <h3 className="font-bebas text-blanc-casse tracking-widest">VOTRE BATEAU</h3>
              <p className="text-blanc-attenue text-sm">Mise à l'eau directe sur le Garcia Sola, Orellana ou Cijara.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 border-l-2 border-rouge-sang pl-4">
            <span className="text-2xl">🛶</span>
            <div>
              <h3 className="font-bebas text-blanc-casse tracking-widest">FLOAT TUBE</h3>
              <p className="text-blanc-attenue text-sm">Accédez à des spots impossibles depuis un bateau classique.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 border-l-2 border-rouge-sang pl-4">
            <span className="text-2xl">🎣</span>
            <div>
              <h3 className="font-bebas text-blanc-casse tracking-widest">VOTRE MATÉRIEL</h3>
              <p className="text-blanc-attenue text-sm">Cannes, leurres, mouches — le guide s'adapte à vos habitudes.</p>
            </div>
          </div>
        </div>
        <a href="https://wa.me/33668178743" target="_blank" rel="noopener noreferrer"
          className="inline-block bg-rouge-sang hover:bg-rouge-fonce text-white font-bebas tracking-widest text-lg px-10 py-4 transition-colors">
          📱 NOUS CONTACTER SUR WHATSAPP
        </a>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
