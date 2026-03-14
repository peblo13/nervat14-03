'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import { ExternalLink } from 'lucide-react'
import { PARTNERS, type Partner } from '@/lib/partners'
import Image from 'next/image'

const MIN_SHOW_MS = 1400
const COMPLETE_LINGER_MS = 450

// Ring geometry
const RING_R = 54
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_R

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
    setProgress(6)
    setPhase('loading')
    setAdVisible(false)
    startTimeRef.current = Date.now()

    setTimeout(() => setAdVisible(true), 60)

    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 85) return prev
        const remaining = 85 - prev
        const inc = remaining * 0.11 + Math.random() * 2.5
        return Math.min(prev + inc, 85)
      })
    }, 200)
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
        }, 380)
      }, COMPLETE_LINGER_MS)
    }, remaining)
  }, [clearTimers])

  useEffect(() => {
    if (pathname !== prevPathRef.current) {
      prevPathRef.current = pathname
      finishLoading()
    }
  }, [pathname, finishLoading])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a')
      const button = target.closest('button')

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
        const type = button.getAttribute('type')
        if (type === 'submit' || button.closest('form')) {
          startLoading()
        }
      }
    }

    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick, true)
  }, [startLoading])

  useEffect(() => {
    if (phase === 'loading') {
      const t = setTimeout(() => finishLoading(), 8000)
      return () => clearTimeout(t)
    }
  }, [phase, finishLoading])

  if (phase === 'idle') return null

  const isShowing = phase === 'loading' || phase === 'complete'
  const ringOffset = RING_CIRCUMFERENCE * (1 - progress / 100)

  // Pick glow colour from partner accent or fall back to cyan
  const glowColor = partner?.accentColor ?? '#06b6d4'

  return (
    <>
      {/* ── Slim top progress bar ── */}
      <div className="fixed top-0 left-0 right-0 z-[9999] pointer-events-none">
        <div className="h-[3px] w-full bg-white/5">
          <div
            className="h-full relative overflow-hidden"
            style={{
              width: `${progress}%`,
              transitionProperty: 'width',
              transitionDuration: progress === 100 ? '180ms' : '280ms',
              transitionTimingFunction: 'ease-out',
              background: `linear-gradient(90deg, ${glowColor}, #6366f1, #a78bfa)`,
              boxShadow: `0 0 10px ${glowColor}aa, 0 0 3px #fff4`,
            }}
          >
            <div className="absolute right-0 top-0 h-full w-20 loader-shimmer-bar" />
          </div>
        </div>
      </div>

      {/* ── Full-screen overlay ── */}
      <div
        className="fixed inset-0 z-[9998] flex items-center justify-center"
        style={{
          backgroundColor: adVisible && isShowing ? 'rgba(2,6,23,0.82)' : 'rgba(2,6,23,0)',
          backdropFilter: adVisible && isShowing ? 'blur(8px) saturate(0.7)' : 'none',
          transition: 'background-color 320ms ease, backdrop-filter 320ms ease',
          pointerEvents: adVisible && isShowing ? 'auto' : 'none',
        }}
      >
        {partner && (
          <div
            style={{
              opacity: adVisible && isShowing ? 1 : 0,
              transform: adVisible && isShowing ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
              transition: 'opacity 300ms ease, transform 300ms ease',
            }}
          >
            {/* ── Card ── */}
            <div
              className="relative w-[360px] sm:w-[440px] rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(160deg, rgba(13,20,40,0.99) 0%, rgba(22,33,62,0.99) 100%)',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: `0 40px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04), 0 0 60px ${glowColor}22`,
              }}
            >
              {/* Accent top stripe */}
              <div
                className="h-[3px] w-full"
                style={{ background: `linear-gradient(90deg, ${glowColor}, #6366f1, #a78bfa)` }}
              />

              {/* ── Partner illustration banner ── */}
              <div className="relative w-full h-[130px] overflow-hidden">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  fill
                  className="object-cover"
                  priority
                />
                {/* Gradient overlay so text reads over image */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(180deg, rgba(13,20,40,0.1) 0%, rgba(13,20,40,0.85) 100%)',
                  }}
                />
                {/* Category badge over image */}
                <div className="absolute top-3 left-3">
                  <span
                    className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                    style={{
                      background: `${glowColor}25`,
                      color: glowColor,
                      border: `1px solid ${glowColor}45`,
                    }}
                  >
                    {partner.category}
                  </span>
                </div>
                {/* "Partner reklamowy" label */}
                <div className="absolute top-3 right-3">
                  <span className="text-[9px] font-medium tracking-wider text-white/30 uppercase">
                    Reklama
                  </span>
                </div>
              </div>

              {/* ── Body ── */}
              <div className="px-6 pt-4 pb-6">
                {/* Progress ring row — centrepiece */}
                <div className="flex items-center gap-5 mb-5">
                  {/* Large ring */}
                  <div className="relative flex-shrink-0 flex items-center justify-center" style={{ width: 124, height: 124 }}>
                    {/* Outer glow halo */}
                    <div
                      className="absolute inset-0 rounded-full blur-md opacity-30"
                      style={{ background: glowColor }}
                    />
                    <svg
                      width="124"
                      height="124"
                      viewBox="0 0 124 124"
                      className="relative"
                      style={{ filter: `drop-shadow(0 0 8px ${glowColor}88)` }}
                    >
                      {/* Track */}
                      <circle
                        cx="62" cy="62" r={RING_R}
                        fill="none"
                        stroke="rgba(255,255,255,0.06)"
                        strokeWidth="8"
                      />
                      {/* Tick marks */}
                      {Array.from({ length: 40 }).map((_, i) => {
                        const angle = (i / 40) * 360 - 90
                        const rad = (angle * Math.PI) / 180
                        const r1 = RING_R + 10, r2 = RING_R + 13
                        const x1 = 62 + r1 * Math.cos(rad), y1 = 62 + r1 * Math.sin(rad)
                        const x2 = 62 + r2 * Math.cos(rad), y2 = 62 + r2 * Math.sin(rad)
                        return (
                          <line
                            key={i}
                            x1={x1} y1={y1} x2={x2} y2={y2}
                            stroke="rgba(255,255,255,0.1)"
                            strokeWidth="1"
                          />
                        )
                      })}
                      {/* Progress arc */}
                      <circle
                        cx="62" cy="62" r={RING_R}
                        fill="none"
                        stroke="url(#ringGrad)"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={RING_CIRCUMFERENCE}
                        strokeDashoffset={ringOffset}
                        transform="rotate(-90 62 62)"
                        style={{ transition: 'stroke-dashoffset 280ms ease-out' }}
                      />
                      {/* Leading dot */}
                      {progress > 3 && (() => {
                        const angle = ((progress / 100) * 360 - 90) * (Math.PI / 180)
                        const dx = 62 + RING_R * Math.cos(angle)
                        const dy = 62 + RING_R * Math.sin(angle)
                        return (
                          <circle cx={dx} cy={dy} r="5" fill={glowColor}>
                            <animate attributeName="r" values="4;6;4" dur="1s" repeatCount="indefinite" />
                          </circle>
                        )
                      })()}
                      <defs>
                        <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor={glowColor} />
                          <stop offset="100%" stopColor="#a78bfa" />
                        </linearGradient>
                      </defs>
                    </svg>
                    {/* Centre: percentage */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span
                        className="text-3xl font-black tabular-nums leading-none"
                        style={{ color: glowColor, textShadow: `0 0 20px ${glowColor}99` }}
                      >
                        {Math.round(progress)}
                      </span>
                      <span className="text-[11px] font-semibold text-white/40 mt-0.5 tracking-wider">%</span>
                    </div>
                  </div>

                  {/* Partner info next to ring */}
                  <div className="flex-1 min-w-0">
                    <div className="text-xl font-black text-white leading-tight mb-1.5 truncate">
                      {partner.name}
                    </div>
                    <p className="text-sm text-white/55 leading-relaxed">
                      {partner.description}
                    </p>
                    <div className="mt-3 text-xs text-white/30 flex items-center gap-1.5">
                      <div
                        className="w-1.5 h-1.5 rounded-full animate-pulse"
                        style={{ background: glowColor }}
                      />
                      Ładowanie strony…
                    </div>
                  </div>
                </div>

                {/* CTA button */}
                <a
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm text-white transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
                  style={{
                    background: `linear-gradient(135deg, ${glowColor}cc, #6366f1)`,
                    boxShadow: `0 8px 24px ${glowColor}44`,
                  }}
                >
                  Odwiedź {partner.name}
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .loader-shimmer-bar {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.55));
          animation: loaderShimmer 1.5s ease-in-out infinite;
        }
        @keyframes loaderShimmer {
          0%   { opacity: 0; transform: translateX(-100%); }
          40%  { opacity: 1; }
          100% { opacity: 0; transform: translateX(200%); }
        }
      `}</style>
    </>
  )
}
