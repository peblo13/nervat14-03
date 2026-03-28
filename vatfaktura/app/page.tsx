'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Check, ArrowRight } from 'lucide-react'
import { useUser } from '@/hooks/useUser'
import { AdSenseDisplay728x90, AdSenseDisplayAuto } from '@/components/adsense-banner'

export default function HomePage() {
  const { user } = useUser()

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-full mb-6">
            <span className="text-sm font-semibold text-blue-300">ZACZNIJ ZA DARMO - 5 FAKTUR</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
            Fakturowanie za 0 PLN
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Darmowy plan z 5 fakturami na miesiąc. Integracja z KSEF, eksport PDF, rozliczenie PIT — wszystko bez limitów w planie darmowym. Kiedy potrzebujesz więcej, przejdź na Premium za 99 PLN/miesiąc.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={user ? '/dashboard' : '/register'}>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                {user ? 'Przejdź do dashboardu' : 'Zaloguj się za darmo'}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" className="px-8 py-3 text-lg border-slate-600 text-slate-300 hover:bg-slate-800">
                Poznaj plany
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">5</div>
              <p className="text-slate-300">Faktur w planie darmowym</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">∞</div>
              <p className="text-slate-300">Faktur w planie Premium</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">99 PLN</div>
              <p className="text-slate-300">Plan Premium / miesiąc</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
            Co zawiera darmowy plan?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              'Generowanie faktur',
              'Eksport do PDF',
              'Zarządzanie kontrahentami',
              'Raporty VAT',
              'Integracja z KSEF',
              'Historia i archiwum',
              'Rozliczenie PIT-37',
              'Nieograniczone szablony',
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-slate-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Chcesz więcej faktur?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Plan Premium daje Ci nieograniczone faktury, zaawansowane szablony i priorytetowe wsparcie.
          </p>
          <Link href="/pricing">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
              Odkryj plan Premium
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* AdSense */}
      <section className="py-8">
        <AdSenseDisplay728x90 />
      </section>

      {/* Bottom CTA */}
      {!user && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Gotów zacząć?</h2>
            <Link href="/register">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-lg">
                Załóż darmowe konto
              </Button>
            </Link>
          </div>
        </section>
      )}

      {/* AdSense Auto */}
      <section className="py-8">
        <AdSenseDisplayAuto />
      </section>
    </main>
  )
}

// Force rebuild - cache clear v1

