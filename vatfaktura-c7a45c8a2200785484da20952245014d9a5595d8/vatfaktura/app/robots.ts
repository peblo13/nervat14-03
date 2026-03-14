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
          '/privacy',
          '/terms',
          '/disclaimer',
          '/keywords',
          '/link-building',
          '/image-optimization',
          '/kalkulator-vat',
          '/kalkulator-pit',
          '/register',
          '/login',
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
