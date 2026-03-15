'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CheckCircle, Building2, FileText, Users, Zap, Shield, Clock, ArrowRight, Phone, Mail, AlertCircle, Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'
import { MobileNav } from '@/components/mobile-nav'
import { HeaderMenu } from '@/components/header-menu'
import { SupportBanner } from '@/components/support-banner'

export default function ZalozFirmePage() {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    // Krok 1: Dane firmy
    companyName: '',
    companyType: 'sp. z o.o.',
    businessActivity: '',
    pesel: '',
    
    // Krok 2: Dane właściciela
    ownerFirstName: '',
    ownerLastName: '',
    ownerEmail: '',
    ownerPhone: '',
    
    // Krok 3: Adres
    street: '',
    city: '',
    postalCode: '',
    
    // Krok 4: Potwierdzenie
    agreedTerms: false,
    agreedData: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    setFormData(prev => ({ ...prev, [name]: val }))
  }

  const handleNextStep = () => {
    if (validateStep(step)) {
      setStep(step + 1)
    }
  }

  const validateStep = (currentStep: number): boolean => {
    switch (currentStep) {
      case 1:
        return !!(formData.companyName && formData.businessActivity && formData.pesel)
      case 2:
        return !!(formData.ownerFirstName && formData.ownerLastName && formData.ownerEmail && formData.ownerPhone)
      case 3:
        return !!(formData.street && formData.city && formData.postalCode)
      case 4:
        return formData.agreedTerms && formData.agreedData
      default:
        return true
    }
  }

  const handleSubmit = async () => {
    if (!validateStep(4)) return
    
    setLoading(true)
    try {
      // Symulacja wysłania formularza
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log('[v0] Form submitted:', formData)
      
      // Po pomyślnym wysłaniu, przekierowanie
      setTimeout(() => {
        window.location.href = '/dashboard'
      }, 1000)
    } catch (error) {
      console.error('[v0] Error submitting form:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Support Banner */}
      <SupportBanner />

      {/* Animated background elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-0"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="hidden sm:block absolute -bottom-8 left-1/2 w-32 h-32 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="bg-slate-900/40 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-4 flex items-center justify-between min-h-[56px] sm:min-h-[64px]">
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/50 flex-shrink-0">
                <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent truncate">Załóż Firmę</h1>
            </div>
            <nav className="hidden sm:flex items-center gap-1 md:gap-1.5">
              <HeaderMenu />
              <Link href="/faq" className="px-3 py-2 text-sm font-medium text-blue-200 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200">
                FAQ
              </Link>
              <div className="w-px h-5 bg-white/15 mx-1" />
              <Link href="/login">
                <Button variant="outline" className="h-9 px-4 text-sm border-green-500/40 hover:bg-green-500/10 text-green-300">
                  Zaloguj
                </Button>
              </Link>
            </nav>
            <MobileNav />
          </div>
        </header>

        {/* Main Content */}
        <section className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          {/* Progress Steps */}
          <div className="mb-12 sm:mb-16">
            <div className="flex justify-between mb-8">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="flex flex-col items-center gap-2">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-sm sm:text-base transition-all ${
                    step >= num 
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg shadow-green-500/50' 
                      : 'bg-slate-700/50 text-blue-300 border border-slate-600'
                  }`}>
                    {num}
                  </div>
                  <span className={`text-xs sm:text-sm font-medium ${step >= num ? 'text-green-300' : 'text-blue-300'}`}>
                    {['Firma', 'Właściciel', 'Adres', 'Potwierdzenie'][num - 1]}
                  </span>
                </div>
              ))}
            </div>
            <div className="w-full h-1 bg-slate-700/30 rounded-full overflow-hidden">
              <div className={`h-full bg-gradient-to-r from-green-600 to-emerald-600 transition-all duration-500`} style={{width: `${(step - 1) * 33.33}%`}}></div>
            </div>
          </div>

          {/* Form Container */}
          <div className="bg-slate-800/40 backdrop-blur-xl border border-green-500/30 rounded-2xl p-6 sm:p-8 md:p-10">
            {/* Krok 1: Dane firmy */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Dane firmy</h2>
                  <p className="text-green-200/70">Podaj podstawowe informacje o Twojej firmie</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-green-300 mb-2">Nazwa firmy *</label>
                    <Input
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="np. ABC sp. z o.o."
                      className="bg-slate-700/50 border-green-500/30 text-white placeholder-blue-300/50 focus:border-green-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-green-300 mb-2">Forma prawna *</label>
                    <select
                      name="companyType"
                      value={formData.companyType}
                      onChange={handleInputChange}
                      className="w-full bg-slate-700/50 border border-green-500/30 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-green-400"
                    >
                      <option value="sp. z o.o.">Sp. z o.o.</option>
                      <option value="sp. jawna">Sp. jawna</option>
                      <option value="jednoosobowa działalność">Jednoosobowa działalność</option>
                      <option value="s.k.a.">S.K.A.</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-green-300 mb-2">Przedmiot działalności *</label>
                    <Input
                      name="businessActivity"
                      value={formData.businessActivity}
                      onChange={handleInputChange}
                      placeholder="np. Usługi doradztwa biznesowego"
                      className="bg-slate-700/50 border-green-500/30 text-white placeholder-blue-300/50 focus:border-green-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-green-300 mb-2">PESEL właściciela *</label>
                    <Input
                      name="pesel"
                      value={formData.pesel}
                      onChange={handleInputChange}
                      placeholder="np. 12345678901"
                      maxLength={11}
                      className="bg-slate-700/50 border-green-500/30 text-white placeholder-blue-300/50 focus:border-green-400"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Krok 2: Dane właściciela */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Dane właściciela</h2>
                  <p className="text-green-200/70">Informacje kontaktowe i osobowe</p>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-green-300 mb-2">Imię *</label>
                      <Input
                        name="ownerFirstName"
                        value={formData.ownerFirstName}
                        onChange={handleInputChange}
                        placeholder="np. Jan"
                        className="bg-slate-700/50 border-green-500/30 text-white placeholder-blue-300/50 focus:border-green-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-green-300 mb-2">Nazwisko *</label>
                      <Input
                        name="ownerLastName"
                        value={formData.ownerLastName}
                        onChange={handleInputChange}
                        placeholder="np. Kowalski"
                        className="bg-slate-700/50 border-green-500/30 text-white placeholder-blue-300/50 focus:border-green-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-green-300 mb-2">Email *</label>
                    <Input
                      name="ownerEmail"
                      type="email"
                      value={formData.ownerEmail}
                      onChange={handleInputChange}
                      placeholder="np. jan@example.com"
                      className="bg-slate-700/50 border-green-500/30 text-white placeholder-blue-300/50 focus:border-green-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-green-300 mb-2">Telefon *</label>
                    <Input
                      name="ownerPhone"
                      value={formData.ownerPhone}
                      onChange={handleInputChange}
                      placeholder="np. +48 12 345 67 89"
                      className="bg-slate-700/50 border-green-500/30 text-white placeholder-blue-300/50 focus:border-green-400"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Krok 3: Adres */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Adres siedziby</h2>
                  <p className="text-green-200/70">Miejsce prowadzenia działalności</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-green-300 mb-2">Ulica i numer *</label>
                    <Input
                      name="street"
                      value={formData.street}
                      onChange={handleInputChange}
                      placeholder="np. ul. Główna 123"
                      className="bg-slate-700/50 border-green-500/30 text-white placeholder-blue-300/50 focus:border-green-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-green-300 mb-2">Kod pocztowy *</label>
                      <Input
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        placeholder="np. 00-001"
                        className="bg-slate-700/50 border-green-500/30 text-white placeholder-blue-300/50 focus:border-green-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-green-300 mb-2">Miasto *</label>
                      <Input
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="np. Warszawa"
                        className="bg-slate-700/50 border-green-500/30 text-white placeholder-blue-300/50 focus:border-green-400"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Krok 4: Potwierdzenie */}
            {step === 4 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Potwierdzenie</h2>
                  <p className="text-green-200/70">Przejrzyj i potwierdź dane</p>
                </div>

                <div className="space-y-4 bg-slate-700/30 rounded-lg p-6 border border-green-500/20">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-blue-300 text-sm">Nazwa firmy</p>
                      <p className="text-white font-semibold">{formData.companyName}</p>
                    </div>
                    <div>
                      <p className="text-blue-300 text-sm">Forma prawna</p>
                      <p className="text-white font-semibold">{formData.companyType}</p>
                    </div>
                    <div>
                      <p className="text-blue-300 text-sm">Właściciel</p>
                      <p className="text-white font-semibold">{formData.ownerFirstName} {formData.ownerLastName}</p>
                    </div>
                    <div>
                      <p className="text-blue-300 text-sm">Email</p>
                      <p className="text-white font-semibold">{formData.ownerEmail}</p>
                    </div>
                    <div>
                      <p className="text-blue-300 text-sm">Adres</p>
                      <p className="text-white font-semibold">{formData.street}, {formData.postalCode} {formData.city}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="agreedTerms"
                      checked={formData.agreedTerms}
                      onChange={handleInputChange}
                      className="mt-1 w-4 h-4 rounded border-green-500/50 bg-slate-700/50 text-green-600"
                    />
                    <span className="text-sm text-green-200">Akceptuję warunki i zasady rejestracji firmy online</span>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="agreedData"
                      checked={formData.agreedData}
                      onChange={handleInputChange}
                      className="mt-1 w-4 h-4 rounded border-green-500/50 bg-slate-700/50 text-green-600"
                    />
                    <span className="text-sm text-green-200">Wyrażam zgodę na przetwarzanie moich danych osobowych</span>
                  </label>
                </div>

                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 flex gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-blue-200">Po wysłaniu formularza proces rejestracji w CEIDG, GUS i ZUS rozpocznie się automatycznie.</p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-8">
              {step > 1 && (
                <Button
                  variant="outline"
                  onClick={() => setStep(step - 1)}
                  className="flex-1 border-green-500/30 hover:bg-green-500/10 text-green-300"
                >
                  Wróć
                </Button>
              )}
              
              {step < 4 ? (
                <Button
                  onClick={handleNextStep}
                  className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-semibold"
                >
                  Dalej
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={loading || !formData.agreedTerms || !formData.agreedData}
                  className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Wysyłanie...' : 'Załóż firmę'}
                </Button>
              )}
            </div>
          </div>

          {/* Info Section */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-slate-800/40 backdrop-blur-xl border border-green-500/20 rounded-xl p-6 text-center">
              <Clock className="w-10 h-10 text-green-400 mx-auto mb-3" />
              <h3 className="text-white font-bold mb-2">Szybko</h3>
              <p className="text-green-200/70 text-sm">Cały proces zajmuje około 15 minut</p>
            </div>
            <div className="bg-slate-800/40 backdrop-blur-xl border border-green-500/20 rounded-xl p-6 text-center">
              <Shield className="w-10 h-10 text-green-400 mx-auto mb-3" />
              <h3 className="text-white font-bold mb-2">Bezpiecznie</h3>
              <p className="text-green-200/70 text-sm">Twoje dane są szyfrowane i chronione</p>
            </div>
            <div className="bg-slate-800/40 backdrop-blur-xl border border-green-500/20 rounded-xl p-6 text-center">
              <CheckCircle className="w-10 h-10 text-green-400 mx-auto mb-3" />
              <h3 className="text-white font-bold mb-2">Całkowicie</h3>
              <p className="text-green-200/70 text-sm">Obsługujemy wszystkie procedury</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 mt-16 sm:mt-20 py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center text-blue-200/50 text-sm">
            <p>&copy; 2024 VAT Faktura. Wszelkie prawa zastrzeżone.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
