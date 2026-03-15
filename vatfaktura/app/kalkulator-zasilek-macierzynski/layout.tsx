import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kalkulator Zasiłku Macierzyńskiego 2025 - ZUS',
  description: 'Bezpłatny kalkulator zasiłku macierzyńskiego ZUS. Oblicz wysokość zasiłku, zasiłku porodu i opiekuńczego. Dowiedz się ile otrzymasz.',
  keywords: 'zasiłek macierzyński, zasiłek porodu, kalkulator ZUS, świadczenia macierzyńskie',
  openGraph: {
    title: 'Kalkulator Zasiłku Macierzyńskiego',
    description: 'Oblicz wysokość zasiłku macierzyńskiego i porodu ZUS 2025',
    type: 'website',
    url: 'https://www.vatfaktura.pl/kalkulator-zasilek-macierzynski',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
