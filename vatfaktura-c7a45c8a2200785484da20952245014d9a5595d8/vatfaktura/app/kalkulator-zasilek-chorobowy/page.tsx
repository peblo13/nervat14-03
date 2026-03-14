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
  title: 'Kalkulator Zasiłku Chorobowego 2025 - ZUS Obliczenia',
  description: 'Bezpłatny kalkulator zasiłku chorobowego ZUS. Oblicz wysokość zasiłku 80% lub 100%. Sprawdź ile otrzymasz od ZUS za dni choroby.',
  keywords: 'zasiłek chorobowy, kalkulator ZUS, obliczenie zasiłku, zasiłek 80%, zasiłek 100%',
  openGraph: {
    title: 'Kalkulator Zasiłku Chorobowego',
    description: 'Oblicz wysokość zasiłku chorobowego ZUS 2025',
    type: 'website',
    url: 'https://www.vatfaktura.pl/kalkulator-zasilek-chorobowy',
  },
}

export default function KalkulatorZasilkuChorobowegoPage() {
  const [podstawa, setPodstawa] = useState(3000)
  const [dniChoroby, setDniChoroby] = useState(14)
  const [rodzaj, setRodzaj] = useState<'80' | '100'>('80')

  const zasilek80 = (podstawa / 30) * 0.8 * dniChoroby
  const zasilek100 = (podstawa / 30) * dniChoroby
  const dziennie80 = (podstawa / 30) * 0.8
  const dziennie100 = podstawa / 30

  const selectedZasilek = rodzaj === '80' ? zasilek80 : zasilek100
  const dziennie = rodzaj === '80' ? dziennie80 : dziennie100

  const breadcrumbs = [
    { name: 'Strona główna', url: 'https://www.vatfaktura.pl' },
    { name: 'Formularze ZUS', url: 'https://www.vatfaktura.pl/formularze-zus' },
    { name: 'Kalkulator Zasiłku Chorobowego', url: 'https://www.vatfaktura.pl/kalkulator-zasilek-chorobowy' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-blue-900 pt-20 pb-20">
      <CalculatorSchema 
        title="Kalkulator Zasiłku Chorobowego"
        description="Oblicz wysokość zasiłku chorobowego ZUS - 80% lub 100% podstawy obliczeniowej"
        url="https://www.vatfaktura.pl/kalkulator-zasilek-chorobowy"
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
            Kalkulator zasiłku chorobowego
          </h1>
          <p className="text-blue-200/70 text-sm sm:text-base">
            Oblicz wysokość zasiłku chorobowego 2024/2025
          </p>
        </div>

        {/* Info Box */}
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 sm:p-6 mb-12 flex gap-4">
          <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
          <p className="text-yellow-200/80 text-sm">
            Kalkulator oblicza przybliżoną wysokość zasiłku. Dokładna kwota zależy od historii zarobków. Zawsze sprawdź dokładne obliczenie u pracodawcy lub ZUS.
          </p>
        </div>

        {/* AdSense */}
        <div className="mb-12">
          <AdSenseDisplay728x90 />
        </div>

        {/* Calculator */}
        <div className="bg-slate-800/50 border border-blue-500/20 rounded-2xl p-8 sm:p-10 mb-12">
          <div className="space-y-8">
            {/* Input: Podstawa */}
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
              <p className="text-xs sm:text-sm text-blue-200/60 mt-2">
                Wpisz średnie zarobki z ostatnich 12 miesięcy lub wskaż podstawę określoną przez pracodawcę
              </p>
            </div>

            {/* Input: Dni */}
            <div>
              <label className="block text-sm font-semibold text-white mb-3">
                Liczba dni choroby
              </label>
              <input
                type="number"
                value={dniChoroby}
                onChange={(e) => setDniChoroby(Math.max(1, Number(e.target.value)))}
                className="w-full px-4 py-3 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:border-blue-400"
              />
              <p className="text-xs sm:text-sm text-blue-200/60 mt-2">
                Liczba dni przez które byłeś niezdolny do pracy
              </p>
            </div>

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
                    value="80"
                    checked={rodzaj === '80'}
                    onChange={() => setRodzaj('80')}
                    className="w-5 h-5"
                  />
                  <div>
                    <span className="text-white font-semibold">80% podstawy</span>
                    <p className="text-xs text-blue-200/60">Od 4. dnia choroby (pracodawca płaci 100%, ZUS zwraca 80%)</p>
                  </div>
                </label>
                <label className="flex items-center gap-3 p-4 rounded-lg border border-blue-500/20 hover:border-blue-500/50 cursor-pointer transition">
                  <input
                    type="radio"
                    name="rodzaj"
                    value="100"
                    checked={rodzaj === '100'}
                    onChange={() => setRodzaj('100')}
                    className="w-5 h-5"
                  />
                  <div>
                    <span className="text-white font-semibold">100% podstawy</span>
                    <p className="text-xs text-blue-200/60">Pierwsze 3 dni choroby opłacane przez pracodawcę (100%)</p>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="mt-12 pt-8 border-t border-blue-500/20 space-y-6">
            <h3 className="text-2xl font-bold text-white">Wynik obliczenia</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Daily rate */}
              <div className="bg-slate-900/50 border border-blue-500/20 rounded-xl p-6">
                <p className="text-blue-200/70 text-sm mb-2">Zasiłek dziennie</p>
                <p className="text-3xl sm:text-4xl font-bold text-cyan-300">
                  {dziennie.toFixed(2)} zł
                </p>
                <p className="text-xs text-blue-200/50 mt-2">
                  {rodzaj === '80' ? '80%' : '100%'} z {(podstawa / 30).toFixed(2)} zł dziennie
                </p>
              </div>

              {/* Total */}
              <div className="bg-gradient-to-br from-green-600/30 to-cyan-600/30 border border-green-500/50 rounded-xl p-6">
                <p className="text-green-200 text-sm mb-2 font-semibold">Zasiłek łącznie ({dniChoroby} dni)</p>
                <p className="text-3xl sm:text-4xl font-bold text-green-300">
                  {selectedZasilek.toFixed(2)} zł
                </p>
                <p className="text-xs text-green-200/70 mt-2">
                  Od ZUS na Twoim rachunku
                </p>
              </div>
            </div>

            {/* Breakdown */}
            <div className="bg-slate-900/50 border border-blue-500/20 rounded-xl p-6">
              <h4 className="font-semibold text-white mb-4">Szczegóły obliczenia</h4>
              <div className="space-y-2 text-sm text-blue-200/80">
                <div className="flex justify-between">
                  <span>Średnie zarobki miesięczne:</span>
                  <span className="font-semibold">{podstawa.toFixed(2)} zł</span>
                </div>
                <div className="flex justify-between">
                  <span>Zarobki dzienne (miesięczne ÷ 30):</span>
                  <span className="font-semibold">{(podstawa / 30).toFixed(2)} zł</span>
                </div>
                <div className="flex justify-between">
                  <span>Procent zasiłku:</span>
                  <span className="font-semibold">{rodzaj}%</span>
                </div>
                <div className="flex justify-between">
                  <span>Zasiłek dziennie:</span>
                  <span className="font-semibold text-cyan-300">{dziennie.toFixed(2)} zł</span>
                </div>
                <div className="border-t border-blue-500/20 pt-2 mt-2 flex justify-between">
                  <span className="font-semibold">Zasiłek za {dniChoroby} dni:</span>
                  <span className="font-semibold text-green-300 text-base">{selectedZasilek.toFixed(2)} zł</span>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="bg-blue-900/30 border border-blue-500/20 rounded-xl p-6">
              <h4 className="font-semibold text-white mb-3">Ważne informacje</h4>
              <ul className="space-y-2 text-sm text-blue-200/80 list-disc list-inside">
                <li>Zasiłek od ZUS wypłacany jest od 4. dnia choroby</li>
                <li>Pierwsze 3 dni opłaca pracodawca (100% wynagrodzenia)</li>
                <li>Po 3. dniu ZUS wypłaca 80% podstawy obliczeniowej</li>
                <li>Максymalnie ZUS może wypłacić 183 dni zasiłku w roku</li>
                <li>Zasiłek jest opodatkowany podatkiem dochodowym</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/20 rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Co dalej?</h3>
          <div className="space-y-3">
            <Link href="/generator-zus-z3" className="block p-4 bg-slate-800/50 border border-purple-500/20 hover:border-purple-500/50 rounded-lg transition">
              <p className="font-semibold text-white">Wygeneruj formularz ZUS Z-3</p>
              <p className="text-sm text-blue-200/70">Zaświadczenie o niezdolności do pracy</p>
            </Link>
            <Link href="/poradnik-pue-zus" className="block p-4 bg-slate-800/50 border border-purple-500/20 hover:border-purple-500/50 rounded-lg transition">
              <p className="font-semibold text-white">Przeczytaj poradnik wysyłki</p>
              <p className="text-sm text-blue-200/70">Krok po kroku jak wysłać przez PUE ZUS</p>
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
