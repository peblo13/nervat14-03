import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Generator ZUS Z-15 - Zasiłek Opiekuńczy Online',
  description: 'Bezpłatny generator formularza ZUS Z-15A/Z-15B. Wniosek o zasiłek opiekuńczy dla opieki nad dzieckiem. Wypełnij online, pobierz PDF.',
  keywords: 'ZUS Z-15, zasiłek opiekuńczy, wniosek opiekuńczy, opieka nad dzieckiem',
  openGraph: {
    title: 'Generator ZUS Z-15 - Wniosek o Zasiłek Opiekuńczy',
    description: 'Bezpłatny generator formularza zasiłku opiekuńczego ZUS',
    type: 'website',
    url: 'https://www.vatfaktura.pl/generator-zus-z15',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
