import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Załóż Firmę Online - Rejestracja CEIDG, GUS, ZUS w 5 Minut | VAT Faktura',
  description: 'Załóż firmę online bez wychodzenia z domu. Pełna obsługa rejestracji w CEIDG, GUS i ZUS. Otrzymaj NIP w 5-10 dni roboczych. 100% bezpłatnie online.',
  keywords: 'założenie firmy, załóż firmę online, CEIDG, rejestracja GUS, ZUS online, NIP, działalność gospodarcza, przedsiębiorca',
  openGraph: {
    title: 'Załóż Firmę Online - Rejestracja CEIDG, GUS, ZUS | VAT Faktura',
    description: 'Pełna obsługa zakładania firmy online. CEIDG, GUS, ZUS bez wychodzenia z domu. NIP w 5-10 dni. Bezpłatnie.',
    url: 'https://www.vatfaktura.pl/zaloz-firme-online',
    type: 'website',
    locale: 'pl_PL',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Załóż Firmę Online - CEIDG, ZUS, GUS',
    description: 'Rejestracja firmy w systemach CEIDG, GUS i ZUS całkowicie online bez wychodzenia z domu.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
