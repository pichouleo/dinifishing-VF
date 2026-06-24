import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'

interface VillaCardProps {
  name: string
  image: string
  capacity: string
  description: string
  equipments: string[]
}

export default function VillaCard({ name, image, capacity, description, equipments }: VillaCardProps) {
  const t = useTranslations('accommodation')
  const locale = useLocale()
  return (
    <div className="bg-noir-carte border border-noir-leger hover:border-rouge-sang transition-colors overflow-hidden">
      <div className="aspect-video overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bebas text-2xl text-blanc-casse tracking-widest">{name}</h3>
          <span className="text-or-mat text-xs uppercase tracking-widest">{t('capacity')}: {capacity}</span>
        </div>
        <p className="text-blanc-attenue text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {equipments.map((eq) => (
            <span key={eq} className="text-xs text-blanc-attenue border border-noir-leger px-2 py-1">{eq}</span>
          ))}
        </div>
        <Link
          href={`/${locale}/contact`}
          className="block text-center border border-rouge-sang text-rouge-sang hover:bg-rouge-sang hover:text-white font-bebas tracking-widest py-3 transition-colors"
        >
          {t('contactCta')}
        </Link>
      </div>
    </div>
  )
}
