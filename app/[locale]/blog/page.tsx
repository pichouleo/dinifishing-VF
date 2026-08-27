import { useTranslations, useLocale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { articles } from '@/data/articles'
import BlogCard from '@/components/BlogCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog pêche Extremadura — Spots, conseils carnassiers — Dini Fishing',
  description: 'Articles sur la pêche aux carnassiers en Extremadura. Spots Black Bass, techniques brochet, pêche mouche Espagne. Par Cédric Gandini, guide professionnel.',
  openGraph: {
    title: 'Blog — Pêche en Extremadura — Dini Fishing',
    description: 'Conseils et spots de pêche en Extremadura, Espagne. Black Bass, Brochet, Sandre.',
    images: ['/blog/article-blackbass.jpg'],
  },
}

export default function BlogPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale)
  const t = useTranslations('blog')
  const currentLocale = useLocale()
  return (
    <div className="min-h-screen bg-noir-profond pt-20">
      <section className="py-16 text-center px-4">
        <h1 className="font-bebas text-5xl md:text-7xl text-blanc-casse tracking-widest">{t('title')}</h1>
        <p className="text-blanc-attenue text-lg mt-4">{t('subtitle')}</p>
        <div className="w-16 h-0.5 bg-rouge-sang mx-auto mt-6" />
      </section>
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <BlogCard key={article.id} title={article.title} excerpt={article.excerpt} date={article.date} image={article.image} slug={article.slug} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
