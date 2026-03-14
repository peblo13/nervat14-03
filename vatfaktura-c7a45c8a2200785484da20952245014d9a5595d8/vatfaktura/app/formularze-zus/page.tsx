import Link from 'next/link'
import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { FileText, Calculator, Calendar, HelpCircle, Download, AlertCircle } from 'lucide-react'
import { AdSenseDisplay728x90, AdSenseDisplayAuto } from '@/components/adsense-banner'
import { FAQSchema } from '@/components/faq-schema'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { FormularzeZUSClient } from '@/components/formularze-zus-client'

export const metadata: Metadata = {
  title: 'Formularze ZUS Online - Generator Z-3, Z-15, Zasiłki, Poradnik PUE',
  description: 'Bezpłatne generatory formularzy ZUS (Z-3, Z-15, Z-3a, Z-3b), kalkulatory zasiłków chorobowych i macierzyńskich, poradnik wysyłki przez PUE ZUS. Wypełnij online, pobierz PDF, wyślij do ZUS.',
  keywords: 'formularze ZUS, generator ZUS, Z-3, Z-15, zasiłek chorobowy, zasiłek macierzyński, Z-3a, Z-3b, poradnik PUE, chorobowe',
  openGraph: {
    title: 'Formularze ZUS Online - Bezpłatnie bez rejestracji',
    description: 'Wszystkie generatory formularzy ZUS i kalkulatory zasiłków w jednym miejscu',
    type: 'website',
    url: 'https://www.vatfaktura.pl/formularze-zus',
    images: [{ url: 'https://www.vatfaktura.pl/og-image.png' }],
  },
}

const faqItems = [
  {
    question: 'Jakie formularze ZUS mogę wygenerować?',
    answer: 'Możesz wygenerować następujące formularze ZUS: Z-3 (pracownicy), Z-3a (zleceniobiorcy), Z-3b (przedsiębiorcy), Z-15A/B (zasiłek opiekuńczy) oraz wiele kalkulatorów do obliczania zasiłków chorobowych i macierzyńskich.'
  },
  {
    question: 'Czy generowane formularze są bezpłatne?',
    answer: 'Tak, wszystkie generatory formularzy i kalkulatory są w pełni bezpłatne. Nie trzeba podawać karty kredytowej ani rejestrować się do konta.'
  },
  {
    question: 'Jak wysłać wygenerowany formularz do ZUS?',
    answer: 'Wygenerowany PDF można wysłać przez Portal Usług Elektronicznych (PUE) ZUS. Zaloguj się na stronie pue.zus.pl, wybierz opcję wysyłki dokumentów i przesłań plik PDF z formularzem.'
  },
  {
    question: 'Czy mogę edytować wygenerowany PDF?',
    answer: 'Tak, możesz otworzyć plik PDF w edytorze (np. Adobe Acrobat Reader) i edytować dane przed wysłaniem do ZUS, jeśli coś pominąłeś.'
  },
  {
    question: 'Jaki jest termin na przesłanie formularza Z-3?',
    answer: 'Formularz ZUS Z-3 należy przesłać w ciągu 7 dni od daty wystawienia zaświadczenia lekarskiego.'
  },
  {
    question: 'Czy kalkulator zasiłku chorobowego jest dokładny?',
    answer: 'Kalkulator używa aktualnych stawek ZUS dla 2024 roku. Rzeczywista kwota zasiłku może się różnić w zależności od współczynnika zarobkowego i dni niezdolności.'
  }
]

const breadcrumbs = [
  { name: 'Strona główna', url: 'https://www.vatfaktura.pl' },
  { name: 'Narzędzia', url: 'https://www.vatfaktura.pl/narzedzia' },
  { name: 'Formularze ZUS', url: 'https://www.vatfaktura.pl/formularze-zus' }
]

export default function FormularzeZUSPage() {
  return (
    <>
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={breadcrumbs} />
      <FormularzeZUSClient />
    </>
  )
}
