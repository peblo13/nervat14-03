import { MetadataRoute } from 'next'

const BASE_URL = 'https://www.vatfaktura.pl'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Core pages — highest priority
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/register`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    // PIT pages — high priority (new feature)
    {
      url: `${BASE_URL}/dashboard/pit`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    // Calculator tools — high SEO value
    {
      url: `${BASE_URL}/kalkulator-vat`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/kalkulator-pit`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Tools hub — high SEO value
    {
      url: `${BASE_URL}/narzedzia`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    // Additional calculators
    {
      url: `${BASE_URL}/kalkulator-zus`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/kalkulator-wynagrodzen`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    // Content hubs
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    // PIT blog posts
    {
      url: `${BASE_URL}/blog/pit-37-jak-wypelnic-i-wyslac-online`,
      lastModified: new Date('2026-03-12'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog/ktory-formularz-pit-wybrac-porownanie`,
      lastModified: new Date('2026-03-11'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog/podpis-elektroniczny-pit-profil-zaufany`,
      lastModified: new Date('2026-03-10'),
      changeFrequency: 'monthly',
      priority: 0.88,
    },
    {
      url: `${BASE_URL}/blog/ulgi-podatkowe-pit-pelna-lista-odliczen`,
      lastModified: new Date('2026-03-09'),
      changeFrequency: 'monthly',
      priority: 0.88,
    },
    // Blog posts — factoring & tax
    {
      url: `${BASE_URL}/blog/kompletny-przewodnik-po-ksef`,
      lastModified: new Date('2026-03-10'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/blog/jak-prawidlowo-wystawic-fakture-vat`,
      lastModified: new Date('2026-03-09'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/blog/darmowe-programy-do-fakturowania-porownanie`,
      lastModified: new Date('2026-03-08'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/blog/fakturowanie-dla-freelancerow-praktyczny-poradnik`,
      lastModified: new Date('2026-03-07'),
      changeFrequency: 'monthly',
      priority: 0.82,
    },
    {
      url: `${BASE_URL}/blog/faktura-korygujaca-jak-wystawic`,
      lastModified: new Date('2026-03-13'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/blog/ryczalt-ewidencjonowany-stawki-limity-2026`,
      lastModified: new Date('2026-03-11'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/blog/faktura-proforma-co-to-jest`,
      lastModified: new Date('2026-03-05'),
      changeFrequency: 'monthly',
      priority: 0.82,
    },
    {
      url: `${BASE_URL}/blog/zwolnienie-z-vat-kto-moze-skorzystac`,
      lastModified: new Date('2026-03-04'),
      changeFrequency: 'monthly',
      priority: 0.82,
    },
    {
      url: `${BASE_URL}/blog/podpis-elektroniczny-do-pit-dane-autoryzujace`,
      lastModified: new Date('2026-03-03'),
      changeFrequency: 'monthly',
      priority: 0.82,
    },
    {
      url: `${BASE_URL}/blog/terminy-podatkowe-2026-kalendarz`,
      lastModified: new Date('2026-03-01'),
      changeFrequency: 'monthly',
      priority: 0.82,
    },
    {
      url: `${BASE_URL}/blog/system-fakturowania-dla-malych-firm`,
      lastModified: new Date('2026-03-06'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Supporting pages
    {
      url: `${BASE_URL}/porownanie`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/reviews`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/partners`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/login`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/keywords`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: `${BASE_URL}/link-building`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    // Legal / low priority
    {
      url: `${BASE_URL}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/disclaimer`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
  ]
}
