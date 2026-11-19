import { useTranslations, useLocale } from 'next-intl'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import { articles, pick } from '@/data/articles'
import BlogCard from '@/components/BlogCard'
import type { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'

interface Props { params: { locale: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params
  const m = await getTranslations({ locale, namespace: 'meta.blog' })
  return {
    title: m('title'),
    description: m('description'),
    alternates: {
      canonical: `https://dinifishing.com/${locale}/blog`,
      languages: {
        'fr': 'https://dinifishing.com/fr/blog',
        'en': 'https://dinifishing.com/en/blog',
        'es': 'https://dinifishing.com/es/blog',
      },
    },
    openGraph: {
      title: m('ogTitle'),
      description: m('ogDescription'),
      images: ['/blog/article-blackbass.jpg'],
      locale,
    },
  }
}

export default function BlogPage({ params: { locale } }: Props) {
  setRequestLocale(locale)
  const t = useTranslations('blog')
  const currentLocale = useLocale()
  return (
    <div className="min-h-screen bg-noir-profond pt-20">
      <AnimatedSection>
      <section className="py-16 text-center px-4">
        <h1 className="font-bebas text-5xl md:text-7xl text-blanc-casse tracking-widest">{t('title')}</h1>
        <p className="text-blanc-attenue text-lg mt-4">{t('subtitle')}</p>
        <div className="w-16 h-0.5 bg-rouge-sang mx-auto mt-6" />
      </section>
      </AnimatedSection>
      <AnimatedSection>
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...articles].sort((a, b) => b.date.localeCompare(a.date)).map((article) => (
              <BlogCard key={article.id} title={pick(article.title, currentLocale)} excerpt={pick(article.excerpt, currentLocale)} date={article.date} image={article.image} slug={article.slug} />
            ))}
          </div>
        </div>
      </section>
      </AnimatedSection>
    </div>
  )
}