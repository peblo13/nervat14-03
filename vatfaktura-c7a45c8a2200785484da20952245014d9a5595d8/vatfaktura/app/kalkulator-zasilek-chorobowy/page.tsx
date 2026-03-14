import Link from 'next/link'
import { Metadata } from 'next'
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

const breadcrumbs = [
  { name: 'Strona główna', url: 'https://www.vatfaktura.pl' },
  { name: 'Formularze ZUS', url: 'https://www.vatfaktura.pl/formularze-zus' },
  { name: 'Kalkulator Zasiłku Chorobowego', url: 'https://www.vatfaktura.pl/kalkulator-zasilek-chorobowy' }
]

export default function KalkulatorZasilekChorobowyPage() {
  return (
    <>
      <CalculatorSchema 
        title="Kalkulator Zasiłku Chorobowego"
        description="Oblicz wysokość zasiłku chorobowego ZUS - 80% lub 100% podstawy obliczeniowej"
        url="https://www.vatfaktura.pl/kalkulator-zasilek-chorobowy"
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-blue-900 pt-20 pb-20">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-300 bg-clip-text text-transparent mb-4">
              Kalkulator zasiłku chorobowego
            </h1>
            <p className="text-blue-200/70 text-sm sm:text-base">
              Oblicz wysokość zasiłku chorobowego 2024/2025
            </p>
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 sm:p-6 mb-12 flex gap-4">
            <div className="text-yellow-400 flex-shrink-0 mt-1">⚠</div>
            <p className="text-yellow-200/80 text-sm">
              Kalkulator oblicza przybliżoną wysokość zasiłku. Dokładna kwota zależy od historii zarobków. Zawsze sprawdź dokładne obliczenie u pracodawcy lub ZUS.
            </p>
          </div>

          <div className="bg-slate-800/50 border border-blue-500/20 rounded-2xl p-8 sm:p-10 mb-12">
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-semibold text-white mb-3">
                  Średnie zarobki miesięczne (PLN)
                </label>
                <input
                  type="number"
                  defaultValue={3000}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:border-blue-400"
                />
                <p className="text-xs sm:text-sm text-blue-200/60 mt-2">
                  Wpisz średnie zarobki z ostatnich 12 miesięcy
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-3">
                  Liczba dni choroby
                </label>
                <input
                  type="number"
                  defaultValue={14}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:border-blue-400"
                />
                <p className="text-xs sm:text-sm text-blue-200/60 mt-2">
                  Liczba dni przez które byłeś niezdolny do pracy
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-blue-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Informacje o zasiłku</h3>
              <ul className="space-y-2 text-sm text-blue-200/80 list-disc list-inside">
                <li>Zasiłek od ZUS wypłacany jest od 4. dnia choroby</li>
                <li>Pierwsze 3 dni opłaca pracodawca (100% wynagrodzenia)</li>
                <li>Po 3. dniu ZUS wypłaca 80% podstawy obliczeniowej</li>
                <li>Maksymalnie ZUS może wypłacić 183 dni zasiłku w roku</li>
                <li>Zasiłek jest opodatkowany podatkiem dochodowym</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/20 rounded-xl p-8">
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
        </div>
      </div>
    </>
  )
}
