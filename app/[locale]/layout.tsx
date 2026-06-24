import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const locales = ['fr', 'en', 'es']

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const titles: Record<string, string> = {
    fr: 'Dini Fishing — Guide de Pêche Extremadura, Espagne',
    en: 'Dini Fishing — Fishing Guide Extremadura, Spain',
    es: 'Dini Fishing — Guía de Pesca Extremadura, España',
  }
  const descriptions: Record<string, string> = {
    fr: 'Séjours de pêche guidés aux carnassiers en Extremadura. Brochet, Black Bass, Sandre, Barbeau Comizo. Villas bord du lac.',
    en: 'Guided predator fishing stays in Extremadura, Spain. Pike, Bass, Zander, Comizo Barbel. Lakeside villas.',
    es: 'Estancias de pesca guiada a carnívoros en Extremadura. Lucio, Black Bass, Lucioperca, Barbo Comizo.',
  }
  return {
    title: titles[locale] || titles.fr,
    description: descriptions[locale] || descriptions.fr,
    openGraph: {
      title: titles[locale] || titles.fr,
      description: descriptions[locale] || descriptions.fr,
      siteName: 'Dini Fishing',
      locale,
    },
  }
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  if (!locales.includes(locale)) notFound()
  setRequestLocale(locale)
  const messages = await getMessages()
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
