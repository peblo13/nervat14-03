'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { Calculator, ArrowRight, ArrowLeftRight, Info, FileText, CheckCircle } from 'lucide-react'
import { AdSenseDisplay728x90, AdSenseDisplayAuto, AdSenseDisplay300x250 } from '@/components/adsense-banner'

const VAT_RATES = [
  { value: 23, label: '23% - Standardowa' },
  { value: 8, label: '8% - Obnizona' },
  { value: 5, label: '5% - Obnizona' },
  { value: 0, label: '0% - Zwolniona' },
]

export default function KalkulatorVATPage() {
  const [amount, setAmount] = useState<string>('')
  const [vatRate, setVatRate] = useState<number>(23)
  const [calculationType, setCalculationType] = useState<'netto_to_brutto' | 'brutto_to_netto'>('netto_to_brutto')

  const numericAmount = parseFloat(amount) || 0

  const calculateVAT = () => {
    if (calculationType === 'netto_to_brutto') {
      const vatAmount = numericAmount * (vatRate / 100)
      const bruttoAmount = numericAmount + vatAmount
      return { netto: numericAmount, vat: vatAmount, brutto: bruttoAmount }
    } else {
      const nettoAmount = numericAmount / (1 + vatRate / 100)
      const vatAmount = numericAmount - nettoAmount
      return { netto: nettoAmount, vat: vatAmount, brutto: numericAmount }
    }
  }

  const result = calculateVAT()

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pl-PL', {
      style: 'currency',
      currency: 'PLN',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/50 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900/40 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg">
              <FileText className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">VAT Faktura</span>
          </Link>
          <nav className="hidden sm:flex items-center gap-4">
            <Link href="/kalkulator-pit" className="text-blue-200 hover:text-white transition">Kalkulator PIT</Link>
            <Link href="/dashboard" className="text-blue-200 hover:text-white transition">Faktura</Link>
            <Link href="/register">
              <Button className="bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-500 hover:to-cyan-500">
                Rejestracja
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/15 border border-blue-500/30 rounded-full text-sm font-medium text-blue-300 mb-6">
            <Calculator className="w-4 h-4" />
            Darmowe narzedzie online
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Kalkulator VAT
          </h1>
          <p className="text-lg text-blue-200/70 max-w-2xl mx-auto">
            Szybko oblicz kwote netto, brutto i VAT. Wybierz stawke VAT i kierunek obliczen.
          </p>
        </div>

        {/* AdSense - Leaderboard */}
        <AdSenseDisplay728x90 />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {/* Calculator */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-800/50 border border-blue-500/20 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Calculator className="w-6 h-6 text-cyan-400" />
                Oblicz VAT
              </h2>

              {/* Calculation Type Toggle */}
              <div className="flex gap-2 mb-6">
                <button
                  onClick={() => setCalculationType('netto_to_brutto')}
                  className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all ${
                    calculationType === 'netto_to_brutto'
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-700/50 text-blue-200 hover:bg-slate-700'
                  }`}
                >
                  Netto do Brutto
                </button>
                <button
                  onClick={() => setCalculationType('brutto_to_netto')}
                  className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all ${
                    calculationType === 'brutto_to_netto'
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-700/50 text-blue-200 hover:bg-slate-700'
                  }`}
                >
                  Brutto do Netto
                </button>
              </div>

              {/* Amount Input */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-blue-200 mb-2">
                  Kwota {calculationType === 'netto_to_brutto' ? 'netto' : 'brutto'} (PLN)
                </label>
                <Input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Wprowadz kwote..."
                  className="bg-slate-700/50 border-blue-500/30 text-white text-lg h-12 focus:border-cyan-400"
                />
              </div>

              {/* VAT Rate Selection */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-blue-200 mb-2">
                  Stawka VAT
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {VAT_RATES.map((rate) => (
                    <button
                      key={rate.value}
                      onClick={() => setVatRate(rate.value)}
                      className={`px-4 py-3 rounded-lg font-medium transition-all ${
                        vatRate === rate.value
                          ? 'bg-cyan-600 text-white'
                          : 'bg-slate-700/50 text-blue-200 hover:bg-slate-700'
                      }`}
                    >
                      {rate.value}%
                    </button>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <ArrowLeftRight className="w-5 h-5 text-cyan-400" />
                  Wynik obliczen
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-blue-500/20">
                    <span className="text-blue-200">Kwota netto:</span>
                    <span className="text-xl font-bold text-white">{formatCurrency(result.netto)}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-blue-500/20">
                    <span className="text-blue-200">VAT ({vatRate}%):</span>
                    <span className="text-xl font-bold text-cyan-400">{formatCurrency(result.vat)}</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-blue-200">Kwota brutto:</span>
                    <span className="text-2xl font-black text-green-400">{formatCurrency(result.brutto)}</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 text-center">
                <p className="text-blue-200/70 mb-4">Chcesz wystawic fakture z tym obliczeniem?</p>
                <Link href="/register">
                  <Button className="bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-500 hover:to-cyan-500 px-8 py-3 text-lg font-bold">
                    Wystaw fakture za darmo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* AdSense - Rectangle */}
            <AdSenseDisplay300x250 />

            {/* Info Card */}
            <Card className="bg-slate-800/50 border border-blue-500/20 p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Info className="w-5 h-5 text-cyan-400" />
                Stawki VAT w Polsce
              </h3>
              <ul className="space-y-3 text-sm text-blue-200/80">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong>23%</strong> - standardowa stawka dla wiekszosci towarow i uslug</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong>8%</strong> - budownictwo mieszkaniowe, gastronomia, transport</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong>5%</strong> - zywnosc, ksiazki, czasopisma</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong>0%</strong> - eksport, wewnatrzwspolnotowa dostawa towarow</span>
                </li>
              </ul>
            </Card>

            {/* AdSense - Rectangle */}
            <AdSenseDisplay300x250 />
          </div>
        </div>

        {/* SEO Content */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-6">Jak obliczyc VAT?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-slate-800/50 border border-blue-500/20 p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Obliczanie VAT od kwoty netto</h3>
              <p className="text-blue-200/70 text-sm leading-relaxed mb-4">
                Aby obliczyc kwote brutto z netto, nalezy pomnozyc kwote netto przez stawke VAT i dodac do kwoty netto.
              </p>
              <div className="bg-slate-700/50 rounded-lg p-4 font-mono text-sm text-cyan-300">
                Brutto = Netto + (Netto x Stawka VAT)<br />
                Brutto = 1000 + (1000 x 0.23) = 1230 PLN
              </div>
            </Card>
            <Card className="bg-slate-800/50 border border-blue-500/20 p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Obliczanie netto od kwoty brutto</h3>
              <p className="text-blue-200/70 text-sm leading-relaxed mb-4">
                Aby obliczyc kwote netto z brutto, nalezy podzielic kwote brutto przez (1 + stawka VAT).
              </p>
              <div className="bg-slate-700/50 rounded-lg p-4 font-mono text-sm text-cyan-300">
                Netto = Brutto / (1 + Stawka VAT)<br />
                Netto = 1230 / 1.23 = 1000 PLN
              </div>
            </Card>
          </div>
        </section>

        {/* AdSense - Auto */}
        <div className="mt-12">
          <AdSenseDisplayAuto />
        </div>

        {/* FAQ */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-6">Czesto zadawane pytania</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Czym jest VAT?',
                a: 'VAT (Value Added Tax) to podatek od wartosci dodanej, ktory jest doliczany do ceny towarow i uslug. W Polsce obowiazuja stawki 23%, 8%, 5% i 0%.',
              },
              {
                q: 'Kiedy stosuje sie stawke 23%?',
                a: 'Stawka 23% to podstawowa stawka VAT w Polsce, stosowana do wiekszosci towarow i uslug, ktore nie sa objete stawkami obnizonymimi.',
              },
              {
                q: 'Jak wystawic fakture VAT?',
                a: 'Mozesz wystawic fakture VAT za darmo korzystajac z naszego programu. Wystarczy sie zarejestrowac i wypelnic dane kontrahenta oraz pozycje faktury.',
              },
              {
                q: 'Czy kalkulator VAT jest darmowy?',
                a: 'Tak! Nasz kalkulator VAT jest calkowicie darmowy i nie wymaga rejestracji. Mozesz z niego korzystac bez ograniczen.',
              },
            ].map((item, idx) => (
              <Card key={idx} className="bg-slate-800/50 border border-blue-500/20 p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{item.q}</h3>
                <p className="text-blue-200/70">{item.a}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border-2 border-blue-500/50 p-10">
            <h2 className="text-3xl font-bold text-white mb-4">Potrzebujesz wystawic fakture?</h2>
            <p className="text-lg text-blue-200/80 mb-8 max-w-2xl mx-auto">
              VAT Faktura to bezplatny program do wystawiania faktur z integracja KSEF. Zacznij juz dzis!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button className="bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-500 hover:to-cyan-500 px-8 py-3 text-lg font-bold">
                  Zaloz darmowe konto
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/kalkulator-pit">
                <Button variant="outline" className="border-blue-500/50 text-blue-300 hover:bg-blue-500/10 px-8 py-3 text-lg">
                  Kalkulator PIT
                </Button>
              </Link>
            </div>
          </Card>
        </section>
      </main>
    </div>
  )
}
