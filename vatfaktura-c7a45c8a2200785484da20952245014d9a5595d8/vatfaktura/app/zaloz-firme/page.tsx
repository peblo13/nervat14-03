'use client'

import { CheckCircle, Building2, FileText, Users, Zap, Shield, TrendingUp, ArrowRight, Clock, DollarSign } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function SetupBusiness() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-900">
      {/* Animated background elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-0"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="hidden sm:block absolute -bottom-8 left-1/2 w-32 h-32 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="bg-slate-900/40 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-4 flex items-center justify-between min-h-[56px] sm:min-h-[64px]">
            <Link href="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0 hover:opacity-80 transition-opacity">
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50 flex-shrink-0">
                <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent truncate">Załóż Firmę</h1>
            </Link>
            <Link href="/">
              <Button variant="outline" className="h-9 px-4 text-sm border-purple-500/40 hover:bg-purple-500/10 text-purple-300">
                Wróć
              </Button>
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-16 sm:py-24 md:py-32 lg:py-40 relative">
          <div className="text-center space-y-8 sm:space-y-10 md:space-y-12">
            {/* Badge */}
            <div className="inline-block px-4 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-purple-500/30 to-pink-500/30 border border-purple-400/60 rounded-full backdrop-blur-sm hover:border-purple-300/80 transition-all duration-300">
              <span className="text-xs sm:text-sm font-bold tracking-wider text-purple-300 uppercase">Nowy w VAT Faktura</span>
            </div>

            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight px-2 tracking-tight">
                <span className="bg-gradient-to-r from-purple-400 via-pink-300 to-purple-300 bg-clip-text text-transparent drop-shadow-lg">
                  Załóż biznes
                </span>
                <br />
                <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 bg-clip-text text-transparent drop-shadow-lg">
                  online
                </span>
                <br />
                <span className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white/80 font-bold">w kilka minut</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-purple-200/80 max-w-3xl mx-auto leading-relaxed px-4 font-light">
                Kompletny przewodnik do założenia firmy online. Wszystkie niezbędne kroki, dokumenty i informacje w jednym miejscu.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center pt-4 sm:pt-8 px-3">
              <Link href="#przewodnik">
                <Button className="min-h-[50px] sm:min-h-[52px] px-8 sm:px-10 md:px-12 lg:px-14 py-3 text-base sm:text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-xl shadow-purple-500/50 hover:shadow-purple-500/80 transition-all duration-300 transform hover:scale-110 active:scale-95 text-white">
                  Przeczytaj Przewodnik
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/register">
                <Button variant="outline" className="min-h-[50px] sm:min-h-[52px] px-8 sm:px-10 md:px-12 lg:px-14 py-3 text-base sm:text-lg font-bold border-2 border-purple-400/60 hover:border-purple-300 hover:bg-purple-500/20 text-purple-100 hover:text-purple-50 transition-all duration-300 transform hover:scale-110 active:scale-95 backdrop-blur-sm">
                  Zacznij od razu
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-16 sm:py-24 md:py-32 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8">
                Dlaczego zakładać biznes online?
              </h2>
              <div className="space-y-4">
                {[
                  { icon: Clock, title: 'Szybko', desc: 'Załóż firmę w kilka minut, bez biurokracji' },
                  { icon: DollarSign, title: 'Tanio', desc: 'Minimalne koszty założenia i prowadzenia' },
                  { icon: Zap, title: 'Wygodnie', desc: 'Wszystko online, dostęp 24/7' },
                  { icon: Shield, title: 'Bezpiecznie', desc: 'Pełna ochrona Twoich danych' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start group">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-lg flex items-center justify-center group-hover:from-purple-500/50 group-hover:to-pink-500/50 transition-all duration-300">
                      <item.icon className="w-6 h-6 text-purple-300 group-hover:text-pink-300 transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-300 transition-colors">{item.title}</h3>
                      <p className="text-sm sm:text-base text-purple-200/70 group-hover:text-purple-200 transition-colors">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 sm:p-10 space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Co dostaniesz?</h3>
              <div className="space-y-4">
                {[
                  'Pełen przewodnik krok po kroku',
                  'Lista wszystkich dokumentów',
                  'Porady od ekspertów',
                  'Kalkulatory podatków',
                  'Szablony dokumentów',
                  'Wsparcie techniczne 24/7',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 group">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-sm sm:text-base text-purple-100 group-hover:text-white transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Guide Section */}
        <section id="przewodnik" className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-16 sm:py-24 md:py-32 relative">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center bg-gradient-to-r from-purple-400 via-pink-300 to-purple-300 bg-clip-text text-transparent px-4">
              Przewodnik Krok po Kroku
            </h2>
            <p className="text-purple-200/70 text-center text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-4">
              Dowiedz się, jak prawidłowo założyć firmenę online i rozpocząć swoją działalność biznesową
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                step: 1,
                title: 'Wybierz formę biznesu',
                desc: 'Zdecyduj czy założyć jednoosobową działalność gospodarczą (JDG), spółkę czy inną formę prawną',
                color: 'from-blue-500/20 to-cyan-500/20',
                borderColor: 'border-blue-500/30'
              },
              {
                step: 2,
                title: 'Przygotuj dokumenty',
                desc: 'Zbierz potrzebne dokumenty: dowód osobisty, zaświadczenie o braku karania, potwierdzenie adresu',
                color: 'from-purple-500/20 to-pink-500/20',
                borderColor: 'border-purple-500/30'
              },
              {
                step: 3,
                title: 'Złóż wniosek',
                desc: 'Zarejestruj się w Centralnym Rejestrze Gospodarczym (CEIDG) lub u notariusza',
                color: 'from-green-500/20 to-emerald-500/20',
                borderColor: 'border-green-500/30'
              },
              {
                step: 4,
                title: 'Załóż konto bankowe',
                desc: 'Otwórz rachynek bankowy dla firmy - obligatoryjny do przyjmowania płatności',
                color: 'from-orange-500/20 to-red-500/20',
                borderColor: 'border-orange-500/30'
              },
              {
                step: 5,
                title: 'Zarejestruj się w ZUS',
                desc: 'Zgłoś się do ZUS aby startować ubezpieczenie społeczne i zdrowotne',
                color: 'from-yellow-500/20 to-amber-500/20',
                borderColor: 'border-yellow-500/30'
              },
              {
                step: 6,
                title: 'Rozpocznij działalność',
                desc: 'Wystawiaj faktury, prowadź księgowość i korzystaj z naszych narzędzi',
                color: 'from-indigo-500/20 to-purple-500/20',
                borderColor: 'border-indigo-500/30'
              },
            ].map((item, index) => (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
                <div className={`relative bg-slate-800/40 backdrop-blur-xl rounded-xl p-6 sm:p-7 border ${item.borderColor} transition-all duration-500 group-hover:bg-slate-800/60 group-hover:shadow-2xl group-hover:shadow-purple-500/20`}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg border-2 border-slate-700">
                      {item.step}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-300 transition-colors mt-1">{item.title}</h3>
                  </div>
                  <p className="text-sm sm:text-base text-purple-200/70 group-hover:text-purple-100 transition-colors leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-16 sm:py-24 md:py-32 relative">
          <div className="bg-gradient-to-r from-purple-600/40 to-pink-600/40 backdrop-blur-xl border border-purple-400/30 rounded-3xl p-8 sm:p-12 md:p-16 text-center space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Gotowy do rozpoczęcia?
            </h2>
            <p className="text-base sm:text-lg text-purple-200/80 max-w-2xl mx-auto">
              Dołącz do tysięcy przedsiębiorców, którzy już rozwijają swoją działalność z VAT Faktura
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center pt-4">
              <Link href="/register">
                <Button className="min-h-[50px] sm:min-h-[52px] px-8 sm:px-10 md:px-12 py-3 text-base sm:text-lg font-bold bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 shadow-xl shadow-green-500/50 hover:shadow-green-500/80 transition-all duration-300 transform hover:scale-110 active:scale-95">
                  Załóż Bezpłatne Konto
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" className="min-h-[50px] sm:min-h-[52px] px-8 sm:px-10 md:px-12 py-3 text-base sm:text-lg font-bold border-2 border-purple-300/60 hover:border-purple-200 hover:bg-purple-500/20 text-purple-100 transition-all duration-300 transform hover:scale-110 active:scale-95">
                  Dowiedz Się Więcej
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-16 sm:py-24 md:py-32 relative">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-300 to-purple-300 bg-clip-text text-transparent mb-4">
              Narzędzia dla Twojej Firmy
            </h2>
            <p className="text-purple-200/70 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
              VAT Faktura to kompletne rozwiązanie do zarządzania biznesem online
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: FileText, title: 'Faktury', desc: 'Szybko twórz profesjonalne faktury' },
              { icon: Users, title: 'Klienci', desc: 'Zarządzaj bazą swoich klientów' },
              { icon: TrendingUp, title: 'Statystyki', desc: 'Śledź swoje zarobki i wydatki' },
              { icon: Shield, title: 'Bezpieczeństwo', desc: 'Chronimy Twoje dane' },
              { icon: Zap, title: 'Integracje', desc: 'Połączy z innymi narzędziami' },
              { icon: CheckCircle, title: 'PIT & ZUS', desc: 'Rozliczanie podatków online' },
            ].map((feature, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-slate-800/40 backdrop-blur-xl rounded-xl p-6 border border-purple-500/30 hover:border-purple-500/60 transition-all duration-500 text-center">
                  <feature.icon className="w-12 h-12 text-purple-400 group-hover:text-pink-400 transition-colors mx-auto mb-3 group-hover:scale-110 transform" />
                  <h3 className="font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">{feature.title}</h3>
                  <p className="text-sm text-purple-200/70 group-hover:text-purple-200 transition-colors">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
