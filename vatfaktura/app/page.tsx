import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="bg-slate-900/50 backdrop-blur-md border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white">VAT Faktura</div>
            <div className="flex gap-4">
              <Link href="/pricing">
                <Button variant="outline" className="text-white border-slate-400 hover:bg-slate-700">
                  Cennik
                </Button>
              </Link>
              <Link href="/login">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Zaloguj się
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Fakturowanie stało się proste
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Zacznij za darmo z 5 fakturami na miesiąc. Bez karty kredytowej, bez ukrytych opłat.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                Zacznij za darmo
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="text-white border-slate-400 hover:bg-slate-700 px-8">
                Poznaj plany
              </Button>
            </Link>
          </div>
        </div>

        {/* Trust Signals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">5</div>
            <p className="text-slate-300">Faktur w planie darmowym</p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">∞</div>
            <p className="text-slate-300">Faktur w planie Premium</p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">99 PLN</div>
            <p className="text-slate-300">Miesięcznie za Premium</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-slate-800/50">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Plan Darmowy zawiera
          </h2>
          <p className="text-slate-300 text-center">Wszystko czego potrzebujesz do zarządzania fakturami</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            'Wystawianie do 5 faktur na miesiąc',
            'Eksport do PDF',
            'Zarządzanie kontrahentami',
            'Raporty VAT',
            'Integracja z kSEF',
            'Historia i archiwum',
          ].map((feature) => (
            <div key={feature} className="flex items-center gap-4">
              <Check className="w-6 h-6 text-green-400 flex-shrink-0" />
              <span className="text-lg text-slate-300">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Premium CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-green-900/40 to-slate-800 border-2 border-green-500/60 rounded-lg p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Potrzebujesz więcej faktur?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Przejdź na plan Premium za 99 PLN na miesiąc i wystawiaj nieograniczoną liczbę faktur.
          </p>
          <Link href="/pricing">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              Poznaj plan Premium
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-400">
          <p>© 2024 VAT Faktura. Wszystkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </div>
  )
}
