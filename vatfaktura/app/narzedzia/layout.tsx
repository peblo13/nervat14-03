import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Narzędzia - Kalkulatory VAT, PIT, ZUS | VAT Faktura',
  description: 'Bezpłatne kalkulatory: VAT, PIT, ZUS, wynagrodzenia. Wszystkie narzędzia do rozliczania się z podatkami w jednym miejscu. 100% za darmo.',
  keywords: 'kalkulator VAT, kalkulator PIT, kalkulator ZUS, kalkulator wynagrodzeń, narzędzia do rozliczania',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
