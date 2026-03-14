import Link from 'next/link'
import { Metadata } from 'next'
import { HowToSchema } from '@/components/how-to-schema'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { GeneratorZ3Client } from '@/components/generator-z3-client'

export const metadata: Metadata = {
  title: 'Generator ZUS Z-3/Z-3a/Z-3b - Zaświadczenie o chorobowych online bez logowania',
  description: 'Bezpłatny generator formularza ZUS Z-3 (pracownicy), Z-3a (zleceniobiorcy) i Z-3b (przedsiębiorcy). Wypełnij zaświadczenie o niezdolności do pracy online, pobierz PDF do wysyłki przez PUE ZUS.',
  keywords: 'ZUS Z-3, formularz chorobowy, zaświadczenie niezdolności do pracy, Z-3a, Z-3b, generator formularzy, chorobowe ZUS',
  openGraph: {
    title: 'Generator ZUS Z-3 - Formularz Chorobowy Online Bez Rejestracji',
    description: 'Wygeneruj zaświadczenie o chorobowych ZUS Z-3 w 5 minut. Pełnie bezpłatnie.',
    type: 'website',
    url: 'https://www.vatfaktura.pl/generator-zus-z3',
    images: [{ url: 'https://www.vatfaktura.pl/og-image.png' }],
  },
}

const howToSteps = [
  {
    name: 'Wybierz typ formularza',
    description: 'Kliknij na jedną z trzech opcji: Z-3 dla pracowników, Z-3a dla zleceniobiorców lub Z-3b dla przedsiębiorców.',
  },
  {
    name: 'Wypełnij dane osobowe',
    description: 'Wprowadź PESEL, imię, nazwisko, datę urodzenia i inne wymagane informacje.',
  },
  {
    name: 'Dodaj informacje medyczne',
    description: 'Wpisz datę początkową i końcową niezdolności do pracy, diagnozę i kod diagnozy.',
  },
  {
    name: 'Uzupełnij dane lekarza',
    description: 'Dodaj imię, nazwisko i kod lekarza, a także kod placówki medycznej.',
  },
  {
    name: 'Pobierz formularz',
    description: 'Kliknij przycisk pobrania, aby wygenerować dokument PDF.',
  },
  {
    name: 'Wyślij przez PUE ZUS',
    description: 'Zaloguj się na stronie pue.zus.pl i wyślij wygenerowany PDF w ciągu 7 dni.',
  }
]

const breadcrumbs = [
  { name: 'Strona główna', url: 'https://www.vatfaktura.pl' },
  { name: 'Formularze ZUS', url: 'https://www.vatfaktura.pl/formularze-zus' },
  { name: 'Generator Z-3', url: 'https://www.vatfaktura.pl/generator-zus-z3' }
]

export default function GeneratorZUSZ3Page() {
  return (
    <>
      <HowToSchema
        title="Jak wypełnić formularz ZUS Z-3/Z-3a/Z-3b"
        description="Krok po kroku instrukcja do generowania zaświadczenia o niezdolności do pracy ZUS"
        image="https://www.vatfaktura.pl/og-image.png"
        author="VAT Faktura"
        datePublished="2024-01-01"
        steps={howToSteps}
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <GeneratorZ3Client />
    </>
  )
}
