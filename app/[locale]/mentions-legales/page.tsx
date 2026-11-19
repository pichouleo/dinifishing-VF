import { useTranslations } from 'next-intl'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import Link from 'next/link'
import type { Metadata } from 'next'

interface Props { params: { locale: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params
  const m = await getTranslations({ locale, namespace: 'meta.legal' })
  return {
    title: m('title'),
    description: m('description'),
    alternates: {
      canonical: `https://dinifishing.com/${locale}/mentions-legales`,
      languages: {
        'fr': 'https://dinifishing.com/fr/mentions-legales',
        'en': 'https://dinifishing.com/en/mentions-legales',
        'es': 'https://dinifishing.com/es/mentions-legales',
      },
    },
  }
}

export default function MentionsLegalesPage({ params: { locale } }: Props) {
  setRequestLocale(locale)
  const t = useTranslations('legal')

  const Line = ({ label, children }: { label: string; children: React.ReactNode }) => (
    <p><span className="text-or-mat">{label}</span> {children}</p>
  )

  return (
    <div className="min-h-screen bg-noir-profond pt-20">
      <section className="py-16 text-center px-4">
        <h1 className="font-bebas text-5xl md:text-7xl text-blanc-casse tracking-widest">{t('title')}</h1>
        <div className="w-16 h-0.5 bg-rouge-sang mx-auto mt-6" />
      </section>
      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <div>
            <h2 className="font-bebas text-2xl text-rouge-sang tracking-widest mb-4">{t('editorHeading')}</h2>
            <div className="text-blanc-attenue space-y-2 text-sm leading-relaxed">
              <Line label={t('labelName')}>Dini Fishing</Line>
              <Line label={t('labelManager')}>Cédric Gandini</Line>
              <Line label={t('labelNif')}>Z0780287-V</Line>
              <Line label={t('labelAddress')}>{t('addressValue')}</Line>
              <Line label={t('labelEmail')}>dini.extremadura@hotmail.com</Line>
              <Line label={t('labelPhone')}>+33 6 68 17 87 43</Line>
            </div>
          </div>
          <div>
            <h2 className="font-bebas text-2xl text-rouge-sang tracking-widest mb-4">{t('hostingHeading')}</h2>
            <div className="text-blanc-attenue space-y-2 text-sm leading-relaxed">
              <Line label={t('labelHost')}>Netlify, Inc.</Line>
              <Line label={t('labelAddress')}>{t('hostAddressValue')}</Line>
              <Line label={t('labelSite')}>
                <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer" className="text-rouge-sang hover:underline">www.netlify.com</a>
              </Line>
            </div>
          </div>
          <div>
            <h2 className="font-bebas text-2xl text-rouge-sang tracking-widest mb-4">{t('ipHeading')}</h2>
            <p className="text-blanc-attenue text-sm leading-relaxed">{t('ipBody')}</p>
          </div>
          <div>
            <h2 className="font-bebas text-2xl text-rouge-sang tracking-widest mb-4">{t('gdprHeading')}</h2>
            <div className="text-blanc-attenue text-sm leading-relaxed space-y-3">
              <p>{t('gdprP1')}</p>
              <p>{t('gdprP2')}</p>
              <p>
                {t('gdprP3')}{' '}
                <a href="mailto:dini.extremadura@hotmail.com" className="text-rouge-sang hover:underline">dini.extremadura@hotmail.com</a>
              </p>
            </div>
          </div>
          <div>
            <h2 className="font-bebas text-2xl text-rouge-sang tracking-widest mb-4">{t('cookiesHeading')}</h2>
            <p className="text-blanc-attenue text-sm leading-relaxed">{t('cookiesBody')}</p>
          </div>
          <div>
            <h2 className="font-bebas text-2xl text-rouge-sang tracking-widest mb-4">{t('liabilityHeading')}</h2>
            <p className="text-blanc-attenue text-sm leading-relaxed">{t('liabilityBody')}</p>
          </div>
          <div>
            <h2 className="font-bebas text-2xl text-rouge-sang tracking-widest mb-4">{t('lawHeading')}</h2>
            <p className="text-blanc-attenue text-sm leading-relaxed">{t('lawBody')}</p>
          </div>
          <div className="pt-8 border-t border-noir-leger">
            <Link href={`/${locale}`} className="text-rouge-sang hover:text-rouge-fonce font-bebas tracking-widest transition-colors">
              ← {t('backHome')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
