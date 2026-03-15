import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Porada Prawna - Darmowe Konsultacje Prawne | VAT Faktura',
  description: 'Dostęp do bezpłatnych porad prawnych dla firm i przedsiębiorców w Polsce. LAWER, IBnGR, porady dla obcokrajowców, obsługa prawna biznesu. Kontakt z prawnikami.',
  keywords: 'porada prawna, darmowe konsultacje, lawer, ibngi, porady dla obcokrajowców, pomoc prawna dla firm, kontakt do prawnika',
  alternates: {
    languages: {
      pl: 'https://www.vatfaktura.pl/porada-prawna',
      uk: 'https://www.vatfaktura.pl/porada-prawna?lang=uk',
    },
  },
  openGraph: {
    title: 'Porada Prawna - Bezpłatne Konsultacje',
    description: 'Darmowe porady prawne dla firm i przedsiębiorców. Znajdź pomoc prawną, dostęp do ekspertów, kontakt z organizacjami wspierającymi.',
    type: 'website',
    url: 'https://www.vatfaktura.pl/porada-prawna',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
