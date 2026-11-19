import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale, getTranslations } from 'next-intl/server'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const locales = ['fr', 'en', 'es']

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const m = await getTranslations({ locale, namespace: 'meta.home' })
  return {
    title: m('title'),
    description: m('description'),
    alternates: {
      canonical: `https://dinifishing.com/${locale}`,
      languages: {
        'fr': 'https://dinifishing.com/fr',
        'en': 'https://dinifishing.com/en',
        'es': 'https://dinifishing.com/es',
      },
    },
    openGraph: {
      title: m('ogTitle'),
      description: m('ogDescription'),
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
