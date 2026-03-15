'use client'

import { useState } from 'react'
import { Globe, Check } from 'lucide-react'
import { useLanguage } from '@/hooks/use-language'

export function LanguageSwitcher() {
  const { language, switchLanguage, mounted } = useLanguage()
  const [open, setOpen] = useState(false)

  if (!mounted) return null

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-blue-200 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
        title="Zmień język / Змінити мову"
      >
        <Globe className="w-4 h-4" />
        <span>{language.toUpperCase()}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-48 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="bg-slate-900/98 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden">
            <div className="p-2 space-y-1">
              <button
                onClick={() => {
                  switchLanguage('pl')
                  setOpen(false)
                }}
                className={`w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  language === 'pl'
                    ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                    : 'text-blue-200/80 hover:bg-white/8'
                }`}
              >
                <span>🇵🇱 Polski</span>
                {language === 'pl' && <Check className="w-4 h-4 ml-auto" />}
              </button>
              <button
                onClick={() => {
                  switchLanguage('uk')
                  setOpen(false)
                }}
                className={`w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  language === 'uk'
                    ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                    : 'text-blue-200/80 hover:bg-white/8'
                }`}
              >
                <span>🇺🇦 Українська</span>
                {language === 'uk' && <Check className="w-4 h-4 ml-auto" />}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
