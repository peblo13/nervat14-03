'use client'

import { useState, useEffect } from 'react'
import { Cookie, ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      // Small delay so it doesn't flash on first paint
      const t = setTimeout(() => setIsVisible(true), 800)
      return () => clearTimeout(t)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setIsVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 pointer-events-none">
      <div className="max-w-2xl mx-auto pointer-events-auto">
        <div className="bg-slate-900/98 backdrop-blur-xl border border-blue-500/30 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden">
          {/* Top accent bar */}
          <div className="h-0.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500" />

          <div className="p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 p-2.5 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-xl">
                <Cookie className="w-5 h-5 text-cyan-300" />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-white font-bold text-base mb-1">Ta strona używa plików cookies</h3>
                <p className="text-blue-200/70 text-sm leading-relaxed">
                  Używamy cookies niezbędnych, analitycznych (Google Analytics) oraz reklamowych (Google AdSense) do wyświetlania spersonalizowanych reklam.
                  Klikając &quot;Akceptuj&quot; wyrażasz zgodę na przetwarzanie danych zgodnie z naszą{' '}
                  <Link href="/privacy" className="text-cyan-300 underline hover:text-cyan-200">Polityką Prywatności</Link>.
                </p>

                {/* Expandable details */}
                <button
                  onClick={() => setShowDetails(v => !v)}
                  className="flex items-center gap-1 mt-2 text-xs text-blue-400 hover:text-blue-200 transition-colors"
                >
                  {showDetails ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  {showDetails ? 'Ukryj szczegóły' : 'Pokaż szczegóły'}
                </button>

                {showDetails && (
                  <div className="mt-3 space-y-2 text-xs text-blue-200/60 bg-slate-800/50 rounded-lg p-3 border border-blue-500/10">
                    <div className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0 mt-1" />
                      <div><strong className="text-white">Niezbędne</strong> — sesja użytkownika, preferencje. Zawsze aktywne.</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0 mt-1" />
                      <div><strong className="text-white">Analityczne</strong> — Google Analytics 4. Pomaga nam ulepszać stronę.</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-white">Reklamowe</strong> — Google AdSense. Wyświetla reklamy dopasowane do Twoich zainteresowań.
                        {' '}<a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Zarządzaj preferencjami Google</a>.
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex gap-3 mt-5">
              <button
                onClick={handleReject}
                className="flex-1 sm:flex-none sm:min-w-[120px] px-4 py-2.5 border border-blue-500/30 text-blue-300 hover:text-white hover:bg-slate-800/80 rounded-xl font-medium transition-all text-sm"
              >
                Tylko niezbędne
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-xl font-bold transition-all text-sm shadow-lg shadow-blue-500/30"
              >
                Akceptuj wszystkie
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
