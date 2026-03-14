import Link from 'next/link'
import { Metadata } from 'next'
import { AlertCircle, HelpCircle, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AdSenseDisplay728x90, AdSenseDisplayAuto } from '@/components/adsense-banner'
import FilterableZUSTools from '@/components/filterable-zus-tools'

export const metadata: Metadata = {
  title: 'Formularze ZUS Online - Generator Z-3, Zasiłki, Poradnik',
  description: 'Bezpłatne generatory formularzy ZUS (Z-3, Z-15), kalkulatory zasiłków i poradnik PUE ZUS. Wypełnij online, pobierz PDF do wysyłki.',
  keywords: 'formularze ZUS, generator ZUS, Z-3, zasiłek chorobowy, zasiłek macierzyński, poradnik PUE',
  openGraph: {
    title: 'Formularze ZUS Online - Bezpłatnie',
    description: 'Generator formularzy ZUS i kalkulatory zasiłków do wypełnienia online',
    type: 'website',
    url: 'https://www.vatfaktura.pl/formularze-zus',
  },
}

export default function FormularzeZUSPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-blue-900 pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-300 bg-clip-text text-transparent mb-4">
            Formularze i narzędzia ZUS
          </h1>
          <p className="text-blue-200/70 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
            Kompletny zestaw generatorów formularzy ZUS i kalkulatorów do zarządzania zasiłkami. Wszystkie narzędzia przygotują Ci dokumenty do wysyłki przez PUE ZUS.
          </p>
        </div>

        {/* Important Info */}
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 sm:p-6 mb-12 flex gap-4">
          <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-yellow-300 font-semibold mb-2">Ważne informacje</h3>
            <p className="text-yellow-200/80 text-sm">
              Formularze wygenerowane na tej stronie to dokumenty pomocnicze. Zawsze weryfikuj dane z oficjalnymi formularza ZUS. Dokumenty wysyłaj wyłącznie przez Portal Usług Elektronicznych ZUS (PUE).
            </p>
          </div>
        </div>

        {/* AdSense Banner */}
        <div className="mb-12">
          <AdSenseDisplay728x90 />
        </div>

        {/* Filterable Tools */}
        <FilterableZUSTools />

        {/* AdSense Banner */}
        <div className="mb-16 mt-16">
          <AdSenseDisplayAuto />
        </div>

        {/* How it works */}
        <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/20 rounded-2xl p-8 sm:p-12 mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Jak korzystać z narzędzi?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: 1, title: 'Wybierz narzędzie', desc: 'Kliknij na interesujący Cię formularz lub kalkulator' },
              { step: 2, title: 'Wypełnij dane', desc: 'Uzupełnij wymagane informacje w formularzu' },
              { step: 3, title: 'Pobierz PDF', desc: 'Wygenerowany dokument pobierz w formacie PDF' },
              { step: 4, title: 'Wyślij przez PUE', desc: 'Zaloguj się do ZUS i wyślij przez Portal' },
            ].map(item => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl mx-auto mb-4 shadow-lg shadow-blue-500/50">
                  {item.step}
                </div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-blue-200/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/20 rounded-2xl p-8 sm:p-12 mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Przydatne zasoby</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/poradnik-pue-zus" className="p-6 bg-slate-800/50 border border-purple-500/20 hover:border-purple-500/50 rounded-xl transition-all hover:shadow-lg">
              <HelpCircle className="w-6 h-6 text-purple-400 mb-3" />
              <h3 className="font-semibold text-white mb-2">Poradnik PUE ZUS</h3>
              <p className="text-sm text-blue-200/70">Jak krok po kroku wysłać formularz przez Portal Usług Elektronicznych ZUS</p>
            </Link>
            <Link href="/kalendarz-zus" className="p-6 bg-slate-800/50 border border-purple-500/20 hover:border-purple-500/50 rounded-xl transition-all hover:shadow-lg">
              <Calendar className="w-6 h-6 text-purple-400 mb-3" />
              <h3 className="font-semibold text-white mb-2">Kalendarz terminów ZUS</h3>
              <p className="text-sm text-blue-200/70">Ważne daty, terminy i przypomnienia dotyczące ZUS</p>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-green-600 to-cyan-600 rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Wszystkie narzędzia VAT Faktura</h2>
          <p className="text-white/90 mb-6">Oprócz formularzy ZUS mamy też kalkulatory VAT, PIT, wynagrodzenia i wiele więcej</p>
          <Link href="/narzedzia">
            <Button className="bg-white text-green-600 hover:bg-blue-50 font-bold px-8 py-3 text-lg shadow-lg">
              Przejdź do wszystkich narzędzi
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
