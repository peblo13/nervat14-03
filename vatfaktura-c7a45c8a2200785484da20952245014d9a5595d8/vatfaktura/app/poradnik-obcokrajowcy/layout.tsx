import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Poradnik dla Obcokrajowców - Jak Założyć Firmę w Polsce | VAT Faktura',
  description: 'Przewodnik dla Ukraińców i obcokrajowców: jak założyć ФОП/firmę w Polsce. Krok po kroku instrukcja, wymagane dokumenty, podatki i ZUS. Путівник для українців.',
  keywords: 'założenie firmy dla obcokrajowca, ФОП w Polsce, rejestracja dla Ukraińców, CEIDG dla obcokrajowca, poradnik dla Ukraińców, PESEL',
  alternates: {
    languages: {
      pl: 'https://www.vatfaktura.pl/poradnik-obcokrajowcy',
      uk: 'https://www.vatfaktura.pl/poradnik-obcokrajowcy?lang=uk',
    },
  },
  openGraph: {
    title: 'Poradnik dla Obcokrajowców - Założenie Firmy w Polsce',
    description: 'Jak założyć ФОП i firmę w Polsce. Przewodnik dla Ukraińców i innych obcokrajowców.',
    type: 'website',
    url: 'https://www.vatfaktura.pl/poradnik-obcokrajowcy',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
