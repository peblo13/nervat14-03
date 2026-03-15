import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Generator ZUS Z-3 - Zaświadczenie o chorobowych Online',
  description: 'Bezpłatny generator formularza ZUS Z-3/Z-3a/Z-3b. Wypełnij zaświadczenie o niezdolności do pracy online, pobierz PDF do wysyłki przez PUE ZUS.',
  keywords: 'ZUS Z-3, formularz chorobowy, zaświadczenie niezdolności, Z-3a, Z-3b, generator',
  openGraph: {
    title: 'Generator ZUS Z-3 - Formularz Chorobowy Online',
    description: 'Bezpłatny generator zaświadczenia o chorobowych ZUS Z-3',
    type: 'website',
    url: 'https://www.vatfaktura.pl/generator-zus-z3',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
