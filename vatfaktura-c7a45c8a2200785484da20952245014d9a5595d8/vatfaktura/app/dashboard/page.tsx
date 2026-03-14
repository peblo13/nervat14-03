'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useUser } from '@/hooks/useUser'
import { useInvoices } from '../invoice-context'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Plus, LogOut, FileText, CreditCard, Search, Filter, X, Calculator, Shield, ChevronDown, Building2, ClipboardList } from 'lucide-react'
import Link from 'next/link'
import InvoicesList from '@/components/invoices-list'
import DashboardStats from '@/components/dashboard-stats'
import { SupportBanner } from '@/components/support-banner'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'

export default function DashboardPage() {
  const router = useRouter()
  const { user, isLoading, logout } = useUser()
  const { getInvoicesByUser } = useInvoices()
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState<'all' | 'draft' | 'sent' | 'paid'>('all')
  const [sortBy, setSortBy] = useState<'date' | 'amount' | 'client'>('date')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('invoices')

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login')
    }
  }, [user, isLoading, router])

  if (isLoading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center relative">
        <div className="animate-spin rounded-full h-12 w-12 border-2 border-blue-500/30 border-t-blue-500"></div>
      </div>
    )
  }

  const userInvoices = getInvoicesByUser(user.id)

  // Filtrowanie i sortowanie
  const filteredInvoices = userInvoices
    .filter(invoice => {
      const matchesSearch = 
        invoice.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
        invoice.client.name.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesStatus = filterStatus === 'all' || invoice.status === filterStatus
      
      return matchesSearch && matchesStatus
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(b.issueDate).getTime() - new Date(a.issueDate).getTime()
      } else if (sortBy === 'amount') {
        const totalA = a.items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0)
        const totalB = b.items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0)
        return totalB - totalA
      } else if (sortBy === 'client') {
        return a.client.name.localeCompare(b.client.name)
      }
      return 0
    })

  const handleLogout = () => {
    logout()
    router.push('/login')
  }

  return (
    <div className="min-h-screen relative">
      {/* Header */}
      <header className="bg-slate-900/40 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-4 flex items-center justify-between min-h-[56px] sm:min-h-[64px]">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <div className="inline-flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/50 flex-shrink-0">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent truncate">VAT Faktura</h1>
                <p className="text-blue-300/70 text-xs sm:text-sm truncate hidden xs:block">Witaj, {user.company}</p>
              </div>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-1 md:gap-2 ml-2">
            {/* Dropdown menu for functions */}
            <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
              <DropdownMenuTrigger 
                asChild
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button className="px-3 py-2 text-xs sm:text-sm font-semibold text-blue-200 hover:text-white hover:bg-white/10 rounded-lg transition-all inline-flex items-center gap-1">
                  Funkcje
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="end" 
                className="w-48 bg-slate-800 border-white/10"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <Link href="/zaloz-firme">
                  <DropdownMenuItem className="flex items-center gap-2 text-purple-300 hover:text-purple-100 hover:bg-purple-500/15 cursor-pointer">
                    <span>Załóż firmę</span>
                  </DropdownMenuItem>
                </Link>
                <Link href="/dashboard">
                  <DropdownMenuItem className="flex items-center gap-2 text-blue-300 hover:text-blue-100 hover:bg-blue-500/15 cursor-pointer">
                    <span>Faktury</span>
                  </DropdownMenuItem>
                </Link>
                <Link href="/dashboard/pit">
                  <DropdownMenuItem className="flex items-center gap-2 text-emerald-300 hover:text-emerald-100 hover:bg-emerald-500/15 cursor-pointer">
                    <span>Rozlicz PIT</span>
                  </DropdownMenuItem>
                </Link>
                <Link href="/formularze-zus">
                  <DropdownMenuItem className="flex items-center gap-2 text-orange-300 hover:text-orange-100 hover:bg-orange-500/15 cursor-pointer">
                    <span>Formularze ZUS</span>
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm text-blue-300 hover:text-white hover:bg-blue-500/20 rounded-lg transition-all border border-blue-500/30 hover:border-blue-500/50 min-h-[44px] ml-2"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">Wyloguj się</span>
            <span className="sm:hidden">Wyloguj</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 relative z-10 space-y-6 sm:space-y-8">
        {/* Support Banner */}
        <SupportBanner />

        {/* Stats */}
        <DashboardStats invoices={userInvoices} />

        {/* KSeF Banner - only for business accounts */}
        {user.accountType === 'business' && (
          <div className="mt-2 p-4 rounded-xl bg-gradient-to-r from-green-900/40 to-cyan-900/40 border border-green-500/30 flex flex-col sm:flex-row items-start sm:items-center gap-3 justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Integracja z KSeF</p>
                <p className="text-green-300/70 text-xs">Wysyłaj faktury do Krajowego Systemu e-Faktur przez Profil Zaufany</p>
              </div>
            </div>
            <Link href="/dashboard/ksef" className="flex-shrink-0">
              <Button className="min-h-[40px] bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-700 hover:to-cyan-700 text-xs sm:text-sm shadow-lg shadow-green-500/30 whitespace-nowrap">
                Połącz z KSeF
              </Button>
            </Link>
          </div>
        )}

        {/* PIT Banner */}
        <div className="mt-2 p-4 rounded-xl bg-gradient-to-r from-blue-900/60 to-cyan-900/60 border border-blue-500/30 flex flex-col sm:flex-row items-start sm:items-center gap-3 justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
              <Calculator className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Rozlicz PIT za rok 2024</p>
              <p className="text-blue-300/70 text-xs">Wypełnij PIT-37 lub PIT-36, podpisz elektronicznie i wyślij do US</p>
            </div>
          </div>
          <Link href="/dashboard/pit" className="flex-shrink-0">
            <Button className="min-h-[40px] bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-xs sm:text-sm shadow-lg shadow-blue-500/30 whitespace-nowrap">
              Rozlicz PIT
            </Button>
          </Link>
        </div>

        {/* Tabs Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4 sm:mt-6">
          <TabsList className="bg-slate-800/50 border border-blue-500/20 p-1 w-full sm:w-auto">
            <TabsTrigger value="invoices" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              <FileText className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Faktury</span>
              <span className="sm:hidden">Faktury</span>
            </TabsTrigger>
            <TabsTrigger value="setup" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
              <Building2 className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Załóż firmę</span>
              <span className="sm:hidden">Firma</span>
            </TabsTrigger>
            <TabsTrigger value="zus" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
              <ClipboardList className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">ZUS</span>
              <span className="sm:hidden">ZUS</span>
            </TabsTrigger>
          </TabsList>

          {/* Factury Tab */}
          <TabsContent value="invoices" className="mt-6 sm:mt-8">
            {/* Action Buttons */}
            <div className="mt-4 sm:mt-6 grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
              <Link href="/dashboard/create-invoice" className="group">
                <Button className="w-full min-h-[44px] text-xs sm:text-sm font-medium bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg shadow-blue-500/50 group-hover:shadow-blue-500/75 transition-all">
                  <Plus className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">Nowa faktura</span>
                  <span className="sm:hidden">Nowa</span>
                </Button>
              </Link>
              {user.accountType === 'business' && (
                <Link href="/dashboard/ksef" className="group">
                  <Button variant="outline" className="w-full min-h-[44px] text-xs sm:text-sm font-medium border-green-500/30 hover:bg-green-500/10 text-green-300 group-hover:border-green-500/50 transition-all">
                    <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    <span className="hidden sm:inline">KSeF</span>
                    <span className="sm:hidden">KSeF</span>
                  </Button>
                </Link>
              )}
              <Link href="/dashboard/pit" className="group">
                <Button variant="outline" className="w-full min-h-[44px] text-xs sm:text-sm font-medium border-cyan-500/30 hover:bg-cyan-500/10 text-cyan-300 group-hover:border-cyan-500/50 transition-all">
                  <Calculator className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">Rozlicz PIT</span>
                  <span className="sm:hidden">PIT</span>
                </Button>
              </Link>
              <Link href="/dashboard/billing" className="group">
                <Button variant="outline" className="w-full min-h-[44px] text-xs sm:text-sm font-medium border-blue-500/30 hover:bg-blue-500/10 text-blue-300 group-hover:border-blue-500/50 transition-all">
                  <CreditCard className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  <span>Plan</span>
                </Button>
              </Link>
              <Link href="/dashboard/settings" className="group">
                <Button variant="outline" className="w-full min-h-[44px] text-xs sm:text-sm font-medium border-blue-500/30 hover:bg-blue-500/10 text-blue-300 group-hover:border-blue-500/50 transition-all">
                  <span className="hidden sm:inline">Ustawienia</span>
                  <span className="sm:hidden">Ust</span>
                </Button>
              </Link>
            </div>

            {/* Invoices List */}
            <div className="mt-6 sm:mt-8">
          <div className="mb-4 sm:mb-6 space-y-3 sm:space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-blue-300/50" />
              <Input
                type="text"
                placeholder="Szukaj faktury..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 sm:pl-10 bg-slate-700/50 border-blue-500/30 text-white placeholder:text-blue-300/50 focus:border-blue-500/50 min-h-[44px] text-sm"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-300/50 hover:text-blue-300 min-h-[44px] min-w-[44px] flex items-center justify-center"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              )}
            </div>

            {/* Filters */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="flex items-center gap-2 flex-wrap">
                <Filter className="w-4 h-4 text-blue-300/70 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-blue-300/70">Status:</span>
                <div className="flex gap-1 sm:gap-2 flex-wrap flex-1">
                  {(['all', 'draft', 'sent', 'paid'] as const).map((status) => (
                    <button
                      key={status}
                      onClick={() => setFilterStatus(status)}
                      className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium transition-all min-h-[36px] sm:min-h-[40px] flex items-center justify-center ${
                        filterStatus === status
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-700/50 text-blue-300/70 hover:bg-slate-700'
                      }`}
                    >
                      {status === 'all' ? 'Wszystkie' : status === 'draft' ? 'Drafty' : status === 'sent' ? 'Wysłane' : 'Zapłacone'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs sm:text-sm text-blue-300/70">Sortuj:</span>
                <div className="flex gap-1 sm:gap-2 flex-wrap flex-1">
                  {(['date', 'amount', 'client'] as const).map((sort) => (
                    <button
                      key={sort}
                      onClick={() => setSortBy(sort)}
                      className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium transition-all min-h-[36px] sm:min-h-[40px] flex items-center justify-center ${
                        sortBy === sort
                          ? 'bg-cyan-600 text-white'
                          : 'bg-slate-700/50 text-blue-300/70 hover:bg-slate-700'
                      }`}
                    >
                      {sort === 'date' ? 'Dacie' : sort === 'amount' ? 'Kwocie' : 'Kliencie'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results Count */}
            <p className="text-xs sm:text-sm text-blue-300/70">
              Znaleziono {filteredInvoices.length} faktur{filteredInvoices.length === 1 ? 'ę' : filteredInvoices.length % 10 === 2 || filteredInvoices.length % 10 === 3 || filteredInvoices.length % 10 === 4 ? 'y' : ''}
            </p>
          </div>

              <InvoicesList invoices={filteredInvoices} />
            </div>
          </TabsContent>

          {/* Setup Tab */}
          <TabsContent value="setup" className="mt-6 sm:mt-8">
            <div className="bg-slate-800/50 border border-blue-500/20 rounded-xl p-6 sm:p-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 text-white mb-4">
                  <Building2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Załóż firmę online</h3>
                <p className="text-blue-200/70 mb-6 max-w-2xl mx-auto">
                  Kompletny przewodnik do założenia biznesu online. Dowiedz się jakie kroki podjąć i jakie dokumenty przygotować.
                </p>
                <Link href="/zaloz-firme">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold">
                    Przeczytaj pełny przewodnik
                  </Button>
                </Link>
              </div>

              {/* Quick Steps */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div className="bg-slate-700/50 p-4 rounded-lg border border-purple-500/20">
                  <h4 className="font-semibold text-purple-300 mb-2">Krok 1: Wybór formy biznesu</h4>
                  <p className="text-sm text-blue-200/70">Zdecyduj czy będzie to sole proprietorship, spółka czy inny rodzaj biznesu</p>
                </div>
                <div className="bg-slate-700/50 p-4 rounded-lg border border-purple-500/20">
                  <h4 className="font-semibold text-purple-300 mb-2">Krok 2: Przygotowanie dokumentów</h4>
                  <p className="text-sm text-blue-200/70">Zbierz wszystkie wymagane dokumenty i certyfikaty</p>
                </div>
                <div className="bg-slate-700/50 p-4 rounded-lg border border-purple-500/20">
                  <h4 className="font-semibold text-purple-300 mb-2">Krok 3: Rejestracja</h4>
                  <p className="text-sm text-blue-200/70">Złóż wniosek rejestracyjny do odpowiednich organów</p>
                </div>
                <div className="bg-slate-700/50 p-4 rounded-lg border border-purple-500/20">
                  <h4 className="font-semibold text-purple-300 mb-2">Krok 4: Rozpoczęcie biznesu</h4>
                  <p className="text-sm text-blue-200/70">Otwórz konto bankowe i zacznij prowadzić działalność</p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* ZUS Tab */}
          <TabsContent value="zus" className="mt-6 sm:mt-8">
            <div className="bg-slate-800/50 border border-blue-500/20 rounded-xl p-6 sm:p-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-orange-600 to-red-600 text-white mb-4">
                  <ClipboardList className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Formularze i narzędzia ZUS</h3>
                <p className="text-blue-200/70 mb-6 max-w-2xl mx-auto">
                  Generatory formularzy ZUS i kalkulatory zasiłków. Wszystkie narzędzia przygotują Ci dokumenty do wysyłki.
                </p>
                <Link href="/formularze-zus">
                  <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-semibold">
                    Przejdź do narzędzi ZUS
                  </Button>
                </Link>
              </div>

              {/* Available Tools */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div className="bg-slate-700/50 p-4 rounded-lg border border-orange-500/20">
                  <h4 className="font-semibold text-orange-300 mb-2">Generator ZUS Z-3</h4>
                  <p className="text-sm text-blue-200/70">Formularz zaświadczenia o czasowej niezdolności do pracy</p>
                </div>
                <div className="bg-slate-700/50 p-4 rounded-lg border border-orange-500/20">
                  <h4 className="font-semibold text-orange-300 mb-2">Kalkulator zasiłków</h4>
                  <p className="text-sm text-blue-200/70">Oblicz wysokość zasiłku chorobowego i macierzyńskiego</p>
                </div>
                <div className="bg-slate-700/50 p-4 rounded-lg border border-orange-500/20">
                  <h4 className="font-semibold text-orange-300 mb-2">Formularze Z-15</h4>
                  <p className="text-sm text-blue-200/70">Wniosek o zasiłek opiekuńczy</p>
                </div>
                <div className="bg-slate-700/50 p-4 rounded-lg border border-orange-500/20">
                  <h4 className="font-semibold text-orange-300 mb-2">Poradnik PUE ZUS</h4>
                  <p className="text-sm text-blue-200/70">Jak wysłać dokumenty przez Portal Usług Elektronicznych</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
