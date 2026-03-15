'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Mail, Check } from 'lucide-react'

export function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    
    if (!email) {
      setStatus('error')
      setMessage('Podaj swój email')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error')
      setMessage('Nieprawidłowy adres email')
      return
    }

    setStatus('loading')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setStatus('success')
        setMessage('Dziękujemy! Sprawdź swoją skrzynkę email.')
        setEmail('')
        setTimeout(() => {
          setStatus('idle')
          setMessage('')
        }, 5000)
      } else {
        setStatus('error')
        setMessage('Coś poszło nie tak. Spróbuj ponownie.')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Błąd połączenia. Spróbuj ponownie.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm">
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="flex-1 relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-400 pointer-events-none" />
          <input
            type="email"
            placeholder="Twój email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === 'loading'}
            className="w-full pl-10 pr-4 py-2.5 sm:py-3 bg-slate-800/50 border border-blue-500/30 rounded-lg text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-400/60 focus:bg-slate-800/70 transition-all disabled:opacity-50"
          />
        </div>
        <Button
          type="submit"
          disabled={status === 'loading'}
          className="bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-500 hover:to-cyan-500 text-white font-semibold px-6 py-2.5 sm:py-3 whitespace-nowrap disabled:opacity-50 transition-all shadow-lg shadow-green-500/30"
        >
          {status === 'loading' ? 'Wysyłanie...' : status === 'success' ? (
            <>
              <Check className="w-4 h-4 mr-1.5" />
              OK
            </>
          ) : 'Subskrybuj'}
        </Button>
      </div>
      {message && (
        <p className={`text-xs sm:text-sm mt-2 ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
          {message}
        </p>
      )}
    </form>
  )
}
