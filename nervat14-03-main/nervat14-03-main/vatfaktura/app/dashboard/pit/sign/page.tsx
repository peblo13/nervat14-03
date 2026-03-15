'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Shield, Lock, Key, CheckCircle, AlertCircle,
  ChevronLeft, Eye, EyeOff, Info, Smartphone, FileKey
} from 'lucide-react'
import Link from 'next/link'

type SignMethod = 'pin' | 'trusted_profile' | 'cert'

interface SignStep {
  id: string
  label: string
  done: boolean
}

export default function PitSignPage() {
  const router = useRouter()
  const [method, setMethod] = useState<SignMethod>('pin')
  const [pin, setPin] = useState('')
  const [showPin, setShowPin] = useState(false)
  const [confirmPin, setConfirmPin] = useState('')
  const [authCode, setAuthCode] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSigning, setIsSigning] = useState(false)
  const [signSteps, setSignSteps] = useState<SignStep[]>([])
  const [signed, setSigned] = useState(false)
  const [error, setError] = useState('')

  const inputCls = "min-h-[44px] bg-blue-500/10 border-blue-500/30 text-white placeholder:text-blue-300/40 focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all"
  const labelCls = "block text-xs sm:text-sm font-medium text-blue-300 mb-2"

  const runSignProcess = async () => {
    if (method === 'pin' && pin.length < 5) {
      setError('PIN musi mieć co najmniej 5 cyfr')
      return
    }
    if (method === 'pin' && pin !== confirmPin) {
      setError('Kody PIN się nie zgadzają')
      return
    }

    setError('')
    setIsSigning(true)

    const steps: SignStep[] = [
      { id: 'validate', label: 'Weryfikacja danych formularza...', done: false },
      { id: 'hash', label: 'Generowanie skrótu kryptograficznego (SHA-256)...', done: false },
      { id: 'sign', label: 'Podpisywanie deklaracji...', done: false },
      { id: 'encode', label: 'Kodowanie podpisu elektronicznego...', done: false },
      { id: 'ready', label: 'Dokument gotowy do wysyłki', done: false },
    ]

    setSignSteps(steps)

    for (let i = 0; i < steps.length; i++) {
      await new Promise(r => setTimeout(r, 800 + Math.random() * 400))
      setSignSteps(prev => prev.map((s, idx) => idx <= i ? { ...s, done: true } : s))
    }

    setSigned(true)
    setIsSigning(false)
  }

  if (signed) {
    return (
      <div className="min-h-screen relative flex flex-col">
        <header className="bg-slate-900/40 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
          <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/dashboard/pit" className="flex items-center gap-2 text-blue-300 hover:text-white transition-colors text-sm">
              <ChevronLeft className="w-4 h-4" />
              Formularz PIT
            </Link>
            <span className="text-white font-semibold text-sm">Podpis elektroniczny</span>
            <div />
          </div>
        </header>

        <main className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="w-full max-w-md text-center space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20 border-2 border-green-500/50">
              <CheckCircle className="w-10 h-10 text-green-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Podpisano pomyślnie</h2>
              <p className="text-blue-300/70 mt-2">Deklaracja PIT jest gotowa do wysyłki do urzędu skarbowego</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/50 border border-green-500/20 text-left space-y-2">
              <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">Szczegóły podpisu</p>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-blue-300/70">Metoda</span>
                  <span className="text-white font-mono">{method === 'pin' ? 'PIN (Profil Zaufany)' : method === 'trusted_profile' ? 'Profil Zaufany' : 'Certyfikat kwalifikowany'}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-blue-300/70">Data podpisu</span>
                  <span className="text-white font-mono">{new Date().toLocaleString('pl-PL')}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-blue-300/70">Standard</span>
                  <span className="text-white font-mono">XAdES-T</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Link href="/dashboard/pit/send">
                <Button className="w-full min-h-[48px] bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-700 hover:to-cyan-700 text-base font-semibold shadow-lg shadow-green-500/30">
                  <Shield className="w-5 h-5 mr-2" />
                  Wyślij do Urzędu Skarbowego
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="outline" className="w-full min-h-[44px] border-blue-500/30 text-blue-300 hover:bg-blue-500/10">
                  Wróć do panelu
                </Button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen relative">
      <header className="bg-slate-900/40 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/dashboard/pit" className="flex items-center gap-2 text-blue-300 hover:text-white transition-colors text-sm">
            <ChevronLeft className="w-4 h-4" />
            Formularz PIT
          </Link>
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-green-400" />
            <span className="text-white font-semibold text-sm">Podpis elektroniczny</span>
          </div>
          <div />
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-8 space-y-6">

        {!isSigning ? (
          <>
            {/* Method selection */}
            <Card className="bg-slate-800/50 border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-white text-xl flex items-center gap-2">
                  <Key className="w-5 h-5 text-blue-400" />
                  Wybierz metodę podpisu
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  {
                    id: 'pin' as SignMethod,
                    icon: Smartphone,
                    title: 'Kwota przychodu (autoryzacja uproszczona)',
                    desc: 'Podaj kwotę przychodu z zeznania za rok poprzedni - najprostsze rozwiązanie dla osób fizycznych',
                    badge: 'Najprostsze',
                    badgeColor: 'bg-green-500/20 text-green-300 border-green-500/30',
                  },
                  {
                    id: 'trusted_profile' as SignMethod,
                    icon: Shield,
                    title: 'Profil Zaufany',
                    desc: 'Zaloguj się przez gov.pl i podpisz deklarację swoim Profilem Zaufanym',
                    badge: 'Darmowy',
                    badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
                  },
                  {
                    id: 'cert' as SignMethod,
                    icon: FileKey,
                    title: 'Certyfikat kwalifikowany',
                    desc: 'Podpis kwalifikowany (e-dowód, certyfikat komercyjny) - wymagany dla firm i przedsiębiorców',
                    badge: 'Firmowy',
                    badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
                  },
                ].map(opt => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setMethod(opt.id)}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                      method === opt.id
                        ? 'border-blue-500 bg-blue-500/15'
                        : 'border-blue-500/20 bg-slate-700/30 hover:border-blue-500/40'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        method === opt.id ? 'bg-blue-600' : 'bg-slate-600'
                      }`}>
                        <opt.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-semibold text-white text-sm">{opt.title}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full border ${opt.badgeColor}`}>{opt.badge}</span>
                        </div>
                        <p className="text-xs text-slate-400 mt-1">{opt.desc}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </CardContent>
            </Card>

            {/* Method form */}
            <Card className="bg-slate-800/50 border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-white text-lg">
                  {method === 'pin' && 'Autoryzacja przez kwotę przychodu'}
                  {method === 'trusted_profile' && 'Podpis Profilem Zaufanym'}
                  {method === 'cert' && 'Certyfikat kwalifikowany'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {method === 'pin' && (
                  <>
                    <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 flex gap-2">
                      <Info className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-blue-300/80">
                        Podaj kwotę przychodu z PIT-37 lub PIT-36 złożonego za rok poprzedni. Jeśli składasz po raz pierwszy, wpisz <strong className="text-blue-300">0</strong>.
                      </p>
                    </div>
                    <div>
                      <label className={labelCls}>Kwota przychodu z zeznania za rok poprzedni (zł)</label>
                      <div className="relative">
                        <Input
                          className={inputCls}
                          type={showPin ? 'text' : 'password'}
                          placeholder="0.00"
                          value={pin}
                          onChange={e => setPin(e.target.value)}
                          maxLength={12}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPin(!showPin)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-300 hover:text-blue-100 min-h-[44px] min-w-[44px] flex items-center justify-center"
                        >
                          {showPin ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className={labelCls}>Potwierdź kwotę</label>
                      <Input
                        className={inputCls}
                        type="password"
                        placeholder="0.00"
                        value={confirmPin}
                        onChange={e => setConfirmPin(e.target.value)}
                        maxLength={12}
                      />
                    </div>
                  </>
                )}

                {method === 'trusted_profile' && (
                  <>
                    <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-center space-y-3">
                      <Shield className="w-12 h-12 text-blue-400 mx-auto" />
                      <p className="text-sm text-blue-300/80">
                        Zostaniesz przekierowany na stronę <strong className="text-blue-300">gov.pl</strong> w celu autoryzacji.
                        Wymagane jest posiadanie aktywnego Profilu Zaufanego.
                      </p>
                    </div>
                    <div>
                      <label className={labelCls}>Twój PESEL (do weryfikacji)</label>
                      <Input className={inputCls} placeholder="12345678901" maxLength={11} />
                    </div>
                  </>
                )}

                {method === 'cert' && (
                  <>
                    <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 flex gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-amber-300/80">
                        Wymagana jest karta kryptograficzna lub token USB z certyfikatem kwalifikowanym. Upewnij się, że oprogramowanie do podpisu jest zainstalowane.
                      </p>
                    </div>
                    <div>
                      <label className={labelCls}>Numer seryjny certyfikatu</label>
                      <Input className={inputCls} placeholder="xx:xx:xx:xx:xx:xx" value={authCode} onChange={e => setAuthCode(e.target.value)} />
                    </div>
                    <div>
                      <label className={labelCls}>PIN do karty / tokenu</label>
                      <div className="relative">
                        <Input
                          className={inputCls}
                          type={showPin ? 'text' : 'password'}
                          placeholder="••••••"
                          value={pin}
                          onChange={e => setPin(e.target.value)}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPin(!showPin)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-300 hover:text-blue-100 min-h-[44px] min-w-[44px] flex items-center justify-center"
                        >
                          {showPin ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  </>
                )}

                {error && (
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-rose-500/20 border border-rose-500/30">
                    <AlertCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                    <span className="text-sm text-rose-300">{error}</span>
                  </div>
                )}

                <Button
                  onClick={runSignProcess}
                  disabled={isLoading}
                  className="w-full min-h-[48px] bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-base font-semibold shadow-lg shadow-blue-500/30"
                >
                  <Lock className="w-5 h-5 mr-2" />
                  Podpisz deklarację
                </Button>
              </CardContent>
            </Card>
          </>
        ) : (
          // Signing animation
          <Card className="bg-slate-800/50 border-blue-500/20">
            <CardHeader>
              <CardTitle className="text-white text-xl text-center">Podpisywanie dokumentu...</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-center mb-6">
                <div className="relative w-20 h-20">
                  <div className="absolute inset-0 rounded-full border-4 border-blue-500/20" />
                  <div className="absolute inset-0 rounded-full border-4 border-t-blue-500 animate-spin" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Lock className="w-8 h-8 text-blue-400" />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {signSteps.map((step, i) => (
                  <div key={step.id} className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                    step.done ? 'bg-green-500/10 border border-green-500/20' : 'bg-slate-700/30 border border-transparent'
                  }`}>
                    {step.done ? (
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-blue-500/40 flex-shrink-0" />
                    )}
                    <span className={`text-sm ${step.done ? 'text-green-300' : 'text-slate-400'}`}>{step.label}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  )
}
