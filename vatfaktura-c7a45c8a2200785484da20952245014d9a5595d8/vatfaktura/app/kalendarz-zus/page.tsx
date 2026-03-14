'use client'

import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, AlertCircle, Clock } from 'lucide-react'
import { AdSenseDisplay728x90, AdSenseDisplayAuto } from '@/components/adsense-banner'
import { EventSchema } from '@/components/event-schema'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { FAQSchema } from '@/components/faq-schema'

export const metadata: Metadata = {
  title: 'Kalendarz Terminów ZUS 2025 - Ważne Daty',
  description: 'Kalendarz ważnych terminów ZUS 2025. Terminy płatności, składek, deklaracji i formularzy. Nie przegap żadnego deadline!',
  keywords: 'terminy ZUS, kalendarz ZUS, daty ZUS 2025, terminy płatności',
  openGraph: {
    title: 'Kalendarz Terminów ZUS 2025',
    description: 'Ważne terminy i daty w ZUS na 2025 rok',
    type: 'website',
    url: 'https://www.vatfaktura.pl/kalendarz-zus',
  },
}

export default function KalendarzZUSPage() {
  const faqItems = [
    {
      question: 'Jaki jest termin na wysłanie zaświadczenia Z-3?',
      answer: 'Zaświadczenie Z-3 o niezdolności do pracy należy wysłać w ciągu 7 dni od daty wystawienia przez lekarza.'
    },
    {
      question: 'Do kiedy mogę zapłacić składki ZUS?',
      answer: 'Składki ZUS za miesiąc poprzedni należy zapłacić do 20. dnia każdego miesiąca. Przekroczenie terminu grozi odsetkami i karami.'
    },
    {
      question: 'Kiedy się rozpoczyna i kończy wypłata zasiłku chorobowego?',
      answer: 'Zasiłek chorobowy zaczyna się od 4. dnia niezdolności do pracy, maksymalnie na 183 dni w roku kalendarzowym.'
    },
    {
      question: 'Jakie terminy należy pamiętać w 2025 roku?',
      answer: 'Najważniejsze to: wpłaty składek do 20. każdego miesiąca, wysyłka deklaracji w wyznaczonych czasach, zgłoszenia zmian w ZUS w ciągu 7 dni.'
    }
  ]

  const breadcrumbs = [
    { name: 'Strona główna', url: 'https://www.vatfaktura.pl' },
    { name: 'Formularze ZUS', url: 'https://www.vatfaktura.pl/formularze-zus' },
    { name: 'Kalendarz ZUS', url: 'https://www.vatfaktura.pl/kalendarz-zus' }
  ]

  const events = [
    {
      event: 'Zaświadczenie o niezdolności (Z-3)',
      deadline: '7 dni od daty wystawienia',
      description: 'Termin na wysłanie dokumentu do ZUS',
      priority: 'high',
      note: 'Pierwszy dzień choroby opłaca pracodawca'
    },
    {
      event: 'Zasiłek chorobowy - 4. dzień choroby',
      deadline: 'Od 4. dnia niezdolności',
      description: 'ZUS zaczyna wypłacać zasiłek (80%)',
      priority: 'high',
      note: 'Maksymalnie 183 dni w roku'
    },
    {
      event: 'Zwrot zaświadczenia do lekarza',
      deadline: '3 dni',
      description: 'Zwróć zaświadczenie do pracownika/lekarza',
      priority: 'medium',
      note: 'Pracodawca musi je przesłać do ZUS'
    },
    {
      event: 'Pierwszy termin płatności ZUS',
      deadline: 'Do 20. dnia miesiąca',
      description: 'Składki ZUS za poprzedni miesiąc',
      priority: 'high',
      note: 'Nie przekraczaj terminu, grożą odsetki'
    },
    {
      event: 'Drugi termin płatności ZUS',
      deadline: 'Do ostatniego dnia miesiąca',
      description: 'Drugi termin dla opóźnionych płatności',
      priority: 'high',
      note: 'Po tym terminie naliczane są odsetki'
    },
    {
      event: 'Zmiana statusu ubezpieczenia',
      deadline: 'W terminie 7 dni',
      description: 'Powiadomienie ZUS o zmianie zatrudnienia',
      priority: 'high',
      note: 'np. zmiana z pracownika na zleceniobiorcę'
    },
    {
      event: 'Zasiłek opiekuńczy',
      deadline: 'Do 7 dni od pojawiania się potrzeby',
      description: 'Zgłoszenie potrzeby opieki',
      priority: 'medium',
      note: 'Maksymalnie do 16 dni rocznie (1 dziecko)'
    },
    {
      event: 'Zasiłek macierzyński',
      deadline: '7 dni przed porodem',
      description: 'Złożenie wniosku o zasiłek',
      priority: 'medium',
      note: 'Wynosi 100% zarobków'
    },
    {
      event: 'Zasiłek porodu',
      deadline: 'W ciągu 1 miesiąca po porodzie',
      description: 'Wniosek o zasiłek porodu (ryczałt)',
      priority: 'medium',
      note: 'Ryczałtowa kwota 1000 zł'
    },
    {
      event: 'Rejestracja nowego pracownika',
      deadline: 'W ciągu 7 dni',
      description: 'Zgłoszenie pracownika do ZUS',
      priority: 'high',
      note: 'Pracodawca musi to zrobić'
    },
    {
      event: 'Roczne rozliczenie ZUS',
      deadline: 'Do 30 kwietnia roku następnego',
      description: 'Rozliczenie roczne (formularz RCA)',
      priority: 'high',
      note: 'Dla przedsiębiorców i samozatrudnionych'
    },
    {
      event: 'Wypłata świadczeń',
      deadline: 'Do 10. liczby kolejnego miesiąca',
      description: 'Wypłata zasiłków i emerytur',
      priority: 'medium',
      note: 'Termin wymaga potwierdze przesłania dokum.'
    }
  ]

  const getPriorityColor = (priority: string) => {
    return priority === 'high' 
      ? 'border-red-500/50 bg-red-500/10' 
      : 'border-yellow-500/50 bg-yellow-500/10'
  }

  const getPriorityLabel = (priority: string) => {
    return priority === 'high' ? 'PILNE' : 'WAŻNE'
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-blue-900 pt-20 pb-20">
      <EventSchema
        name="Kalendarz Terminów ZUS 2025"
        description="Ważne daty, terminy i deadliny dotyczące ZUS na rok 2025"
        startDate="2025-01-01"
        endDate="2025-12-31"
        url="https://www.vatfaktura.pl/kalendarz-zus"
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema items={faqItems} />
      <div className="max-w-5xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/formularze-zus" className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-100 transition">
            <ArrowLeft className="w-5 h-5" />
            Wróć do formularzy
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-300 bg-clip-text text-transparent mb-4">
            Kalendarz terminów ZUS
          </h1>
          <p className="text-blue-200/70 text-sm sm:text-base">
            Ważne daty i terminy dotyczące ZUS - nie przegap żadnego!
          </p>
        </div>

        {/* Info */}
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 sm:p-6 mb-12 flex gap-4">
          <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
          <p className="text-yellow-200/80 text-sm">
            Wszystkie terminy dotyczą roku 2024/2025. Sprawdzaj aktualny harmonogram na stronie ZUS, ponieważ terminy mogą się zmieniać.
          </p>
        </div>

        {/* AdSense */}
        <div className="mb-12">
          <AdSenseDisplay728x90 />
        </div>

        {/* Timeline */}
        <div className="space-y-4 mb-16">
          {events.map((item, index) => (
            <div key={index} className={`border rounded-xl p-6 transition-all hover:shadow-lg ${getPriorityColor(item.priority)}`}>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Clock className={`w-6 h-6 ${item.priority === 'high' ? 'text-red-400' : 'text-yellow-400'}`} />
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                    <h3 className="text-lg font-bold text-white">
                      {item.event}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${item.priority === 'high' ? 'bg-red-500/20 text-red-300' : 'bg-yellow-500/20 text-yellow-300'}`}>
                      {getPriorityLabel(item.priority)}
                    </span>
                  </div>
                  
                  <p className="text-sm sm:text-base text-blue-200/80 mb-3">
                    <strong>Termin:</strong> {item.deadline}
                  </p>
                  
                  <p className="text-sm text-blue-200/70 mb-2">
                    {item.description}
                  </p>

                  {item.note && (
                    <div className="mt-3 pt-3 border-t border-blue-500/20">
                      <p className="text-xs text-blue-200/60">
                        <strong>Uwaga:</strong> {item.note}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AdSense */}
        <div className="mb-16">
          <AdSenseDisplayAuto />
        </div>

        {/* Tips */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-blue-900/30 border border-blue-500/20 rounded-xl p-8">
            <h3 className="text-xl font-bold text-white mb-4">Jak się nie pomylić z terminami?</h3>
            <ul className="text-sm text-blue-200/80 space-y-3 list-disc list-inside">
              <li>Zanotuj sobie terminy w kalendarzu</li>
              <li>Ustaw przypomnienia na telefonie</li>
              <li>Korzystaj z elektronicznych usług ZUS (PUE)</li>
              <li>Pytaj pracodawcę o terminy dotyczące Ciebie</li>
              <li>Skontaktuj się z ZUS w razie wątpliwości</li>
            </ul>
          </div>

          <div className="bg-purple-900/30 border border-purple-500/20 rounded-xl p-8">
            <h3 className="text-xl font-bold text-white mb-4">Co zrobić, gdy przegapię termin?</h3>
            <ul className="text-sm text-blue-200/80 space-y-3 list-disc list-inside">
              <li>Działaj jak najszybciej - im prędzej, tym lepiej</li>
              <li>Wyjaśnij przyczynę opóźnienia</li>
              <li>Załóż dodatkowe dokumenty wyjaśniające</li>
              <li>Skontaktuj się z ZUS telefonicznie</li>
              <li>Mogą być naliczone dodatkowe opłaty</li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-gradient-to-br from-green-900/30 to-cyan-900/30 border border-green-500/20 rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-white mb-4">Kontakt z ZUS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-blue-200/80">
            <div>
              <p className="font-semibold text-white mb-2">Infolinia ZUS</p>
              <p className="text-lg text-cyan-300">22 560 16 00</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-2">Portal internetowy</p>
              <a href="https://www.zus.pl" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200">
                www.zus.pl
              </a>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-green-600 to-cyan-600 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Potrzebujesz formularza?</h2>
          <p className="text-white/90 mb-6">Wróć do generatora i wygeneruj potrzebny dokument</p>
          <Link href="/formularze-zus" className="inline-block px-8 py-3 bg-white text-green-600 hover:bg-blue-50 font-bold rounded-lg shadow-lg transition-all">
            Przejdź do formularzy
          </Link>
        </div>
      </div>
    </div>
  )
}
