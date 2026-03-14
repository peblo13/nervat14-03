'use client'

import Link from 'next/link'
import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { 
  FileText, Calculator, Calendar, HelpCircle, Zap, TrendingUp, 
  Check, ArrowRight, BookOpen, Clock, Shield 
} from 'lucide-react'
import { AdSenseDisplay728x90, AdSenseDisplayAuto } from '@/components/adsense-banner'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { FAQSchema } from '@/components/faq-schema'

export const metadata: Metadata = {
  title: 'ZUS Centrum - Wszystkie Narzędzia i Kalkulatory ZUS w Jednym Miejscu',
  description: 'Kompletne centrum ZUS z generatorami formularzy, kalkulatorami, harmonogramem płatności i poradnikami. Z-3, Z-15, zasiłki, składki - wszystko w jednym miejscu.',
  keywords: 'ZUS centrum, formularze ZUS, kalkulator ZUS, terminy ZUS, zasiłek chorobowy, zasiłek macierzyński, składki ZUS',
  openGraph: {
    title: 'ZUS Centrum - Hub Wszystkich Narzędzi ZUS',
    description: 'Wszystkie generatory, kalkulatory i poradniki ZUS w jednym miejscu',
    type: 'website',
    url: 'https://www.vatfaktura.pl/zus-centrum',
    images: [{ url: 'https://www.vatfaktura.pl/og-image.png' }],
  },
}

export default function ZUSCentrumPage() {
  const faqItems = [
    {
      question: 'Co to jest ZUS Centrum?',
      answer: 'ZUS Centrum to kompleksowa platforma edukacyjna z wszystkimi narzędziami do zarządzania ubezpieczeniami ZUS, formularze, kalkulatory, terminy, poradniki - wszystko w jednym miejscu.'
    },
    {
      question: 'Czy wszystkie narzędzia są naprawdę bezpłatne?',
      answer: 'Tak, wszystkie generatory, kalkulatory i poradniki są w pełni bezpłatne. Nie trzeba rejestrować się, podawać karty kredytowej ani logować się do konta.'
    },
    {
      question: 'Czy mogę korzystać z tych narzędzi na mobilnym?',
      answer: 'Tak, wszystkie narzędzia w ZUS Centrum są responsywne i działają idealnie na telefonach, tabletach i desktopach.'
    },
    {
      question: 'Czy wygenerowane formularze są oficjalne?',
      answer: 'Formularze wygenerowane tutaj to dokumenty pomocnicze. Zawsze weryfikuj dane z oficjalnymi formularzami ZUS i wysyłaj je wyłącznie przez Portal Usług Elektronicznych (PUE).'
    },
    {
      question: 'Jak wysłać wygenerowany formularz do ZUS?',
      answer: 'Wygenerowany PDF wysyłasz przez PUE ZUS (pue.zus.pl). Możesz także przeczytać nasz poradnik krok po kroku.'
    },
    {
      question: 'Ile czasu zajmuje wypełnienie formularza?',
      answer: 'Większość formularzy można wypełnić w 2-5 minut, w zależności od ilości danych do wprowadzenia.'
    }
  ]

  const breadcrumbs = [
    { name: 'Strona główna', url: 'https://www.vatfaktura.pl' },
    { name: 'Narzędzia', url: 'https://www.vatfaktura.pl/narzedzia' },
    { name: 'ZUS Centrum', url: 'https://www.vatfaktura.pl/zus-centrum' }
  ]

  const tools = [
    {
      category: 'Generatory Formularzy',
      icon: FileText,
      color: 'from-blue-600 to-cyan-600',
      items: [
        { title: 'Generator Z-3', desc: 'Zaświadczenie o niezdolności (pracownicy)', link: '/generator-zus-z3' },
        { title: 'Generator Z-15', desc: 'Zasiłek opiekuńczy (rodzina, dziecko)', link: '/generator-zus-z15' },
      ]
    },
    {
      category: 'Kalkulatory',
      icon: Calculator,
      color: 'from-green-600 to-emerald-600',
      items: [
        { title: 'Kalkulator Składek ZUS', desc: 'Oblicz miesięczne składki dla przedsiębiorcy', link: '/kalkulator-zus' },
        { title: 'Roczne Składki ZUS', desc: 'Oblicz całoroczne składki i dochód netto', link: '/kalkulator-roczne-skladki-zus' },
        { title: 'Zasiłek Chorobowy', desc: 'Oblicz wysokość zasiłku 80% lub 100%', link: '/kalkulator-zasilek-chorobowy' },
        { title: 'Zasiłek Macierzyński', desc: 'Oblicz zasiłek macierzyński i porodu', link: '/kalkulator-zasilek-macierzynski' },
      ]
    },
    {
      category: 'Poradniki i Terminy',
      icon: Calendar,
      color: 'from-purple-600 to-pink-600',
      items: [
        { title: 'Kalendarz Terminów', desc: 'Ważne daty, terminy i deadliny ZUS', link: '/kalendarz-zus' },
        { title: 'Poradnik PUE ZUS', desc: 'Jak wysyłać formularze przez PUE', link: '/poradnik-pue-zus' },
      ]
    }
  ]

  const benefits = [
    {
      icon: Zap,
      title: 'Błyskawiczne',
      desc: 'Większość formularzy gotowe w 2-5 minut'
    },
    {
      icon: Shield,
      title: 'Bezpieczne',
      desc: 'Dane transmitowane przez szyfrowanie HTTPS'
    },
    {
      icon: Check,
      title: 'Bezpłatne',
      desc: '100% darmowe, bez ukrytych opłat'
    },
    {
      icon: TrendingUp,
      title: 'Aktualne',
      desc: 'Stawki ZUS 2024, aktualne przepisy'
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-blue-900 relative overflow-hidden">
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema items={faqItems} />
      
      {/* Animated background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="bg-slate-900/40 backdrop-blur-xl border-b border-white/10 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Zap className="w-6 h-6 text-orange-400" />
              <span className="text-xl font-bold text-white">ZUS Centrum</span>
            </Link>
            <Link href="/narzedzia">
              <Button variant="outline" className="border-blue-500/40 text-blue-300 hover:bg-blue-500/10">
                Inne narzędzia
              </Button>
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 via-red-300 to-orange-300 bg-clip-text text-transparent mb-6">
              ZUS Centrum
            </h1>
            <p className="text-lg sm:text-xl text-blue-200/70 max-w-3xl mx-auto mb-8">
              Kompletne centrum do zarządzania ubezpieczeniami ZUS. Generatory formularzy, kalkulatory, terminy, poradniki - wszystko w jednym miejscu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/formularze-zus">
                <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-lg px-8 py-6 font-semibold shadow-lg shadow-orange-500/50">
                  Przejdź do generatorów
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          {/* AdSense Banner */}
          <div className="mb-16">
            <AdSenseDisplay728x90 />
          </div>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon
              return (
                <Card key={idx} className="bg-slate-800/50 border border-blue-500/20 p-6 text-center hover:border-blue-500/50 transition-all">
                  <Icon className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-blue-200/70 text-sm">{benefit.desc}</p>
                </Card>
              )
            })}
          </div>

          {/* Tools by Category */}
          {tools.map((category, idx) => {
            const CategoryIcon = category.icon
            return (
              <div key={idx} className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-3 bg-gradient-to-br ${category.color} rounded-xl`}>
                    <CategoryIcon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">{category.category}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIdx) => (
                    <Link key={itemIdx} href={item.link}>
                      <Card className="bg-slate-800/50 border border-blue-500/20 p-6 group hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all h-full cursor-pointer">
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-blue-200/70 text-sm mb-4">{item.desc}</p>
                        <div className="flex items-center text-orange-400 text-sm font-semibold group-hover:translate-x-2 transition-transform">
                          Otwórz <ArrowRight className="w-4 h-4 ml-2" />
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}

          {/* AdSense Banner */}
          <div className="mb-16">
            <AdSenseDisplayAuto />
          </div>

          {/* Education Section */}
          <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/20 rounded-2xl p-8 sm:p-12 mb-16">
            <div className="flex items-start gap-4 mb-8">
              <BookOpen className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Edukacja ZUS</h2>
                <p className="text-blue-200/70">Dowiedz się wszystkiego na temat ubezpieczeń społecznych i zarządzania ZUS</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-800/50 border border-blue-500/20 rounded-xl p-6">
                <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  Terminy ZUS
                </h3>
                <p className="text-blue-200/70 text-sm mb-4">Niczego nie zapomni! Pełny kalendarz wszystkich ważnych terminów ZUS na 2024-2025.</p>
                <Link href="/kalendarz-zus">
                  <Button variant="outline" className="border-blue-500/40 text-blue-300 hover:bg-blue-500/10 w-full">
                    Sprawdź terminy
                  </Button>
                </Link>
              </div>
              <div className="bg-slate-800/50 border border-blue-500/20 rounded-xl p-6">
                <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-cyan-400" />
                  Poradnik PUE
                </h3>
                <p className="text-blue-200/70 text-sm mb-4">Krok po kroku instrukcja jak wysyłać formularze ZUS przez Portal Usług Elektronicznych.</p>
                <Link href="/poradnik-pue-zus">
                  <Button variant="outline" className="border-blue-500/40 text-blue-300 hover:bg-blue-500/10 w-full">
                    Przeczytaj poradnik
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Gotowy do zarządzania ZUS?</h2>
            <p className="text-white/90 mb-6">Zacznij generować formularze, obliczać składki i śledzić terminy już teraz</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/formularze-zus">
                <Button className="bg-white text-orange-600 hover:bg-blue-50 font-bold px-8 py-3 text-lg shadow-lg">
                  Formularze ZUS
                </Button>
              </Link>
              <Link href="/narzedzia">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 font-bold px-8 py-3 text-lg">
                  Inne narzędzia
                </Button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
