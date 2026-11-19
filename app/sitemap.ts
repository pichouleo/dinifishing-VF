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

  // Date fixe : avec `new Date()`, toutes les pages repartaient à la date du build
  // à chaque déploiement, et Google finit par ignorer une information toujours fraîche.
  // À remonter à la main quand le contenu des pages change réellement.
  const staticPagesUpdatedAt = new Date('2026-11-19')

  const staticRoutes = locales.flatMap((locale) =>
    staticPages.map((page) => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: staticPagesUpdatedAt,
      changeFrequency: 'monthly' as const,
      priority: page === '' ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${baseUrl}/${l}${page}`])
        ),
      },
    }))
  )

  const articleRoutes = locales.flatMap((locale) =>
    articles.map((article) => ({
      url: `${baseUrl}/${locale}/blog/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: 'never' as const,
      priority: 0.6,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${baseUrl}/${l}/blog/${article.slug}`])
        ),
      },
    }))
  )

  return [...staticRoutes, ...articleRoutes]
}