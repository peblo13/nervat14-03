'use client'

import { useEffect, useState } from 'react'

type Language = 'pl' | 'uk'

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null
  return null
}

function setCookie(name: string, value: string, days: number = 365) {
  if (typeof document === 'undefined') return
  const date = new Date()
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
  const expires = `expires=${date.toUTCString()}`
  document.cookie = `${name}=${value};${expires};path=/`
}

export function useLanguage() {
  const [language, setLanguage] = useState<Language>('pl')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Get language from cookie or browser preference
    const stored = getCookie('language') as Language | null
    if (stored && (stored === 'pl' || stored === 'uk')) {
      setLanguage(stored)
      // Update html lang attribute
      document.documentElement.lang = stored
    } else {
      // Detect browser language
      const browserLang = navigator.language.split('-')[0]
      if (browserLang === 'uk') {
        setLanguage('uk')
        setCookie('language', 'uk')
        document.documentElement.lang = 'uk'
      } else {
        setLanguage('pl')
        setCookie('language', 'pl')
        document.documentElement.lang = 'pl'
      }
    }
    setMounted(true)
  }, [])

  const switchLanguage = (lang: Language) => {
    setLanguage(lang)
    setCookie('language', lang)
    document.documentElement.lang = lang
  }

  return { language, switchLanguage, mounted }
}
