import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'

interface StayCardProps {
  title: string
  duration: string
  image: string
  description: string
  includes: string[]
}

export default function StayCard({ title, duration, image, description, includes }: StayCardProps) {
  const t = useTranslations('stays')
  const locale = useLocale()
  return (
    <div className="bg-noir-carte border border-noir-leger hover:border-rouge-sang transition-colors overflow-hidden">
      <div className="aspect-video overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bebas text-2xl text-blanc-casse tracking-widest">{title}</h3>
          <span className="text-or-mat text-xs uppercase tracking-widest border border-or-mat px-2 py-1">{duration}</span>
        </div>
        <p className="text-blanc-attenue text-sm mb-4">{description}</p>
        <div className="mb-5">
          <p className="text-or-mat text-xs uppercase tracking-widest mb-2">{t('includes')}</p>
          <ul className="space-y-1">
            {includes.map((item) => (
              <li key={item} className="flex items-start gap-2 text-blanc-attenue text-sm">
                <span className="text-rouge-sang mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <Link
          href={`/${locale}/contact`}
          className="block text-center bg-rouge-sang hover:bg-rouge-fonce text-white font-bebas tracking-widest py-3 transition-colors"
        >
          {t('contactCta')}
        </Link>
      </div>
    </div>
  )
}
