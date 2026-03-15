import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kalendarz Terminów - PIT, ZUS, VAT, Deklaracje | VAT Faktura',
  description: 'Pełny kalendarz ważnych terminów podatkowo-ubezpieczeniowych. Terminy PIT, ZUS, VAT, deklaracji i opłat dla firm w Polsce. Nie przegap żadnego deadline\'a!',
  keywords: 'terminy podatkowo-ubezpieczeniowe, deadline pit, zus terminy, vat terminy, kalendarz podatków, terminy deklaracji',
  alternates: {
    languages: {
      pl: 'https://www.vatfaktura.pl/kalendarz-terminow',
      uk: 'https://www.vatfaktura.pl/kalendarz-terminow?lang=uk',
    },
  },
  openGraph: {
    title: 'Kalendarz Terminów - Nie Przegap Żadnego Deadlinea',
    description: 'Kompleksowy kalendarz wszystkich ważnych terminów podatkowo-ubezpieczeniowych. PIT, ZUS, VAT i inne obowiązki.',
    type: 'website',
    url: 'https://www.vatfaktura.pl/kalendarz-terminow',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
