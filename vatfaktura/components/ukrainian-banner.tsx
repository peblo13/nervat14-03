'use client'

import { useLanguage } from '@/hooks/use-language'
import { Globe, X } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

export function UkrainianBanner() {
  const { language } = useLanguage()
  const [closed, setClosed] = useState(false)

  if (language === 'pl' || closed) return null

  return (
    <div className="bg-gradient-to-r from-blue-600/20 to-yellow-500/20 border-b border-blue-500/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1">
          <Globe className="w-5 h-5 text-blue-400 flex-shrink-0" />
          <div className="flex-1">
            <p className="text-sm sm:text-base text-white font-medium">
              🇺🇦 Ласкаво просимо! Послуги VAT Faktura тепер доступні українською мовою.
            </p>
            <p className="text-xs sm:text-sm text-blue-200 mt-1">
              Дізнайтеся, як зареєструвати ФОП в Польщі →
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <Link href="/poradnik-obcokrajowcy" className="px-3 py-1.5 text-xs sm:text-sm font-semibold bg-blue-500/30 hover:bg-blue-500/50 text-blue-100 rounded-lg transition-all whitespace-nowrap">
            Дізнатися більше
          </Link>
          <button
            onClick={() => setClosed(true)}
            className="p-1 text-blue-200 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
