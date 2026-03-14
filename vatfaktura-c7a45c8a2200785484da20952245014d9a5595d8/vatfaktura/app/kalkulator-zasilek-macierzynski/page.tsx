import Link from 'next/link'
import { Metadata } from 'next'
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

const breadcrumbs = [
  { name: 'Strona główna', url: 'https://www.vatfaktura.pl' },
  { name: 'Formularze ZUS', url: 'https://www.vatfaktura.pl/formularze-zus' },
  { name: 'Kalkulator Zasiłku Macierzyńskiego', url: 'https://www.vatfaktura.pl/kalkulator-zasilek-macierzynski' }
]

export default function KalkulatorZasilekMacierzynskyPage() {
  return (
    <>
      <CalculatorSchema 
        title="Kalkulator Zasiłku Macierzyńskiego"
        description="Oblicz wysokość zasiłku macierzyńskiego i zasiłku porodu ZUS"
        url="https://www.vatfaktura.pl/kalkulator-zasilek-macierzynski"
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-blue-900 pt-20 pb-20">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-300 bg-clip-text text-transparent mb-4">
              Kalkulator zasiłku macierzyńskiego
            </h1>
            <p className="text-blue-200/70 text-sm sm:text-base">
              Oblicz wysokość zasiłku macierzyńskiego i porodu 2024/2025
            </p>
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 sm:p-6 mb-12 flex gap-4">
            <div className="text-yellow-400 flex-shrink-0 mt-1">⚠</div>
            <p className="text-yellow-200/80 text-sm">
              Kalkulator oblicza przybliżoną wysokość zasiłku. Dokładna kwota zależy od historii zarobków i rodzaju umowy. Zawsze sprawdź dane u ZUS.
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
                  defaultValue={5000}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:border-blue-400"
                />
                <p className="text-xs sm:text-sm text-blue-200/60 mt-2">
                  Średnia z ostatnich 12 miesięcy pracy
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-3">
                  Rodzaj zasiłku
                </label>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 p-4 rounded-lg border border-blue-500/20 hover:border-blue-500/50 cursor-pointer transition">
                    <input type="radio" name="rodzaj" defaultChecked className="w-5 h-5" />
                    <div>
                      <span className="text-white font-semibold">Zasiłek macierzyński</span>
                      <p className="text-xs text-blue-200/60">100% średniego wynagrodzenia przez 16-37 tygodni</p>
                    </div>
                  </label>
                  <label className="flex items-center gap-3 p-4 rounded-lg border border-blue-500/20 hover:border-blue-500/50 cursor-pointer transition">
                    <input type="radio" name="rodzaj" className="w-5 h-5" />
                    <div>
                      <span className="text-white font-semibold">Zasiłek porodu</span>
                      <p className="text-xs text-blue-200/60">Jednorazowy - ok. 1000 zł (2024)</p>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-blue-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Informacje o zasiłku</h3>
              <ul className="space-y-2 text-sm text-blue-200/80 list-disc list-inside">
                <li>Zasiłek macierzyński wynosi 100% średniego wynagrodzenia</li>
                <li>Wypłacany przez 16-37 tygodni (280 dni) od daty porodu</li>
                <li>Zasiłek porodu to jednorazowe świadczenie (ok. 1000 zł w 2024)</li>
                <li>Można pracować i jednocześnie pobierać zasiłek</li>
                <li>Zasiłek jest opodatkowany podatkiem dochodowym</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Przydatne linki</h3>
            <div className="space-y-3">
              <Link href="/formularze-zus" className="block p-4 bg-slate-800/50 border border-purple-500/20 hover:border-purple-500/50 rounded-lg transition">
                <p className="font-semibold text-white">Wróć do formularzy ZUS</p>
                <p className="text-sm text-blue-200/70">Wszystkie kalkulatory i generatory</p>
              </Link>
              <Link href="/poradnik-pue-zus" className="block p-4 bg-slate-800/50 border border-purple-500/20 hover:border-purple-500/50 rounded-lg transition">
                <p className="font-semibold text-white">Poradnik wysyłki przez PUE</p>
                <p className="text-sm text-blue-200/70">Jak wysłać dokumenty do ZUS</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
