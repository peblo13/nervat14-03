'use client'

import Link from 'next/link'
import { ArrowLeft, AlertCircle } from 'lucide-react'
import { AdSenseDisplay728x90, AdSenseDisplayAuto } from '@/components/adsense-banner'

export default function GeneratorZUSZ15Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-blue-900 pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/formularze-zus" className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-100 transition">
            <ArrowLeft className="w-5 h-5" />
            Wróć do formularzy
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-300 bg-clip-text text-transparent mb-4">
            Generator zasiłku opiekuńczego - ZUS Z-15
          </h1>
          <p className="text-blue-200/70 text-sm sm:text-base">
            Wniosek o zasiłek opiekuńczy (Z-15A/Z-15B) do wysyłki przez PUE ZUS
          </p>
        </div>

        {/* Info Box */}
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 sm:p-6 mb-12 flex gap-4">
          <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
          <p className="text-yellow-200/80 text-sm">
            Ten narzędzie do wygenerowania wniosku o zasiłek opiekuńczy jest w opracowaniu. Obecnie możesz pobrać formularz bezpośrednio z oficjalnej strony ZUS.
          </p>
        </div>

        {/* Content */}
        <div className="bg-slate-800/50 border border-blue-500/20 rounded-2xl p-8 sm:p-10 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">O zasiłku opiekuńczym</h2>
          
          <div className="space-y-6 text-blue-200/80">
            <div>
              <h3 className="font-semibold text-white mb-3">Co to jest zasiłek opiekuńczy?</h3>
              <p className="text-sm">
                Zasiłek opiekuńczy to świadczenie, które przysługuje pracownikom, którzy muszą pozostać w domu w celu opieki nad dzieckiem lub inną osobą. Wypłacany przez ZUS.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-3">Kto ma prawo do zasiłku?</h3>
              <ul className="text-sm space-y-2 list-disc list-inside">
                <li>Pracownicy opiekujący się dzieckiem do lat 14 (jeśli szkółka zamknięta)</li>
                <li>Opiekunowie rodzinni lub zawodowi osób niepełnosprawnych</li>
                <li>Osoby opiekujące się bliskim członkiem rodziny w stanach nagłych</li>
                <li>Osoby, które nie mogą korzystać z opieki instytucjonalnej</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-3">Wysokość zasiłku</h3>
              <p className="text-sm">
                Zasiłek opiekuńczy wynosi 80% ostatniego wynagrodzenia. Maksymalnie 16 dni zasiłku w roku (dla 1 dziecka), do 33 dni dla większej liczby dzieci.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-3">Procedura rejestracji</h3>
              <ol className="text-sm space-y-2 list-decimal list-inside">
                <li>Pobierz formularz ZUS Z-15A lub Z-15B</li>
                <li>Wypełnij dokument z pracownikiem zakładu pracy lub pracownikiem ZUS</li>
                <li>Wyślij przez Portal Usług Elektronicznych ZUS (PUE)</li>
                <li>Zasiłek zostanie wypłacony po zatwierdzeniu przez ZUS</li>
              </ol>
            </div>

            <div className="bg-blue-900/30 border border-blue-500/20 rounded-xl p-6 mt-8">
              <h4 className="font-semibold text-white mb-3">Pobierz formularz Z-15</h4>
              <p className="text-sm mb-4">
                Formularze ZUS Z-15A i Z-15B dostępne są na oficjalnej stronie ZUS:
              </p>
              <a 
                href="https://www.zus.pl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-lg transition-all"
              >
                Przejdź do strony ZUS
              </a>
            </div>
          </div>
        </div>

        {/* AdSense */}
        <div className="mb-12">
          <AdSenseDisplay728x90 />
        </div>

        {/* Next Steps */}
        <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/20 rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Co dalej?</h3>
          <div className="space-y-3">
            <Link href="/poradnik-pue-zus" className="block p-4 bg-slate-800/50 border border-purple-500/20 hover:border-purple-500/50 rounded-lg transition">
              <p className="font-semibold text-white">Poradnik wysyłki przez PUE ZUS</p>
              <p className="text-sm text-blue-200/70">Krok po kroku jak wysłać formularz</p>
            </Link>
            <Link href="/formularze-zus" className="block p-4 bg-slate-800/50 border border-purple-500/20 hover:border-purple-500/50 rounded-lg transition">
              <p className="font-semibold text-white">Wróć do wszystkich formularzy</p>
              <p className="text-sm text-blue-200/70">Inne kalkulatory i generatory ZUS</p>
            </Link>
          </div>
        </div>

        {/* AdSense */}
        <div>
          <AdSenseDisplayAuto />
        </div>
      </div>
    </div>
  )
}
