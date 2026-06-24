import { useTranslations, useLocale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import Link from 'next/link'

export default function MerciPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale)
  const t = useTranslations('merci')
  const currentLocale = useLocale()
  return (
    <div className="min-h-screen bg-noir-profond flex items-center justify-center px-4 pt-20">
      <div className="text-center max-w-lg">
        <div className="text-6xl mb-6">✅</div>
        <h1 className="font-bebas text-5xl md:text-6xl text-blanc-casse tracking-widest mb-4">{t('title')}</h1>
        <p className="text-blanc-attenue text-lg mb-10">{t('subtitle')}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={`/${currentLocale}`} className="border border-blanc-casse text-blanc-casse hover:border-rouge-sang hover:text-rouge-sang font-bebas tracking-widest px-8 py-3 transition-colors">
            {t('backHome')}
          </Link>
          <a href="https://wa.me/33668178743" target="_blank" rel="noopener noreferrer"
            className="bg-rouge-sang hover:bg-rouge-fonce text-white font-bebas tracking-widest px-8 py-3 transition-colors">
            {t('whatsapp')}
          </a>
        </div>
      </div>
    </div>
  )
}
