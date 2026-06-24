import { setRequestLocale } from 'next-intl/server'
import { articles } from '@/data/articles'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'

interface Props { params: { slug: string; locale: string } }

export function generateStaticParams() {
  const locales = ['fr', 'en', 'es']
  return locales.flatMap((locale) => articles.map((a) => ({ locale, slug: a.slug })))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = articles.find((a) => a.slug === params.slug)
  if (!article) return {}
  return { title: `${article.title} — Dini Fishing`, description: article.excerpt, openGraph: { title: article.title, description: article.excerpt, images: [article.image] } }
}

export default function BlogPostPage({ params }: Props) {
  setRequestLocale(params.locale)
  const article = articles.find((a) => a.slug === params.slug)
  if (!article) notFound()

  const renderContent = (content: string) => {
    return content.trim().split('\n\n').map((para, i) => {
      if (para.startsWith('# ')) return <h1 key={i} className="font-bebas text-4xl text-blanc-casse tracking-widest mt-8 mb-4">{para.slice(2)}</h1>
      if (para.startsWith('## ')) return <h2 key={i} className="font-bebas text-3xl text-rouge-sang tracking-widest mt-8 mb-4">{para.slice(3)}</h2>
      if (para.startsWith('### ')) return <h3 key={i} className="font-bebas text-2xl text-or-mat tracking-widest mt-6 mb-3">{para.slice(4)}</h3>
      if (para.startsWith('- ')) {
        const items = para.split('\n').filter(l => l.startsWith('- ')).map(l => l.slice(2))
        return <ul key={i} className="space-y-1 my-4">{items.map((item, j) => <li key={j} className="flex items-start gap-2 text-blanc-attenue"><span className="text-rouge-sang mt-1">•</span>{item}</li>)}</ul>
      }
      return <p key={i} className="text-blanc-attenue leading-relaxed my-4">{para}</p>
    })
  }

  return (
    <div className="min-h-screen bg-noir-profond pt-20">
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-noir-profond to-transparent" />
      </div>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 pb-20">
        <div className="mb-8">
          <p className="text-or-mat text-xs uppercase tracking-widest mb-3">
            {new Date(article.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          <h1 className="font-bebas text-3xl md:text-5xl text-blanc-casse tracking-widest leading-tight">{article.title}</h1>
        </div>
        <div>{renderContent(article.content)}</div>
        <div className="mt-12 pt-8 border-t border-noir-leger flex items-center justify-between">
          <Link href={`/${params.locale}/blog`} className="text-rouge-sang hover:text-rouge-fonce font-bebas tracking-widest transition-colors">← Retour au blog</Link>
          <Link href={`/${params.locale}/contact`} className="bg-rouge-sang hover:bg-rouge-fonce text-white font-bebas tracking-widest px-6 py-3 transition-colors">Réserver un séjour</Link>
        </div>
      </article>
    </div>
  )
}
