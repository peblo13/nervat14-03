'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useUser } from '@/hooks/useUser'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { 
  ChevronLeft, 
  Calculator, 
  FileText, 
  Calendar,
  TrendingUp,
  ArrowRight,
  DollarSign,
  Zap,
  Heart,
  Users,
  ExternalLink,
  Check,
  Clock,
  AlertCircle
} from 'lucide-react'
import Link from 'next/link'

interface ZusSummission {
  id: string
  date: string
  type: string
  status: 'sent' | 'pending' | 'error'
  formNumber: string
}

export default function ZUSPage() {
  const router = useRouter()
  const { user, isLoading } = useUser()
  
  // Income calculator state
  const [monthlyIncome, setMonthlyIncome] = useState(5000)
  const [showCalculatorDetails, setShowCalculatorDetails] = useState(false)
  
  // Wage calculator state
  const [grossWage, setGrossWage] = useState(5000)
  const [showWageDetails, setShowWageDetails] = useState(false)

  if (isLoading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-2 border-blue-500/30 border-t-blue-500"></div>
      </div>
    )
  }

  // ZUS contribution rates 2024
  const CONTRIBUTION_RATES = {
    pension: 19.52,
    disability: 8.0,
    sickness: 2.45,
    total: 30.0,
    health: 9.0,
  }

  // Income calculator
  const pensionContribution = (monthlyIncome * CONTRIBUTION_RATES.pension) / 100
  const disabilityContribution = (monthlyIncome * CONTRIBUTION_RATES.disability) / 100
  const sicknessContribution = (monthlyIncome * CONTRIBUTION_RATES.sickness) / 100
  const totalSocialContributions = pensionContribution + disabilityContribution + sicknessContribution
  const healthContribution = (monthlyIncome * CONTRIBUTION_RATES.health) / 100
  const totalZusContributions = totalSocialContributions + healthContribution
  const netIncome = monthlyIncome - totalZusContributions

  // Wage calculator (employee contributions)
  const socialSecurityEmployee = (grossWage * 9.76) / 100
  const healthInsuranceEmployee = (grossWage * 9.0) / 100
  const totalEmployeeDeductions = socialSecurityEmployee + healthInsuranceEmployee
  const netWage = grossWage - totalEmployeeDeductions

  // Sample submissions
  const submissions: ZusSummission[] = [
    { id: '1', date: '2024-03-10', type: 'ZUS Z-3', status: 'sent', formNumber: 'ZUS/2024/001' },
    { id: '2', date: '2024-02-15', type: 'ZUS Z-15', status: 'sent', formNumber: 'ZUS/2024/002' },
    { id: '3', date: '2024-01-20', type: 'ZUS Z-3', status: 'pending', formNumber: 'ZUS/2024/003' },
  ]

  // ZUS payment schedule 2024
  const paymentSchedule = [
    { month: 'Styczeń', date: '20 stycznia', contribution: 'Miesięczna' },
    { month: 'Luty', date: '20 lutego', contribution: 'Miesięczna' },
    { month: 'Marzec', date: '20 marca', contribution: 'Miesięczna' },
    { month: 'Kwiecień', date: '20 kwietnia', contribution: 'Miesięczna' },
    { month: 'Maj', date: '20 maja', contribution: 'Miesięczna' },
    { month: 'Czerwiec', date: '20 czerwca', contribution: 'Półroczna' },
  ]

  const ZusTools = [
    {
      title: 'Generator Z-3',
      description: 'Zgłoszenie o przystąpieniu do ubezpieczenia',
      icon: FileText,
      color: 'from-blue-500 to-cyan-500',
      href: '/generator-zus-z3',
      badge: 'Nowe'
    },
    {
      title: 'Generator Z-15',
      description: 'Zmiana danych ubezpieczonego',
      icon: FileText,
      color: 'from-cyan-500 to-teal-500',
      href: '/generator-zus-z15',
      badge: 'Nowe'
    },
    {
      title: 'Formularze ZUS',
      description: 'Wszystkie dostępne formularze',
      icon: FileText,
      color: 'from-emerald-500 to-cyan-500',
      href: '/formularze-zus'
    },
    {
      title: 'Kalkulator ZUS',
      description: 'Oblicz składki ubezpieczeniowe',
      icon: Calculator,
      color: 'from-violet-500 to-purple-500',
      href: '/kalkulator-zus'
    },
    {
      title: 'Kalendarz ZUS',
      description: 'Terminy płatności i zgłoszeń',
      icon: Calendar,
      color: 'from-orange-500 to-red-500',
      href: '/kalendarz-zus'
    },
    {
      title: 'Poradnik PUE ZUS',
      description: 'Instrukcja korzystania z systemu',
      icon: ExternalLink,
      color: 'from-yellow-500 to-orange-500',
      href: '/poradnik-pue-zus'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-slate-900/40 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-4 flex items-center justify-between min-h-[56px] sm:min-h-[64px]">
          <Link href="/dashboard" className="flex items-center gap-2 text-blue-300 hover:text-white transition-colors">
            <ChevronLeft className="w-4 h-4" />
            <span className="text-sm">Panel</span>
          </Link>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="inline-flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/50">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <h1 className="text-lg sm:text-2xl font-bold text-white truncate">Narzędzia ZUS</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 space-y-6 sm:space-y-8">

        {/* Quick Links to ZUS Tools */}
        <section>
          <div className="mb-4">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-orange-400" />
              Dostępne narzędzia ZUS
            </h2>
            <p className="text-blue-300/70 text-xs sm:text-sm mt-1">Szybki dostęp do generatorów formularzy i kalkulatorów</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {ZusTools.map((tool) => {
              const Icon = tool.icon
              return (
                <Link key={tool.title} href={tool.href}>
                  <Card className="bg-slate-800/50 border-blue-500/20 hover:border-blue-500/40 hover:bg-slate-800/70 transition-all cursor-pointer h-full group">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${tool.color} flex items-center justify-center text-white shadow-lg`}>
                              <Icon className="w-5 h-5" />
                            </div>
                            {tool.badge && (
                              <span className="text-xs font-semibold px-2 py-1 bg-orange-500/30 text-orange-300 rounded-full border border-orange-500/50">
                                {tool.badge}
                              </span>
                            )}
                          </div>
                          <h3 className="font-semibold text-white text-sm sm:text-base group-hover:text-blue-300 transition-colors">
                            {tool.title}
                          </h3>
                          <p className="text-blue-300/60 text-xs sm:text-sm mt-1">
                            {tool.description}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 group-hover:translate-x-1 transition-transform flex-shrink-0 mt-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </section>

        {/* Income Calculator */}
        <section>
          <div className="mb-4">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Calculator className="w-5 h-5 text-violet-400" />
              Kalkulator składek dla przedsiębiorcy
            </h2>
            <p className="text-blue-300/70 text-xs sm:text-sm mt-1">Oblicz miesięczne składki ZUS na podstawie przychodu</p>
          </div>

          <Card className="bg-slate-800/50 border-blue-500/20">
            <CardHeader>
              <CardTitle className="text-white text-base sm:text-lg">Mesięczny przychód</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-blue-300 mb-2">Przychód (PLN)</label>
                <div className="flex gap-2">
                  <Input
                    type="number"
                    value={monthlyIncome}
                    onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                    className="flex-1 min-h-[40px] sm:min-h-[44px] bg-blue-500/10 border-blue-500/30 text-white"
                  />
                  <Button 
                    onClick={() => setShowCalculatorDetails(!showCalculatorDetails)}
                    variant="outline"
                    className="min-h-[40px] sm:min-h-[44px]"
                  >
                    {showCalculatorDetails ? 'Ukryj' : 'Szczegóły'}
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                <div className="p-3 sm:p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <p className="text-xs text-blue-300/70 mb-1">Emerytura</p>
                  <p className="text-base sm:text-lg font-bold text-blue-200">{pensionContribution.toFixed(2)} zł</p>
                </div>
                <div className="p-3 sm:p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                  <p className="text-xs text-cyan-300/70 mb-1">Renta</p>
                  <p className="text-base sm:text-lg font-bold text-cyan-200">{disabilityContribution.toFixed(2)} zł</p>
                </div>
                <div className="p-3 sm:p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  <p className="text-xs text-emerald-300/70 mb-1">Choroba</p>
                  <p className="text-base sm:text-lg font-bold text-emerald-200">{sicknessContribution.toFixed(2)} zł</p>
                </div>
                <div className="p-3 sm:p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <p className="text-xs text-purple-300/70 mb-1">Zdrowotne</p>
                  <p className="text-base sm:text-lg font-bold text-purple-200">{healthContribution.toFixed(2)} zł</p>
                </div>
              </div>

              <div className="pt-3 sm:pt-4 border-t border-blue-500/20">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <p className="text-xs text-blue-300/70 mb-2">Razem składki</p>
                    <p className="text-xl sm:text-2xl font-bold text-orange-400">{totalZusContributions.toFixed(2)} zł</p>
                  </div>
                  <div>
                    <p className="text-xs text-blue-300/70 mb-2">Do kieszeni</p>
                    <p className="text-xl sm:text-2xl font-bold text-green-400">{netIncome.toFixed(2)} zł</p>
                  </div>
                </div>
              </div>

              {showCalculatorDetails && (
                <div className="pt-3 sm:pt-4 border-t border-blue-500/20 space-y-2">
                  <p className="text-xs text-blue-300/70 font-semibold uppercase">Szczegóły składek (2024)</p>
                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between text-blue-300/60">
                      <span>Ubezpieczenie emerytalne (19.52%)</span>
                      <span className="text-blue-200">{(pensionContribution).toFixed(2)} zł</span>
                    </div>
                    <div className="flex justify-between text-blue-300/60">
                      <span>Ubezpieczenie rentowe (8%)</span>
                      <span className="text-blue-200">{(disabilityContribution).toFixed(2)} zł</span>
                    </div>
                    <div className="flex justify-between text-blue-300/60">
                      <span>Ubezpieczenie chorobowe (2.45%)</span>
                      <span className="text-blue-200">{(sicknessContribution).toFixed(2)} zł</span>
                    </div>
                    <div className="flex justify-between text-blue-300/60">
                      <span>Ubezpieczenie zdrowotne (9%)</span>
                      <span className="text-blue-200">{(healthContribution).toFixed(2)} zł</span>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </section>

        {/* Wage Calculator */}
        <section>
          <div className="mb-4">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-green-400" />
              Kalkulator wynagrodzeń dla pracownika
            </h2>
            <p className="text-blue-300/70 text-xs sm:text-sm mt-1">Oblicz wynagrodzenie netto na podstawie brutto</p>
          </div>

          <Card className="bg-slate-800/50 border-blue-500/20">
            <CardHeader>
              <CardTitle className="text-white text-base sm:text-lg">Wynagrodzenie brutto</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-blue-300 mb-2">Kwota brutto (PLN)</label>
                <div className="flex gap-2">
                  <Input
                    type="number"
                    value={grossWage}
                    onChange={(e) => setGrossWage(Number(e.target.value))}
                    className="flex-1 min-h-[40px] sm:min-h-[44px] bg-blue-500/10 border-blue-500/30 text-white"
                  />
                  <Button 
                    onClick={() => setShowWageDetails(!showWageDetails)}
                    variant="outline"
                    className="min-h-[40px] sm:min-h-[44px]"
                  >
                    {showWageDetails ? 'Ukryj' : 'Szczegóły'}
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                <div className="p-3 sm:p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                  <p className="text-xs text-green-300/70 mb-1">Brutto</p>
                  <p className="text-base sm:text-lg font-bold text-green-200">{grossWage.toFixed(2)} zł</p>
                </div>
                <div className="p-3 sm:p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                  <p className="text-xs text-red-300/70 mb-1">Potrącenia</p>
                  <p className="text-base sm:text-lg font-bold text-red-200">{totalEmployeeDeductions.toFixed(2)} zł</p>
                </div>
                <div className="p-3 sm:p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  <p className="text-xs text-emerald-300/70 mb-1">Netto</p>
                  <p className="text-base sm:text-lg font-bold text-emerald-200">{netWage.toFixed(2)} zł</p>
                </div>
              </div>

              {showWageDetails && (
                <div className="pt-3 sm:pt-4 border-t border-blue-500/20 space-y-2">
                  <p className="text-xs text-blue-300/70 font-semibold uppercase">Składniki potrąceń</p>
                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between text-blue-300/60">
                      <span>Ubezpieczenie społeczne (9.76%)</span>
                      <span className="text-blue-200">{(socialSecurityEmployee).toFixed(2)} zł</span>
                    </div>
                    <div className="flex justify-between text-blue-300/60">
                      <span>Ubezpieczenie zdrowotne (9%)</span>
                      <span className="text-blue-200">{(healthInsuranceEmployee).toFixed(2)} zł</span>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </section>

        {/* Payment Schedule */}
        <section>
          <div className="mb-4">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Calendar className="w-5 h-5 text-orange-400" />
              Harmonogram płatności ZUS 2024
            </h2>
            <p className="text-blue-300/70 text-xs sm:text-sm mt-1">Terminy płatności składek ubezpieczeniowych</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {paymentSchedule.map((item, idx) => (
              <Card key={idx} className="bg-slate-800/50 border-blue-500/20">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm sm:text-base">{item.month}</p>
                      <p className="text-blue-300/70 text-xs sm:text-sm">{item.date}</p>
                      <p className="text-blue-400/60 text-xs mt-2 font-medium">{item.contribution}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Recent Submissions */}
        <section>
          <div className="mb-4">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-400" />
              Historia zgłoszeń ZUS
            </h2>
            <p className="text-blue-300/70 text-xs sm:text-sm mt-1">Ostatnie wysłane formularze i ich status</p>
          </div>

          <Card className="bg-slate-800/50 border-blue-500/20">
            <CardContent className="p-4 sm:p-6">
              <div className="space-y-3">
                {submissions.map((submission) => (
                  <div key={submission.id} className="flex items-center justify-between p-3 sm:p-4 rounded-lg bg-slate-700/50 border border-blue-500/10 hover:border-blue-500/30 transition-all">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-white text-sm sm:text-base truncate">{submission.type}</span>
                        <span className="text-blue-300/60 text-xs px-2 py-1 bg-blue-500/10 rounded font-mono">
                          {submission.formNumber}
                        </span>
                      </div>
                      <p className="text-blue-300/70 text-xs sm:text-sm mt-1">{submission.date}</p>
                    </div>
                    <div className="flex items-center gap-2 ml-3 flex-shrink-0">
                      {submission.status === 'sent' && (
                        <div className="flex items-center gap-1.5 text-green-400">
                          <Check className="w-4 h-4" />
                          <span className="text-xs font-medium hidden sm:inline">Wysłane</span>
                        </div>
                      )}
                      {submission.status === 'pending' && (
                        <div className="flex items-center gap-1.5 text-yellow-400">
                          <Clock className="w-4 h-4" />
                          <span className="text-xs font-medium hidden sm:inline">Oczekujące</span>
                        </div>
                      )}
                      {submission.status === 'error' && (
                        <div className="flex items-center gap-1.5 text-red-400">
                          <AlertCircle className="w-4 h-4" />
                          <span className="text-xs font-medium hidden sm:inline">Błąd</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

      </main>
    </div>
  )
}
