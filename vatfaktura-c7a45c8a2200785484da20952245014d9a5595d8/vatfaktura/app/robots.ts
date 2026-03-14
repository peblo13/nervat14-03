import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/blog/',
          '/faq',
          '/pricing',
          '/partners',
          '/reviews',
          '/porownanie',
          '/about',
          '/contact',
          '/keywords',
          '/register',
          '/login',
          // PIT landing — publicly accessible and indexable
          '/dashboard/pit',
        ],
        disallow: [
          '/dashboard/invoices',
          '/dashboard/settings',
          '/dashboard/clients',
          '/api/',
          '/init-demo',
        ],
      },
    ],
    sitemap: 'https://www.vatfaktura.pl/sitemap.xml',
    host: 'https://www.vatfaktura.pl',
  }
}
