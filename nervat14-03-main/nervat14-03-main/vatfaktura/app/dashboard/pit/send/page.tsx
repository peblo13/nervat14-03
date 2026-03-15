'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Send, CheckCircle, AlertCircle, Loader2, ChevronLeft,
  Building, MapPin, FileCheck, Clock, Shield, Info
} from 'lucide-react'
import Link from 'next/link'

const TAX_OFFICES = [
  { code: '0201', name: 'US Warszawa-Bemowo' },
  { code: '0202', name: 'US Warszawa-Mokotów' },
  { code: '0203', name: 'US Warszawa-Praga Południe' },
  { code: '0204', name: 'US Warszawa-Ursynów' },
  { code: '0601', name: 'US Kraków-Krowodrza' },
  { code: '0602', name: 'US Kraków-Nowa Huta' },
  { code: '0603', name: 'US Kraków-Podgórze' },
  { code: '1001', name: 'US Gdańsk-Oliwa' },
  { code: '1002', name: 'US Gdańsk-Wrzeszcz' },
  { code: '2401', name: 'US Wrocław-Fabryczna' },
  { code: '2402', name: 'US Wrocław-Krzyki' },
  { code: '2403', name: 'US Wrocław-Stare Miasto' },
  { code: '3001', name: 'US Poznań-Grunwald' },
  { code: '3002', name: 'US Poznań-Nowe Miasto' },
  { code: '4001', name: 'US Łódź-Bałuty' },
  { code: '4002', name: 'US Łódź-Górna' },
]

type SendStatus = 'idle' | 'sending' | 'success' | 'error'

interface SendStep {
  label: string
  done: boolean
  active: boolean
}

export default function PitSendPage() {
  const [officeCode, setOfficeCode] = useState('')
  const [officeSearch, setOfficeSearch] = useState('')
  const [status, setStatus] = useState<SendStatus>('idle')
  const [upo, setUpo] = useState('')
  const [sendSteps, setSendSteps] = useState<SendStep[]>([])
  const [errorMsg, setErrorMsg] = useState('')

  const filteredOffices = TAX_OFFICES.filter(o =>
    o.name.toLowerCase().includes(officeSearch.toLowerCase()) ||
    o.code.includes(officeSearch)
  )

  const selectedOffice = TAX_OFFICES.find(o => o.code === officeCode)

  const handleSend = async () => {
    if (!officeCode) {
      setErrorMsg('Wybierz urząd skarbowy')
      return
    }

    setErrorMsg('')
    setStatus('sending')

    const steps: SendStep[] = [
      { label: 'Weryfikacja podpisu elektronicznego...', done: false, active: true },
      { label: 'Przygotowanie dokumentu XML...', done: false, active: false },
      { label: 'Szyfrowanie połączenia z bramką MF...', done: false, active: false },
      { label: 'Wysyłanie do systemu e-Deklaracje...', done: false, active: false },
      { label: 'Oczekiwanie na potwierdzenie UPO...', done: false, active: false },
    ]
    setSendSteps(steps)

    for (let i = 0; i < steps.length; i++) {
      await new Promise(r => setTimeout(r, 1000 + Math.random() * 600))
      setSendSteps(prev => prev.map((s, idx) => ({
        ...s,
        done: idx < i + 1,
        active: idx === i + 1,
      })))
    }

    // Generate mock UPO number
    const upoNum = `UPO/${new Date().getFullYear()}/${Math.random().toString(36).substring(2, 10).toUpperCase()}`
    setUpo(upoNum)
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <div className="min-h-screen relative">
        <header className="bg-slate-900/40 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
          <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
            <span className="text-white font-semibold text-sm">Wysyłka do US</span>
            <div />
          </div>
        </header>

        <main className="max-w-2xl mx-auto px-4 py-12 flex flex-col items-center text-center space-y-6">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-500/20 border-2 border-green-500/50">
            <FileCheck className="w-12 h-12 text-green-400" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">Wysłano pomyślnie!</h2>
            <p className="text-blue-300/70 mt-2">Deklaracja PIT została przyjęta przez urząd skarbowy</p>
          </div>

          <Card className="w-full bg-slate-800/50 border-green-500/20">
            <CardContent className="p-5 space-y-3">
              <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">Urzędowe Poświadczenie Odbioru (UPO)</p>
              <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                <p className="text-green-300 font-mono text-sm font-bold break-all">{upo}</p>
              </div>
              <div className="space-y-2 pt-2 border-t border-blue-500/10">
                {[
                  { label: 'Urząd skarbowy', value: selectedOffice?.name || '' },
                  { label: 'Data złożenia', value: new Date().toLocaleString('pl-PL') },
                  { label: 'Status', value: 'Przyjęto' },
                ].map(row => (
                  <div key={row.label} className="flex justify-between text-sm">
                    <span className="text-blue-300/60">{row.label}</span>
                    <span className="text-white">{row.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-left">
            <p className="text-sm text-blue-300/80">
              <strong className="text-blue-300">Zapisz numer UPO</strong> - jest to potwierdzenie złożenia zeznania podatkowego.
              W razie potrzeby możesz go użyć do weryfikacji statusu w systemie e-Deklaracje.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <Button
              onClick={() => {
                const text = `UPO: ${upo}\nUrząd: ${selectedOffice?.name}\nData: ${new Date().toLocaleString('pl-PL')}`
                navigator.clipboard.writeText(text)
              }}
              variant="outline"
              className="flex-1 border-blue-500/30 text-blue-300 hover:bg-blue-500/10 min-h-[44px]"
            >
              Skopiuj UPO
            </Button>
            <Link href="/dashboard" className="flex-1">
              <Button className="w-full min-h-[44px] bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                Wróć do panelu
              </Button>
            </Link>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen relative">
      <header className="bg-slate-900/40 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/dashboard/pit/sign" className="flex items-center gap-2 text-blue-300 hover:text-white transition-colors text-sm">
            <ChevronLeft className="w-4 h-4" />
            Podpis
          </Link>
          <div className="flex items-center gap-2">
            <Send className="w-4 h-4 text-blue-400" />
            <span className="text-white font-semibold text-sm">Wysyłka do Urzędu Skarbowego</span>
          </div>
          <div />
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-8 space-y-6">

        {status !== 'sending' ? (
          <>
            <Card className="bg-slate-800/50 border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-white text-xl flex items-center gap-2">
                  <Building className="w-5 h-5 text-blue-400" />
                  Wybierz urząd skarbowy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-blue-300 mb-2">Szukaj urzędu</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-300/50" />
                    <Input
                      className="min-h-[44px] pl-9 bg-blue-500/10 border-blue-500/30 text-white placeholder:text-blue-300/40 focus:border-blue-500/60 transition-all"
                      placeholder="Wpisz miasto lub kod urzędu..."
                      value={officeSearch}
                      onChange={e => setOfficeSearch(e.target.value)}
                    />
                  </div>
                </div>

                <div className="max-h-56 overflow-y-auto space-y-1 pr-1">
                  {filteredOffices.map(office => (
                    <button
                      key={office.code}
                      type="button"
                      onClick={() => setOfficeCode(office.code)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-all ${
                        officeCode === office.code
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-700/40 text-blue-300/80 hover:bg-slate-700/70'
                      }`}
                    >
                      <span className="text-sm">{office.name}</span>
                      <span className={`text-xs font-mono ${officeCode === office.code ? 'text-blue-200' : 'text-slate-500'}`}>
                        {office.code}
                      </span>
                    </button>
                  ))}
                  {filteredOffices.length === 0 && (
                    <p className="text-center text-slate-400 text-sm py-4">Nie znaleziono urzędu</p>
                  )}
                </div>
              </CardContent>
            </Card>

            {selectedOffice && (
              <Card className="bg-slate-800/50 border-green-500/20">
                <CardContent className="p-4 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-slate-400">Wybrany urząd</p>
                    <p className="text-white font-semibold">{selectedOffice.name}</p>
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 flex gap-3">
              <Info className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-blue-300/80 space-y-1">
                <p><strong className="text-blue-300">Termin złożenia PIT</strong> - do 30 kwietnia roku następującego po roku podatkowym.</p>
                <p>Deklaracja zostanie wysłana do systemu e-Deklaracje Ministerstwa Finansów.</p>
              </div>
            </div>

            {errorMsg && (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-rose-500/20 border border-rose-500/30">
                <AlertCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                <span className="text-sm text-rose-300">{errorMsg}</span>
              </div>
            )}

            <Button
              onClick={handleSend}
              className="w-full min-h-[52px] bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-700 hover:to-cyan-700 text-base font-semibold shadow-lg shadow-green-500/30"
            >
              <Send className="w-5 h-5 mr-2" />
              Wyślij deklarację do US
            </Button>

            <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
              <Shield className="w-3.5 h-3.5" />
              <span>Bezpieczne połączenie TLS 1.3 z bramką Ministerstwa Finansów</span>
            </div>
          </>
        ) : (
          // Sending animation
          <Card className="bg-slate-800/50 border-blue-500/20">
            <CardHeader>
              <CardTitle className="text-white text-xl text-center">Wysyłanie deklaracji...</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-center mb-6">
                <div className="relative w-20 h-20">
                  <div className="absolute inset-0 rounded-full border-4 border-blue-500/20" />
                  <div className="absolute inset-0 rounded-full border-4 border-t-cyan-500 animate-spin" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Send className="w-8 h-8 text-cyan-400" />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {sendSteps.map((step, i) => (
                  <div key={i} className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                    step.done
                      ? 'bg-green-500/10 border border-green-500/20'
                      : step.active
                      ? 'bg-blue-500/10 border border-blue-500/30'
                      : 'bg-slate-700/30 border border-transparent'
                  }`}>
                    {step.done ? (
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    ) : step.active ? (
                      <Loader2 className="w-5 h-5 text-blue-400 flex-shrink-0 animate-spin" />
                    ) : (
                      <Clock className="w-5 h-5 text-slate-600 flex-shrink-0" />
                    )}
                    <span className={`text-sm ${
                      step.done ? 'text-green-300' : step.active ? 'text-blue-300' : 'text-slate-500'
                    }`}>{step.label}</span>
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
