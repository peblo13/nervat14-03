'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useUser } from '@/hooks/useUser'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Briefcase, FileText, Download, DollarSign, Calendar, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function ZUSPage() {
  const router = useRouter()
  const { user, isLoading } = useUser()

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login')
    }
  }, [user, isLoading, router])

  if (isLoading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center relative">
        <div className="animate-spin rounded-full h-12 w-12 border-2 border-orange-500/30 border-t-orange-500"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen relative">
      {/* Header */}
      <header className="bg-slate-900/40 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-4 flex items-center justify-between min-h-[56px] sm:min-h-[64px]">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <div className="inline-flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/50 flex-shrink-0">
                <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent truncate">ZUS</h1>
                <p className="text-orange-300/70 text-xs sm:text-sm truncate hidden xs:block">Zarządzanie składkami</p>
              </div>
            </div>
          </div>
          <Link href="/dashboard">
            <Button variant="outline" className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm text-orange-300 hover:text-white hover:bg-orange-500/20 rounded-lg transition-all border border-orange-500/30 hover:border-orange-500/50 min-h-[44px]">
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Wróć</span>
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 relative z-10 space-y-6 sm:space-y-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-orange-900/40 to-amber-900/40 border border-orange-500/30 rounded-xl p-6 sm:p-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center flex-shrink-0">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">Zarządzanie ZUS</h2>
              <p className="text-orange-200/70">Wszystko czego potrzebujesz do obsługi ubezpieczeń społecznych</p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {[
            {
              icon: FileText,
              title: 'Formularze ZUS',
              description: 'Dostęp do wszystkich formularzy i dokumentów ZUS',
              link: '/formularze-zus',
              color: 'orange'
            },
            {
              icon: DollarSign,
              title: 'Składki',
              description: 'Obliczanie i sprawdzenie aktualnych składek ZUS',
              link: '#',
              color: 'amber'
            },
            {
              icon: Calendar,
              title: 'Terminy',
              description: 'Ważne terminy do spłaty i raportowania',
              link: '#',
              color: 'yellow'
            },
            {
              icon: CheckCircle,
              title: 'Status',
              description: 'Sprawdzenie statusu ubezpieczenia',
              link: '#',
              color: 'green'
            },
            {
              icon: Download,
              title: 'Pobrania',
              description: 'Pobranie dokumentów i wniosków',
              link: '#',
              color: 'blue'
            },
            {
              icon: FileText,
              title: 'Dokumentacja',
              description: 'Pełna dokumentacja i instrukcje',
              link: '#',
              color: 'purple'
            },
          ].map((service, idx) => (
            <Link key={idx} href={service.link}>
              <div className="group relative h-full cursor-pointer">
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  service.color === 'orange' ? 'from-orange-600/20 to-amber-600/20' :
                  service.color === 'amber' ? 'from-amber-600/20 to-yellow-600/20' :
                  service.color === 'yellow' ? 'from-yellow-600/20 to-orange-600/20' :
                  service.color === 'green' ? 'from-green-600/20 to-emerald-600/20' :
                  service.color === 'blue' ? 'from-blue-600/20 to-cyan-600/20' :
                  'from-purple-600/20 to-pink-600/20'
                } rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
                <div className={`relative h-full bg-slate-800/40 backdrop-blur-xl rounded-xl p-6 sm:p-7 md:p-8 border ${
                  service.color === 'orange' ? 'border-orange-500/30 hover:border-orange-500/60' :
                  service.color === 'amber' ? 'border-amber-500/30 hover:border-amber-500/60' :
                  service.color === 'yellow' ? 'border-yellow-500/30 hover:border-yellow-500/60' :
                  service.color === 'green' ? 'border-green-500/30 hover:border-green-500/60' :
                  service.color === 'blue' ? 'border-blue-500/30 hover:border-blue-500/60' :
                  'border-purple-500/30 hover:border-purple-500/60'
                } transition-all duration-500 group-hover:bg-slate-800/60 group-hover:shadow-2xl`}>
                  <div className="flex flex-col h-full gap-4">
                    <div className={`${
                      service.color === 'orange' ? 'text-orange-300 group-hover:text-orange-200' :
                      service.color === 'amber' ? 'text-amber-300 group-hover:text-amber-200' :
                      service.color === 'yellow' ? 'text-yellow-300 group-hover:text-yellow-200' :
                      service.color === 'green' ? 'text-green-300 group-hover:text-green-200' :
                      service.color === 'blue' ? 'text-blue-300 group-hover:text-blue-200' :
                      'text-purple-300 group-hover:text-purple-200'
                    } transition-all duration-300`}>
                      <service.icon className="w-12 h-12 sm:w-14 sm:h-14 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-white transition-colors duration-300">{service.title}</h3>
                      <p className="text-sm sm:text-base text-blue-200/70 group-hover:text-blue-100/80 transition-colors duration-300">{service.description}</p>
                    </div>
                    <div className={`h-1 bg-gradient-to-r ${
                      service.color === 'orange' ? 'from-orange-500/0 via-orange-500/50 to-orange-500/0' :
                      service.color === 'amber' ? 'from-amber-500/0 via-amber-500/50 to-amber-500/0' :
                      service.color === 'yellow' ? 'from-yellow-500/0 via-yellow-500/50 to-yellow-500/0' :
                      service.color === 'green' ? 'from-green-500/0 via-green-500/50 to-green-500/0' :
                      service.color === 'blue' ? 'from-blue-500/0 via-blue-500/50 to-blue-500/0' :
                      'from-purple-500/0 via-purple-500/50 to-purple-500/0'
                    } opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-full`}></div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Information Section */}
        <div className="bg-slate-800/40 backdrop-blur-xl border border-orange-500/20 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Informacje o ZUS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-orange-300">Czym jest ZUS?</h4>
              <p className="text-orange-200/70 leading-relaxed">
                Zakład Ubezpieczeń Społecznych (ZUS) to instytucja odpowiadająca za obsługę ubezpieczeń społecznych i zdrowotnych w Polsce. Każda osoba prowadząca działalność gospodarczą powinna być ubezpieczona w ZUS.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-orange-300">Ważne informacje</h4>
              <ul className="text-orange-200/70 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-400" />
                  <span>Obowiązkowe ubezpieczenie dla przedsiębiorców</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-400" />
                  <span>Składki od dochodu lub minimalnej stawki</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-400" />
                  <span>Uprawnienia do świadczeń socjalnych</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
