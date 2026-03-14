'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Calculator, RotateCcw, Info } from 'lucide-react'
import { AdSenseDisplay728x90, AdSenseDisplayAuto, AdSenseDisplay300x250 } from '@/components/adsense-banner'

export function KalkulatorZUSClient() {
  const [income, setIncome] = useState<number>(10000)
  const [showDetails, setShowDetails] = useState(false)

  // Stawki ZUS 2024 dla przedsiębiorców
  const CONTRIBUTION_RATES = {
    pension: 19.52, // Emerytura
    disability: 8.0, // Renta inwalidztwa
    sickness: 2.45, // Choroba
    total: 30.0, // Razem (ubezpieczenia społeczne)
    health: 9.0, // Ubezpieczenie zdrowotne (od dochodu)
  }

  const pensionContribution = (income * CONTRIBUTION_RATES.pension) / 100
  const disabilityContribution = (income * CONTRIBUTION_RATES.disability) / 100
  const sicknessContribution = (income * CONTRIBUTION_RATES.sickness) / 100
  const totalSocialContributions = pensionContribution + disabilityContribution + sicknessContribution
  const healthContribution = (income * CONTRIBUTION_RATES.health) / 100
  const totalContributions = totalSocialContributions + healthContribution
  const netIncome = income - totalContributions

  const handleReset = () => {
    setIncome(10000)
    setShowDetails(false)
  }

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="bg-slate-900/40 backdrop-blur-xl border-b border-white/10 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Calculator className="w-6 h-6 text-cyan-400" />
              <span className="text-xl font-bold text-white">VAT Faktura</span>
            </Link>
            <Link href="/narzedzia">
              <Button variant="outline" className="border-blue-500/40 text-blue-300 hover:bg-blue-500/10">
                Więcej narzędzi
              </Button>
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-4">
              Kalkulator ZUS
            </h1>
            <p className="text-lg text-blue-200/70 max-w-2xl mx-auto">
              Oblicz składki ZUS dla przedsiębiorców na 2024. Emerytura, renta, choroba i ubezpieczenie zdrowotne.
            </p>
          </div>

          {/* Baner AdSense */}
          <div className="mb-12">
            <AdSenseDisplay728x90 />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Calculator */}
            <div className="lg:col-span-1">
              <Card className="bg-slate-800/50 border-blue-500/20 p-6 sm:p-8 sticky top-24">
                <h2 className="text-2xl font-bold text-white mb-6">Obliczenia</h2>

                {/* Income Input */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-blue-200/80 mb-2">
                    Dochód miesięczny (PLN)
                  </label>
                  <input
                    type="number"
                    value={income}
                    onChange={(e) => setIncome(Number(e.target.value) || 0)}
                    className="w-full px-4 py-2 bg-slate-700/50 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:border-blue-400/60 transition-all"
                  />
                  <input
                    type="range"
                    min="0"
                    max="100000"
                    step="100"
                    value={income}
                    onChange={(e) => setIncome(Number(e.target.value))}
                    className="w-full mt-2 h-2 bg-blue-500/20 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                {/* Quick Actions */}
                <div className="flex gap-2">
                  <Button
                    onClick={handleReset}
                    variant="outline"
                    className="flex-1 border-blue-500/30 text-blue-300 hover:bg-blue-500/10 text-sm"
                  >
                    <RotateCcw className="w-4 h-4 mr-1.5" />
                    Reset
                  </Button>
                </div>
              </Card>
            </div>

            {/* Results */}
            <div className="lg:col-span-2 space-y-4">
              {/* Main Results */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="bg-gradient-to-br from-emerald-600/20 to-green-600/20 border-emerald-500/30 p-6">
                  <p className="text-sm text-emerald-200/70 mb-1">Dochód brutto</p>
                  <p className="text-3xl sm:text-4xl font-bold text-emerald-300">
                    {income.toLocaleString('pl-PL', { maximumFractionDigits: 2 })} zł
                  </p>
                </Card>

                <Card className="bg-gradient-to-br from-red-600/20 to-pink-600/20 border-red-500/30 p-6">
                  <p className="text-sm text-red-200/70 mb-1">Składki ZUS razem</p>
                  <p className="text-3xl sm:text-4xl font-bold text-red-300">
                    -{totalContributions.toLocaleString('pl-PL', { maximumFractionDigits: 2 })} zł
                  </p>
                </Card>

                <Card className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 border-cyan-500/30 p-6 sm:col-span-2">
                  <p className="text-sm text-cyan-200/70 mb-1">Dochód netto (do dyspozycji)</p>
                  <p className="text-3xl sm:text-4xl font-bold text-cyan-300">
                    {netIncome.toLocaleString('pl-PL', { maximumFractionDigits: 2 })} zł
                  </p>
                  <p className="text-xs text-cyan-200/50 mt-2">
                    {((totalContributions / income) * 100).toFixed(1)}% dochodu na składki
                  </p>
                </Card>
              </div>

              {/* Breakdown */}
              <Card className="bg-slate-800/50 border-blue-500/20 p-6">
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="flex items-center gap-2 text-white font-semibold hover:text-cyan-300 transition-colors"
                >
                  <Info className="w-5 h-5" />
                  {showDetails ? 'Ukryj' : 'Pokaż'} szczegóły
                </button>

                {showDetails && (
                  <div className="mt-4 space-y-3 pt-4 border-t border-blue-500/20">
                    <div className="flex justify-between text-sm">
                      <span className="text-blue-200/70">Emerytura (19.52%)</span>
                      <span className="text-white font-medium">{pensionContribution.toLocaleString('pl-PL', { maximumFractionDigits: 2 })} zł</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-blue-200/70">Renta inwalidztwa (8.0%)</span>
                      <span className="text-white font-medium">{disabilityContribution.toLocaleString('pl-PL', { maximumFractionDigits: 2 })} zł</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-blue-200/70">Ubezpieczenie chorobowe (2.45%)</span>
                      <span className="text-white font-medium">{sicknessContribution.toLocaleString('pl-PL', { maximumFractionDigits: 2 })} zł</span>
                    </div>
                    <div className="flex justify-between text-sm font-semibold pt-2 border-t border-blue-500/20">
                      <span className="text-blue-300">Ubezpieczenia społeczne razem</span>
                      <span className="text-cyan-300">{totalSocialContributions.toLocaleString('pl-PL', { maximumFractionDigits: 2 })} zł</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-blue-200/70">Ubezpieczenie zdrowotne (9.0%)</span>
                      <span className="text-white font-medium">{healthContribution.toLocaleString('pl-PL', { maximumFractionDigits: 2 })} zł</span>
                    </div>
                  </div>
                )}
              </Card>
            </div>
          </div>

          {/* Info Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-slate-800/50 border-blue-500/20 p-6">
              <h3 className="text-xl font-bold text-white mb-4">O kalkulatorze</h3>
              <p className="text-blue-200/70 text-sm leading-relaxed mb-3">
                Kalkulator ZUS oblicza składki na ubezpieczenia społeczne dla przedsiębiorców na 2024 roku.
              </p>
              <p className="text-blue-200/70 text-sm leading-relaxed">
                Uwaga: Kalkulator jest przybliżoną kalkulacją. Dokładne obliczenia mogą się różnić ze względu na różne warunki ubezpieczenia.
              </p>
            </Card>

            <Card className="bg-slate-800/50 border-blue-500/20 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Stawki na 2024</h3>
              <ul className="text-blue-200/70 text-sm space-y-2">
                <li>• Emerytura: 19.52%</li>
                <li>• Renta inwalidztwa: 8.0%</li>
                <li>• Choroba: 2.45%</li>
                <li>• Zdrowotne: 9.0%</li>
                <li>• Razem: 38.97%</li>
              </ul>
            </Card>
          </div>

          {/* Banery AdSense */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <AdSenseDisplay300x250 />
            <AdSenseDisplay300x250 />
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link href="/register">
              <Button className="bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-500 hover:to-cyan-500 text-white font-bold px-8 py-3 text-lg">
                Załóż darmowe konto
              </Button>
            </Link>
          </div>
        </main>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </div>
  )
}
