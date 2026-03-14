'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { Metadata } from 'next'
import { Download, ArrowLeft, AlertCircle, FileText } from 'lucide-react'
import { AdSenseDisplay728x90, AdSenseDisplayAuto } from '@/components/adsense-banner'
import { HowToSchema } from '@/components/how-to-schema'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'

export const metadata: Metadata = {
  title: 'Generator ZUS Z-3/Z-3a/Z-3b - Zaświadczenie o chorobowych online bez logowania',
  description: 'Bezpłatny generator formularza ZUS Z-3 (pracownicy), Z-3a (zleceniobiorcy) i Z-3b (przedsiębiorcy). Wypełnij zaświadczenie o niezdolności do pracy online, pobierz PDF do wysyłki przez PUE ZUS.',
  keywords: 'ZUS Z-3, formularz chorobowy, zaświadczenie niezdolności do pracy, Z-3a, Z-3b, generator formularzy, chorobowe ZUS',
  openGraph: {
    title: 'Generator ZUS Z-3 - Formularz Chorobowy Online Bez Rejestracji',
    description: 'Wygeneruj zaświadczenie o chorobowych ZUS Z-3 w 5 minut. Pełnie bezpłatnie.',
    type: 'website',
    url: 'https://www.vatfaktura.pl/generator-zus-z3',
    images: [{ url: 'https://www.vatfaktura.pl/og-image.png' }],
  },
}

export default function GeneratorZUSZ3Page() {
  const [formType, setFormType] = useState<'z3' | 'z3a' | 'z3b'>('z3')
  const [formData, setFormData] = useState({
    peselLecacy: '',
    imie: '',
    nazwisko: '',
    dataUrodzenia: '',
    dataOd: '',
    dataDo: '',
    diagnoza: '',
    kodDiagnozy: '',
    lekarzImie: '',
    lekarzNazwisko: '',
    kodLekarza: '',
    placowka: '',
    kodPlacowki: '',
    niezdolnoscCalkowita: true,
    wznowienie: false,
    dalsze: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const generatePDF = () => {
    // Placeholder dla generowania PDF - w produkcji użyć biblioteki jsPDF lub html2pdf
    alert(`Formularz ${formType.toUpperCase()} przygotowany do pobrania. W pełnej wersji tutaj byłby plik PDF z danymi.`)
  }

  const formTypes = [
    { id: 'z3', title: 'ZUS Z-3', desc: 'Pracownicy zatrudnieni na umowę o pracę' },
    { id: 'z3a', title: 'ZUS Z-3a', desc: 'Osoby pracujące na umowę zlecenie' },
    { id: 'z3b', title: 'ZUS Z-3b', desc: 'Samozatrudnieni i przedsiębiorcy' },
  ]

  const howToSteps = [
    {
      name: 'Wybierz typ formularza',
      description: 'Kliknij na jedną z trzech opcji: Z-3 dla pracowników, Z-3a dla zleceniobiorców lub Z-3b dla przedsiębiorców.',
    },
    {
      name: 'Wypełnij dane osobowe',
      description: 'Wprowadź PESEL, imię, nazwisko, datę urodzenia i inne wymagane informacje.',
    },
    {
      name: 'Dodaj informacje medyczne',
      description: 'Wpisz datę początkową i końcową niezdolności do pracy, diagnozę i kod diagnozy.',
    },
    {
      name: 'Uzupełnij dane lekarza',
      description: 'Dodaj imię, nazwisko i kod lekarza, a także kod placówki medycznej.',
    },
    {
      name: 'Pobierz formularz',
      description: 'Kliknij przycisk pobrania, aby wygenerować dokument PDF.',
    },
    {
      name: 'Wyślij przez PUE ZUS',
      description: 'Zaloguj się na stronie pue.zus.pl i wyślij wygenerowany PDF w ciągu 7 dni.',
    }
  ]

  const breadcrumbs = [
    { name: 'Strona główna', url: 'https://www.vatfaktura.pl' },
    { name: 'Formularze ZUS', url: 'https://www.vatfaktura.pl/formularze-zus' },
    { name: 'Generator Z-3', url: 'https://www.vatfaktura.pl/generator-zus-z3' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-blue-900 pt-20 pb-20">
      <HowToSchema
        title="Jak wypełnić formularz ZUS Z-3/Z-3a/Z-3b"
        description="Krok po kroku instrukcja do generowania zaświadczenia o niezdolności do pracy ZUS"
        image="https://www.vatfaktura.pl/og-image.png"
        author="VAT Faktura"
        datePublished="2024-01-01"
        steps={howToSteps}
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/formularze-zus" className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-100 transition">
            <ArrowLeft className="w-5 h-5" />
            Wróć do formularzy
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-300 bg-clip-text text-transparent mb-4">
            Generator formularza zaświadczenia o niezdolności
          </h1>
          <p className="text-blue-200/70 text-sm sm:text-base">
            Formularz ZUS Z-3/Z-3a/Z-3b do wysyłki przez PUE ZUS
          </p>
        </div>

        {/* Important Info */}
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 sm:p-6 mb-12 flex gap-4">
          <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
          <p className="text-yellow-200/80 text-sm">
            Dane muszą zgadzać się z oryginałem zaświadczenia od lekarza. Formularz wysyłaj wyłącznie przez PUE ZUS.
          </p>
        </div>

        {/* AdSense */}
        <div className="mb-12">
          <AdSenseDisplay728x90 />
        </div>

        {/* Form Type Selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {formTypes.map(type => (
            <button
              key={type.id}
              onClick={() => setFormType(type.id as 'z3' | 'z3a' | 'z3b')}
              className={`p-6 rounded-xl border-2 transition-all ${
                formType === type.id
                  ? 'border-cyan-500 bg-blue-600/30 shadow-lg shadow-blue-500/30'
                  : 'border-blue-500/20 bg-slate-800/50 hover:border-blue-500/50'
              }`}
            >
              <FileText className={`w-6 h-6 mb-2 ${formType === type.id ? 'text-cyan-300' : 'text-blue-300'}`} />
              <h3 className="font-semibold text-white">{type.title}</h3>
              <p className="text-xs sm:text-sm text-blue-200/70 mt-1">{type.desc}</p>
            </button>
          ))}
        </div>

        {/* Form */}
        <Card className="bg-slate-800/50 border border-blue-500/20 p-8 mb-12">
          <form onSubmit={(e) => { e.preventDefault(); generatePDF() }} className="space-y-8">
            {/* Section 1: Dane osobowe */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-sm">1</span>
                Dane osoby niezdolnej do pracy
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">PESEL</label>
                  <input
                    type="text"
                    name="peselLecacy"
                    value={formData.peselLecacy}
                    onChange={handleChange}
                    placeholder="XXXXXXXXXXX"
                    maxLength="11"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Imię</label>
                  <input
                    type="text"
                    name="imie"
                    value={formData.imie}
                    onChange={handleChange}
                    placeholder="Jan"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Nazwisko</label>
                  <input
                    type="text"
                    name="nazwisko"
                    value={formData.nazwisko}
                    onChange={handleChange}
                    placeholder="Kowalski"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Data urodzenia</label>
                  <input
                    type="date"
                    name="dataUrodzenia"
                    value={formData.dataUrodzenia}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:border-blue-400"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Okres niezdolności */}
            <div className="border-t border-blue-500/20 pt-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-sm">2</span>
                Okres niezdolności do pracy
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Od kiedy (data)</label>
                  <input
                    type="date"
                    name="dataOd"
                    value={formData.dataOd}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:border-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Do kiedy (data)</label>
                  <input
                    type="date"
                    name="dataDo"
                    value={formData.dataDo}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:border-blue-400"
                  />
                </div>
              </div>
            </div>

            {/* Section 3: Diagnoza */}
            <div className="border-t border-blue-500/20 pt-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-sm">3</span>
                Diagnoza
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Diagnoza ICD-10</label>
                  <input
                    type="text"
                    name="diagnoza"
                    value={formData.diagnoza}
                    onChange={handleChange}
                    placeholder="np. A00.0"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Kod diagnozy</label>
                  <input
                    type="text"
                    name="kodDiagnozy"
                    value={formData.kodDiagnozy}
                    onChange={handleChange}
                    placeholder="Kod diagnostyczny"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-400"
                  />
                </div>
              </div>
            </div>

            {/* Section 4: Lekarz */}
            <div className="border-t border-blue-500/20 pt-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-sm">4</span>
                Dane lekarza
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Imię lekarza</label>
                  <input
                    type="text"
                    name="lekarzImie"
                    value={formData.lekarzImie}
                    onChange={handleChange}
                    placeholder="Jan"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Nazwisko lekarza</label>
                  <input
                    type="text"
                    name="lekarzNazwisko"
                    value={formData.lekarzNazwisko}
                    onChange={handleChange}
                    placeholder="Nowak"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Kod lekarza</label>
                  <input
                    type="text"
                    name="kodLekarza"
                    value={formData.kodLekarza}
                    onChange={handleChange}
                    placeholder="000000"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-400"
                  />
                </div>
              </div>
            </div>

            {/* Section 5: Placówka */}
            <div className="border-t border-blue-500/20 pt-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-sm">5</span>
                Placówka medyczna
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Nazwa placówki</label>
                  <input
                    type="text"
                    name="placowka"
                    value={formData.placowka}
                    onChange={handleChange}
                    placeholder="Przychodni lekarza"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Kod placówki</label>
                  <input
                    type="text"
                    name="kodPlacowki"
                    value={formData.kodPlacowki}
                    onChange={handleChange}
                    placeholder="Kod RESTa"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-400"
                  />
                </div>
              </div>
            </div>

            {/* Section 6: Typ niezdolności */}
            <div className="border-t border-blue-500/20 pt-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-sm">6</span>
                Typ niezdolności
              </h3>
              <div className="space-y-4">
                <label className="flex items-center gap-3 p-4 rounded-lg border border-blue-500/20 hover:border-blue-500/50 cursor-pointer transition">
                  <input
                    type="radio"
                    name="type"
                    checked={formData.niezdolnoscCalkowita}
                    onChange={() => setFormData({ ...formData, niezdolnoscCalkowita: true, wznowienie: false, dalsze: false })}
                    className="w-5 h-5"
                  />
                  <span className="text-white font-semibold">Niezdolność całkowita</span>
                </label>
                <label className="flex items-center gap-3 p-4 rounded-lg border border-blue-500/20 hover:border-blue-500/50 cursor-pointer transition">
                  <input
                    type="radio"
                    name="type"
                    checked={formData.wznowienie}
                    onChange={() => setFormData({ ...formData, niezdolnoscCalkowita: false, wznowienie: true, dalsze: false })}
                    className="w-5 h-5"
                  />
                  <span className="text-white font-semibold">Wznowienie niezdolności</span>
                </label>
                <label className="flex items-center gap-3 p-4 rounded-lg border border-blue-500/20 hover:border-blue-500/50 cursor-pointer transition">
                  <input
                    type="radio"
                    name="type"
                    checked={formData.dalsze}
                    onChange={() => setFormData({ ...formData, niezdolnoscCalkowita: false, wznowienie: false, dalsze: true })}
                    className="w-5 h-5"
                  />
                  <span className="text-white font-semibold">Dalsze orzeczenie niezdolności</span>
                </label>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="border-t border-blue-500/20 pt-8 flex flex-col sm:flex-row gap-4 justify-between">
              <Link href="/formularze-zus" className="flex-1">
                <Button variant="outline" className="w-full border-blue-500/30 text-blue-300 hover:bg-blue-500/10">
                  Cofnij
                </Button>
              </Link>
              <button
                type="submit"
                className="flex-1 sm:flex-none px-8 py-3 bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-500 hover:to-cyan-500 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Pobierz PDF
              </button>
            </div>
          </form>
        </Card>

        {/* AdSense */}
        <div className="mb-12">
          <AdSenseDisplayAuto />
        </div>

        {/* Help Section */}
        <Card className="bg-blue-900/30 border border-blue-500/20 p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Jak wysłać formularz przez PUE ZUS?</h3>
          <ol className="space-y-4 text-blue-200/80 list-decimal list-inside">
            <li>Zaloguj się na <a href="https://pue.zus.pl" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-100 underline">Portal Usług Elektronicznych ZUS</a></li>
            <li>Przejdź do "Usługi dla ubezpieczonych" → "Zaświadczenia"</li>
            <li>Kliknij "Nowe zaświadczenie" i wybierz "Zaświadczenie o niezdolności"</li>
            <li>Uploaduj pobrany plik PDF lub wpisz dane ręcznie</li>
            <li>Wyślij formularz elektronicznie</li>
            <li>Otrzymasz potwierdzenie wysyłki na maila</li>
          </ol>
        </Card>
      </div>
    </div>
  )
}
