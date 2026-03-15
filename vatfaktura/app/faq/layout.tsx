import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ — Pytania o Fakturach, PIT-37, PIT-36, Rozliczeniach Podatkowych | VAT Faktura',
  description: 'Odpowiedzi na wszystkie pytania o VAT Faktura: bezpłatne fakturowanie, KSEF, rozliczenie PIT-37, PIT-36, PIT-28, PIT-38, podpis elektroniczny, wysyłka do urzędu skarbowego, UPO.',
  keywords: 'FAQ fakturowanie, pytania PIT, PIT-37 jak złożyć, rozliczenie PIT online, KSEF pytania, podpis elektroniczny PIT, e-Deklaracje, urząd skarbowy, UPO potwierdzenie',
  alternates: {
    canonical: 'https://www.vatfaktura.pl/faq',
  },
  openGraph: {
    title: 'FAQ — Pytania o Fakturach i Rozliczeniu PIT | VAT Faktura',
    description: 'Wszystkie odpowiedzi: bezpłatne faktury, KSEF, PIT-37, PIT-36, PIT-28, PIT-38, podpis elektroniczny, e-Deklaracje, UPO. Bezpłatnie, bez rejestracji.',
    url: 'https://www.vatfaktura.pl/faq',
    type: 'website',
    locale: 'pl_PL',
  },
}

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children
}
