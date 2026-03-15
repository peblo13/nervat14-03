'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CheckCircle, Building2, FileText, Users, Zap, Shield, Clock, ArrowRight, Phone, Mail } from 'lucide-react'
import Link from 'next/link'
import { MobileNav } from '@/components/mobile-nav'
import { HeaderMenu } from '@/components/header-menu'
import { SupportBanner } from '@/components/support-banner'

export default function ZalozFirmePage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Support Banner */}
      <SupportBanner />

      {/* Animated background elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-0"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="hidden sm:block absolute -bottom-8 left-1/2 w-32 h-32 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="bg-slate-900/40 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-4 flex items-center justify-between min-h-[56px] sm:min-h-[64px]">
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/50 flex-shrink-0">
                <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent truncate">Załóż Firmę</h1>
            </div>
            <nav className="hidden sm:flex items-center gap-1 md:gap-1.5">
              <HeaderMenu />
              <Link href="/faq" className="px-3 py-2 text-sm font-medium text-blue-200 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200">
                FAQ
              </Link>
              <Link href="/blog" className="px-3 py-2 text-sm font-medium text-blue-200 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200">
                Blog
              </Link>
              <div className="w-px h-5 bg-white/15 mx-1" />
              <Link href="/login">
                <Button variant="outline" className="h-9 px-4 text-sm border-green-500/40 hover:bg-green-500/10 text-green-300">
                  Zaloguj
                </Button>
              </Link>
              <Link href="/register">
                <Button className="h-9 px-4 text-sm bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 shadow-lg shadow-green-500/30 font-semibold">
                  Załóż konto
                </Button>
              </Link>
            </nav>
            <MobileNav />
          </div>
        </header>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-16 sm:py-24 md:py-32 lg:py-40 relative">
          <div className="text-center space-y-8 sm:space-y-10 md:space-y-12 max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-block px-4 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-green-500/30 to-emerald-500/30 border border-green-400/60 rounded-full backdrop-blur-sm hover:border-green-300/80 transition-all duration-300">
              <span className="text-xs sm:text-sm font-bold tracking-wider text-green-300 uppercase">Nowa usługa</span>
            </div>

            {/* Heading */}
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-black leading-tight px-2 tracking-tight">
                <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-green-300 bg-clip-text text-transparent drop-shadow-lg">
                  Załóż firmę
                </span>
                <br />
                <span className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white/80 font-bold">bez wychodzenia z domu</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-green-200/80 max-w-3xl mx-auto leading-relaxed px-4 font-light">
                Pełna obsługa rejestracji firmy online. Od CEIDG przez GUS, aż do ZUS. VAT Faktura pomaga na każdym kroku.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center pt-4 sm:pt-8 px-3">
              <Link href="/register">
                <Button className="min-h-[50px] sm:min-h-[52px] px-8 sm:px-10 md:px-12 lg:px-14 py-3 text-base sm:text-lg font-bold bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 shadow-xl shadow-green-500/50 hover:shadow-green-500/80 transition-all duration-300 transform hover:scale-110 active:scale-95 text-white flex items-center gap-2">
                  Zacznij rejestrację
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="outline" className="min-h-[50px] sm:min-h-[52px] px-8 sm:px-10 md:px-12 lg:px-14 py-3 text-base sm:text-lg font-bold border-2 border-green-400/60 hover:border-green-300 hover:bg-green-500/20 text-green-100 hover:text-green-50 transition-all duration-300 transform hover:scale-110 active:scale-95 backdrop-blur-sm">
                  Wróć do aplikacji
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-20 sm:py-28 md:py-32">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 via-emerald-300 to-green-300 bg-clip-text text-transparent px-4">
              Jak to działa?
            </h2>
            <p className="text-green-200/70 text-center text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-4">
              Prosty proces rejestracji firmy w czterech krokach
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
            {[
              {
                icon: FileText,
                title: 'Krok 1: Dane firmy',
                description: 'Podaj podstawowe informacje o Twojej firmie, takie jak nazwa, PESEL i forma prawna.',
              },
              {
                icon: Users,
                title: 'Krok 2: Dane właściciela',
                description: 'Uzupełnij dane osobowe właściciela i informacje kontaktowe.',
              },
              {
                icon: Zap,
                title: 'Krok 3: Rejestracja',
                description: 'Wysłanie wniosku do CEIDG, GUS i ZUS. My zajmiemy się całą dokumentacją.',
              },
              {
                icon: CheckCircle,
                title: 'Krok 4: Potwierdzenie',
                description: 'Otrzymaj potwierdzenie rejestracji i dostęp do pełnych funkcji fakturowania.',
              },
            ].map((feature, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative h-full bg-slate-800/40 backdrop-blur-xl rounded-xl p-6 sm:p-7 md:p-8 border border-green-500/30 hover:border-green-500/60 transition-all duration-500 group-hover:bg-slate-800/60">
                  <div className="flex flex-col h-full gap-4">
                    <div className="relative">
                      <feature.icon className="w-12 h-12 sm:w-14 sm:h-14 text-green-300 group-hover:text-emerald-300 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6" />
                      <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors duration-300">{feature.title}</h4>
                      <p className="text-sm sm:text-base text-green-200/70 group-hover:text-green-100/80 transition-colors duration-300 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-20 sm:py-28 md:py-32">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-emerald-600/15 to-green-600/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            <div className="relative overflow-hidden rounded-2xl border-2 border-green-500/30 bg-gradient-to-br from-green-900/20 via-slate-900/40 to-green-900/20 backdrop-blur-xl p-8 sm:p-12 md:p-16 group-hover:border-green-400/50 transition-all duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                      Korzyści rejestracji <span className="bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">przez VAT Faktura</span>
                    </h3>
                    <p className="text-green-200/70 text-lg">Wszystko w jednym miejscu - rejestracja, faktury i rozliczenia</p>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { icon: Clock, title: 'Szybko', desc: 'Rejestracja w 15 minut' },
                      { icon: Shield, title: 'Bezpiecznie', desc: 'Pełna ochrona danych' },
                      { icon: CheckCircle, title: 'Całkowicie', desc: 'Obsługa wszystkich procedur' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">{item.title}</h4>
                          <p className="text-green-200/60 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 hover:border-green-500/50 transition-all">
                    <h4 className="text-white font-bold mb-3">Rejestracja CEIDG</h4>
                    <p className="text-green-200/70 text-sm">Centralna Ewidencja i Informacja o Działalności Gospodarczej</p>
                  </div>
                  <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6 hover:border-emerald-500/50 transition-all">
                    <h4 className="text-white font-bold mb-3">Rejestracja GUS</h4>
                    <p className="text-green-200/70 text-sm">Główny Urząd Statystyczny - statystyka biznesu</p>
                  </div>
                  <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-6 hover:border-cyan-500/50 transition-all">
                    <h4 className="text-white font-bold mb-3">Rejestracja ZUS</h4>
                    <p className="text-green-200/70 text-sm">Zakład Ubezpieczeń Społecznych - ubezpieczenie</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-16 sm:py-20 md:py-24 text-center">
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Gotowy do <span className="bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">rozpoczęcia?</span>
            </h2>
            <p className="text-green-200/70 text-lg max-w-2xl mx-auto">
              Załóż firmę i uzyskaj dostęp do pełnych narzędzi do fakturowania i rozliczeń
            </p>
            <Link href="/register">
              <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg shadow-lg shadow-green-500/40 hover:shadow-green-500/60 transition-all flex items-center gap-2 mx-auto">
                Zakreślij rejestrację
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Support Contact */}
        <section className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800/40 backdrop-blur-xl border border-green-500/20 rounded-xl p-8 text-center">
              <Mail className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-white font-bold text-lg mb-2">Email</h3>
              <p className="text-green-200/70">support@vatfaktura.pl</p>
            </div>
            <div className="bg-slate-800/40 backdrop-blur-xl border border-green-500/20 rounded-xl p-8 text-center">
              <Phone className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-white font-bold text-lg mb-2">Telefon</h3>
              <p className="text-green-200/70">+48 (0) 22 XXX XX XX</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 mt-16 sm:mt-20 py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center text-blue-200/50 text-sm">
            <p>&copy; 2024 VAT Faktura. Wszelkie prawa zastrzeżone.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
