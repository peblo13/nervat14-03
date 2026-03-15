import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Formularze ZUS Online - Generator Z-3, Zasiłki, Poradnik',
  description: 'Bezpłatne generatory formularzy ZUS (Z-3, Z-15), kalkulatory zasiłków i poradnik PUE ZUS. Wypełnij online, pobierz PDF do wysyłki.',
  keywords: 'formularze ZUS, generator ZUS, Z-3, zasiłek chorobowy, zasiłek macierzyński, poradnik PUE',
  openGraph: {
    title: 'Formularze ZUS Online - Bezpłatnie',
    description: 'Generator formularzy ZUS i kalkulatory zasiłków do wypełnienia online',
    type: 'website',
    url: 'https://www.vatfaktura.pl/formularze-zus',
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
