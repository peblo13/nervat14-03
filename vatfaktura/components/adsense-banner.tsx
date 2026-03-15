'use client'

import { useEffect } from 'react'

interface AdSenseBannerProps {
  slot: string
  format?: 'auto' | 'horizontal' | 'vertical' | 'rectangle'
  responsive?: boolean
  className?: string
}

export function AdSenseBanner({
  slot,
  format = 'auto',
  responsive = true,
  className = ''
}: AdSenseBannerProps) {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
        (window as any).adsbygoogle.push({})
      }
    } catch (err) {
      // AdSense not loaded yet
    }
  }, [slot])

  return (
    <div className={`my-8 flex justify-center ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-9110227480064306"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      />
    </div>
  )
}

// Visible placeholder shown while AdSense loads / before approval
interface AdPlaceholderProps {
  size: 'leaderboard' | 'rectangle' | 'skyscraper' | 'auto'
  className?: string
  slot: string
  format?: 'auto' | 'horizontal' | 'vertical' | 'rectangle'
}

const sizeConfig = {
  leaderboard: { label: 'Reklama 728×90', minH: 'min-h-[90px]', maxW: 'max-w-[728px]', hint: 'Leaderboard' },
  rectangle:   { label: 'Reklama 300×250', minH: 'min-h-[250px]', maxW: 'max-w-[300px]', hint: 'Medium Rectangle' },
  skyscraper:  { label: 'Reklama 160×600', minH: 'min-h-[600px]', maxW: 'max-w-[160px]', hint: 'Wide Skyscraper' },
  auto:        { label: 'Reklama', minH: 'min-h-[100px]', maxW: 'max-w-full', hint: 'Responsive' },
}

export function AdPlaceholder({ size, className = '', slot, format = 'auto' }: AdPlaceholderProps) {
  const cfg = sizeConfig[size]

  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
        (window as any).adsbygoogle.push({})
      }
    } catch (err) {
      // AdSense not loaded yet
    }
  }, [slot])

  return (
    <div className={`w-full ${cfg.maxW} mx-auto ${className}`}>
      {/* Visible placeholder border */}
      <div className={`relative w-full ${cfg.minH} border border-dashed border-blue-400/40 rounded-lg bg-slate-800/30 flex flex-col items-center justify-center gap-1 overflow-hidden`}>
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #60a5fa 0, #60a5fa 1px, transparent 0, transparent 50%)', backgroundSize: '8px 8px' }} />
        {/* AdSense ins tag sits on top — will fill in once approved */}
        <ins
          className="adsbygoogle absolute inset-0 w-full h-full"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-9110227480064306"
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive="true"
        />
        {/* Label shown until ads load */}
        <span className="relative z-10 text-xs font-medium text-blue-400/50 select-none pointer-events-none">
          {cfg.label}
        </span>
        <span className="relative z-10 text-[10px] text-blue-400/30 select-none pointer-events-none">
          Google AdSense · {cfg.hint}
        </span>
      </div>
    </div>
  )
}

// Convenience exports — drop-in replacements

export function AdSenseDisplay300x250() {
  return (
    <div className="flex justify-center my-6">
      <AdPlaceholder size="rectangle" slot="1234567890" format="rectangle" />
    </div>
  )
}

export function AdSenseDisplay728x90() {
  return (
    <div className="w-full my-6">
      <AdPlaceholder size="leaderboard" slot="0987654321" format="horizontal" />
    </div>
  )
}

export function AdSenseDisplayAuto() {
  return (
    <div className="w-full my-8">
      <AdPlaceholder size="auto" slot="5555555555" format="auto" />
    </div>
  )
}
