'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { Calculator, ArrowRight, Info, FileText, CheckCircle, TrendingUp, Percent } from 'lucide-react'
import { AdSenseDisplay728x90, AdSenseDisplayAuto, AdSenseDisplay300x250 } from '@/components/adsense-banner'

// PIT thresholds for 2026
const FIRST_THRESHOLD = 120000 // First tax bracket threshold
const TAX_RATE_12 = 0.12 // 12% tax rate
const TAX_RATE_32 = 0.32 // 32% tax rate
const TAX_FREE_AMOUNT = 30000 // Tax-free amount
const HEALTH_INSURANCE_RATE = 0.09 // 9% health insurance
const SOCIAL_INSURANCE_RATE = 0.1371 // ~13.71% social insurance (approximate)

export default function KalkulatorPITPage() {
  const [grossIncome, setGrossIncome] = useState<string>('')
  const [taxForm, setTaxForm] = useState<'pit37' | 'pit36' | 'liniowy'>('pit37')
  const [hasSpouse, setHasSpouse] = useState(false)

  const income = parseFloat(grossIncome) || 0

  const calculateTax = () => {
    if (income <= 0) {
      return { tax: 0, netIncome: 0, effectiveRate: 0, healthInsurance: 0, socialInsurance: 0 }
    }

    let taxableIncome = income
    let tax = 0
    const healthInsurance = income * HEALTH_INSURANCE_RATE
    const socialInsurance = income * SOCIAL_INSURANCE_RATE

    if (taxForm === 'liniowy') {
      // Linear tax 19%
      tax = Math.max(0, taxableIncome * 0.19)
    } else {
      // Progressive tax (PIT-37, PIT-36)
      const effectiveTaxFree = hasSpouse ? TAX_FREE_AMOUNT * 2 : TAX_FREE_AMOUNT
      const effectiveThreshold = hasSpouse ? FIRST_THRESHOLD * 2 : FIRST_THRESHOLD

      taxableIncome = Math.max(0, taxableIncome - effectiveTaxFree)

      if (taxableIncome <= 0) {
        tax = 0
      } else if (taxableIncome <= effectiveThreshold - effectiveTaxFree) {
        tax = taxableIncome * TAX_RATE_12
      } else {
        const firstBracketTax = (effectiveThreshold - effectiveTaxFree) * TAX_RATE_12
        const secondBracketTax = (taxableIncome - (effectiveThreshold - effectiveTaxFree)) * TAX_RATE_32
        tax = firstBracketTax + secondBracketTax
      }
    }

    const totalDeductions = tax + healthInsurance + socialInsurance
    const netIncome = income - totalDeductions
    const effectiveRate = income > 0 ? (tax / income) * 100 : 0

    return {
      tax: Math.max(0, tax),
      netIncome: Math.max(0, netIncome),
      effectiveRate,
      healthInsurance,
      socialInsurance,
      totalDeductions,
    }
  }

  const result = calculateTax()

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pl-PL', {
      style: 'currency',
      currency: 'PLN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900/30 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900/40 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-lg">
              <FileText className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">VAT Faktura</span>
          </Link>
          <nav className="hidden sm:flex items-center gap-4">
            <Link href="/kalkulator-vat" className="text-emerald-200 hover:text-white transition">Kalkulator VAT</Link>
            <Link href="/dashboard/pit" className="text-emerald-200 hover:text-white transition">Rozlicz PIT</Link>
            <Link href="/register">
              <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500">
                Rejestracja
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/15 border border-emerald-500/30 rounded-full text-sm font-medium text-emerald-300 mb-6">
            <Calculator className="w-4 h-4" />
            Kalkulator podatkowy 2026
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Kalkulator PIT
          </h1>
          <p className="text-lg text-emerald-200/70 max-w-2xl mx-auto">
            Oblicz swoj podatek dochodowy PIT na rok 2026. Sprawdz ile zaplacisz podatku i ile zostanie Ci na reke.
          </p>
        </div>

        {/* AdSense - Leaderboard */}
        <AdSenseDisplay728x90 />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {/* Calculator */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-800/50 border border-emerald-500/20 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Calculator className="w-6 h-6 text-teal-400" />
                Oblicz podatek PIT
              </h2>

              {/* Tax Form Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-emerald-200 mb-2">
                  Forma opodatkowania
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setTaxForm('pit37')}
                    className={`px-4 py-3 rounded-lg font-medium transition-all text-sm ${
                      taxForm === 'pit37'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-700/50 text-emerald-200 hover:bg-slate-700'
                    }`}
                  >
                    PIT-37
                  </button>
                  <button
                    onClick={() => setTaxForm('pit36')}
                    className={`px-4 py-3 rounded-lg font-medium transition-all text-sm ${
                      taxForm === 'pit36'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-700/50 text-emerald-200 hover:bg-slate-700'
                    }`}
                  >
                    PIT-36
                  </button>
                  <button
                    onClick={() => setTaxForm('liniowy')}
                    className={`px-4 py-3 rounded-lg font-medium transition-all text-sm ${
                      taxForm === 'liniowy'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-700/50 text-emerald-200 hover:bg-slate-700'
                    }`}
                  >
                    Liniowy 19%
                  </button>
                </div>
              </div>

              {/* Income Input */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-emerald-200 mb-2">
                  Roczny przychod brutto (PLN)
                </label>
                <Input
                  type="number"
                  value={grossIncome}
                  onChange={(e) => setGrossIncome(e.target.value)}
                  placeholder="Wprowadz roczny przychod..."
                  className="bg-slate-700/50 border-emerald-500/30 text-white text-lg h-12 focus:border-teal-400"
                />
              </div>

              {/* Joint Filing Option */}
              {taxForm !== 'liniowy' && (
                <div className="mb-8">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={hasSpouse}
                      onChange={(e) => setHasSpouse(e.target.checked)}
                      className="w-5 h-5 rounded border-emerald-500/30 bg-slate-700/50 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="text-emerald-200">Rozliczenie wspolne z malzonkiem</span>
                  </label>
                </div>
              )}

              {/* Results */}
              <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 border border-emerald-500/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-teal-400" />
                  Wynik obliczen
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-emerald-500/20">
                    <span className="text-emerald-200">Przychod brutto:</span>
                    <span className="text-xl font-bold text-white">{formatCurrency(income)}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-emerald-500/20">
                    <span className="text-emerald-200">Skladka zdrowotna (9%):</span>
                    <span className="text-lg font-semibold text-orange-400">-{formatCurrency(result.healthInsurance)}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-emerald-500/20">
                    <span className="text-emerald-200">Skladki spoleczne (~13.7%):</span>
                    <span className="text-lg font-semibold text-orange-400">-{formatCurrency(result.socialInsurance)}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-emerald-500/20">
                    <span className="text-emerald-200">Podatek PIT:</span>
                    <span className="text-xl font-bold text-red-400">-{formatCurrency(result.tax)}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-emerald-500/20">
                    <span className="text-emerald-200">Efektywna stawka podatkowa:</span>
                    <span className="text-lg font-semibold text-teal-400">{result.effectiveRate.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between items-center py-4 bg-slate-800/50 rounded-lg px-4 -mx-2">
                    <span className="text-emerald-200 font-medium">Dochod netto (na reke):</span>
                    <span className="text-2xl font-black text-green-400">{formatCurrency(result.netIncome)}</span>
                  </div>
                  <div className="text-center text-sm text-emerald-200/60 mt-2">
                    Miesiecznie: <span className="font-semibold text-white">{formatCurrency(result.netIncome / 12)}</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 text-center">
                <p className="text-emerald-200/70 mb-4">Chcesz rozliczyc PIT online?</p>
                <Link href="/dashboard/pit">
                  <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 px-8 py-3 text-lg font-bold">
                    Rozlicz PIT za darmo
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
            <Card className="bg-slate-800/50 border border-emerald-500/20 p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Info className="w-5 h-5 text-teal-400" />
                Progi podatkowe 2026
              </h3>
              <ul className="space-y-3 text-sm text-emerald-200/80">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong>30 000 PLN</strong> - kwota wolna od podatku</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong>12%</strong> - podatek do 120 000 PLN dochodu</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong>32%</strong> - podatek powyzej 120 000 PLN</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong>19%</strong> - podatek liniowy (dzialalnosc)</span>
                </li>
              </ul>
            </Card>

            {/* Tax Forms Card */}
            <Card className="bg-slate-800/50 border border-emerald-500/20 p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Percent className="w-5 h-5 text-teal-400" />
                Formularze PIT
              </h3>
              <ul className="space-y-3 text-sm text-emerald-200/80">
                <li><strong>PIT-37</strong> - dla pracownikow etatowych</li>
                <li><strong>PIT-36</strong> - dla przedsiebiorcow (skala)</li>
                <li><strong>PIT-36L</strong> - podatek liniowy 19%</li>
                <li><strong>PIT-28</strong> - ryczalt od przychodow</li>
                <li><strong>PIT-38</strong> - zyski kapitalowe</li>
              </ul>
            </Card>

            {/* AdSense - Rectangle */}
            <AdSenseDisplay300x250 />
          </div>
        </div>

        {/* SEO Content */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-6">Jak obliczyc podatek PIT?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-slate-800/50 border border-emerald-500/20 p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Skala podatkowa (PIT-37, PIT-36)</h3>
              <p className="text-emerald-200/70 text-sm leading-relaxed mb-4">
                W Polsce obowiazuje dwustopniowa skala podatkowa. Podatek 12% placisz od dochodu do 120 000 PLN, a 32% od nadwyzki.
              </p>
              <div className="bg-slate-700/50 rounded-lg p-4 font-mono text-sm text-teal-300">
                Do 120 000 PLN: 12% podatku<br />
                Powyzej 120 000 PLN: 32% podatku<br />
                Kwota wolna: 30 000 PLN
              </div>
            </Card>
            <Card className="bg-slate-800/50 border border-emerald-500/20 p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Podatek liniowy (PIT-36L)</h3>
              <p className="text-emerald-200/70 text-sm leading-relaxed mb-4">
                Podatek liniowy 19% jest opcja dla przedsiebiorcow. Nie ma progow ani kwoty wolnej - placisz stala stawke od calego dochodu.
              </p>
              <div className="bg-slate-700/50 rounded-lg p-4 font-mono text-sm text-teal-300">
                Stawka: 19% od dochodu<br />
                Brak kwoty wolnej<br />
                Brak progow podatkowych
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
          <h2 className="text-2xl font-bold text-white mb-6">Czesto zadawane pytania o PIT</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Do kiedy trzeba zlozyc PIT?',
                a: 'Zeznanie roczne PIT nalezy zlozyc do 30 kwietnia nastepnego roku. Na przyklad PIT za 2025 rok skladamy do 30 kwietnia 2026.',
              },
              {
                q: 'Czy moge rozliczyc PIT online?',
                a: 'Tak! Mozesz rozliczyc PIT online za darmo korzystajac z naszego programu VAT Faktura. Wysylamy deklaracje bezposrednio do urzedu skarbowego.',
              },
              {
                q: 'Co to jest kwota wolna od podatku?',
                a: 'Kwota wolna od podatku to 30 000 PLN rocznie. Oznacza to, ze od pierwszych 30 000 PLN dochodu nie placisz podatku dochodowego.',
              },
              {
                q: 'Kiedy warto wybrac podatek liniowy?',
                a: 'Podatek liniowy 19% oplaca sie zazwyczaj przy dochodach powyzej 100 000-120 000 PLN rocznie, gdy skala podatkowa byalaby mniej korzystna.',
              },
            ].map((item, idx) => (
              <Card key={idx} className="bg-slate-800/50 border border-emerald-500/20 p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{item.q}</h3>
                <p className="text-emerald-200/70">{item.a}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 border-2 border-emerald-500/50 p-10">
            <h2 className="text-3xl font-bold text-white mb-4">Rozlicz PIT online za darmo</h2>
            <p className="text-lg text-emerald-200/80 mb-8 max-w-2xl mx-auto">
              VAT Faktura oferuje bezplatne rozliczenie PIT-37, PIT-36, PIT-36L, PIT-28 i innych. Wyslij deklaracje do urzedu skarbowego jednym kliknieciem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard/pit">
                <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 px-8 py-3 text-lg font-bold">
                  Rozlicz PIT teraz
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/kalkulator-vat">
                <Button variant="outline" className="border-emerald-500/50 text-emerald-300 hover:bg-emerald-500/10 px-8 py-3 text-lg">
                  Kalkulator VAT
                </Button>
              </Link>
            </div>
          </Card>
        </section>
      </main>
    </div>
  )
}
