'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import { ExternalLink, X } from 'lucide-react'
import { PARTNERS, type Partner } from '@/lib/partners'

// Minimum time to show the ad so it's actually visible
const MIN_SHOW_MS = 1200
// How long the progress bar lingers at 100% before hiding
const COMPLETE_LINGER_MS = 400

function pickRandomPartner(): Partner {
  return PARTNERS[Math.floor(Math.random() * PARTNERS.length)]
}

export function FuturisticLoader() {
  const pathname = usePathname()
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState<'idle' | 'loading' | 'complete' | 'hiding'>('idle')
  const [partner, setPartner] = useState<Partner | null>(null)
  const [adVisible, setAdVisible] = useState(false)

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const startTimeRef = useRef<number>(0)
  const prevPathRef = useRef(pathname)
  const completeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clearTimers = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    if (completeTimerRef.current) clearTimeout(completeTimerRef.current)
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current)
  }, [])

  const startLoading = useCallback(() => {
    clearTimers()
    setPartner(pickRandomPartner())
    setProgress(8)
    setPhase('loading')
    setAdVisible(false)
    startTimeRef.current = Date.now()

    // Short delay before showing ad — feels intentional, not jarring
    setTimeout(() => setAdVisible(true), 80)

    // Eased progress increment — fast at first, slows down near 85
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 85) return prev
        const remaining = 85 - prev
        const increment = remaining * 0.12 + Math.random() * 3
        return Math.min(prev + increment, 85)
      })
    }, 180)
  }, [clearTimers])

  const finishLoading = useCallback(() => {
    clearTimers()

    const elapsed = Date.now() - startTimeRef.current
    const remaining = Math.max(0, MIN_SHOW_MS - elapsed)

    completeTimerRef.current = setTimeout(() => {
      setProgress(100)
      setPhase('complete')

      hideTimerRef.current = setTimeout(() => {
        setAdVisible(false)
        setPhase('hiding')
        setTimeout(() => {
          setPhase('idle')
          setProgress(0)
        }, 350)
      }, COMPLETE_LINGER_MS)
    }, remaining)
  }, [clearTimers])

  // Trigger on route change
  useEffect(() => {
    if (pathname !== prevPathRef.current) {
      prevPathRef.current = pathname
      // Route already changed, so we just finish
      finishLoading()
    }
  }, [pathname, finishLoading])

  // Intercept all link clicks and button clicks to start the loader
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a')
      const button = target.closest('button')

      // Only trigger for internal navigation links
      if (anchor) {
        const href = anchor.getAttribute('href')
        if (
          href &&
          !href.startsWith('#') &&
          !href.startsWith('http') &&
          !href.startsWith('mailto') &&
          !href.startsWith('tel') &&
          anchor.target !== '_blank'
        ) {
          startLoading()
        }
      } else if (button && !button.disabled) {
        // Buttons that are likely to cause navigation (submit, etc.)
        const type = button.getAttribute('type')
        if (type === 'submit' || button.closest('form')) {
          startLoading()
        }
      }
    }

    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick, true)
  }, [startLoading])

  // Safety net: if loading takes too long, auto-complete
  useEffect(() => {
    if (phase === 'loading') {
      const safetyTimer = setTimeout(() => finishLoading(), 8000)
      return () => clearTimeout(safetyTimer)
    }
  }, [phase, finishLoading])

  if (phase === 'idle') return null

  const isShowing = phase === 'loading' || phase === 'complete'

  return (
    <>
      {/* ── Top progress bar ── */}
      <div className="fixed top-0 left-0 right-0 z-[9999] pointer-events-none">
        <div className="h-[3px] w-full bg-slate-900/60">
          <div
            className="h-full transition-all ease-out relative overflow-hidden"
            style={{
              width: `${progress}%`,
              transitionDuration: progress === 100 ? '200ms' : '300ms',
              background: 'linear-gradient(90deg, #06b6d4, #3b82f6, #8b5cf6)',
              boxShadow: '0 0 12px rgba(99,102,241,0.7), 0 0 4px rgba(34,211,238,0.9)',
            }}
          >
            {/* Leading glow pulse */}
            <div
              className="absolute right-0 top-0 h-full w-24"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6))',
                animation: phase === 'loading' ? 'loader-shimmer 1.4s ease-in-out infinite' : 'none',
              }}
            />
          </div>
        </div>
      </div>

      {/* ── Partner ad overlay ── */}
      <div
        className="fixed inset-0 z-[9998] flex items-center justify-center pointer-events-none"
        style={{
          backgroundColor: adVisible && isShowing ? 'rgba(2,6,23,0.75)' : 'transparent',
          backdropFilter: adVisible && isShowing ? 'blur(6px)' : 'none',
          transition: 'background-color 300ms ease, backdrop-filter 300ms ease',
        }}
      >
        {partner && (
          <div
            className="pointer-events-auto"
            style={{
              opacity: adVisible && isShowing ? 1 : 0,
              transform: adVisible && isShowing ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.97)',
              transition: 'opacity 280ms ease, transform 280ms ease',
            }}
          >
            {/* Card */}
            <div
              className="relative w-[340px] sm:w-[400px] rounded-2xl overflow-hidden border border-white/10"
              style={{
                background: 'linear-gradient(145deg, rgba(15,23,42,0.98) 0%, rgba(30,41,59,0.98) 100%)',
                boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)',
              }}
            >
              {/* Accent top border */}
              <div
                className="h-[2px] w-full"
                style={{ background: 'linear-gradient(90deg, #06b6d4, #6366f1, #8b5cf6)' }}
              />

              <div className="p-6 sm:p-7">
                {/* Label row */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/30 select-none">
                    Reklama partnera
                  </span>
                  <div className="flex items-center gap-2">
                    {/* Progress ring */}
                    <svg width="18" height="18" className="text-indigo-400 -rotate-90">
                      <circle cx="9" cy="9" r="7" fill="none" stroke="rgba(99,102,241,0.2)" strokeWidth="2" />
                      <circle
                        cx="9" cy="9" r="7" fill="none" stroke="currentColor" strokeWidth="2"
                        strokeDasharray={`${2 * Math.PI * 7}`}
                        strokeDashoffset={`${2 * Math.PI * 7 * (1 - progress / 100)}`}
                        strokeLinecap="round"
                        style={{ transition: 'stroke-dashoffset 300ms ease' }}
                      />
                    </svg>
                    <span className="text-xs font-mono text-indigo-400/80">{Math.round(progress)}%</span>
                  </div>
                </div>

                {/* Partner info */}
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 border border-white/8"
                    style={{ background: 'rgba(255,255,255,0.04)' }}
                  >
                    {partner.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-white font-bold text-lg leading-tight mb-1">{partner.name}</div>
                    <div className="text-white/55 text-sm leading-relaxed">{partner.description}</div>
                    <div className="mt-1.5">
                      <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/25">
                        {partner.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
                  style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)' }}
                >
                  Odwiedź {partner.name}
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>

                {/* Footer */}
                <p className="text-center text-[10px] text-white/20 mt-3 select-none">
                  VAT Faktura &mdash; Partner Reklamowy
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes loader-shimmer {
          0%   { opacity: 0; transform: translateX(-100%); }
          40%  { opacity: 1; }
          100% { opacity: 0; transform: translateX(200%); }
        }
      `}</style>
    </>
  )
}
