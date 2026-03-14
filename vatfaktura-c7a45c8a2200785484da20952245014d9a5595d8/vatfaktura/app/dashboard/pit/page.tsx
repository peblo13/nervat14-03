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
  AlertCircle, Info, Calculator, User, Home, Briefcase, Heart,
  TrendingUp, Building2, DollarSign, BarChart3, Receipt
} from 'lucide-react'
import Link from 'next/link'

export type PitFormType =
  | 'PIT-37'
  | 'PIT-36'
  | 'PIT-36L'
  | 'PIT-28'
  | 'PIT-38'
  | 'PIT-39'
  | 'PIT-16A'
  | 'PIT-19A'

export interface PitFormData {
  taxYear: string
  formType: PitFormType
  // Sekcja B - Dane identyfikacyjne
  pesel: string
  firstName: string
  lastName: string
  dateOfBirth: string
  nip: string
  // Adres zamieszkania
  street: string
  houseNumber: string
  apartmentNumber: string
  postalCode: string
  city: string
  // PIT-37 / PIT-36: przychody ogólne
  revenueEmployment: string
  revenuePension: string
  revenueOther: string
  revenueSelfEmployment: string
  costsEmployment: string
  costsSelfEmployment: string
  // PIT-36L: liniowy 19%
  revenueLinear: string
  costsLinear: string
  // PIT-28: ryczałt
  revenueRyczalt: string
  ryczaltRate: string
  // PIT-38: kapitały pieniężne
  revenueCapital: string
  costsCapital: string
  // PIT-39: nieruchomości
  revenueProperty: string
  costsProperty: string
  propertyYear: string
  // PIT-16A: karta podatkowa
  cardTaxMonth: string
  cardTaxRate: string
  // PIT-19A: zryczałtowany podatek
  revenueFlat: string
  // Odliczenia wspólne
  deductionInternet: string
  deductionChildren: string
  deductionCharitable: string
  deductionRehabilitation: string
  deductionResearch: string
  deductionTerminalIllness: string
  // Podatek
  taxPrepaid: string
  // Małżonek
  jointSettlement: boolean
  spouseFirstName: string
  spouseLastName: string
  spousePesel: string
  spouseIncome: string
}

const PIT_FORMS: {
  id: PitFormType
  color: string
  activeColor: string
  icon: React.ElementType
  title: string
  subtitle: string
  bullets: string[]
}[] = [
  {
    id: 'PIT-37',
    color: 'bg-blue-600',
    activeColor: 'border-blue-500 bg-blue-500/15',
    icon: FileText,
    title: 'PIT-37',
    subtitle: 'Pracownicy, emeryci, renciści',
    bullets: [
      'Umowa o pracę / zlecenie / o dzieło',
      'Emerytura i renta ZUS',
      'Przychody z działalności wykonywanej osobiście',
    ],
  },
  {
    id: 'PIT-36',
    color: 'bg-cyan-600',
    activeColor: 'border-cyan-500 bg-cyan-500/15',
    icon: Briefcase,
    title: 'PIT-36',
    subtitle: 'Działalność gospodarcza (skala)',
    bullets: [
      'Działalność gospodarcza (skala podatkowa)',
      'Najem prywatny na zasadach ogólnych',
      'Przychody zagraniczne',
    ],
  },
  {
    id: 'PIT-36L',
    color: 'bg-violet-600',
    activeColor: 'border-violet-500 bg-violet-500/15',
    icon: TrendingUp,
    title: 'PIT-36L',
    subtitle: 'Podatek liniowy 19%',
    bullets: [
      'Działalność gospodarcza – stawka liniowa 19%',
      'Dla przedsiębiorców rozliczających się liniowo',
      'Brak możliwości rozliczenia wspólnie z małżonkiem',
    ],
  },
  {
    id: 'PIT-28',
    color: 'bg-orange-600',
    activeColor: 'border-orange-500 bg-orange-500/15',
    icon: Receipt,
    title: 'PIT-28',
    subtitle: 'Ryczałt od przychodów ewidencjonowanych',
    bullets: [
      'Ryczałt ewidencjonowany (działalność/najem)',
      'Stawki 2%, 3%, 5,5%, 8,5%, 10%, 12%, 12,5%, 14%, 15%, 17%',
      'Brak możliwości odliczania kosztów uzyskania',
    ],
  },
  {
    id: 'PIT-38',
    color: 'bg-emerald-600',
    activeColor: 'border-emerald-500 bg-emerald-500/15',
    icon: BarChart3,
    title: 'PIT-38',
    subtitle: 'Kapitały pieniężne i prawa majątkowe',
    bullets: [
      'Dochody z giełdy, funduszy inwestycyjnych',
      'Zbycie udziałów, akcji i papierów wartościowych',
      'Podatek 19% od zysku',
    ],
  },
  {
    id: 'PIT-39',
    color: 'bg-rose-600',
    activeColor: 'border-rose-500 bg-rose-500/15',
    icon: Home,
    title: 'PIT-39',
    subtitle: 'Zbycie nieruchomości i praw majątkowych',
    bullets: [
      'Sprzedaż mieszkania / domu / działki',
      'Nabytych po 1 stycznia 2009 r.',
      'Podatek 19% od dochodu ze sprzedaży',
    ],
  },
  {
    id: 'PIT-16A',
    color: 'bg-yellow-600',
    activeColor: 'border-yellow-500 bg-yellow-500/15',
    icon: Building2,
    title: 'PIT-16A',
    subtitle: 'Karta podatkowa',
    bullets: [
      'Deklaracja o wysokości składki na ubezpieczenie zdrowotne',
      'Dla podatników rozliczających się kartą podatkową',
      'Składana miesięcznie lub rocznie',
    ],
  },
  {
    id: 'PIT-19A',
    color: 'bg-sky-600',
    activeColor: 'border-sky-500 bg-sky-500/15',
    icon: DollarSign,
    title: 'PIT-19A',
    subtitle: 'Zryczałtowany podatek dochodowy',
    bullets: [
      'Dywidendy i inne przychody z udziału w zysku',
      'Odsetki od pożyczek, depozytów',
      'Podatek zryczałtowany pobrany przez płatnika',
    ],
  },
]

const RYCZALT_RATES = [
  { value: '2', label: '2% – handel' },
  { value: '3', label: '3% – działalność gastronomiczna' },
  { value: '5.5', label: '5,5% – budownictwo' },
  { value: '8.5', label: '8,5% – usługi' },
  { value: '10', label: '10% – najem' },
  { value: '12', label: '12% – usługi IT' },
  { value: '12.5', label: '12,5% – najem powyżej 100 tys.' },
  { value: '14', label: '14% – wolne zawody' },
  { value: '15', label: '15% – pośrednictwo' },
  { value: '17', label: '17% – pozostałe usługi' },
]

const INITIAL_FORM: PitFormData = {
  taxYear: '2024',
  formType: 'PIT-37',
  pesel: '', firstName: '', lastName: '', dateOfBirth: '', nip: '',
  street: '', houseNumber: '', apartmentNumber: '', postalCode: '', city: '',
  revenueEmployment: '', revenuePension: '', revenueOther: '', revenueSelfEmployment: '',
  costsEmployment: '', costsSelfEmployment: '',
  revenueLinear: '', costsLinear: '',
  revenueRyczalt: '', ryczaltRate: '8.5',
  revenueCapital: '', costsCapital: '',
  revenueProperty: '', costsProperty: '', propertyYear: '',
  cardTaxMonth: '', cardTaxRate: '',
  revenueFlat: '',
  deductionInternet: '', deductionChildren: '', deductionCharitable: '',
  deductionRehabilitation: '', deductionResearch: '', deductionTerminalIllness: '',
  taxPrepaid: '',
  jointSettlement: false,
  spouseFirstName: '', spouseLastName: '', spousePesel: '', spouseIncome: '',
}

const TAX_THRESHOLD_1 = 120000
const TAX_FREE_AMOUNT = 30000
const TAX_RATE_1 = 0.12
const TAX_RATE_2 = 0.32

function calculateScaleTax(income: number): number {
  if (income <= TAX_FREE_AMOUNT) return 0
  const taxable = income - TAX_FREE_AMOUNT
  if (income <= TAX_THRESHOLD_1) return taxable * TAX_RATE_1
  return (TAX_THRESHOLD_1 - TAX_FREE_AMOUNT) * TAX_RATE_1 + (income - TAX_THRESHOLD_1) * TAX_RATE_2
}

function useFormCalc(form: PitFormData) {
  const ft = form.formType
  // PIT-37 / PIT-36
  const totalRevenue = ft === 'PIT-37' || ft === 'PIT-36'
    ? (parseFloat(form.revenueEmployment) || 0)
      + (parseFloat(form.revenuePension) || 0)
      + (parseFloat(form.revenueOther) || 0)
      + (parseFloat(form.revenueSelfEmployment) || 0)
    : 0
  const totalCosts = ft === 'PIT-37' || ft === 'PIT-36'
    ? (parseFloat(form.costsEmployment) || 0) + (parseFloat(form.costsSelfEmployment) || 0)
    : 0
  const totalIncome = Math.max(0, totalRevenue - totalCosts)

  const totalDeductions = ft === 'PIT-37' || ft === 'PIT-36'
    ? Math.min(parseFloat(form.deductionInternet) || 0, 760)
      + (parseFloat(form.deductionChildren) || 0)
      + (parseFloat(form.deductionCharitable) || 0)
      + (parseFloat(form.deductionRehabilitation) || 0)
      + (parseFloat(form.deductionResearch) || 0)
      + (parseFloat(form.deductionTerminalIllness) || 0)
    : 0

  const taxableIncome = Math.max(0, totalIncome - totalDeductions)
  const taxPrepaid = parseFloat(form.taxPrepaid) || 0

  let calculatedTax = 0
  if (ft === 'PIT-37' || ft === 'PIT-36') {
    calculatedTax = Math.round(calculateScaleTax(taxableIncome))
  } else if (ft === 'PIT-36L') {
    const linearIncome = Math.max(0, (parseFloat(form.revenueLinear) || 0) - (parseFloat(form.costsLinear) || 0))
    calculatedTax = Math.round(linearIncome * 0.19)
  } else if (ft === 'PIT-28') {
    const rate = parseFloat(form.ryczaltRate) / 100
    calculatedTax = Math.round((parseFloat(form.revenueRyczalt) || 0) * rate)
  } else if (ft === 'PIT-38') {
    const capitalIncome = Math.max(0, (parseFloat(form.revenueCapital) || 0) - (parseFloat(form.costsCapital) || 0))
    calculatedTax = Math.round(capitalIncome * 0.19)
  } else if (ft === 'PIT-39') {
    const propertyIncome = Math.max(0, (parseFloat(form.revenueProperty) || 0) - (parseFloat(form.costsProperty) || 0))
    calculatedTax = Math.round(propertyIncome * 0.19)
  } else if (ft === 'PIT-16A') {
    calculatedTax = parseFloat(form.cardTaxMonth) || 0
  } else if (ft === 'PIT-19A') {
    calculatedTax = Math.round((parseFloat(form.revenueFlat) || 0) * 0.19)
  }

  const taxDiff = calculatedTax - taxPrepaid

  return { totalRevenue, totalCosts, totalIncome, totalDeductions, taxableIncome, calculatedTax, taxPrepaid, taxDiff }
}

export default function PitPage() {
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

  const calc = useFormCalc(form)
  const ft = form.formType

  const needsNip = ft === 'PIT-36' || ft === 'PIT-36L' || ft === 'PIT-28' || ft === 'PIT-16A' || ft === 'PIT-19A'
  const canJointSettle = ft === 'PIT-37' || ft === 'PIT-36'

  const steps = [
    { label: 'Formularz', icon: FileText },
    { label: 'Dane osobowe', icon: User },
    { label: 'Adres', icon: Home },
    { label: 'Przychody', icon: Briefcase },
    ...(ft === 'PIT-37' || ft === 'PIT-36' ? [{ label: 'Odliczenia', icon: Heart }] : []),
    { label: 'Podsumowanie', icon: Calculator },
  ]

  const inputCls = "min-h-[44px] bg-blue-500/10 border-blue-500/30 text-white placeholder:text-blue-300/40 focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all"
  const labelCls = "block text-xs sm:text-sm font-medium text-blue-300 mb-2"

  const summaryStep = steps.length - 1
  const deductionStep = ft === 'PIT-37' || ft === 'PIT-36' ? 4 : -1

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

        {/* ── Step 0: Form type ── */}
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
                    <SelectItem value="2021">2021</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PIT_FORMS.map(pf => {
                  const Icon = pf.icon
                  const isActive = form.formType === pf.id
                  return (
                    <button
                      key={pf.id}
                      type="button"
                      onClick={() => set('formType', pf.id)}
                      className={`p-4 rounded-xl border-2 text-left transition-all ${
                        isActive
                          ? pf.activeColor
                          : 'border-blue-500/20 bg-slate-700/30 hover:border-blue-500/40'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-10 h-10 rounded-lg ${pf.color} flex items-center justify-center flex-shrink-0`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-bold text-white text-base">{pf.title}</p>
                          <p className="text-blue-300/70 text-xs mt-0.5">{pf.subtitle}</p>
                          <ul className="mt-2 space-y-0.5">
                            {pf.bullets.map(b => (
                              <li key={b} className="text-xs text-slate-400">• {b}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>

              <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 flex gap-3">
                <Info className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-blue-300/80">
                  Nie wiesz który formularz wybrać? Jeśli masz tylko dochody z pracy lub emerytury – <strong className="text-blue-300">PIT-37</strong>. Działalność na skali – <strong className="text-blue-300">PIT-36</strong>. Liniowy – <strong className="text-blue-300">PIT-36L</strong>. Ryczałt – <strong className="text-blue-300">PIT-28</strong>. Giełda/fundusze – <strong className="text-blue-300">PIT-38</strong>. Sprzedaż nieruchomości – <strong className="text-blue-300">PIT-39</strong>.
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* ── Step 1: Personal data ── */}
        {step === 1 && (
          <Card className="bg-slate-800/50 border-blue-500/20">
            <CardHeader>
              <CardTitle className="text-white text-xl">Dane identyfikacyjne</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className={labelCls}>PESEL</label>
                <Input className={inputCls} placeholder="12345678901" value={form.pesel} onChange={e => set('pesel', e.target.value)} maxLength={11} />
              </div>
              {needsNip && (
                <div>
                  <label className={labelCls}>NIP (dla działalności)</label>
                  <Input className={inputCls} placeholder="000-000-00-00" value={form.nip} onChange={e => set('nip', e.target.value)} maxLength={13} />
                </div>
              )}
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

              {canJointSettle && (
                <div className="pt-2 border-t border-blue-500/20">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <div
                      onClick={() => set('jointSettlement', !form.jointSettlement)}
                      className={`w-10 h-6 rounded-full transition-all flex items-center px-1 ${form.jointSettlement ? 'bg-blue-600' : 'bg-slate-600'}`}
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
              )}
            </CardContent>
          </Card>
        )}

        {/* ── Step 2: Address ── */}
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

        {/* ── Step 3: Revenue – varies by form type ── */}
        {step === 3 && (
          <>
            {/* PIT-37 / PIT-36 */}
            {(ft === 'PIT-37' || ft === 'PIT-36') && (
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
                      {ft === 'PIT-36' && (
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
                        <span className="font-bold text-green-300 text-lg">{calc.totalRevenue.toFixed(2)} zł</span>
                      </div>
                    </TabsContent>
                    <TabsContent value="costs" className="space-y-4">
                      <div>
                        <label className={labelCls}>Koszty ze stosunku pracy (zł)</label>
                        <Input className={inputCls} type="number" step="0.01" placeholder="0.00" value={form.costsEmployment} onChange={e => set('costsEmployment', e.target.value)} />
                        <p className="text-xs text-blue-300/40 mt-1">Standardowe: 250 zł/m-c (3000 zł/rok) lub 300 zł/m-c (3600 zł/rok)</p>
                      </div>
                      {ft === 'PIT-36' && (
                        <div>
                          <label className={labelCls}>Koszty działalności gospodarczej (zł)</label>
                          <Input className={inputCls} type="number" step="0.01" placeholder="0.00" value={form.costsSelfEmployment} onChange={e => set('costsSelfEmployment', e.target.value)} />
                        </div>
                      )}
                      <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-between">
                        <span className="text-sm text-amber-300">Dochód do opodatkowania</span>
                        <span className="font-bold text-amber-300 text-lg">{calc.totalIncome.toFixed(2)} zł</span>
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

            {/* PIT-36L */}
            {ft === 'PIT-36L' && (
              <Card className="bg-slate-800/50 border-blue-500/20">
                <CardHeader>
                  <CardTitle className="text-white text-xl">Przychody i koszty – podatek liniowy 19%</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 rounded-lg bg-violet-500/10 border border-violet-500/20 flex gap-2">
                    <Info className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-violet-300/80">Podatek liniowy: stała stawka <strong className="text-violet-300">19%</strong> od dochodu. Brak kwoty wolnej i progów podatkowych.</p>
                  </div>
                  <div>
                    <label className={labelCls}>Przychód z działalności (zł)</label>
                    <Input className={inputCls} type="number" step="0.01" placeholder="0.00" value={form.revenueLinear} onChange={e => set('revenueLinear', e.target.value)} />
                  </div>
                  <div>
                    <label className={labelCls}>Koszty uzyskania przychodów (zł)</label>
                    <Input className={inputCls} type="number" step="0.01" placeholder="0.00" value={form.costsLinear} onChange={e => set('costsLinear', e.target.value)} />
                  </div>
                  <div>
                    <label className={labelCls}>Zaliczki zapłacone w ciągu roku (zł)</label>
                    <Input className={inputCls} type="number" step="0.01" placeholder="0.00" value={form.taxPrepaid} onChange={e => set('taxPrepaid', e.target.value)} />
                  </div>
                  <div className="p-3 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-between">
                    <span className="text-sm text-violet-300">Dochód z działalności</span>
                    <span className="font-bold text-violet-300 text-lg">
                      {Math.max(0, (parseFloat(form.revenueLinear) || 0) - (parseFloat(form.costsLinear) || 0)).toFixed(2)} zł
                    </span>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* PIT-28 */}
            {ft === 'PIT-28' && (
              <Card className="bg-slate-800/50 border-blue-500/20">
                <CardHeader>
                  <CardTitle className="text-white text-xl">Przychody – ryczałt ewidencjonowany</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 rounded-lg bg-orange-500/10 border border-orange-500/20 flex gap-2">
                    <Info className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-orange-300/80">W ryczałcie podatek naliczany jest od <strong className="text-orange-300">przychodu</strong> (bez odliczania kosztów uzyskania). Wybierz właściwą stawkę dla rodzaju działalności.</p>
                  </div>
                  <div>
                    <label className={labelCls}>Łączny przychód ewidencjonowany (zł)</label>
                    <Input className={inputCls} type="number" step="0.01" placeholder="0.00" value={form.revenueRyczalt} onChange={e => set('revenueRyczalt', e.target.value)} />
                  </div>
                  <div>
                    <label className={labelCls}>Stawka ryczałtu</label>
                    <Select value={form.ryczaltRate} onValueChange={v => set('ryczaltRate', v)}>
                      <SelectTrigger className={inputCls}>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {RYCZALT_RATES.map(r => (
                          <SelectItem key={r.value} value={r.value}>{r.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className={labelCls}>Zaliczki / podatek ryczałtowy zapłacony (zł)</label>
                    <Input className={inputCls} type="number" step="0.01" placeholder="0.00" value={form.taxPrepaid} onChange={e => set('taxPrepaid', e.target.value)} />
                  </div>
                  <div className="p-3 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-between">
                    <span className="text-sm text-orange-300">Podatek ryczałtowy ({form.ryczaltRate}%)</span>
                    <span className="font-bold text-orange-300 text-lg">{Math.round((parseFloat(form.revenueRyczalt) || 0) * parseFloat(form.ryczaltRate) / 100).toFixed(2)} zł</span>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* PIT-38 */}
            {ft === 'PIT-38' && (
              <Card className="bg-slate-800/50 border-blue-500/20">
                <CardHeader>
                  <CardTitle className="text-white text-xl">Dochody kapitałowe – giełda i fundusze</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex gap-2">
                    <Info className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-emerald-300/80">Podatek <strong className="text-emerald-300">19%</strong> od dochodu z odpłatnego zbycia papierów wartościowych i udziałów. Dane z PIT-8C od brokera.</p>
                  </div>
                  <div>
                    <label className={labelCls}>Przychody z odpłatnego zbycia (zł)</label>
                    <Input className={inputCls} type="number" step="0.01" placeholder="0.00" value={form.revenueCapital} onChange={e => set('revenueCapital', e.target.value)} />
                    <p className="text-xs text-blue-300/40 mt-1">Z PIT-8C w polu "Przychód"</p>
                  </div>
                  <div>
                    <label className={labelCls}>Koszty nabycia i zbycia (zł)</label>
                    <Input className={inputCls} type="number" step="0.01" placeholder="0.00" value={form.costsCapital} onChange={e => set('costsCapital', e.target.value)} />
                    <p className="text-xs text-blue-300/40 mt-1">Z PIT-8C w polu "Koszty"</p>
                  </div>
                  <div>
                    <label className={labelCls}>Zaliczki / podatek pobrany przez płatnika (zł)</label>
                    <Input className={inputCls} type="number" step="0.01" placeholder="0.00" value={form.taxPrepaid} onChange={e => set('taxPrepaid', e.target.value)} />
                  </div>
                  <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between">
                    <span className="text-sm text-emerald-300">Dochód kapitałowy</span>
                    <span className="font-bold text-emerald-300 text-lg">
                      {Math.max(0, (parseFloat(form.revenueCapital) || 0) - (parseFloat(form.costsCapital) || 0)).toFixed(2)} zł
                    </span>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* PIT-39 */}
            {ft === 'PIT-39' && (
              <Card className="bg-slate-800/50 border-blue-500/20">
                <CardHeader>
                  <CardTitle className="text-white text-xl">Sprzedaż nieruchomości</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 flex gap-2">
                    <Info className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-rose-300/80">Dotyczy nieruchomości nabytych <strong className="text-rose-300">po 1 stycznia 2009 r.</strong> Podatek wynosi <strong className="text-rose-300">19%</strong> od dochodu. Zwolnienie po 5 latach od nabycia lub przy przeznaczeniu środków na własne cele mieszkaniowe.</p>
                  </div>
                  <div>
                    <label className={labelCls}>Przychód ze sprzedaży nieruchomości (zł)</label>
                    <Input className={inputCls} type="number" step="0.01" placeholder="0.00" value={form.revenueProperty} onChange={e => set('revenueProperty', e.target.value)} />
                  </div>
                  <div>
                    <label className={labelCls}>Koszty nabycia i zbycia (zł)</label>
                    <Input className={inputCls} type="number" step="0.01" placeholder="0.00" value={form.costsProperty} onChange={e => set('costsProperty', e.target.value)} />
                    <p className="text-xs text-blue-300/40 mt-1">Cena zakupu, koszty remontu, notariusz, prowizja pośrednika</p>
                  </div>
                  <div>
                    <label className={labelCls}>Rok nabycia nieruchomości</label>
                    <Input className={inputCls} type="number" placeholder="np. 2018" value={form.propertyYear} onChange={e => set('propertyYear', e.target.value)} maxLength={4} />
                  </div>
                  <div>
                    <label className={labelCls}>Zaliczki zapłacone (zł)</label>
                    <Input className={inputCls} type="number" step="0.01" placeholder="0.00" value={form.taxPrepaid} onChange={e => set('taxPrepaid', e.target.value)} />
                  </div>
                  <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-between">
                    <span className="text-sm text-rose-300">Dochód ze sprzedaży</span>
                    <span className="font-bold text-rose-300 text-lg">
                      {Math.max(0, (parseFloat(form.revenueProperty) || 0) - (parseFloat(form.costsProperty) || 0)).toFixed(2)} zł
                    </span>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* PIT-16A */}
            {ft === 'PIT-16A' && (
              <Card className="bg-slate-800/50 border-blue-500/20">
                <CardHeader>
                  <CardTitle className="text-white text-xl">Karta podatkowa – składka zdrowotna</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex gap-2">
                    <Info className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-yellow-300/80">PIT-16A to deklaracja o wysokości <strong className="text-yellow-300">składki na ubezpieczenie zdrowotne</strong> zapłaconej przez podatnika rozliczającego się kartą podatkową w danym roku.</p>
                  </div>
                  <div>
                    <label className={labelCls}>Łączna kwota składek zdrowotnych zapłaconych w roku (zł)</label>
                    <Input className={inputCls} type="number" step="0.01" placeholder="0.00" value={form.cardTaxMonth} onChange={e => set('cardTaxMonth', e.target.value)} />
                    <p className="text-xs text-blue-300/40 mt-1">Suma opłaconych miesięcznych składek na ZUS zdrowotny</p>
                  </div>
                  <div>
                    <label className={labelCls}>Stawka karty podatkowej (zł/miesięcznie)</label>
                    <Input className={inputCls} type="number" step="0.01" placeholder="0.00" value={form.cardTaxRate} onChange={e => set('cardTaxRate', e.target.value)} />
                    <p className="text-xs text-blue-300/40 mt-1">Stawka ustalona przez naczelnika urzędu skarbowego</p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* PIT-19A */}
            {ft === 'PIT-19A' && (
              <Card className="bg-slate-800/50 border-blue-500/20">
                <CardHeader>
                  <CardTitle className="text-white text-xl">Zryczałtowany podatek dochodowy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 rounded-lg bg-sky-500/10 border border-sky-500/20 flex gap-2">
                    <Info className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-sky-300/80">PIT-19A dotyczy przychodów, od których płatnik pobrał <strong className="text-sky-300">zryczałtowany podatek dochodowy</strong> – m.in. dywidendy, odsetki, nagrody. Podatek wynosi <strong className="text-sky-300">19%</strong>.</p>
                  </div>
                  <div>
                    <label className={labelCls}>Łączna kwota przychodów z pobranym podatkiem zryczałtowanym (zł)</label>
                    <Input className={inputCls} type="number" step="0.01" placeholder="0.00" value={form.revenueFlat} onChange={e => set('revenueFlat', e.target.value)} />
                    <p className="text-xs text-blue-300/40 mt-1">Z informacji PIT-8A lub PIT-8C od płatnika</p>
                  </div>
                  <div>
                    <label className={labelCls}>Podatek pobrany przez płatnika (zł)</label>
                    <Input className={inputCls} type="number" step="0.01" placeholder="0.00" value={form.taxPrepaid} onChange={e => set('taxPrepaid', e.target.value)} />
                  </div>
                  <div className="p-3 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-between">
                    <span className="text-sm text-sky-300">Podatek należny (19%)</span>
                    <span className="font-bold text-sky-300 text-lg">
                      {Math.round((parseFloat(form.revenueFlat) || 0) * 0.19).toFixed(2)} zł
                    </span>
                  </div>
                </CardContent>
              </Card>
            )}
          </>
        )}

        {/* ── Step 4: Deductions (only PIT-37 / PIT-36) ── */}
        {step === deductionStep && deductionStep !== -1 && (
          <Card className="bg-slate-800/50 border-blue-500/20">
            <CardHeader>
              <CardTitle className="text-white text-xl">Odliczenia i ulgi podatkowe</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className={labelCls}>Ulga internetowa (zł) <span className="text-blue-300/50 font-normal">max 760 zł</span></label>
                <Input className={inputCls} type="number" step="0.01" placeholder="0.00" value={form.deductionInternet} onChange={e => set('deductionInternet', e.target.value)} />
                <p className="text-xs text-blue-300/40 mt-1">Wydatki z tytułu użytkowania internetu w miejscu zamieszkania</p>
              </div>
              <div>
                <label className={labelCls}>Ulga na dzieci (zł)</label>
                <Input className={inputCls} type="number" step="0.01" placeholder="0.00" value={form.deductionChildren} onChange={e => set('deductionChildren', e.target.value)} />
                <p className="text-xs text-blue-300/40 mt-1">1 dziecko: 1112,04 zł/rok, 2 dzieci: 2224,08 zł/rok, 3 dzieci: 4224,12 zł/rok</p>
              </div>
              <div>
                <label className={labelCls}>Darowizny (zł)</label>
                <Input className={inputCls} type="number" step="0.01" placeholder="0.00" value={form.deductionCharitable} onChange={e => set('deductionCharitable', e.target.value)} />
                <p className="text-xs text-blue-300/40 mt-1">Darowizny na cele pożytku publicznego, kultu religijnego, etc.</p>
              </div>
              <div>
                <label className={labelCls}>Ulga rehabilitacyjna (zł)</label>
                <Input className={inputCls} type="number" step="0.01" placeholder="0.00" value={form.deductionRehabilitation} onChange={e => set('deductionRehabilitation', e.target.value)} />
              </div>
              <div>
                <label className={labelCls}>Ulga B+R (badawczo-rozwojowa) (zł)</label>
                <Input className={inputCls} type="number" step="0.01" placeholder="0.00" value={form.deductionResearch} onChange={e => set('deductionResearch', e.target.value)} />
              </div>
              <div>
                <label className={labelCls}>Ulga na terminal / bezgotówkowa (zł)</label>
                <Input className={inputCls} type="number" step="0.01" placeholder="0.00" value={form.deductionTerminalIllness} onChange={e => set('deductionTerminalIllness', e.target.value)} />
              </div>
              <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-between">
                <span className="text-sm text-blue-300">Łączne odliczenia</span>
                <span className="font-bold text-blue-300 text-lg">{calc.totalDeductions.toFixed(2)} zł</span>
              </div>
            </CardContent>
          </Card>
        )}

        {/* ── Summary step ── */}
        {step === summaryStep && (
          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-white text-xl flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-blue-400" />
                  Podsumowanie – {form.formType} za rok {form.taxYear}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {(ft === 'PIT-37' || ft === 'PIT-36') && (
                  <div className="space-y-2">
                    {[
                      { label: 'Łączny przychód', value: calc.totalRevenue, color: 'text-white' },
                      { label: 'Koszty uzyskania', value: -calc.totalCosts, color: 'text-rose-300' },
                      { label: 'Dochód', value: calc.totalIncome, color: 'text-white' },
                      { label: 'Odliczenia', value: -calc.totalDeductions, color: 'text-green-300' },
                      { label: 'Podstawa opodatkowania', value: calc.taxableIncome, color: 'text-white font-semibold' },
                    ].map(row => (
                      <div key={row.label} className="flex items-center justify-between py-2 border-b border-blue-500/10 last:border-0">
                        <span className="text-sm text-blue-300/70">{row.label}</span>
                        <span className={`text-sm font-mono ${row.color}`}>
                          {row.value < 0 ? '- ' : ''}{Math.abs(row.value).toFixed(2)} zł
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {ft === 'PIT-36L' && (
                  <div className="space-y-2">
                    {[
                      { label: 'Przychód z działalności', value: parseFloat(form.revenueLinear) || 0, color: 'text-white' },
                      { label: 'Koszty uzyskania', value: -(parseFloat(form.costsLinear) || 0), color: 'text-rose-300' },
                      { label: 'Dochód', value: Math.max(0, (parseFloat(form.revenueLinear) || 0) - (parseFloat(form.costsLinear) || 0)), color: 'text-white font-semibold' },
                    ].map(row => (
                      <div key={row.label} className="flex items-center justify-between py-2 border-b border-blue-500/10 last:border-0">
                        <span className="text-sm text-blue-300/70">{row.label}</span>
                        <span className={`text-sm font-mono ${row.color}`}>
                          {row.value < 0 ? '- ' : ''}{Math.abs(row.value).toFixed(2)} zł
                        </span>
                      </div>
                    ))}
                    <p className="text-xs text-violet-300/70 pt-1">Stawka podatku liniowego: 19%</p>
                  </div>
                )}

                {ft === 'PIT-28' && (
                  <div className="space-y-2">
                    {[
                      { label: 'Przychód ewidencjonowany', value: parseFloat(form.revenueRyczalt) || 0, color: 'text-white' },
                      { label: `Stawka ryczałtu`, value: parseFloat(form.ryczaltRate), color: 'text-orange-300', suffix: '%' },
                    ].map(row => (
                      <div key={row.label} className="flex items-center justify-between py-2 border-b border-blue-500/10 last:border-0">
                        <span className="text-sm text-blue-300/70">{row.label}</span>
                        <span className={`text-sm font-mono ${row.color}`}>{row.value.toFixed(2)}{(row as any).suffix || ' zł'}</span>
                      </div>
                    ))}
                  </div>
                )}

                {ft === 'PIT-38' && (
                  <div className="space-y-2">
                    {[
                      { label: 'Przychody kapitałowe', value: parseFloat(form.revenueCapital) || 0, color: 'text-white' },
                      { label: 'Koszty', value: -(parseFloat(form.costsCapital) || 0), color: 'text-rose-300' },
                      { label: 'Dochód kapitałowy', value: Math.max(0, (parseFloat(form.revenueCapital) || 0) - (parseFloat(form.costsCapital) || 0)), color: 'text-white font-semibold' },
                    ].map(row => (
                      <div key={row.label} className="flex items-center justify-between py-2 border-b border-blue-500/10 last:border-0">
                        <span className="text-sm text-blue-300/70">{row.label}</span>
                        <span className={`text-sm font-mono ${row.color}`}>
                          {row.value < 0 ? '- ' : ''}{Math.abs(row.value).toFixed(2)} zł
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {ft === 'PIT-39' && (
                  <div className="space-y-2">
                    {[
                      { label: 'Przychód ze sprzedaży', value: parseFloat(form.revenueProperty) || 0, color: 'text-white' },
                      { label: 'Koszty nabycia i zbycia', value: -(parseFloat(form.costsProperty) || 0), color: 'text-rose-300' },
                      { label: 'Dochód z nieruchomości', value: Math.max(0, (parseFloat(form.revenueProperty) || 0) - (parseFloat(form.costsProperty) || 0)), color: 'text-white font-semibold' },
                    ].map(row => (
                      <div key={row.label} className="flex items-center justify-between py-2 border-b border-blue-500/10 last:border-0">
                        <span className="text-sm text-blue-300/70">{row.label}</span>
                        <span className={`text-sm font-mono ${row.color}`}>
                          {row.value < 0 ? '- ' : ''}{Math.abs(row.value).toFixed(2)} zł
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {ft === 'PIT-16A' && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between py-2 border-b border-blue-500/10">
                      <span className="text-sm text-blue-300/70">Składki zdrowotne za rok</span>
                      <span className="text-sm font-mono text-white">{(parseFloat(form.cardTaxMonth) || 0).toFixed(2)} zł</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-blue-500/10">
                      <span className="text-sm text-blue-300/70">Stawka karty podatkowej</span>
                      <span className="text-sm font-mono text-yellow-300">{(parseFloat(form.cardTaxRate) || 0).toFixed(2)} zł/mies.</span>
                    </div>
                  </div>
                )}

                {ft === 'PIT-19A' && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between py-2 border-b border-blue-500/10">
                      <span className="text-sm text-blue-300/70">Przychody z podatkiem zryczałtowanym</span>
                      <span className="text-sm font-mono text-white">{(parseFloat(form.revenueFlat) || 0).toFixed(2)} zł</span>
                    </div>
                  </div>
                )}

                <div className="mt-4 pt-4 border-t border-blue-500/20 space-y-2">
                  <div className="flex items-center justify-between py-2">
                    <span className="text-sm text-blue-300/70">Podatek obliczony</span>
                    <span className="text-sm font-mono text-white">{calc.calculatedTax.toFixed(2)} zł</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-sm text-blue-300/70">Zaliczki / podatek pobrany</span>
                    <span className="text-sm font-mono text-green-300">- {calc.taxPrepaid.toFixed(2)} zł</span>
                  </div>
                  <div className={`flex items-center justify-between py-3 px-4 rounded-xl ${
                    calc.taxDiff > 0 ? 'bg-rose-500/15 border border-rose-500/30' : 'bg-green-500/15 border border-green-500/30'
                  }`}>
                    <span className={`font-semibold ${calc.taxDiff > 0 ? 'text-rose-300' : 'text-green-300'}`}>
                      {calc.taxDiff > 0 ? 'Do dopłaty' : 'Zwrot podatku'}
                    </span>
                    <span className={`text-xl font-bold font-mono ${calc.taxDiff > 0 ? 'text-rose-300' : 'text-green-300'}`}>
                      {Math.abs(calc.taxDiff).toFixed(2)} zł
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 flex gap-3">
              <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-amber-300/80">
                <p className="font-semibold text-amber-300">Kalkulacja orientacyjna</p>
                <p className="mt-1">Wynik obliczony przez system ma charakter orientacyjny. Przed wysłaniem do urzędu skarbowego zalecamy weryfikację danych ze wszystkich informacji podatkowych (PIT-11, PIT-8C, etc.).</p>
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
                  const data = JSON.stringify({ ...form, calculatedTax: calc.calculatedTax, taxDiff: calc.taxDiff }, null, 2)
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
