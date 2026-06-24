import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'

interface BlogCardProps {
  title: string
  excerpt: string
  date: string
  image: string
  slug: string
}

export default function BlogCard({ title, excerpt, date, image, slug }: BlogCardProps) {
  const t = useTranslations('blog')
  const locale = useLocale()
  return (
    <div className="bg-noir-carte border border-noir-leger hover:border-rouge-sang transition-colors overflow-hidden">
      <div className="aspect-video overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-6">
        <p className="text-or-mat text-xs uppercase tracking-widest mb-2">{new Date(date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        <h3 className="font-bebas text-xl text-blanc-casse tracking-wide mb-2 leading-tight">{title}</h3>
        <p className="text-blanc-attenue text-sm mb-4">{excerpt}</p>
        <Link
          href={`/${locale}/blog/${slug}`}
          className="inline-block text-rouge-sang hover:text-rouge-fonce text-sm font-medium transition-colors"
        >
          {t('readMore')} →
        </Link>
      </div>
    </div>
  )
}
