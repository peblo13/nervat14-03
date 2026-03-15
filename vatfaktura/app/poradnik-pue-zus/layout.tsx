import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Poradnik PUE ZUS - Jak Wysyłać Formularze Online',
  description: 'Krok po kroku poradnik jak logować się do PUE ZUS i wysyłać formularze online. Instrukcje dla Z-3, zasiłków i innych dokumentów.',
  keywords: 'PUE ZUS, portal ZUS, formularze online, jak wysłać do ZUS, instrukcja PUE',
  openGraph: {
    title: 'Poradnik PUE ZUS - Wysyłanie Formularzy Online',
    description: 'Krok po kroku jak wysyłać dokumenty do ZUS przez PUE',
    type: 'website',
    url: 'https://www.vatfaktura.pl/poradnik-pue-zus',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
