'use client'

import { useUser } from '@/hooks/useUser'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  const { user } = useUser()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      {/* Main content */}
      <div className="relative z-10">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="py-12 sm:py-16 md:py-20">
            <div className="text-center">
              <div className="inline-block mb-6 px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-full">
                <span className="text-sm font-semibold text-blue-300">ZACZNIJ ZA DARMO</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                Generator Faktur VAT<br />
                Prosty i bezpłatny
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Wystawiaj faktury VAT za darmo. Darmowy plan zawiera 5 faktur na miesiąc. 
                Dla większych potrzeb przejdź na Premium za 99 PLN/miesiąc.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                {user ? (
                  <>
                    <Link href="/dashboard">
                      <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                        Przejdź do dashboardu
                      </Button>
                    </Link>
                    <Link href="/pricing">
                      <Button size="lg" variant="outline" className="border-blue-500/50 text-blue-300 hover:bg-blue-500/20">
                        Poznaj plany cenowe
                      </Button>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link href="/register">
                      <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                        Załóż konto za darmo
                      </Button>
                    </Link>
                    <Link href="/pricing">
                      <Button size="lg" variant="outline" className="border-blue-500/50 text-blue-300 hover:bg-blue-500/20">
                        Poznaj plany cenowe
                      </Button>
                    </Link>
                  </>
                )}
              </div>

              {/* Trust Signals */}
              <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">5</div>
                  <p className="text-sm text-slate-400">faktur w planie darmowym</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">∞</div>
                  <p className="text-sm text-slate-400">faktur w planie Premium</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">99 PLN</div>
                  <p className="text-sm text-slate-400">za Premium / miesiąc</p>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16 sm:py-20">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
                Co zawiera plan darmowy?
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-start gap-3 mb-6">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 border border-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">5 faktur na miesiąc</h3>
                      <p className="text-sm text-slate-400">Limit resetuje się co miesiąc</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 mb-6">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 border border-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Export do PDF</h3>
                      <p className="text-sm text-slate-400">Pobieraj faktury w formacie PDF</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 mb-6">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 border border-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Integracja z kSEF</h3>
                      <p className="text-sm text-slate-400">Automatyczne wysyłanie do ewidencji</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-3 mb-6">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 border border-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Zarządzanie kontrahentami</h3>
                      <p className="text-sm text-slate-400">Zapisuj dane swoich odbiorców</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 mb-6">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 border border-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Raporty VAT</h3>
                      <p className="text-sm text-slate-400">Pobieraj raporty podatkowe</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 mb-6">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 border border-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Archiwum faktur</h3>
                      <p className="text-sm text-slate-400">Wszystkie faktury zawsze dostępne</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Upgrade Section */}
          <section className="py-16 sm:py-20">
            <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-2xl p-8 sm:p-12 text-center max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Potrzebujesz więcej faktur?
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Przejdź na plan Premium za 99 PLN na miesiąc i wystawiaj nieograniczoną liczbę faktur.
              </p>
              <Link href="/pricing">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  Poznaj plan Premium
                </Button>
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

// Cache bust v2 - Force rebuild
