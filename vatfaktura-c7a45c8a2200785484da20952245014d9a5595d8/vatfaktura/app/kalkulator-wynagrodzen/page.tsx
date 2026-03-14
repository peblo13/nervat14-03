'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Calculator, RotateCcw, Info } from 'lucide-react'
import Link from 'next/link'
import { AdSenseDisplay728x90, AdSenseDisplayAuto, AdSenseDisplay300x250 } from '@/components/adsense-banner'

export default function KalkulatorWynagrodzenPage() {
  const [brutto, setBrutto] = useState<number>(5000)
  const [calculationType, setCalculationType] = useState<'brutto' | 'netto'>('brutto')
  const [showDetails, setShowDetails] = useState(false)

  // 2024 tax thresholds and rates
  const TAX_THRESHOLD = 120000 // annual
  const TAX_RATE_1 = 0.12 // 12% do 120k
  const TAX_RATE_2 = 0.32 // 32% powyżej 120k

  // ZUS contributions
  const ZUS_RATES = {
    pension: 0.0976, // 9.76% pracownika
    disability: 0.015, // 1.5% pracownika
    sickness: 0.0245, // 2.45% pracownika
    health: 0.09, // 9% zdrowotne
  }

  const calculateFromBrutto = (amount: number) => {
    const monthlyThreshold = TAX_THRESHOLD / 12
    const tax = amount > monthlyThreshold 
      ? (monthlyThreshold * TAX_RATE_1) + ((amount - monthlyThreshold) * TAX_RATE_2)
      : amount * TAX_RATE_1

    const totalZUS = amount * (ZUS_RATES.pension + ZUS_RATES.disability + ZUS_RATES.sickness)
    const health = amount * ZUS_RATES.health
    const netto = amount - tax - totalZUS - health

    return { tax, totalZUS, health, netto }
  }

  const calculateFromNetto = (amount: number) => {
    // Reversed calculation (approximation)
    const estimatedBrutto = amount / 0.7 // rough estimate
    return calculateFromBrutto(estimatedBrutto)
  }

  const result = calculationType === 'brutto' 
    ? calculateFromBrutto(brutto)
    : calculateFromNetto(brutto)

  const displayBrutto = calculationType === 'brutto' ? brutto : brutto + result.tax + result.totalZUS + result.health
  const displayNetto = result.netto

  const handleReset = () => {
    setBrutto(5000)
    setCalculationType('brutto')
    setShowDetails(false)
  }

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
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

        {/* Main */}
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent mb-4">
              Kalkulator Wynagrodzeń
            </h1>
            <p className="text-lg text-blue-200/70 max-w-2xl mx-auto">
              Oblicz pensję brutto/netto na 2024. Podatek, ubezpieczenia, i pensja do rąk.
            </p>
          </div>

          {/* AdSense */}
          <div className="mb-12">
            <AdSenseDisplay728x90 />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Calculator */}
            <div className="lg:col-span-1">
              <Card className="bg-slate-800/50 border-purple-500/20 p-6 sm:p-8 sticky top-24">
                <h2 className="text-2xl font-bold text-white mb-6">Obliczenia</h2>

                {/* Type selector */}
                <div className="mb-6 flex gap-2">
                  <button
                    onClick={() => setCalculationType('brutto')}
                    className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                      calculationType === 'brutto'
                        ? 'bg-purple-600 text-white'
                        : 'bg-slate-700/50 text-blue-200/70 hover:bg-slate-600/50'
                    }`}
                  >
                    Z brutto
                  </button>
                  <button
                    onClick={() => setCalculationType('netto')}
                    className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                      calculationType === 'netto'
                        ? 'bg-purple-600 text-white'
                        : 'bg-slate-700/50 text-blue-200/70 hover:bg-slate-600/50'
                    }`}
                  >
                    Z netto
                  </button>
                </div>

                {/* Input */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-blue-200/80 mb-2">
                    {calculationType === 'brutto' ? 'Pensja brutto (PLN)' : 'Pensja netto (PLN)'}
                  </label>
                  <input
                    type="number"
                    value={brutto}
                    onChange={(e) => setBrutto(Number(e.target.value) || 0)}
                    className="w-full px-4 py-2 bg-slate-700/50 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-400/60"
                  />
                  <input
                    type="range"
                    min="0"
                    max="50000"
                    step="100"
                    value={brutto}
                    onChange={(e) => setBrutto(Number(e.target.value))}
                    className="w-full mt-2 h-2 bg-purple-500/20 rounded-lg"
                  />
                </div>

                <Button
                  onClick={handleReset}
                  variant="outline"
                  className="w-full border-purple-500/30 text-purple-300 hover:bg-purple-500/10"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </Button>
              </Card>
            </div>

            {/* Results */}
            <div className="lg:col-span-2 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className={`bg-gradient-to-br ${calculationType === 'brutto' ? 'from-purple-600/20 to-pink-600/20 border-purple-500/30' : 'from-slate-700/50 border-slate-600/30'} p-6`}>
                  <p className="text-sm text-blue-200/70 mb-1">Pensja brutto</p>
                  <p className="text-3xl sm:text-4xl font-bold text-purple-300">
                    {displayBrutto.toLocaleString('pl-PL', { maximumFractionDigits: 2 })} zł
                  </p>
                </Card>

                <Card className={`bg-gradient-to-br ${calculationType === 'netto' ? 'from-cyan-600/20 to-blue-600/20 border-cyan-500/30' : 'from-slate-700/50 border-slate-600/30'} p-6`}>
                  <p className="text-sm text-blue-200/70 mb-1">Pensja netto (do rąk)</p>
                  <p className="text-3xl sm:text-4xl font-bold text-cyan-300">
                    {displayNetto.toLocaleString('pl-PL', { maximumFractionDigits: 2 })} zł
                  </p>
                </Card>

                {/* Breakdown cards */}
                <Card className="bg-gradient-to-br from-red-600/20 to-orange-600/20 border-red-500/30 p-6">
                  <p className="text-sm text-red-200/70 mb-1">Podatek PIT</p>
                  <p className="text-2xl font-bold text-red-300">
                    -{result.tax.toLocaleString('pl-PL', { maximumFractionDigits: 2 })} zł
                  </p>
                </Card>

                <Card className="bg-gradient-to-br from-orange-600/20 to-amber-600/20 border-orange-500/30 p-6">
                  <p className="text-sm text-orange-200/70 mb-1">Ubezpieczenia</p>
                  <p className="text-2xl font-bold text-orange-300">
                    -{(result.totalZUS + result.health).toLocaleString('pl-PL', { maximumFractionDigits: 2 })} zł
                  </p>
                </Card>
              </div>

              {/* Details */}
              <Card className="bg-slate-800/50 border-purple-500/20 p-6">
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="flex items-center gap-2 text-white font-semibold hover:text-purple-300 transition-colors"
                >
                  <Info className="w-5 h-5" />
                  {showDetails ? 'Ukryj' : 'Pokaż'} szczegóły
                </button>

                {showDetails && (
                  <div className="mt-4 space-y-2 pt-4 border-t border-purple-500/20 text-sm">
                    <div className="flex justify-between">
                      <span className="text-blue-200/70">Podatek PIT (12-32%)</span>
                      <span className="text-red-300 font-medium">-{result.tax.toLocaleString('pl-PL', { maximumFractionDigits: 2 })} zł</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-200/70">ZUS pracownika (13.71%)</span>
                      <span className="text-orange-300 font-medium">-{result.totalZUS.toLocaleString('pl-PL', { maximumFractionDigits: 2 })} zł</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-200/70">Ubezpieczenie zdrowotne (9%)</span>
                      <span className="text-orange-300 font-medium">-{result.health.toLocaleString('pl-PL', { maximumFractionDigits: 2 })} zł</span>
                    </div>
                  </div>
                )}
              </Card>
            </div>
          </div>

          {/* Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-slate-800/50 border-purple-500/20 p-6">
              <h3 className="text-xl font-bold text-white mb-4">O kalkulatorze</h3>
              <p className="text-blue-200/70 text-sm leading-relaxed">
                Kalkulator pokazuje przybliżoną wysokość podatku i ubezpieczeń na 2024. Dokładne wartości mogą się różnić ze względu na indywidualne warunki.
              </p>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Stawki 2024</h3>
              <ul className="text-blue-200/70 text-sm space-y-1">
                <li>• PIT: 12% do 120k rocznie, 32% powyżej</li>
                <li>• ZUS: 13.71% (emerytura, renta, choroba)</li>
                <li>• Zdrowotne: 9%</li>
              </ul>
            </Card>
          </div>

          {/* Banery */}
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
