'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useUser } from '@/hooks/useUser'
import { useInvoices, Invoice } from '@/app/invoice-context'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { 
  ChevronLeft, 
  Shield, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Send, 
  FileText,
  RefreshCw,
  Download,
  AlertCircle,
  Link as LinkIcon,
  Unlink,
  Key,
  Building2,
  User
} from 'lucide-react'
import Link from 'next/link'

type KSeFConnectionStatus = 'disconnected' | 'connecting' | 'connected' | 'error'
type AuthMethod = 'profil_zaufany' | 'certyfikat' | 'token'

interface KSeFSession {
  status: KSeFConnectionStatus
  authMethod?: AuthMethod
  sessionToken?: string
  expiresAt?: string
  nip?: string
  connectedAt?: string
}

export default function KSeFPage() {
  const router = useRouter()
  const { user, isLoading } = useUser()
  const { invoices, getInvoicesByUser, updateInvoice } = useInvoices()
  
  const [session, setSession] = useState<KSeFSession>({ status: 'disconnected' })
  const [selectedInvoices, setSelectedInvoices] = useState<string[]>([])
  const [sendingInvoices, setSendingInvoices] = useState<string[]>([])
  const [authStep, setAuthStep] = useState<'select' | 'profil_zaufany' | 'certyfikat' | 'token' | 'verifying'>('select')
  const [tokenInput, setTokenInput] = useState('')
  const [showUPO, setShowUPO] = useState<string | null>(null)

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login')
    }
    // Load saved KSeF session
    const savedSession = localStorage.getItem('vatfaktura_ksef_session')
    if (savedSession) {
      const parsed = JSON.parse(savedSession)
      // Check if session is still valid
      if (parsed.expiresAt && new Date(parsed.expiresAt) > new Date()) {
        setSession(parsed)
      } else {
        localStorage.removeItem('vatfaktura_ksef_session')
      }
    }
  }, [user, isLoading, router])

  if (isLoading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-2 border-blue-500/30 border-t-blue-500"></div>
      </div>
    )
  }

  const userInvoices = getInvoicesByUser(user.id)
  
  // Only business accounts can use KSeF (requires NIP)
  const canUseKSeF = user.accountType === 'business' && user.nip

  const handleConnectProfilZaufany = () => {
    setAuthStep('profil_zaufany')
    // Simulate redirect to Profil Zaufany
    setTimeout(() => {
      setAuthStep('verifying')
      // Simulate verification
      setTimeout(() => {
        const newSession: KSeFSession = {
          status: 'connected',
          authMethod: 'profil_zaufany',
          sessionToken: `KSEF_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // 24h
          nip: user.nip,
          connectedAt: new Date().toISOString(),
        }
        setSession(newSession)
        localStorage.setItem('vatfaktura_ksef_session', JSON.stringify(newSession))
        setAuthStep('select')
      }, 2000)
    }, 1500)
  }

  const handleConnectCertyfikat = () => {
    setAuthStep('certyfikat')
    // Simulate certificate detection
    setTimeout(() => {
      setAuthStep('verifying')
      setTimeout(() => {
        const newSession: KSeFSession = {
          status: 'connected',
          authMethod: 'certyfikat',
          sessionToken: `KSEF_CERT_${Date.now()}`,
          expiresAt: new Date(Date.now() + 8 * 60 * 60 * 1000).toISOString(), // 8h
          nip: user.nip,
          connectedAt: new Date().toISOString(),
        }
        setSession(newSession)
        localStorage.setItem('vatfaktura_ksef_session', JSON.stringify(newSession))
        setAuthStep('select')
      }, 2000)
    }, 1500)
  }

  const handleConnectToken = () => {
    if (!tokenInput.trim()) return
    setAuthStep('verifying')
    setTimeout(() => {
      const newSession: KSeFSession = {
        status: 'connected',
        authMethod: 'token',
        sessionToken: tokenInput,
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days
        nip: user.nip,
        connectedAt: new Date().toISOString(),
      }
      setSession(newSession)
      localStorage.setItem('vatfaktura_ksef_session', JSON.stringify(newSession))
      setAuthStep('select')
      setTokenInput('')
    }, 1500)
  }

  const handleDisconnect = () => {
    setSession({ status: 'disconnected' })
    localStorage.removeItem('vatfaktura_ksef_session')
  }

  const handleSendToKSeF = async (invoiceId: string) => {
    if (session.status !== 'connected') return
    
    setSendingInvoices(prev => [...prev, invoiceId])
    
    // Simulate sending to KSeF
    await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 1000))
    
    const ksefNumber = `KSeF-${new Date().getFullYear()}-${Math.random().toString().substr(2, 10)}`
    const upo = `UPO-${Date.now()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`
    
    updateInvoice(invoiceId, {
      ksef: {
        status: 'accepted',
        ksefNumber,
        upo,
        sentAt: new Date().toISOString(),
        acceptedAt: new Date().toISOString(),
      }
    })
    
    setSendingInvoices(prev => prev.filter(id => id !== invoiceId))
    setSelectedInvoices(prev => prev.filter(id => id !== invoiceId))
  }

  const handleSendSelected = async () => {
    for (const invoiceId of selectedInvoices) {
      await handleSendToKSeF(invoiceId)
    }
  }

  const toggleInvoiceSelection = (invoiceId: string) => {
    setSelectedInvoices(prev => 
      prev.includes(invoiceId) 
        ? prev.filter(id => id !== invoiceId)
        : [...prev, invoiceId]
    )
  }

  const getKSeFStatusBadge = (invoice: Invoice) => {
    if (!invoice.ksef) {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-slate-700/50 text-slate-300">
          <Clock className="w-3 h-3" />
          Nie wysłano
        </span>
      )
    }
    
    switch (invoice.ksef.status) {
      case 'pending':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-yellow-500/20 text-yellow-300">
            <Clock className="w-3 h-3 animate-pulse" />
            Przetwarzanie
          </span>
        )
      case 'accepted':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-green-500/20 text-green-300">
            <CheckCircle2 className="w-3 h-3" />
            Zaakceptowano
          </span>
        )
      case 'rejected':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-red-500/20 text-red-300">
            <XCircle className="w-3 h-3" />
            Odrzucono
          </span>
        )
      case 'error':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-red-500/20 text-red-300">
            <AlertCircle className="w-3 h-3" />
            Błąd
          </span>
        )
      default:
        return null
    }
  }

  // Private account warning
  if (!canUseKSeF) {
    return (
      <div className="min-h-screen relative">
        <header className="bg-slate-900/40 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="ghost" size="icon" className="text-blue-300 hover:text-white hover:bg-blue-500/20">
                <ChevronLeft className="w-5 h-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-bold text-white">Integracja KSeF</h1>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-8">
          <Card className="bg-slate-800/50 backdrop-blur-sm border-orange-500/30 p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-orange-400" />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">KSeF tylko dla firm</h2>
            <p className="text-blue-200/70 mb-6 max-w-md mx-auto">
              Krajowy System e-Faktur (KSeF) jest dostepny tylko dla podatników VAT prowadzacych działalnosc gospodarczą. 
              Jako osoba prywatna nie musisz wysyłac faktur do KSeF.
            </p>
            <Link href="/dashboard">
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                Wróc do panelu
              </Button>
            </Link>
          </Card>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen relative">
      {/* Header */}
      <header className="bg-slate-900/40 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="ghost" size="icon" className="text-blue-300 hover:text-white hover:bg-blue-500/20">
                <ChevronLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-xl font-bold text-white">Krajowy System e-Faktur</h1>
              <p className="text-sm text-blue-300/70">Wysyłaj faktury do KSeF przez Profil Zaufany</p>
            </div>
          </div>
          
          {/* Connection Status */}
          <div className="flex items-center gap-3">
            {session.status === 'connected' ? (
              <>
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-green-500/20 border border-green-500/30">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="text-sm text-green-300">Połączono z KSeF</span>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleDisconnect}
                  className="border-red-500/30 text-red-300 hover:bg-red-500/10"
                >
                  <Unlink className="w-4 h-4 mr-2" />
                  Rozłącz
                </Button>
              </>
            ) : (
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-700/50 border border-slate-600/30">
                <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                <span className="text-sm text-slate-300">Niepołączono</span>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-6">
        {/* Connection Card */}
        {session.status !== 'connected' && (
          <Card className="bg-slate-800/50 backdrop-blur-sm border-blue-500/20 p-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white mb-1">Połącz z KSeF</h2>
                <p className="text-sm text-blue-200/70">
                  Wybierz metodę autoryzacji, aby wysyłac faktury do Krajowego Systemu e-Faktur
                </p>
              </div>
            </div>

            {authStep === 'select' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Profil Zaufany */}
                <button
                  onClick={handleConnectProfilZaufany}
                  className="p-6 rounded-xl border-2 border-blue-500/30 bg-slate-900/50 hover:border-blue-500/60 hover:bg-blue-500/10 transition-all text-left group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-1">Profil Zaufany</h3>
                  <p className="text-xs text-blue-200/60">
                    Zaloguj przez ePUAP lub aplikację mObywatel. Zalecane.
                  </p>
                </button>

                {/* Certyfikat kwalifikowany */}
                <button
                  onClick={handleConnectCertyfikat}
                  className="p-6 rounded-xl border-2 border-blue-500/30 bg-slate-900/50 hover:border-blue-500/60 hover:bg-blue-500/10 transition-all text-left group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-600 to-cyan-800 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Key className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-1">Certyfikat kwalifikowany</h3>
                  <p className="text-xs text-blue-200/60">
                    Użyj podpisu elektronicznego z certyfikatem kwalifikowanym.
                  </p>
                </button>

                {/* Token autoryzacyjny */}
                <button
                  onClick={() => setAuthStep('token')}
                  className="p-6 rounded-xl border-2 border-blue-500/30 bg-slate-900/50 hover:border-blue-500/60 hover:bg-blue-500/10 transition-all text-left group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <LinkIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-1">Token autoryzacyjny</h3>
                  <p className="text-xs text-blue-200/60">
                    Wklej token wygenerowany w panelu KSeF. Dla integracji API.
                  </p>
                </button>
              </div>
            )}

            {authStep === 'profil_zaufany' && (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-400 animate-pulse" />
                </div>
                <p className="text-white font-medium mb-2">Przekierowanie do Profilu Zaufanego...</p>
                <p className="text-sm text-blue-200/70">Zaloguj się przez ePUAP lub mObywatel</p>
              </div>
            )}

            {authStep === 'certyfikat' && (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto mb-4">
                  <Key className="w-8 h-8 text-cyan-400 animate-pulse" />
                </div>
                <p className="text-white font-medium mb-2">Wykrywanie certyfikatu...</p>
                <p className="text-sm text-blue-200/70">Upewnij się, że czytnik kart jest podłączony</p>
              </div>
            )}

            {authStep === 'token' && (
              <div className="max-w-md mx-auto space-y-4">
                <div>
                  <label className="block text-sm font-medium text-blue-300 mb-2">Token autoryzacyjny KSeF</label>
                  <Input
                    type="text"
                    placeholder="Wklej token..."
                    value={tokenInput}
                    onChange={(e) => setTokenInput(e.target.value)}
                    className="font-mono text-sm"
                  />
                  <p className="text-xs text-blue-200/50 mt-2">
                    Token możesz wygenerowac w panelu podatnika na stronie KSeF
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    onClick={() => setAuthStep('select')}
                    className="flex-1 border-blue-500/30"
                  >
                    Anuluj
                  </Button>
                  <Button
                    onClick={handleConnectToken}
                    disabled={!tokenInput.trim()}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600"
                  >
                    Połącz
                  </Button>
                </div>
              </div>
            )}

            {authStep === 'verifying' && (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-2 border-blue-500/30 border-t-blue-500 mx-auto mb-4"></div>
                <p className="text-white font-medium mb-2">Weryfikacja autoryzacji...</p>
                <p className="text-sm text-blue-200/70">Łączenie z bramką KSeF</p>
              </div>
            )}
          </Card>
        )}

        {/* Session Info */}
        {session.status === 'connected' && (
          <Card className="bg-gradient-to-r from-green-900/40 to-cyan-900/40 border-green-500/30 p-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Sesja KSeF aktywna</p>
                  <p className="text-xs text-green-300/70">
                    {session.authMethod === 'profil_zaufany' && 'Autoryzacja przez Profil Zaufany'}
                    {session.authMethod === 'certyfikat' && 'Autoryzacja certyfikatem kwalifikowanym'}
                    {session.authMethod === 'token' && 'Autoryzacja tokenem API'}
                    {' • NIP: '}{session.nip}
                  </p>
                </div>
              </div>
              <div className="text-right text-xs text-green-300/70">
                <p>Wygasa: {session.expiresAt && new Date(session.expiresAt).toLocaleString('pl-PL')}</p>
              </div>
            </div>
          </Card>
        )}

        {/* Invoices Table */}
        <Card className="bg-slate-800/50 backdrop-blur-sm border-blue-500/20 overflow-hidden">
          <div className="p-4 border-b border-blue-500/20 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-white">Twoje faktury</h2>
              <p className="text-sm text-blue-200/70">Wybierz faktury do wysłania do KSeF</p>
            </div>
            {selectedInvoices.length > 0 && session.status === 'connected' && (
              <Button
                onClick={handleSendSelected}
                disabled={sendingInvoices.length > 0}
                className="bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-700 hover:to-cyan-700"
              >
                <Send className="w-4 h-4 mr-2" />
                Wyślij wybrane ({selectedInvoices.length})
              </Button>
            )}
          </div>

          {userInvoices.length === 0 ? (
            <div className="p-12 text-center">
              <FileText className="w-12 h-12 text-blue-300/30 mx-auto mb-4" />
              <p className="text-blue-200/70">Brak faktur do wysłania</p>
              <Link href="/dashboard/create-invoice" className="mt-4 inline-block">
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-600">
                  Utwórz pierwszą fakturę
                </Button>
              </Link>
            </div>
          ) : (
            <div className="divide-y divide-blue-500/10">
              {userInvoices.map((invoice) => {
                const total = invoice.items.reduce((sum, item) => sum + item.quantity * item.unitPrice * (1 + item.vat / 100), 0)
                const isSending = sendingInvoices.includes(invoice.id)
                const isSelected = selectedInvoices.includes(invoice.id)
                const alreadySent = invoice.ksef?.status === 'accepted'
                
                return (
                  <div 
                    key={invoice.id} 
                    className={`p-4 flex items-center gap-4 transition-colors ${
                      isSelected ? 'bg-blue-500/10' : 'hover:bg-slate-700/30'
                    } ${alreadySent ? 'opacity-60' : ''}`}
                  >
                    {/* Checkbox */}
                    <div className="flex-shrink-0">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => toggleInvoiceSelection(invoice.id)}
                        disabled={alreadySent || isSending}
                        className="w-5 h-5 rounded border-blue-500/30 bg-slate-700/50 text-blue-500 focus:ring-blue-500/50 disabled:opacity-50"
                      />
                    </div>

                    {/* Invoice Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-white">{invoice.number}</span>
                        {getKSeFStatusBadge(invoice)}
                      </div>
                      <p className="text-sm text-blue-200/70 truncate">
                        {invoice.client.name} • {new Date(invoice.issueDate).toLocaleDateString('pl-PL')}
                      </p>
                      {invoice.ksef?.ksefNumber && (
                        <p className="text-xs text-green-300/70 mt-1 font-mono">
                          KSeF: {invoice.ksef.ksefNumber}
                        </p>
                      )}
                    </div>

                    {/* Amount */}
                    <div className="text-right flex-shrink-0">
                      <p className="font-semibold text-white">
                        {total.toLocaleString('pl-PL', { style: 'currency', currency: 'PLN' })}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {alreadySent && invoice.ksef?.upo && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setShowUPO(invoice.ksef?.upo || null)}
                          className="border-green-500/30 text-green-300 hover:bg-green-500/10"
                        >
                          <Download className="w-4 h-4 mr-1" />
                          UPO
                        </Button>
                      )}
                      {!alreadySent && session.status === 'connected' && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleSendToKSeF(invoice.id)}
                          disabled={isSending}
                          className="border-blue-500/30 text-blue-300 hover:bg-blue-500/10 min-w-[100px]"
                        >
                          {isSending ? (
                            <>
                              <RefreshCw className="w-4 h-4 mr-1 animate-spin" />
                              Wysyłam...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4 mr-1" />
                              Wyślij
                            </>
                          )}
                        </Button>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </Card>

        {/* Info Card */}
        <Card className="bg-slate-800/50 backdrop-blur-sm border-blue-500/20 p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
              <Building2 className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Informacje o KSeF</h3>
              <ul className="text-sm text-blue-200/70 space-y-2">
                <li>• <strong>Krajowy System e-Faktur</strong> to centralny system do wystawiania i przechowywania faktur ustrukturyzowanych.</li>
                <li>• Od <strong>1 lutego 2026</strong> KSeF będzie obowiązkowy dla wszystkich podatników VAT.</li>
                <li>• Każda faktura otrzymuje unikalny <strong>numer KSeF</strong> i jest przechowywana przez 10 lat.</li>
                <li>• <strong>UPO</strong> (Urzędowe Poświadczenie Odbioru) potwierdza przyjęcie faktury do systemu.</li>
              </ul>
            </div>
          </div>
        </Card>
      </main>

      {/* UPO Modal */}
      {showUPO && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <Card className="bg-slate-800 border-green-500/30 p-6 max-w-md w-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Urzędowe Poświadczenie Odbioru</h3>
                <p className="text-sm text-green-300/70">Faktura została przyjęta do KSeF</p>
              </div>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-4 mb-4">
              <p className="text-xs text-blue-200/50 mb-1">Numer UPO:</p>
              <p className="font-mono text-sm text-white break-all">{showUPO}</p>
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => setShowUPO(null)}
                className="flex-1 border-blue-500/30"
              >
                Zamknij
              </Button>
              <Button
                onClick={() => {
                  navigator.clipboard.writeText(showUPO)
                }}
                className="flex-1 bg-gradient-to-r from-green-600 to-cyan-600"
              >
                <Download className="w-4 h-4 mr-2" />
                Kopiuj UPO
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}
