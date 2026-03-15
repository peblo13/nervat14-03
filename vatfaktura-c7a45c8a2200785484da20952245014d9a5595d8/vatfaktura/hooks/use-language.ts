'use client'

import { useEffect, useState } from 'react'

type Language = 'pl' | 'uk'

export function useLanguage() {
  const [language, setLanguage] = useState<Language>('pl')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Get language from localStorage or browser preference
    const stored = localStorage.getItem('language') as Language | null
    if (stored) {
      setLanguage(stored)
    } else {
      // Detect browser language
      const browserLang = navigator.language.split('-')[0]
      if (browserLang === 'uk') {
        setLanguage('uk')
      }
    }
    setMounted(true)
  }, [])

  const switchLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  return { language, switchLanguage, mounted }
}
