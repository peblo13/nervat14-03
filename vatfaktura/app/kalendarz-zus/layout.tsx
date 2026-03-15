import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kalendarz Terminów ZUS 2025 - Ważne Daty',
  description: 'Kalendarz ważnych terminów ZUS 2025. Terminy płatności, składek, deklaracji i formularzy. Nie przegap żadnego deadline!',
  keywords: 'terminy ZUS, kalendarz ZUS, daty ZUS 2025, terminy płatności',
  openGraph: {
    title: 'Kalendarz Terminów ZUS 2025',
    description: 'Ważne terminy i daty w ZUS na 2025 rok',
    type: 'website',
    url: 'https://www.vatfaktura.pl/kalendarz-zus',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
