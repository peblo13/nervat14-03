import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Poradnik dla Obcokrajowców - Darmowe Formularze i Szablony | VAT Faktura',
  description: 'Kompletny poradnik dla Ukraińców i obcokrajowców: jak założyć firmę w Polsce. Darmowe formularze CEIDG, szablony ZUS, checklista do pobrania. Krok po kroku instrukcja bez kontaktu.',
  keywords: 'poradnik obcokrajowcy, darmowe formularze, szablony do pobrania, założenie firmy, ФОП w Polsce, rejestracja dla Ukraińców, CEIDG formularz, ZUS guide, checklist, dokumenty',
  alternates: {
    languages: {
      pl: 'https://www.vatfaktura.pl/poradnik-obcokrajowcy',
      uk: 'https://www.vatfaktura.pl/poradnik-obcokrajowcy?lang=uk',
    },
  },
  openGraph: {
    title: 'Poradnik dla Obcokrajowców - Darmowe Materiały do Pobrania',
    description: 'Bezpłatne formularze, szablony i instrukcje do założenia firmy w Polsce dla Ukraińców i obcokrajowców',
    type: 'website',
    url: 'https://www.vatfaktura.pl/poradnik-obcokrajowcy',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
