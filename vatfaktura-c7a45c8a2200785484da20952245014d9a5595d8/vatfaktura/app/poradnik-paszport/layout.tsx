import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Poradnik Paszport - Procedury i Terminy Umówienia Się | VAT Faktura',
  description: 'Kompletny poradnik o paszportach w Polsce. Procedury, wymagane dokumenty, terminy, adresy urzędów, koszty i informacje o umawaniu się na wizytę. Praktyczne instrukcje dla cudzoziemców.',
  keywords: 'paszport polska, procedura paszportowa, umówienie się paszport, dokumenty paszport, urzędy paszportowe, terminy paszport, obcy paszport',
  alternates: {
    languages: {
      pl: 'https://www.vatfaktura.pl/poradnik-paszport',
      uk: 'https://www.vatfaktura.pl/poradnik-paszport?lang=uk',
    },
  },
  openGraph: {
    title: 'Poradnik Paszport - Procedury i Informacje Praktyczne',
    description: 'Bezpłatne informacje o procedurze paszportowej w Polsce. Wszystko co musisz wiedzieć o umawaniu się i wymaganych dokumentach.',
    type: 'website',
    url: 'https://www.vatfaktura.pl/poradnik-paszport',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
