'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Metadata } from 'next'
import { ArrowLeft, AlertCircle } from 'lucide-react'
import { AdSenseDisplay728x90, AdSenseDisplayAuto } from '@/components/adsense-banner'
import { CalculatorSchema } from '@/components/calculator-schema'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'

export const metadata: Metadata = {
  title: 'Kalkulator Zasiłku Macierzyńskiego 2025 - ZUS',
  description: 'Bezpłatny kalkulator zasiłku macierzyńskiego ZUS. Oblicz wysokość zasiłku, zasiłku porodu i opiekuńczego. Dowiedz się ile otrzymasz.',
  keywords: 'zasiłek macierzyński, zasiłek porodu, kalkulator ZUS, świadczenia macierzyńskie',
  openGraph: {
    title: 'Kalkulator Zasiłku Macierzyńskiego',
    description: 'Oblicz wysokość zasiłku macierzyńskiego i porodu ZUS 2025',
    type: 'website',
    url: 'https://www.vatfaktura.pl/kalkulator-zasilek-macierzynski',
  },
}

export default function KalkulatorZasilkuMacierzynskiegoPage() {
  const [podstawa, setPodstawa] = useState(3000)
  const [dniMacierzynstwa, setDniMacierzynstwa] = useState(280)
  const [rodzaj, setRodzaj] = useState<'macierzynski' | 'porod'>('macierzynski')

  const zasilek = (podstawa / 30) * dniMacierzynstwa
  const dziennie = podstawa / 30

  // Wyliczenie zasiłku porodu (ryczałt)
  const zasilekPorod = 1000 // Ryczałtowy zasiłek porodu

  const selectedZasilek = rodzaj === 'macierzynski' ? zasilek : zasilekPorod

  const breadcrumbs = [
    { name: 'Strona główna', url: 'https://www.vatfaktura.pl' },
    { name: 'Formularze ZUS', url: 'https://www.vatfaktura.pl/formularze-zus' },
    { name: 'Kalkulator Zasiłku Macierzyńskiego', url: 'https://www.vatfaktura.pl/kalkulator-zasilek-macierzynski' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-blue-900 pt-20 pb-20">
      <CalculatorSchema 
        title="Kalkulator Zasiłku Macierzyńskiego"
        description="Oblicz wysokość zasiłku macierzyńskiego i zasiłku porodu ZUS"
        url="https://www.vatfaktura.pl/kalkulator-zasilek-macierzynski"
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/formularze-zus" className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-100 transition">
            <ArrowLeft className="w-5 h-5" />
            Wróć
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-300 bg-clip-text text-transparent mb-4">
            Kalkulator zasiłku macierzyńskiego
          </h1>
          <p className="text-blue-200/70 text-sm sm:text-base">
            Oblicz wysokość zasiłku macierzyńskiego i porodu 2024/2025
          </p>
        </div>

        {/* Info Box */}
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 sm:p-6 mb-12 flex gap-4">
          <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
          <p className="text-yellow-200/80 text-sm">
            Kalkulator oblicza przybliżoną wysokość zasiłku. Dokładna kwota zależy od historii zarobków i rodzaju umowy. Zawsze sprawdź dane u ZUS.
          </p>
        </div>

        {/* AdSense */}
        <div className="mb-12">
          <AdSenseDisplay728x90 />
        </div>

        {/* Calculator */}
        <div className="bg-slate-800/50 border border-blue-500/20 rounded-2xl p-8 sm:p-10 mb-12">
          <div className="space-y-8">
            {/* Select: Rodzaj zasiłku */}
            <div>
              <label className="block text-sm font-semibold text-white mb-3">
                Rodzaj zasiłku
              </label>
              <div className="space-y-3">
                <label className="flex items-center gap-3 p-4 rounded-lg border border-blue-500/20 hover:border-blue-500/50 cursor-pointer transition">
                  <input
                    type="radio"
                    name="rodzaj"
                    value="macierzynski"
                    checked={rodzaj === 'macierzynski'}
                    onChange={() => setRodzaj('macierzynski')}
                    className="w-5 h-5"
                  />
                  <div>
                    <span className="text-white font-semibold">Zasiłek macierzyński</span>
                    <p className="text-xs text-blue-200/60">Wypłacany przez 16-37 tygodni po porodzie</p>
                  </div>
                </label>
                <label className="flex items-center gap-3 p-4 rounded-lg border border-blue-500/20 hover:border-blue-500/50 cursor-pointer transition">
                  <input
                    type="radio"
                    name="rodzaj"
                    value="porod"
                    checked={rodzaj === 'porod'}
                    onChange={() => setRodzaj('porod')}
                    className="w-5 h-5"
                  />
                  <div>
                    <span className="text-white font-semibold">Zasiłek porodu</span>
                    <p className="text-xs text-blue-200/60">Ryczałtowa kwota wypłacana jednorazowo</p>
                  </div>
                </label>
              </div>
            </div>

            {/* Input: Podstawa */}
            {rodzaj === 'macierzynski' && (
              <>
                <div>
                  <label className="block text-sm font-semibold text-white mb-3">
                    Średnie zarobki miesięczne (PLN)
                  </label>
                  <div className="flex gap-3">
                    <input
                      type="number"
                      value={podstawa}
                      onChange={(e) => setPodstawa(Math.max(0, Number(e.target.value)))}
                      className="flex-1 px-4 py-3 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:border-blue-400"
                    />
                    <span className="flex items-center text-blue-300 font-semibold px-4 py-3 bg-slate-900/50 rounded-lg">
                      zł
                    </span>
                  </div>
                </div>

                {/* Input: Dni */}
                <div>
                  <label className="block text-sm font-semibold text-white mb-3">
                    Liczba dni zasiłku (zwykle 280)
                  </label>
                  <input
                    type="number"
                    value={dniMacierzynstwa}
                    onChange={(e) => setDniMacierzynstwa(Math.max(1, Number(e.target.value)))}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:border-blue-400"
                  />
                  <p className="text-xs sm:text-sm text-blue-200/60 mt-2">
                    16 tygodni (112 dni) dla 1. dziecka, do 37 tygodni (260 dni) dla większej liczby dzieci
                  </p>
                </div>
              </>
            )}

            {rodzaj === 'porod' && (
              <div className="bg-blue-900/30 border border-blue-500/20 rounded-xl p-6">
                <h4 className="font-semibold text-white mb-2">Zasiłek porodu (ryczałt)</h4>
                <p className="text-sm text-blue-200/80">
                  Zasiłek porodu wynosi stałą kwotę {zasilekPorod.toFixed(0)} zł niezależnie od zarobków. Wypłacany jednorazowo.
                </p>
              </div>
            )}
          </div>

          {/* Results */}
          <div className="mt-12 pt-8 border-t border-blue-500/20 space-y-6">
            <h3 className="text-2xl font-bold text-white">Wynik obliczenia</h3>

            {rodzaj === 'macierzynski' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Daily rate */}
                <div className="bg-slate-900/50 border border-blue-500/20 rounded-xl p-6">
                  <p className="text-blue-200/70 text-sm mb-2">Zasiłek dziennie</p>
                  <p className="text-3xl sm:text-4xl font-bold text-cyan-300">
                    {dziennie.toFixed(2)} zł
                  </p>
                </div>

                {/* Total */}
                <div className="bg-gradient-to-br from-pink-600/30 to-rose-600/30 border border-pink-500/50 rounded-xl p-6">
                  <p className="text-pink-200 text-sm mb-2 font-semibold">Zasiłek łącznie ({dniMacierzynstwa} dni)</p>
                  <p className="text-3xl sm:text-4xl font-bold text-pink-300">
                    {zasilek.toFixed(2)} zł
                  </p>
                </div>
              </div>
            )}

            {rodzaj === 'porod' && (
              <div className="bg-gradient-to-br from-pink-600/30 to-rose-600/30 border border-pink-500/50 rounded-xl p-8 text-center">
                <p className="text-pink-200 text-sm mb-3 font-semibold">Zasiłek porodu</p>
                <p className="text-5xl sm:text-6xl font-bold text-pink-300">
                  {zasilekPorod.toFixed(2)} zł
                </p>
                <p className="text-sm text-pink-200/70 mt-4">
                  Wypłacany jednorazowo na Twoje konto
                </p>
              </div>
            )}

            {/* Breakdown */}
            {rodzaj === 'macierzynski' && (
              <div className="bg-slate-900/50 border border-blue-500/20 rounded-xl p-6">
                <h4 className="font-semibold text-white mb-4">Szczegóły obliczenia</h4>
                <div className="space-y-2 text-sm text-blue-200/80">
                  <div className="flex justify-between">
                    <span>Średnie zarobki miesięczne:</span>
                    <span className="font-semibold">{podstawa.toFixed(2)} zł</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Zarobki dzienne (miesięczne ÷ 30):</span>
                    <span className="font-semibold">{dziennie.toFixed(2)} zł</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Liczba dni zasiłku:</span>
                    <span className="font-semibold">{dniMacierzynstwa} dni</span>
                  </div>
                  <div className="border-t border-blue-500/20 pt-2 mt-2 flex justify-between">
                    <span className="font-semibold">Zasiłek łącznie:</span>
                    <span className="font-semibold text-pink-300 text-base">{zasilek.toFixed(2)} zł</span>
                  </div>
                </div>
              </div>
            )}

            {/* Info */}
            <div className="bg-blue-900/30 border border-blue-500/20 rounded-xl p-6">
              <h4 className="font-semibold text-white mb-3">Ważne informacje</h4>
              <ul className="space-y-2 text-sm text-blue-200/80 list-disc list-inside">
                {rodzaj === 'macierzynski' ? (
                  <>
                    <li>Zasiłek macierzyński wynosi 100% zarobków</li>
                    <li>Wypłacany przez 16-37 tygodni (280 dni) po porodzie</li>
                    <li>Można kumulować zasiłek macierzyński z zasiłkiem opiekuńczym</li>
                    <li>Zasiłek jest opodatkowany podatkiem dochodowym</li>
                    <li>Można pracować i jednocześnie pobierać zasiłek</li>
                  </>
                ) : (
                  <>
                    <li>Zasiłek porodu wynosi stałą kwotę {zasilekPorod.toFixed(0)} zł</li>
                    <li>Wypłacany jednorazowo po porodzie</li>
                    <li>Przysluguje dla każdego dziecka</li>
                    <li>Nie jest opodatkowany</li>
                    <li>Wypłacany razem z zasiłkiem macierzyńskim</li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/20 rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Wnioski i dokumenty</h3>
          <div className="space-y-3">
            <Link href="/formularze-zus" className="block p-4 bg-slate-800/50 border border-purple-500/20 hover:border-purple-500/50 rounded-lg transition">
              <p className="font-semibold text-white">Wróć do wszystkich formularzy ZUS</p>
              <p className="text-sm text-blue-200/70">Inne kalkulatory i generatory</p>
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
