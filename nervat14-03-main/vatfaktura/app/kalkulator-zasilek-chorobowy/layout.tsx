import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kalkulator Zasiłku Chorobowego 2025 - ZUS Obliczenia',
  description: 'Bezpłatny kalkulator zasiłku chorobowego ZUS. Oblicz wysokość zasiłku 80% lub 100%. Sprawdź ile otrzymasz od ZUS za dni choroby.',
  keywords: 'zasiłek chorobowy, kalkulator ZUS, obliczenie zasiłku, zasiłek 80%, zasiłek 100%',
  openGraph: {
    title: 'Kalkulator Zasiłku Chorobowego',
    description: 'Oblicz wysokość zasiłku chorobowego ZUS 2025',
    type: 'website',
    url: 'https://www.vatfaktura.pl/kalkulator-zasilek-chorobowy',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
