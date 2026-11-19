import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { articles, pick } from '@/data/articles'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'

interface Props { params: { slug: string; locale: string } }

export function generateStaticParams() {
  const locales = ['fr', 'en', 'es']
  return locales.flatMap((locale) => articles.map((a) => ({ locale, slug: a.slug })))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = articles.find((a) => a.slug === params.slug)
  if (!article) return {}
  const title = pick(article.title, params.locale)
  const excerpt = pick(article.excerpt, params.locale)
  return {
    title: `${title} — Dini Fishing`,
    description: excerpt,
    alternates: {
      canonical: `https://dinifishing.com/${params.locale}/blog/${params.slug}`,
      languages: {
        'fr': `https://dinifishing.com/fr/blog/${params.slug}`,
        'en': `https://dinifishing.com/en/blog/${params.slug}`,
        'es': `https://dinifishing.com/es/blog/${params.slug}`,
      },
    },
    openGraph: {
      title,
      description: excerpt,
      images: [article.image],
      locale: params.locale,
      type: 'article',
    },
  }
}

const dateLocales: Record<string, string> = { fr: 'fr-FR', en: 'en-GB', es: 'es-ES' }

export default function BlogPostPage({ params }: Props) {
  setRequestLocale(params.locale)
  const t = useTranslations('blog')
  const article = articles.find((a) => a.slug === params.slug)
  if (!article) notFound()

  const title = pick(article.title, params.locale)
  const content = pick(article.content, params.locale)

  const renderInline = (text: string) => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
    const parts: (string | JSX.Element)[] = []
    let lastIndex = 0
    let match

    while ((match = linkRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index))
      }
      parts.push(
        <a key={match.index} href={match[2]} target="_blank" rel="noopener noreferrer"
          className="text-rouge-sang hover:underline">
          {match[1]}
        </a>
      )
      lastIndex = match.index + match[0].length
    }
    if (lastIndex < text.length) parts.push(text.slice(lastIndex))
    return parts.length > 0 ? parts : text
  }

  const renderContent = (content: string) => {
    const blocks = content.trim().split('\n\n')
    // Chaque article commence par « # Titre », déjà rendu en H1 par l'en-tête de
    // la page : sans ça le titre s'affiche deux fois et la page a deux H1.
    if (blocks[0]?.startsWith('# ')) blocks.shift()
    return blocks.map((para, i) => {
      if (para.startsWith('# ')) return <h1 key={i} className="font-bebas text-4xl text-blanc-casse tracking-widest mt-8 mb-4">{para.slice(2)}</h1>
      if (para.startsWith('## ')) return <h2 key={i} className="font-bebas text-3xl text-rouge-sang tracking-widest mt-8 mb-4">{para.slice(3)}</h2>
      if (para.startsWith('### ')) return <h3 key={i} className="font-bebas text-2xl text-or-mat tracking-widest mt-6 mb-3">{para.slice(4)}</h3>
      if (para.startsWith('- ')) {
        const items = para.split('\n').filter(l => l.startsWith('- ')).map(l => l.slice(2))
        return (
          <ul key={i} className="space-y-1 my-4">
            {items.map((item, j) => (
              <li key={j} className="flex items-start gap-2 text-blanc-attenue">
                <span className="text-rouge-sang mt-1">•</span>
                {renderInline(item)}
              </li>
            ))}
          </ul>
        )
      }
      if (para.startsWith('**') && para.endsWith('**')) {
        return <p key={i} className="text-blanc-casse font-semibold leading-relaxed my-4">{renderInline(para.slice(2, -2))}</p>
      }
      if (para.startsWith('*') && para.endsWith('*')) {
        return <p key={i} className="text-blanc-attenue/70 italic leading-relaxed my-4 text-sm">{renderInline(para.slice(1, -1))}</p>
      }
      if (para.startsWith('---')) {
        return <hr key={i} className="border-noir-leger my-8" />
      }
      return <p key={i} className="text-blanc-attenue leading-relaxed my-4">{renderInline(para)}</p>
    })
  }

  return (
    <div className="min-h-screen bg-noir-profond pt-20">
      <div className="relative h-72 md:h-96 overflow-hidden">
        <Image src={article.image} alt={title} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-noir-profond to-transparent" />
      </div>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 pb-20">
        <div className="mb-8">
          <p className="text-or-mat text-xs uppercase tracking-widest mb-3">
            {new Date(article.date).toLocaleDateString(dateLocales[params.locale] ?? 'fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          <h1 className="font-bebas text-3xl md:text-5xl text-blanc-casse tracking-widest leading-tight">{title}</h1>
        </div>
        <div>{renderContent(content)}</div>
        <div className="mt-12 pt-8 border-t border-noir-leger flex items-center justify-between">
          <Link href={`/${params.locale}/blog`} className="text-rouge-sang hover:text-rouge-fonce font-bebas tracking-widest transition-colors">← {t('backToBlog')}</Link>
          <Link href={`/${params.locale}/contact`} className="bg-rouge-sang hover:bg-rouge-fonce text-white font-bebas tracking-widest px-6 py-3 transition-colors">{t('bookStay')}</Link>
        </div>
      </article>
    </div>
  )
}