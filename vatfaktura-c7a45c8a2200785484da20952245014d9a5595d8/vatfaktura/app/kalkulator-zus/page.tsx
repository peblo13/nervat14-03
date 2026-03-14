import { Metadata } from 'next'
import { CalculatorSchema } from '@/components/calculator-schema'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { KalkulatorZUSClient } from '@/components/kalkulator-zus-client'

export const metadata: Metadata = {
  title: 'Kalkulator ZUS 2024 - Oblicz składki dla przedsiębiorców online',
  description: 'Bezpłatny kalkulator składek ZUS dla przedsiębiorców. Oblicz emeryturę, rentę, chorobę i ubezpieczenie zdrowotne. Aktualne stawki 2024.',
  keywords: 'kalkulator ZUS, składki ZUS, przedsiębiorca, emerytura, renta, ubezpieczenie zdrowotne, stawki ZUS',
  openGraph: {
    title: 'Kalkulator ZUS dla przedsiębiorców 2024',
    description: 'Oblicz składki ZUS dla przedsiębiorcy - emerytura, renta, choroba, ubezpieczenie zdrowotne',
    type: 'website',
    url: 'https://www.vatfaktura.pl/kalkulator-zus',
    images: [{ url: 'https://www.vatfaktura.pl/og-image.png' }],
  },
}

const breadcrumbs = [
  { name: 'Strona główna', url: 'https://www.vatfaktura.pl' },
  { name: 'Narzędzia', url: 'https://www.vatfaktura.pl/narzedzia' },
  { name: 'Kalkulator ZUS', url: 'https://www.vatfaktura.pl/kalkulator-zus' }
]

export default function KalkulatorZUSPage() {
  return (
    <>
      <CalculatorSchema 
        title="Kalkulator ZUS 2024"
        description="Oblicz składki ZUS dla przedsiębiorców: emerytura, renta, choroba i ubezpieczenie zdrowotne"
        url="https://www.vatfaktura.pl/kalkulator-zus"
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <KalkulatorZUSClient />
    </>
  )
}
