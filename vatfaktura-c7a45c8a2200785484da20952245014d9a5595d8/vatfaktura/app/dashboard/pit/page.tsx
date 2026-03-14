'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useUser } from '@/hooks/useUser'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  FileText, ChevronRight, ChevronLeft, CheckCircle,
  AlertCircle, Info, Calculator, User, Home, Briefcase, Heart
} from 'lucide-react'
import Link from 'next/link'

export type PitFormType = 'PIT-37' | 'PIT-36'

export interface PitFormData {
  // Sekcja A - Rok podatkowy
  taxYear: string
  formType: PitFormType
  // Sekcja B - Dane identyfikacyjne
  pesel: string
  firstName: string
  lastName: string
  dateOfBirth: string
  // Adres zamieszkania
  street: string
  houseNumber: string
  apartmentNumber: string
  postalCode: string
  city: string
  // Sekcja C - Przychody
  revenueEmployment: string       // przychód ze stosunku pracy
  revenuePension: string          // przychód z emerytury/renty
  revenueOther: string            // inne przychody (PIT-37)
  revenueSelfEmployment: string   // działalność gospodarcza (PIT-36)
  // Sekcja D - Koszty
  costsEmployment: string
  costsSelfEmployment: string
  // Sekcja E - Dochód
  incomeTotal: string
  // Sekcja F - Odliczenia
  deductionInternet: string       // ulga internetowa (max 760 zł)
  deductionChildren: string       // ulga na dzieci
  deductionCharitable: string     // darowizny
  deductionRehabilitation: string // ulga rehabilitacyjna
  // Sekcja G - Podatek
  taxCalculated: string
  taxPrepaid: string              // zaliczki zapłacone
  taxRefund: string               // zwrot / dopłata
  // Małżonek
  jointSettlement: boolean
  spouseFirstName: string
  spouseLastName: string
  spousePesel: string
  spouseIncome: string
}

const INITIAL_FORM: PitFormData = {
  taxYear: '2024',
  formType: 'PIT-37',
  pesel: '', firstName: '', lastName: '', dateOfBirth: '',
  street: '', houseNumber: '', apartmentNumber: '', postalCode: '', city: '',
  revenueEmployment: '', revenuePension: '', revenueOther: '', revenueSelfEmployment: '',
  costsEmployment: '', costsSelfEmployment: '',
  incomeTotal: '',
  deductionInternet: '', deductionChildren: '', deductionCharitable: '', deductionRehabilitation: '',
  taxCalculated: '', taxPrepaid: '', taxRefund: '',
  jointSettlement: false,
  spouseFirstName: '', spouseLastName: '', spousePesel: '', spouseIncome: '',
}

const TAX_THRESHOLD_1 = 120000
const TAX_FREE_AMOUNT = 30000
const TAX_RATE_1 = 0.12
const TAX_RATE_2 = 0.32

function calculateTax(income: number): number {
  if (income <= TAX_FREE_AMOUNT) return 0
  const taxable = income - TAX_FREE_AMOUNT
  if (income <= TAX_THRESHOLD_1) {
    return taxable * TAX_RATE_1
  }
  return (TAX_THRESHOLD_1 - TAX_FREE_AMOUNT) * TAX_RATE_1 + (income - TAX_THRESHOLD_1) * TAX_RATE_2
}

export default function PitPage() {
  const router = useRouter()
  const { user, isLoading } = useUser()
  const [step, setStep] = useState(0)
  const [form, setForm] = useState<PitFormData>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('pit_form_draft')
      if (saved) return { ...INITIAL_FORM, ...JSON.parse(saved) }
    }
    return INITIAL_FORM
  })

  const set = (field: keyof PitFormData, value: string | boolean) => {
    setForm(prev => {
      const updated = { ...prev, [field]: value }
      if (typeof window !== 'undefined') {
        localStorage.setItem('pit_form_draft', JSON.stringify(updated))
      }
      return updated
    })
  }

  const totalRevenue =
    (parseFloat(form.revenueEmployment) || 0) +
    (parseFloat(form.revenuePension) || 0) +
    (parseFloat(form.revenueOther) || 0) +
    (parseFloat(form.revenueSelfEmployment) || 0)

  const totalCosts =
    (parseFloat(form.costsEmployment) || 0) +
    (parseFloat(form.costsSelfEmployment) || 0)

  const totalIncome = Math.max(0, totalRevenue - totalCosts)

  const totalDeductions =
    Math.min(parseFloat(form.deductionInternet) || 0, 760) +
    (parseFloat(form.deductionChildren) || 0) +
    (parseFloat(form.deductionCharitable) || 0) +
    (parseFloat(form.deductionRehabilitation) || 0)

  const taxableIncome = Math.max(0, totalIncome - totalDeductions)
  const calculatedTax = Math.round(calculateTax(taxableIncome))
  const taxPrepaid = parseFloat(form.taxPrepaid) || 0
  const taxDiff = calculatedTax - taxPrepaid

  const steps = [
    { label: 'Formularz', icon: FileText },
    { label: 'Dane osobowe', icon: User },
    { label: 'Adres', icon: Home },
    { label: 'Przychody', icon: Briefcase },
    { label: 'Odliczenia', icon: Heart },
    { label: 'Podsumowanie', icon: Calculator },
  ]

  const inputCls = "min-h-[44px] bg-blue-500/10 border-blue-500/30 text-white placeholder:text-blue-300/40 focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all"
  const labelCls = "block text-xs sm:text-sm font-medium text-blue-300 mb-2"

  if (!isLoading && !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="bg-slate-800/50 border-blue-500/20 p-8 text-center">
          <p className="text-blue-300 mb-4">Zaloguj się, aby wypełnić deklarację PIT</p>
          <Link href="/login">
            <Button className="bg-gradient-to-r from-blue-600 to-cyan-600">Zaloguj się</Button>
          </Link>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen relative">
      {/* Header */}
      <header className="bg-slate-900/40 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2 text-blue-300 hover:text-white transition-colors text-sm">
            <ChevronLeft className="w-4 h-4" />
            Panel
          </Link>
          <div className="flex items-center gap-2">
            <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
              <FileText className="w-4 h-4" />
            </div>
            <span className="text-white font-semibold text-sm">Rozliczenie PIT</span>
          </div>
          <div className="text-xs text-blue-300/60">Rok {form.taxYear}</div>
        </div>
      </header>

      {/* Progress Steps */}
      <div className="border-b border-white/10 bg-slate-900/20">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center gap-1 overflow-x-auto">
            {steps.map((s, i) => (
              <button
                key={i}
                onClick={() => i < step + 1 && setStep(i)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  i === step
                    ? 'bg-blue-600 text-white'
                    : i < step
                    ? 'bg-green-600/30 text-green-300 hover:bg-green-600/40'
                    : 'text-slate-500 cursor-default'
                }`}
              >
                {i < step ? (
                  <CheckCircle className="w-3.5 h-3.5" />
                ) : (
                  <s.icon className="w-3.5 h-3.5" />
                )}
                <span className="hidden sm:inline">{s.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-6">

        {/* Step 0: Form type */}
        {step === 0 && (
          <Card className="bg-slate-800/50 border-blue-500/20">
            <CardHeader>
              <CardTitle className="text-white text-xl">Wybierz formularz PIT</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className={labelCls}>Rok podatkowy</label>
                <Select value={form.taxYear} onValueChange={v => set('taxYear', v)}>
                  <SelectTrigger className={inputCls}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => set('formType', 'PIT-37')}
                  className={`p-5 rounded-xl border-2 text-left transition-all ${
                    form.formType === 'PIT-37'
                      ? 'border-blue-500 bg-blue-500/15'
                      : 'border-blue-500/20 bg-slate-700/30 hover:border-blue-500/40'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-lg">PIT-37</p>
                      <p className="text-blue-300/70 text-sm mt-1">Dla pracowników, emerytów, rencistów</p>
                      <ul className="mt-2 space-y-1 text-xs text-slate-400">
                        <li>• Umowa o pracę / zlecenie / o dzieło</li>
                        <li>• Emerytura i renta ZUS</li>
                        <li>• Przychody z działalności wykonywanej osobiście</li>
                      </ul>
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => set('formType', 'PIT-36')}
                  className={`p-5 rounded-xl border-2 text-left transition-all ${
                    form.formType === 'PIT-36'
                      ? 'border-cyan-500 bg-cyan-500/15'
                      : 'border-blue-500/20 bg-slate-700/30 hover:border-cyan-500/40'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-cyan-600 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-lg">PIT-36</p>
                      <p className="text-cyan-300/70 text-sm mt-1">Dla przedsiębiorców, działalności gosp.</p>
                      <ul className="mt-2 space-y-1 text-xs text-slate-400">
                        <li>• Działalność gospodarcza (skala podatkowa)</li>
                        <li>• Najem prywatny na zasadach ogólnych</li>
                        <li>• Przychody zagraniczne</li>
                      </ul>
                    </div>
                  </div>
                </button>
              </div>

              <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 flex gap-3">
                <Info className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-blue-300/80">
                  Nie wiesz który formularz wybrać? Jeżeli uzyskujesz dochody wyłącznie od pracodawcy lub ZUS - wybierz <strong className="text-blue-300">PIT-37</strong>. Jeżeli prowadzisz działalność lub masz inne źródła - wybierz <strong className="text-blue-300">PIT-36</strong>.
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 1: Personal data */}
        {step === 1 && (
          <Card className="bg-slate-800/50 border-blue-500/20">
            <CardHeader>
              <CardTitle className="text-white text-xl">Dane identyfikacyjne</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className={labelCls}>PESEL</label>
                <Input
                  className={inputCls}
                  placeholder="12345678901"
                  value={form.pesel}
                  onChange={e => set('pesel', e.target.value)}
                  maxLength={11}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Imię</label>
                  <Input className={inputCls} placeholder="Jan" value={form.firstName} onChange={e => set('firstName', e.target.value)} />
                </div>
                <div>
                  <label className={labelCls}>Nazwisko</label>
                  <Input className={inputCls} placeholder="Kowalski" value={form.lastName} onChange={e => set('lastName', e.target.value)} />
                </div>
              </div>
              <div>
                <label className={labelCls}>Data urodzenia</label>
                <Input className={inputCls} type="date" value={form.dateOfBirth} onChange={e => set('dateOfBirth', e.target.value)} />
              </div>

              {/* Joint settlement */}
              <div className="pt-2 border-t border-blue-500/20">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div
                    onClick={() => set('jointSettlement', !form.jointSettlement)}
                    className={`w-10 h-6 rounded-full transition-all flex items-center px-1 ${
                      form.jointSettlement ? 'bg-blue-600' : 'bg-slate-600'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full bg-white transition-transform ${form.jointSettlement ? 'translate-x-4' : 'translate-x-0'}`} />
                  </div>
                  <span className="text-sm text-blue-300">Rozliczenie wspólne z małżonkiem</span>
                </label>

                {form.jointSettlement && (
                  <div className="mt-4 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 space-y-3">
                    <p className="text-xs text-blue-300/70 font-medium uppercase tracking-wide">Dane małżonka</p>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className={labelCls}>Imię małżonka</label>
                        <Input className={inputCls} placeholder="Anna" value={form.spouseFirstName} onChange={e => set('spouseFirstName', e.target.value)} />
                      </div>
                      <div>
                        <label className={labelCls}>Nazwisko</label>
                        <Input className={inputCls} placeholder="Kowalska" value={form.spouseLastName} onChange={e => set('spouseLastName', e.target.value)} />
                      </div>
                    </div>
                    <div>
                      <label className={labelCls}>PESEL małżonka</label>
                      <Input className={inputCls} placeholder="98765432109" value={form.spousePesel} onChange={e => set('spousePesel', e.target.value)} maxLength={11} />
                    </div>
                    <div>
                      <label className={labelCls}>Dochód małżonka (zł)</label>
                      <Input className={inputCls} type="number" placeholder="0.00" value={form.spouseIncome} onChange={e => set('spouseIncome', e.target.value)} />
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Address */}
        {step === 2 && (
          <Card className="bg-slate-800/50 border-blue-500/20">
            <CardHeader>
              <CardTitle className="text-white text-xl">Adres zamieszkania</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className={labelCls}>Ulica</label>
                <Input className={inputCls} placeholder="ul. Warszawska" value={form.street} onChange={e => set('street', e.target.value)} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Nr domu</label>
                  <Input className={inputCls} placeholder="10" value={form.houseNumber} onChange={e => set('houseNumber', e.target.value)} />
                </div>
                <div>
                  <label className={labelCls}>Nr lokalu</label>
                  <Input className={inputCls} placeholder="5" value={form.apartmentNumber} onChange={e => set('apartmentNumber', e.target.value)} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Kod pocztowy</label>
                  <Input className={inputCls} placeholder="00-000" value={form.postalCode} onChange={e => set('postalCode', e.target.value)} maxLength={6} />
                </div>
                <div>
                  <label className={labelCls}>Miejscowość</label>
                  <Input className={inputCls} placeholder="Warszawa" value={form.city} onChange={e => set('city', e.target.value)} />
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Revenue */}
        {step === 3 && (
          <Card className="bg-slate-800/50 border-blue-500/20">
            <CardHeader>
              <CardTitle className="text-white text-xl">Przychody i koszty</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="revenue" className="space-y-4">
                <TabsList className="bg-slate-700/50 border border-blue-500/20">
                  <TabsTrigger value="revenue" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-blue-300">Przychody</TabsTrigger>
                  <TabsTrigger value="costs" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-blue-300">Koszty</TabsTrigger>
                  <TabsTrigger value="prepaid" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-blue-300">Zaliczki</TabsTrigger>
                </TabsList>

                <TabsContent value="revenue" className="space-y-4">
                  <div>
                    <label className={labelCls}>Przychód ze stosunku pracy / umów (zł)</label>
                    <Input className={inputCls} type="number" step="0.01" placeholder="0.00" value={form.revenueEmployment} onChange={e => set('revenueEmployment', e.target.value)} />
                    <p className="text-xs text-blue-300/40 mt-1">Z PIT-11 otrzymanego od pracodawcy</p>
                  </div>
                  <div>
                    <label className={labelCls}>Przychód z emerytury / renty (zł)</label>
                    <Input className={inputCls} type="number" step="0.01" placeholder="0.00" value={form.revenuePension} onChange={e => set('revenuePension', e.target.value)} />
                  </div>
                  {form.formType === 'PIT-36' && (
                    <div>
                      <label className={labelCls}>Przychód z działalności gospodarczej (zł)</label>
                      <Input className={inputCls} type="number" step="0.01" placeholder="0.00" value={form.revenueSelfEmployment} onChange={e => set('revenueSelfEmployment', e.target.value)} />
                    </div>
                  )}
                  <div>
                    <label className={labelCls}>Inne przychody (zł)</label>
                    <Input className={inputCls} type="number" step="0.01" placeholder="0.00" value={form.revenueOther} onChange={e => set('revenueOther', e.target.value)} />
                  </div>
                  <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-between">
                    <span className="text-sm text-green-300">Łączny przychód</span>
                    <span className="font-bold text-green-300 text-lg">{totalRevenue.toFixed(2)} zł</span>
                  </div>
                </TabsContent>

                <TabsContent value="costs" className="space-y-4">
                  <div>
                    <label className={labelCls}>Koszty uzyskania przychodów ze stosunku pracy (zł)</label>
                    <Input className={inputCls} type="number" step="0.01" placeholder="0.00" value={form.costsEmployment} onChange={e => set('costsEmployment', e.target.value)} />
                    <p className="text-xs text-blue-300/40 mt-1">Standardowe: 250 zł/m-c (3000 zł/rok) lub podwyższone 300 zł/m-c (3600 zł/rok)</p>
                  </div>
                  {form.formType === 'PIT-36' && (
                    <div>
                      <label className={labelCls}>Koszty działalności gospodarczej (zł)</label>
                      <Input className={inputCls} type="number" step="0.01" placeholder="0.00" value={form.costsSelfEmployment} onChange={e => set('costsSelfEmployment', e.target.value)} />
                    </div>
                  )}
                  <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-between">
                    <span className="text-sm text-amber-300">Dochód do opodatkowania</span>
                    <span className="font-bold text-amber-300 text-lg">{totalIncome.toFixed(2)} zł</span>
                  </div>
                </TabsContent>

                <TabsContent value="prepaid" className="space-y-4">
                  <div>
                    <label className={labelCls}>Suma zaliczek pobranych przez płatnika (zł)</label>
                    <Input className={inputCls} type="number" step="0.01" placeholder="0.00" value={form.taxPrepaid} onChange={e => set('taxPrepaid', e.target.value)} />
                    <p className="text-xs text-blue-300/40 mt-1">Z PIT-11 w polu "Zaliczki pobrane przez płatnika"</p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        )}

        {/* Step 4: Deductions */}
        {step === 4 && (
          <Card className="bg-slate-800/50 border-blue-500/20">
            <CardHeader>
              <CardTitle className="text-white text-xl">Odliczenia i ulgi podatkowe</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className={labelCls}>
                  Ulga internetowa (zł) <span className="text-blue-300/50 font-normal">max 760 zł</span>
                </label>
                <Input
                  className={inputCls}
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  value={form.deductionInternet}
                  onChange={e => set('deductionInternet', e.target.value)}
                />
                <p className="text-xs text-blue-300/40 mt-1">Wydatki z tytułu użytkowania internetu w miejscu zamieszkania</p>
              </div>
              <div>
                <label className={labelCls}>Ulga na dzieci (zł)</label>
                <Input
                  className={inputCls}
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  value={form.deductionChildren}
                  onChange={e => set('deductionChildren', e.target.value)}
                />
                <p className="text-xs text-blue-300/40 mt-1">1 dziecko: 1112,04 zł/rok, 2 dzieci: 2224,08 zł/rok, 3 dzieci: 4224,12 zł/rok</p>
              </div>
              <div>
                <label className={labelCls}>Darowizny (zł)</label>
                <Input
                  className={inputCls}
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  value={form.deductionCharitable}
                  onChange={e => set('deductionCharitable', e.target.value)}
                />
                <p className="text-xs text-blue-300/40 mt-1">Darowizny na cele pożytku publicznego, kultu religijnego, etc.</p>
              </div>
              <div>
                <label className={labelCls}>Ulga rehabilitacyjna (zł)</label>
                <Input
                  className={inputCls}
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  value={form.deductionRehabilitation}
                  onChange={e => set('deductionRehabilitation', e.target.value)}
                />
              </div>
              <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-between">
                <span className="text-sm text-blue-300">Łączne odliczenia</span>
                <span className="font-bold text-blue-300 text-lg">{totalDeductions.toFixed(2)} zł</span>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 5: Summary */}
        {step === 5 && (
          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-white text-xl flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-blue-400" />
                  Podsumowanie - {form.formType} za rok {form.taxYear}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  {[
                    { label: 'Łączny przychód', value: totalRevenue, color: 'text-white' },
                    { label: 'Koszty uzyskania', value: -totalCosts, color: 'text-rose-300' },
                    { label: 'Dochód', value: totalIncome, color: 'text-white' },
                    { label: 'Odliczenia', value: -totalDeductions, color: 'text-green-300' },
                    { label: 'Podstawa opodatkowania', value: taxableIncome, color: 'text-white font-semibold' },
                  ].map(row => (
                    <div key={row.label} className="flex items-center justify-between py-2 border-b border-blue-500/10 last:border-0">
                      <span className="text-sm text-blue-300/70">{row.label}</span>
                      <span className={`text-sm font-mono ${row.color}`}>
                        {row.value < 0 ? '- ' : ''}{Math.abs(row.value).toFixed(2)} zł
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-blue-500/20 space-y-2">
                  <div className="flex items-center justify-between py-2">
                    <span className="text-sm text-blue-300/70">Podatek obliczony</span>
                    <span className="text-sm font-mono text-white">{calculatedTax.toFixed(2)} zł</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-sm text-blue-300/70">Zaliczki pobrane</span>
                    <span className="text-sm font-mono text-green-300">- {taxPrepaid.toFixed(2)} zł</span>
                  </div>
                  <div className={`flex items-center justify-between py-3 px-4 rounded-xl ${
                    taxDiff > 0 ? 'bg-rose-500/15 border border-rose-500/30' : 'bg-green-500/15 border border-green-500/30'
                  }`}>
                    <span className={`font-semibold ${taxDiff > 0 ? 'text-rose-300' : 'text-green-300'}`}>
                      {taxDiff > 0 ? 'Do dopłaty' : 'Zwrot podatku'}
                    </span>
                    <span className={`text-xl font-bold font-mono ${taxDiff > 0 ? 'text-rose-300' : 'text-green-300'}`}>
                      {Math.abs(taxDiff).toFixed(2)} zł
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 flex gap-3">
              <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-amber-300/80">
                <p className="font-semibold text-amber-300">Kalkulacja orientacyjna</p>
                <p className="mt-1">Wynik obliczony przez system ma charakter orientacyjny. Przed wysłaniem do urzędu skarbowego zalecamy weryfikację danych z PIT-11 od pracodawcy.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/dashboard/pit/sign" className="flex-1">
                <Button className="w-full min-h-[48px] bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-base font-semibold shadow-lg shadow-blue-500/30">
                  Podpisz elektronicznie i wyślij
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button
                variant="outline"
                className="flex-1 min-h-[48px] border-blue-500/30 text-blue-300 hover:bg-blue-500/10"
                onClick={() => {
                  const data = JSON.stringify({ ...form, calculatedTax, taxDiff }, null, 2)
                  const blob = new Blob([data], { type: 'application/json' })
                  const url = URL.createObjectURL(blob)
                  const a = document.createElement('a')
                  a.href = url
                  a.download = `${form.formType}_${form.taxYear}_robocza.json`
                  a.click()
                }}
              >
                Zapisz wersję roboczą
              </Button>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between pt-4">
          <Button
            variant="outline"
            onClick={() => setStep(s => Math.max(0, s - 1))}
            disabled={step === 0}
            className="border-blue-500/30 text-blue-300 hover:bg-blue-500/10 min-h-[44px] disabled:opacity-30"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Wstecz
          </Button>

          {step < steps.length - 1 && (
            <Button
              onClick={() => setStep(s => Math.min(steps.length - 1, s + 1))}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 min-h-[44px] shadow-lg shadow-blue-500/30"
            >
              Dalej
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </main>
    </div>
  )
}
