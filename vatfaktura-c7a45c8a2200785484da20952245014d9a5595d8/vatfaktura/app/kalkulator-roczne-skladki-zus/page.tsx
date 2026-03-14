'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Calculator, RotateCcw, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { AdSenseDisplay728x90, AdSenseDisplayAuto } from '@/components/adsense-banner'
import { CalculatorSchema } from '@/components/calculator-schema'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'

export const metadata: Metadata = {
  title: 'Kalkulator Rocznych Składek ZUS 2024 - Przedsiębiorca',
  description: 'Bezpłatny kalkulator rocznych składek ZUS dla przedsiębiorców. Oblicz całoroczne składki na emeryturę, rentę, chorobę i ubezpieczenie zdrowotne.',
  keywords: 'roczne składki ZUS, kalkulator ZUS, przedsiębiorca, roczne ubezpieczenie, składki roczne',
  openGraph: {
    title: 'Kalkulator Rocznych Składek ZUS',
    description: 'Oblicz całoroczne składki ZUS dla przedsiębiorcy 2024',
    type: 'website',
    url: 'https://www.vatfaktura.pl/kalkulator-roczne-skladki-zus',
    images: [{ url: 'https://www.vatfaktura.pl/og-image.png' }],
  },
}

export default function KalkulatorRocznyZUSPage() {
  const [annualIncome, setAnnualIncome] = useState(120000)
  const [showDetails, setShowDetails] = useState(false)

  // Stawki ZUS 2024 dla przedsiębiorców
  const CONTRIBUTION_RATES = {
    pension: 19.52,
    disability: 8.0,
    sickness: 2.45,
    total: 30.0,
    health: 9.0,
  }

  const monthlyIncome = annualIncome / 12
  const pensionContribution = (monthlyIncome * CONTRIBUTION_RATES.pension) / 100
  const disabilityContribution = (monthlyIncome * CONTRIBUTION_RATES.disability) / 100
  const sicknessContribution = (monthlyIncome * CONTRIBUTION_RATES.sickness) / 100
  const totalMonthly = pensionContribution + disabilityContribution + sicknessContribution
  const healthContribution = (monthlyIncome * CONTRIBUTION_RATES.health) / 100
  const totalMonthlyContributions = totalMonthly + healthContribution

  const annualPensionContribution = pensionContribution * 12
  const annualDisabilityContribution = disabilityContribution * 12
  const annualSicknessContribution = sicknessContribution * 12
  const annualHealthContribution = healthContribution * 12
  const totalAnnualContributions = totalMonthlyContributions * 12
  const netAnnualIncome = annualIncome - totalAnnualContributions

  const handleReset = () => {
    setAnnualIncome(120000)
    setShowDetails(false)
  }

  const breadcrumbs = [
    { name: 'Strona główna', url: 'https://www.vatfaktura.pl' },
    { name: 'Narzędzia', url: 'https://www.vatfaktura.pl/narzedzia' },
    { name: 'Kalkulator Rocznych Składek ZUS', url: 'https://www.vatfaktura.pl/kalkulator-roczne-skladki-zus' }
  ]

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      <CalculatorSchema 
        title="Kalkulator Rocznych Składek ZUS"
        description="Oblicz całoroczne składki ZUS dla przedsiębiorcy"
        url="https://www.vatfaktura.pl/kalkulator-roczne-skladki-zus"
      />
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Background elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="bg-slate-900/40 backdrop-blur-xl border-b border-white/10 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Calculator className="w-6 h-6 text-emerald-400" />
              <span className="text-xl font-bold text-white">VAT Faktura</span>
            </Link>
            <Link href="/narzedzia">
              <Button variant="outline" className="border-green-500/40 text-green-300 hover:bg-green-500/10">
                Więcej narzędzi
              </Button>
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent mb-4">
              Kalkulator Rocznych Składek ZUS
            </h1>
            <p className="text-lg text-green-200/70 max-w-2xl mx-auto">
              Oblicz całoroczne składki ZUS dla przedsiębiorcy na 2024. Sprawdź ile zapłacisz razem przez cały rok.
            </p>
          </div>

          {/* AdSense Banner */}
          <div className="mb-12">
            <AdSenseDisplay728x90 />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Calculator Panel */}
            <div className="lg:col-span-1">
              <Card className="bg-slate-800/50 border-green-500/20 p-6 sm:p-8 sticky top-24">
                <h2 className="text-2xl font-bold text-white mb-6">Obliczenia</h2>

                {/* Income Input */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-green-200/80 mb-2">
                    Roczny przychód (PLN)
                  </label>
                  <input
                    type="number"
                    value={annualIncome}
                    onChange={(e) => setAnnualIncome(Number(e.target.value) || 0)}
                    className="w-full px-4 py-2 bg-slate-700/50 border border-green-500/30 rounded-lg text-white focus:outline-none focus:border-green-400/60 transition-all"
                  />
                  <input
                    type="range"
                    min="0"
                    max="1000000"
                    step="1000"
                    value={annualIncome}
                    onChange={(e) => setAnnualIncome(Number(e.target.value))}
                    className="w-full mt-3 accent-green-500"
                  />
                  <div className="flex justify-between text-xs text-green-300/60 mt-2">
                    <span>0 zł</span>
                    <span>1 000 000 zł</span>
                  </div>
                </div>

                {/* Results */}
                <div className="space-y-3 mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <div className="flex justify-between">
                    <span className="text-green-200/70">Miesięcznie:</span>
                    <span className="font-bold text-green-300">{totalMonthlyContributions.toFixed(2)} zł</span>
                  </div>
                  <div className="flex justify-between border-t border-green-500/20 pt-3">
                    <span className="text-lg font-semibold text-green-300">Rocznie:</span>
                    <span className="text-lg font-bold text-emerald-300">{totalAnnualContributions.toFixed(2)} zł</span>
                  </div>
                  <div className="flex justify-between border-t border-green-500/20 pt-3">
                    <span className="text-green-200/70">Netto roczne:</span>
                    <span className="font-bold text-emerald-400">{netAnnualIncome.toFixed(2)} zł</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button 
                    onClick={() => setShowDetails(!showDetails)}
                    className="flex-1 bg-green-600 hover:bg-green-700"
                  >
                    {showDetails ? 'Ukryj' : 'Szczegóły'}
                  </Button>
                  <Button 
                    onClick={handleReset}
                    variant="outline"
                    className="flex-1"
                  >
                    Resetuj
                  </Button>
                </div>
              </Card>
            </div>

            {/* Results Panel */}
            <div className="lg:col-span-2 space-y-6">
              {/* Annual Breakdown */}
              <Card className="bg-slate-800/50 border-green-500/20 p-6 sm:p-8">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                  Rozkład rocznych składek
                </h3>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                    <p className="text-xs text-blue-300/70 mb-2">Emerytura</p>
                    <p className="text-lg sm:text-xl font-bold text-blue-200">{annualPensionContribution.toFixed(2)} zł</p>
                    <p className="text-xs text-blue-300/50 mt-1">19.52% przychodu</p>
                  </div>
                  <div className="p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                    <p className="text-xs text-cyan-300/70 mb-2">Renta</p>
                    <p className="text-lg sm:text-xl font-bold text-cyan-200">{annualDisabilityContribution.toFixed(2)} zł</p>
                    <p className="text-xs text-cyan-300/50 mt-1">8% przychodu</p>
                  </div>
                  <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                    <p className="text-xs text-emerald-300/70 mb-2">Choroba</p>
                    <p className="text-lg sm:text-xl font-bold text-emerald-200">{annualSicknessContribution.toFixed(2)} zł</p>
                    <p className="text-xs text-emerald-300/50 mt-1">2.45% przychodu</p>
                  </div>
                  <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                    <p className="text-xs text-purple-300/70 mb-2">Zdrowotne</p>
                    <p className="text-lg sm:text-xl font-bold text-purple-200">{annualHealthContribution.toFixed(2)} zł</p>
                    <p className="text-xs text-purple-300/50 mt-1">9% przychodu</p>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30">
                  <p className="text-sm text-green-300/70 mb-2">Razem roczne składki ZUS</p>
                  <p className="text-3xl font-bold text-green-300">{totalAnnualContributions.toFixed(2)} zł</p>
                </div>
              </Card>

              {/* Additional Info */}
              <Card className="bg-slate-800/50 border-blue-500/20 p-6 sm:p-8">
                <h3 className="text-lg font-bold text-white mb-4">Informacje</h3>
                <ul className="space-y-3 text-sm text-blue-200/70">
                  <li className="flex gap-3">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>Stawki ZUS na 2024 rok dla przedsiębiorców</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>Składki miesięczne obliczane na podstawie przychodu</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>Możliwość wyboru ulg i preferencji ZUS</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>Kalkulator zaktualizowany na bieżąco</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>

          {showDetails && (
            <Card className="bg-slate-800/50 border-green-500/20 p-6 sm:p-8 mb-12">
              <h3 className="text-lg font-bold text-white mb-6">Szczegółowe obliczenia</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-sm text-green-300/70 font-semibold mb-4">Przychód roczny</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-green-200/70">Przychód brutto:</span>
                      <span className="text-green-200">{annualIncome.toFixed(2)} zł</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-200/70">Średnio miesięcznie:</span>
                      <span className="text-green-200">{monthlyIncome.toFixed(2)} zł</span>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-green-300/70 font-semibold mb-4">Podsumowanie netto</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-green-200/70">Roczne składki:</span>
                      <span className="text-red-300">{totalAnnualContributions.toFixed(2)} zł</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-green-500/20">
                      <span className="text-green-300 font-semibold">Do kieszeni (netto):</span>
                      <span className="text-emerald-300 font-bold">{netAnnualIncome.toFixed(2)} zł</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {/* AdSense Banner */}
          <div className="mb-12">
            <AdSenseDisplayAuto />
          </div>

          {/* Related Tools */}
          <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-500/20 rounded-2xl p-8 sm:p-12">
            <h2 className="text-2xl font-bold text-white mb-8">Powiązane narzędzia</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/kalkulator-zus" className="p-4 bg-slate-800/50 border border-green-500/20 rounded-lg hover:border-green-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">Kalkulator Składek</h3>
                <p className="text-sm text-green-200/70">Oblicz miesięczne składki ZUS</p>
              </Link>
              <Link href="/kalkulator-wynagrodzen" className="p-4 bg-slate-800/50 border border-green-500/20 rounded-lg hover:border-green-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">Kalkulator Wynagrodzeń</h3>
                <p className="text-sm text-green-200/70">Oblicz wynagrodzenie netto</p>
              </Link>
              <Link href="/formularze-zus" className="p-4 bg-slate-800/50 border border-green-500/20 rounded-lg hover:border-green-500/50 transition-all">
                <h3 className="font-semibold text-white mb-2">Formularze ZUS</h3>
                <p className="text-sm text-green-200/70">Wszystkie generatory formularzy</p>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
