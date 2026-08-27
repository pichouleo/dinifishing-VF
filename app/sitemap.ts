import { MetadataRoute } from 'next'
import { articles } from '@/data/articles'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dinifishing.com'
  const locales = ['fr', 'en', 'es']

  const staticPages = [
    '',
    '/sejours',
    '/hebergement',
    '/especes',
    '/galerie',
    '/blog',
    '/contact',
    '/mentions-legales',
  ]

  const staticRoutes = locales.flatMap((locale) =>
    staticPages.map((page) => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: page === '' ? 1 : 0.8,
    }))
  )

  const articleRoutes = locales.flatMap((locale) =>
    articles.map((article) => ({
      url: `${baseUrl}/${locale}/blog/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: 'never' as const,
      priority: 0.6,
    }))
  )

  return [...staticRoutes, ...articleRoutes]
}