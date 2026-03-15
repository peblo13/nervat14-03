'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { MapPin, Phone, Clock, Globe, FileText, Search, Filter, ExternalLink } from 'lucide-react'
import { useLanguage } from '@/hooks/use-language'
import { AdSenseDisplay728x90, AdSenseDisplay300x250 } from '@/components/adsense-banner'

interface Office {
  id: string
  name: string
  type: string
  city: string
  address: string
  phone: string
  hours: string
  website: string
  bookingUrl?: string
  region?: string
}

// Comprehensive office database
const OFFICES_DATABASE: Office[] = [
    // ZUS Offices - major cities
    { id: 'zus-warsaw', name: 'ZUS - Warszawa (Centrala)', type: 'ZUS', city: 'Warszawa', address: 'ul. Emilii Plater 1a, 00-113 Warszawa', phone: '+48 22 560 16 00', hours: 'Pon-Pt: 8:00-16:00', website: 'www.zus.pl', bookingUrl: 'https://www.zus.pl', region: 'Mazovia' },
    { id: 'zus-krakow', name: 'ZUS - Kraków', type: 'ZUS', city: 'Kraków', address: 'ul. św. Tomasza 35, 31-027 Kraków', phone: '+48 12 422 02 50', hours: 'Pon-Pt: 8:00-16:00', website: 'www.zus.pl', bookingUrl: 'https://www.zus.pl', region: 'Małopolskie' },
    { id: 'zus-wroclaw', name: 'ZUS - Wrocław', type: 'ZUS', city: 'Wrocław', address: 'ul. Tadeusza Kościuszki 33, 50-013 Wrocław', phone: '+48 71 343 93 00', hours: 'Pon-Pt: 8:00-16:00', website: 'www.zus.pl', bookingUrl: 'https://www.zus.pl', region: 'Dolnośląskie' },
    { id: 'zus-gdansk', name: 'ZUS - Gdańsk', type: 'ZUS', city: 'Gdańsk', address: 'ul. Grunwaldzka 82, 80-244 Gdańsk', phone: '+48 58 308 50 00', hours: 'Pon-Pt: 8:00-16:00', website: 'www.zus.pl', bookingUrl: 'https://www.zus.pl', region: 'Pomerania' },
    { id: 'zus-poznan', name: 'ZUS - Poznań', type: 'ZUS', city: 'Poznań', address: 'ul. Św. Marcin 80, 61-809 Poznań', phone: '+48 61 855 11 11', hours: 'Pon-Pt: 8:00-16:00', website: 'www.zus.pl', bookingUrl: 'https://www.zus.pl', region: 'Wielkopolskie' },
    { id: 'zus-lodz', name: 'ZUS - Łódź', type: 'ZUS', city: 'Łódź', address: 'ul. Piotrkowska 3, 90-959 Łódź', phone: '+48 42 639 63 00', hours: 'Pon-Pt: 8:00-16:00', website: 'www.zus.pl', bookingUrl: 'https://www.zus.pl', region: 'Łódzkie' },
    { id: 'zus-szczecin', name: 'ZUS - Szczecin', type: 'ZUS', city: 'Szczecin', address: 'ul. Panieńska 19, 70-384 Szczecin', phone: '+48 91 488 40 00', hours: 'Pon-Pt: 8:00-16:00', website: 'www.zus.pl', bookingUrl: 'https://www.zus.pl', region: 'Zachodniopomorskie' },
    { id: 'zus-katowice', name: 'ZUS - Katowice', type: 'ZUS', city: 'Katowice', address: 'ul. 3 Maja 24, 40-091 Katowice', phone: '+48 32 723 93 00', hours: 'Pon-Pt: 8:00-16:00', website: 'www.zus.pl', bookingUrl: 'https://www.zus.pl', region: 'Silesia' },
    
    // CEIDG Offices
    { id: 'ceidg-warsaw', name: 'CEIDG - Warszawa (Centralna)', type: 'CEIDG', city: 'Warszawa', address: 'ul. Kredytowa 9, 00-056 Warszawa', phone: '+48 22 450 00 00', hours: 'Pon-Pt: 9:00-17:00', website: 'www.ceidg.gov.pl', bookingUrl: 'https://www.ceidg.gov.pl', region: 'Mazovia' },
    { id: 'ceidg-krakow', name: 'CEIDG - Kraków', type: 'CEIDG', city: 'Kraków', address: 'ul. Św. Wawrzyńca 8, 31-063 Kraków', phone: '+48 12 382 95 00', hours: 'Pon-Pt: 9:00-17:00', website: 'www.ceidg.gov.pl', bookingUrl: 'https://www.ceidg.gov.pl', region: 'Małopolskie' },
    { id: 'ceidg-lodz', name: 'CEIDG - Łódź', type: 'CEIDG', city: 'Łódź', address: 'ul. Św. Teresy 5, 90-703 Łódź', phone: '+48 42 631 95 95', hours: 'Pon-Pt: 9:00-17:00', website: 'www.ceidg.gov.pl', bookingUrl: 'https://www.ceidg.gov.pl', region: 'Łódzkie' },
    { id: 'ceidg-wroclaw', name: 'CEIDG - Wrocław', type: 'CEIDG', city: 'Wrocław', address: 'ul. Piłsudskiego 74, 50-040 Wrocław', phone: '+48 71 343 57 00', hours: 'Pon-Pt: 9:00-17:00', website: 'www.ceidg.gov.pl', bookingUrl: 'https://www.ceidg.gov.pl', region: 'Dolnośląskie' },
    
    // GUS Offices
    { id: 'gus-warsaw', name: 'GUS - Warszawa (Centrala)', type: 'GUS', city: 'Warszawa', address: 'Al. Niepodległości 208, 00-925 Warszawa', phone: '+48 22 608 30 00', hours: 'Pon-Pt: 7:30-15:30', website: 'www.stat.gov.pl', bookingUrl: 'https://www.stat.gov.pl', region: 'Mazovia' },
    { id: 'gus-krakow', name: 'GUS - Kraków', type: 'GUS', city: 'Kraków', address: 'ul. Basztowa 21, 31-156 Kraków', phone: '+48 12 619 88 00', hours: 'Pon-Pt: 7:30-15:30', website: 'www.stat.gov.pl', bookingUrl: 'https://www.stat.gov.pl', region: 'Małopolskie' },
    { id: 'gus-wroclaw', name: 'GUS - Wrocław', type: 'GUS', city: 'Wrocław', address: 'ul. Zamenhofa 30, 53-637 Wrocław', phone: '+48 71 369 87 00', hours: 'Pon-Pt: 7:30-15:30', website: 'www.stat.gov.pl', bookingUrl: 'https://www.stat.gov.pl', region: 'Dolnośląskie' },
    
    // Urzędy Skarbowe (Tax Offices)
    { id: 'us-warsaw', name: 'Urząd Skarbowy - Warszawa I', type: 'Urząd Skarbowy', city: 'Warszawa', address: 'ul. Wspólna 2/4, 00-926 Warszawa', phone: '+48 22 606 31 00', hours: 'Pon-Pt: 8:00-18:00', website: 'www.mf.gov.pl', bookingUrl: 'https://www.mf.gov.pl', region: 'Mazovia' },
    { id: 'us-krakow', name: 'Urząd Skarbowy - Kraków', type: 'Urząd Skarbowy', city: 'Kraków', address: 'ul. Floriańska 18, 31-019 Kraków', phone: '+48 12 619 40 00', hours: 'Pon-Pt: 8:00-18:00', website: 'www.mf.gov.pl', bookingUrl: 'https://www.mf.gov.pl', region: 'Małopolskie' },
    { id: 'us-wroclaw', name: 'Urząd Skarbowy - Wrocław', type: 'Urząd Skarbowy', city: 'Wrocław', address: 'ul. Krupnicza 17, 50-075 Wrocław', phone: '+48 71 330 80 00', hours: 'Pon-Pt: 8:00-18:00', website: 'www.mf.gov.pl', bookingUrl: 'https://www.mf.gov.pl', region: 'Dolnośląskie' },
    { id: 'us-gdansk', name: 'Urząd Skarbowy - Gdańsk', type: 'Urząd Skarbowy', city: 'Gdańsk', address: 'ul. Pocztowa 13, 80-833 Gdańsk', phone: '+48 58 741 29 00', hours: 'Pon-Pt: 8:00-18:00', website: 'www.mf.gov.pl', bookingUrl: 'https://www.mf.gov.pl', region: 'Pomerania' },
    
    // PARCC (Punkty Rejestracyjne)
    { id: 'parcc-warsaw', name: 'PARCC - Warszawa (Centralna)', type: 'PARCC', city: 'Warszawa', address: 'ul. Koszykowa 80, 02-953 Warszawa', phone: '+48 22 501 01 01', hours: 'Pon-Pt: 8:00-16:00', website: 'www.gov.pl/web/udsc', bookingUrl: 'https://www.gov.pl/web/udsc', region: 'Mazovia' },
    { id: 'parcc-krakow', name: 'PARCC - Kraków', type: 'PARCC', city: 'Kraków', address: 'ul. Sarego 3, 30-969 Kraków', phone: '+48 12 662 07 00', hours: 'Pon-Pt: 8:00-16:00', website: 'www.gov.pl/web/udsc', bookingUrl: 'https://www.gov.pl/web/udsc', region: 'Małopolskie' },
    { id: 'parcc-wroclaw', name: 'PARCC - Wrocław', type: 'PARCC', city: 'Wrocław', address: 'ul. Św. Antoniego 43, 53-604 Wrocław', phone: '+48 71 729 81 00', hours: 'Pon-Pt: 8:00-16:00', website: 'www.gov.pl/web/udsc', bookingUrl: 'https://www.gov.pl/web/udsc', region: 'Dolnośląskie' },
  ]

export default function MapaUrzedowPage() {
  const { language } = useLanguage()
  const [searchText, setSearchText] = useState('')
  const [selectedType, setSelectedType] = useState('Wszystkie')
  const [selectedCity, setSelectedCity] = useState('')

  const OFFICE_TYPES = ['Wszystkie', 'ZUS', 'CEIDG', 'GUS', 'Urząd Skarbowy', 'PARCC']
  const CITIES = [...new Set(OFFICES_DATABASE.map(o => o.city))].sort()

  const filteredOffices = useMemo(() => {
    return OFFICES_DATABASE.filter(office => {
      const matchType = selectedType === 'Wszystkie' || office.type === selectedType
      const matchCity = !selectedCity || office.city === selectedCity
      const matchSearch = !searchText || 
        office.name.toLowerCase().includes(searchText.toLowerCase()) ||
        office.address.toLowerCase().includes(searchText.toLowerCase()) ||
        office.city.toLowerCase().includes(searchText.toLowerCase())
      
      return matchType && matchCity && matchSearch
    })
  }, [searchText, selectedType, selectedCity])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900/30 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900/40 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-lg">
              <FileText className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">VAT Faktura</span>
          </Link>
          <nav className="hidden sm:flex items-center gap-4">
            <Link href="/" className="text-emerald-200 hover:text-white transition">Home</Link>
            <Link href="/register">
              <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500">
                Rejestracja
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/15 border border-green-500/30 rounded-full text-sm font-medium text-green-300 mb-6">
            <MapPin className="w-4 h-4" />
            Wszystkie urzędy w Polsce
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Mapa Urzędów
          </h1>
          <p className="text-lg text-emerald-200/70 max-w-2xl mx-auto">
            Znajdź adresy, godziny otwarcia i dane kontaktowe do wszystkich ważnych urzędów publicznych w Polsce
          </p>
        </div>

        {/* AdSense - Leaderboard */}
        <AdSenseDisplay728x90 />

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 mt-8">
          {/* Search Input */}
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-emerald-200 mb-2">
              <Search className="w-4 h-4 inline mr-2" />
              Szukaj po nazwie
            </label>
            <Input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Np. ZUS Warszawa..."
              className="bg-slate-700/50 border-emerald-500/30 text-white"
            />
          </div>

          {/* Type Filter */}
          <div>
            <label className="block text-sm font-medium text-emerald-200 mb-2">
              <Filter className="w-4 h-4 inline mr-2" />
              Typ urzędu
            </label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full bg-slate-700/50 border border-emerald-500/30 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-teal-400"
            >
              {OFFICE_TYPES.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          {/* City Filter */}
          <div>
            <label className="block text-sm font-medium text-emerald-200 mb-2">
              <MapPin className="w-4 h-4 inline mr-2" />
              Miasto
            </label>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full bg-slate-700/50 border border-emerald-500/30 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-teal-400"
            >
              <option value="">Wszystkie miasta</option>
              {CITIES.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-emerald-200 text-sm">
          Znaleziono <span className="font-bold text-white">{filteredOffices.length}</span> urzędów
        </div>

        {/* Office Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filteredOffices.length > 0 ? (
            filteredOffices.map(office => (
              <Card key={office.id} className="bg-slate-800/50 border border-emerald-500/20 p-6 hover:border-emerald-500/60 transition-all hover:shadow-lg hover:shadow-emerald-500/20">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{office.name}</h3>
                    <p className="text-sm text-emerald-400 font-semibold">{office.type}</p>
                  </div>
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-green-500/20 border border-green-500/50">
                    <MapPin className="w-5 h-5 text-green-400" />
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {/* Address */}
                  <div className="flex gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-emerald-200">{office.address}</span>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-3 text-sm">
                    <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <a href={`tel:${office.phone}`} className="text-emerald-200 hover:text-white">
                      {office.phone}
                    </a>
                  </div>

                  {/* Hours */}
                  <div className="flex gap-3 text-sm">
                    <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-emerald-200">{office.hours}</span>
                  </div>

                  {/* Website */}
                  <div className="flex gap-3 text-sm">
                    <Globe className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <a href={office.bookingUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
                      Rezerwacja online <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500">
                  <MapPin className="w-4 h-4" />
                  Pokaż na mapie
                </Button>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <Search className="w-16 h-16 text-emerald-400/30 mx-auto mb-4" />
              <p className="text-xl text-emerald-200 mb-2">Brak wyników</p>
              <p className="text-emerald-200/70">Spróbuj zmienić filtry lub szukane słowo</p>
            </div>
          )}
        </div>

        {/* AdSense - Bottom */}
        <AdSenseDisplay300x250 />
      </main>
    </div>
  )
}
