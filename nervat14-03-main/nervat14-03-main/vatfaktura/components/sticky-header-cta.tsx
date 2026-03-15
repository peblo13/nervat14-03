'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronDown, X } from 'lucide-react'

export function StickyHeaderCTA() {
  const [isVisible, setIsVisible] = useState(true)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Pokaż sticky header tylko jeśli użytkownik scrollnął poniżej 300px
      if (window.scrollY > 300) {
        setHasScrolled(true)
      } else {
        setHasScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible || !hasScrolled) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-slate-900/95 to-slate-900/95 backdrop-blur-xl border-t border-blue-500/30 animate-in slide-in-from-bottom-2 duration-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          {/* Message */}
          <div className="flex-1 min-w-0">
            <p className="text-xs sm:text-sm font-medium text-white">
              Gotów zacząć?{' '}
              <span className="text-transparent bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text font-bold">
                Załóż darmowe konto w 30 sekund
              </span>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <Link href="/register">
              <Button className="h-8 sm:h-10 px-4 sm:px-6 text-xs sm:text-sm bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-500 hover:to-cyan-500 text-white font-semibold shadow-lg shadow-green-500/30 whitespace-nowrap">
                Rejestracja
              </Button>
            </Link>
            <button
              onClick={() => setIsVisible(false)}
              className="h-8 sm:h-10 w-8 sm:w-10 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors text-blue-300 hover:text-white flex-shrink-0"
              aria-label="Zamknij"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
