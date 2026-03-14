'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CheckCircle2, Building2, FileText, Zap, Shield, TrendingUp, ArrowRight, Users, Clock, DollarSign } from 'lucide-react'
import { AdSenseDisplay728x90, AdSenseDisplayAuto } from '@/components/adsense-banner'

export default function OtworzFirmePage() {
  const [selectedType, setSelectedType] = useState<'samozatrudnienie' | 'spolka' | 'jednoosobowa'>('samozatrudnienie')

  const businessTypes = [
    {
      id: 'samozatrudnienie',
      name: 'Samozatrudnienie',
      description: 'Dla freelancerów i kontrahentów',
      cost: 'od 0 zł',
      icon: '💼',
      requirements: [
        'PESEL',
        'Numer telefonu',
        'Adres e-mail',
        'Rodzaj działalności'
      ],
      time: '2-4 tygodnie',
      paperwork: 'Średnie'
    },
    {
      id: 'jednoosobowa',
      name: 'Jednoosobowa Działalność',
      description: 'Idealnie dla małych firm i startupów',
      cost: 'od 100 zł',
      icon: '🏢',
      requirements: [
        'Wypełnienie wniosku RCP-3',
        'Zaświadczenie o zdatności',
        'Opłata rejestracyjna',
        'Potwierdzenie lokalizacji'
      ],
      time: '1-2 tygodnie',
      paperwork: 'Duże'
    },
    {
      id: 'spolka',
      name: 'Spółka z ograniczoną odpowiedzialnością',
      description: 'Dla przedsiębiorstw z większym kapitałem',
      cost: 'od 500 zł',
      icon: '🏛️',
      requirements: [
        'Statut spółki',
        'Umowa spółki',
        'Wkład kapitałowy',
        'Zaświadczenia akcjonariuszy'
      ],
      time: '3-6 tygodni',
      paperwork: 'Bardzo duże'
    }
  ]

  const steps = [
    {
      number: '1',
      title: 'Wybierz formę prawną',
      description: 'Zdecyduj czy to samozatrudnienie, działalność gospodarcza czy spółka'
    },
    {
      number: '2',
      title: 'Przygotuj dokumenty',
      description: 'Zbierz wymagane dokumenty i zaświadczenia'
    },
    {
      number: '3',
      title: 'Złóż wnioski',
      description: 'Wypełnij wnioski do URE, ZUS i US'
    },
    {
      number: '4',
      title: 'Załatwij formalności',
      description: 'Zarejestruj się w krajowych rejestrach'
    },
    {
      number: '5',
      title: 'Zacznij działać',
      description: 'Przygotuj się do pierwszych faktury i dokumentów'
    }
  ]

  const benefits = [
    {
      icon: FileText,
      title: 'Automatyczne tworzenie dokumentów',
      description: 'VAT Faktura pomoże Ci w tworzeniu wszystkich wymaganych wniosków i dokumentów'
    },
    {
      icon: Zap,
      title: 'Szybka rejestracja',
      description: 'Zautomatyzowany proces rejestracji oszczędzi Ci czas i pieniądze'
    },
    {
      icon: Shield,
      title: 'Bezpieczeństwo danych',
      description: 'Twoje dane osobowe są chronione i nigdy nie są udostępniane trzecim stronom'
    },
    {
      icon: TrendingUp,
      title: 'Wsparcie ekspertów',
      description: 'Dostęp do poradników i FAQ na każdym etapie rejestracji'
    },
    {
      icon: Clock,
      title: 'Bieżące aktualizacje',
      description: 'Wszystkie informacje są aktualizowane zgodnie z najnowszymi zmianami prawa'
    },
    {
      icon: Users,
      title: 'Społeczność biznesmenów',
      description: 'Dołącz do tysięcy przedsiębiorców korzystających z VAT Faktury'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-purple-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-white/10 sticky top-0 z-50 bg-slate-900/40 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
                <Building2 className="w-8 h-8 text-pink-400" />
                <span className="text-xl font-bold text-white">VAT Faktura</span>
              </Link>
              <Link href="/register">
                <Button className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 font-semibold">
                  Zacznij teraz
                </Button>
              </Link>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-16 sm:py-24 md:py-32">
          <div className="text-center space-y-8">
            <div className="inline-block px-5 py-2 bg-pink-500/20 border border-pink-500/40 rounded-full">
              <p className="text-sm font-semibold text-pink-300">Załóż firmę online</p>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-300 bg-clip-text text-transparent">
                Otwórz firmę w kilka minut
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-200/80 max-w-2xl mx-auto leading-relaxed">
              Przewodnik krok po kroku od wyboru formy prawnej, przez rejestrację, po pierwsze faktury
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/register">
                <Button size="lg" className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 font-semibold shadow-lg shadow-pink-500/30">
                  Załóż konto <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/otwórz-firmę#rodzaje">
                <Button size="lg" variant="outline" className="border-pink-500/40 hover:bg-pink-500/10 text-pink-300">
                  Poznaj opcje
                </Button>
              </Link>
            </div>
          </div>
          <AdSenseDisplay728x90 />
        </section>

        {/* Types of business */}
        <section id="rodzaje" className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Wybierz formę prawną
            </h2>
            <p className="text-blue-200/70 text-lg">
              Każda forma ma swoje zalety i wymogi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {businessTypes.map((type) => (
              <div
                key={type.id}
                onClick={() => setSelectedType(type.id as any)}
                className={`group cursor-pointer p-8 rounded-2xl border-2 transition-all duration-300 ${
                  selectedType === type.id
                    ? 'border-pink-500 bg-pink-500/10 shadow-xl shadow-pink-500/20'
                    : 'border-white/10 bg-slate-800/40 hover:border-pink-500/50 hover:bg-slate-800/60'
                }`}
              >
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{type.name}</h3>
                <p className="text-blue-200/70 mb-4 text-sm">{type.description}</p>
                <div className="space-y-2 mb-6">
                  <div className="text-sm text-pink-300 font-semibold">{type.cost}</div>
                  <div className="text-xs text-blue-200/60">⏱️ {type.time}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Selected type details */}
          <div className="mt-12 p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/20">
            <div className="space-y-8">
              {businessTypes
                .filter((t) => t.id === selectedType)
                .map((type) => (
                  <div key={type.id} className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Wymagane dokumenty</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {type.requirements.map((req, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-slate-800/40 border border-pink-500/20">
                            <CheckCircle2 className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                            <span className="text-blue-100">{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <Link href="/register">
                        <Button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 font-semibold py-6">
                          Rozpocznij rejestrację {type.name}
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Krok po kroku
            </h2>
            <p className="text-blue-200/70 text-lg">
              Prosty proces otworzenia firmy online
            </p>
          </div>

          <div className="space-y-6 md:space-y-8">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-6 sm:gap-8 group">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-pink-600 to-purple-600 border-4 border-slate-900 shadow-lg shadow-pink-500/30 group-hover:scale-110 transition-transform">
                    <span className="text-2xl sm:text-3xl font-bold text-white">{step.number}</span>
                  </div>
                </div>
                <div className="flex-grow pt-3 sm:pt-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-blue-200/70 text-sm sm:text-base">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Dlaczego VAT Faktura?
            </h2>
            <p className="text-blue-200/70 text-lg">
              Pełne wsparcie w otwieraniu firmy i zarządzaniu nią
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon
              return (
                <div key={idx} className="p-6 sm:p-8 rounded-xl bg-slate-800/40 border border-pink-500/20 hover:border-pink-500/50 hover:bg-slate-800/60 transition-all duration-300 group">
                  <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-pink-400 mb-4 group-hover:scale-110 group-hover:text-pink-300 transition-all" />
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-blue-200/70 text-sm sm:text-base">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-gradient-to-r from-pink-600/10 to-purple-600/10 border border-pink-500/30 rounded-3xl p-8 sm:p-12 md:p-16 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Gotów aby otworzyć firmę?
              </h2>
              <p className="text-lg text-blue-200/80 mb-8 max-w-2xl mx-auto">
                Załóż konto za darmo i zacznij rejestrację swojej firmy dzisiaj. Nie potrzebujesz karty kredytowej.
              </p>
              <Link href="/register">
                <Button size="lg" className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 font-semibold shadow-lg shadow-pink-500/30">
                  Zacznij teraz <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* AdSense */}
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8">
          <AdSenseDisplayAuto />
        </div>
      </div>
    </div>
  )
}
