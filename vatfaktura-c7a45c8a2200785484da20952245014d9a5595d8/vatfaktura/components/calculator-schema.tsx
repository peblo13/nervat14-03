interface CalculatorSchemaProps {
  title: string
  description: string
  url: string
}

export function CalculatorSchema({ title, description, url }: CalculatorSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: title,
    description: description,
    url: url,
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web-based',
    browserRequirements: 'Requires JavaScript',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'PLN',
      availability: 'https://schema.org/InStock',
      description: 'Bezpłatny kalkulator online bez rejestracji',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  )
}
