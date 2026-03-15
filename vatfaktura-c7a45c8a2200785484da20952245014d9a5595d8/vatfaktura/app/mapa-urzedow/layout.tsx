import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mapa Urzędów - ZUS, GUS, CEIDG, Urzędy Skarbowe | VAT Faktura',
  description: 'Interaktywna mapa urzędów publicznych w Polsce. Znajdź adresy, godziny otwarcia i informacje kontaktowe do ZUS, GUS, CEIDG, urzędów skarbowych. Umów się na wizytę online.',
  keywords: 'mapa urzędów, ZUS adresy, CEIDG urzędy, urzędy skarbowe, GUS, PARCC, rezerwacja online',
  alternates: {
    languages: {
      pl: 'https://www.vatfaktura.pl/mapa-urzedow',
      uk: 'https://www.vatfaktura.pl/mapa-urzedow?lang=uk',
    },
  },
  openGraph: {
    title: 'Mapa Urzędów - Adresy i Kontakty',
    description: 'Znalazł wszystkie ważne urzędy publiczne w Polsce na jednej mapie. ZUS, CEIDG, GUS i urzędy skarbowe.',
    type: 'website',
    url: 'https://www.vatfaktura.pl/mapa-urzedow',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
