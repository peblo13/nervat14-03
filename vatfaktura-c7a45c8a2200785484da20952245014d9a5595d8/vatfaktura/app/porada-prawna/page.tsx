'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { Users, Phone, Globe, FileText, Search, Filter, ExternalLink, CheckCircle, Heart } from 'lucide-react'
import { useLanguage } from '@/hooks/use-language'
import { AdSenseDisplay728x90, AdSenseDisplay300x250 } from '@/components/adsense-banner'

interface LegalService {
  id: string
  name: string
  type: string
  description: string
  targetAudience: string[]
  phone?: string
  website: string
  services: string[]
  cities?: string[]
}

// Comprehensive legal services database
const LEGAL_SERVICES_DATABASE: LegalService[] = [
  {
    id: 'lawer',
    name: 'LAWER - Internetowy Poradnik Prawa',
    type: 'Doradztwo Prawne',
    description: 'Bezpłatne konsultacje prawne dla firm, przedsiębiorców i obywateli w Polsce',
    targetAudience: ['Wszyscy', 'Przedsiębiorcy', 'Firmy', 'Obywatele'],
    phone: '+48 22 XXX XX XX',
    website: 'https://www.lawer.pl',
    services: ['Porady prawne online', 'Dokumenty szablonowe', 'Edukacja prawna', 'Prawo cywilne'],
    cities: ['Online']
  },
  {
    id: 'ibngr',
    name: 'IBnGR - Instytut Badań nad Gospodarką Rynkową',
    type: 'Prawo Biznesu',
    description: 'Bezpłatne porady prawne dla małych i średnich przedsiębiorstw, startupów i firm',
    targetAudience: ['MŚP', 'Przedsiębiorcy', 'Startupy'],
    website: 'https://www.ibngr.edu.pl',
    services: ['Konsultacje dla firm', 'Wsparcie w starcie biznesu', 'Szkolenia biznesowe', 'Prawo handlowe'],
    cities: ['Warszawa', 'Online']
  },
  {
    id: 'straz-migracji',
    name: 'Straż Migracji i Ochrony Granic',
    type: 'Prawo Migracyjne',
    description: 'Pomoc dla imigrantów, cudzoziemców i uchodźców w Polsce - porady migracyjne',
    targetAudience: ['Obcokrajowcy', 'Imigranci', 'Uchodźcy'],
    phone: '+48 22 XXX XX XX',
    website: 'https://www.gov.pl/web/smo',
    services: ['Porady migracyjne', 'Procedury wizy', 'Ochrona praw cudzoziemców', 'Prawo azylowe'],
    cities: ['Warszawa', 'Kraków', 'Wrocław', 'Gdańsk', 'Poznań']
  },
  {
    id: 'prokuratura',
    name: 'Prokuratura Generalna Rzeczypospolitej Polskiej',
    type: 'Prawo Karne',
    description: 'Porady dotyczące spraw karnych, ochrony praw obywatelskich i postępowania sądowego',
    targetAudience: ['Wszyscy', 'Ofiary przestępstw', 'Świadkowie'],
    phone: '+48 22 XXX XX XX',
    website: 'https://www.pg.gov.pl',
    services: ['Poradnictwo karne', 'Ochrona konsumenta', 'Sprawy administracyjne', 'Prawo obywatelskie'],
    cities: ['Warszawa', 'Kraków', 'Wrocław', 'Gdańsk', 'Poznań', 'Łódź', 'Szczecin']
  },
  {
    id: 'pip',
    name: 'Państwowa Inspekcja Pracy (PIP)',
    type: 'Prawo Pracy',
    description: 'Porady dotyczące praw pracowników, pracodawców i warunków pracy',
    targetAudience: ['Pracownicy', 'Pracodawcy', 'Przedsiębiorcy'],
    phone: '+48 22 XXX XX XX',
    website: 'https://www.pip.gov.pl',
    services: ['Konsultacje pracownicze', 'BHP i bezpieczeństwo', 'Ochrona wynagrodzeń', 'Prawo zatrudnienia'],
    cities: ['Warszawa', 'Kraków', 'Wrocław', 'Gdańsk', 'Poznań', 'Łódź']
  },
  {
    id: 'udsc',
    name: 'Urząd do Spraw Cudzoziemców (UdSC)',
    type: 'Prawo Migracyjne',
    description: 'Oficjalna instytucja zajmująca się sprawami imigrantów - wizy i pozwolenia na pobyt',
    targetAudience: ['Obcokrajowcy', 'Imigranci'],
    phone: '+48 22 XXX XX XX',
    website: 'https://www.udsc.gov.pl',
    services: ['Wizy i pozwolenia', 'Procedury migracyjne', 'Cudzoziemcy w Polsce', 'Obywatelstwo'],
    cities: ['Warszawa', 'Kraków', 'Wrocław', 'Gdańsk']
  },
  {
    id: 'rzecznik',
    name: 'Rzecznik Praw Obywatelskich (RPO)',
    type: 'Ochrona Praw',
    description: 'Niezależna instytucja broniąca praw i wolności jednostek - skargi na naruszenia',
    targetAudience: ['Wszyscy', 'Obywatele'],
    phone: '+48 22 XXX XX XX',
    website: 'https://www.rpo.gov.pl',
    services: ['Skargi na naruszenia', 'Ochrona praw', 'Edukacja obywatelska', 'Prawo administracyjne'],
    cities: ['Warszawa', 'Online']
  },
  {
    id: 'uokik',
    name: 'Urząd Ochrony Konkurencji i Konsumentów (UOKiK)',
    type: 'Prawo Konsumenckie',
    description: 'Ochrona konsumentów, porady w sprawach handlowych i konsumenckich',
    targetAudience: ['Konsumenci', 'Wszyscy'],
    phone: '+48 22 XXX XX XX',
    website: 'https://www.uokik.gov.pl',
    services: ['Ochrona konsumentów', 'Sprawy handlowe', 'Porady konsumenckie', 'Poradnictwo kupującego'],
    cities: ['Warszawa', 'Kraków', 'Wrocław', 'Gdańsk', 'Poznań']
  },
  {
    id: 'arbet',
    name: 'Arbiterowie Handlowi - Okręgowa Izba Handlowo-Przemysłowa',
    type: 'Prawo Handlowe',
    description: 'Rozstrzyganie sporów handlowych między przedsiębiorcami - mediacja i arbitraż',
    targetAudience: ['Przedsiębiorcy', 'Firmy'],
    phone: '+48 22 XXX XX XX',
    website: 'https://www.ihk.pl',
    services: ['Mediacja handlowa', 'Arbitraż biznesowy', 'Rozstrzyganie sporów', 'Prawo handlowe'],
    cities: ['Warszawa', 'Kraków', 'Wrocław', 'Poznań', 'Łódź']
  },
  {
    id: 'ngo-help',
    name: 'Organizacje Pozarządowe - Pomoc Prawna',
    type: 'Prawo Społeczne',
    description: 'Sieci organizacji pozarządowych oferujące bezpłatną pomoc prawną osobom marginalizowanym',
    targetAudience: ['Osoby w kryzysie', 'Bezdomni', 'Osoby ubogie'],
    website: 'https://www.poradniaprawne.pl',
    services: ['Porady dla osób w kryzysie', 'Ochrona socjalna', 'Prawo rodzinne', 'Prawo mieszkaniowe'],
    cities: ['Warszawa', 'Kraków', 'Wrocław', 'Gdańsk', 'Poznań', 'Łódź', 'Szczecin', 'Białystok']
  },
]

const SERVICE_TYPES = ['Wszystkie', 'Doradztwo Prawne', 'Prawo Biznesu', 'Prawo Migracyjne', 'Prawo Pracy', 'Ochrona Praw', 'Prawo Konsumenckie', 'Prawo Handlowe', 'Prawo Społeczne']
const AUDIENCES = ['Wszyscy', 'Przedsiębiorcy', 'Pracownicy', 'Obcokrajowcy', 'Konsumenci', 'MŚP']
const CITIES = ['Online', 'Warszawa', 'Kraków', 'Wrocław', 'Gdańsk', 'Poznań', 'Łódź', 'Szczecin', 'Białystok']

export default function PoradaPrawnPage() {
  const { language } = useLanguage()
  const [searchText, setSearchText] = useState('')
  const [selectedType, setSelectedType] = useState('Wszystkie')
  const [selectedAudience, setSelectedAudience] = useState('')

  const filteredServices = useMemo(() => {
    return LEGAL_SERVICES_DATABASE.filter(service => {
      const matchType = selectedType === 'Wszystkie' || service.type === selectedType
      const matchAudience = !selectedAudience || service.targetAudience.includes(selectedAudience)
      const matchSearch = !searchText ||
        service.name.toLowerCase().includes(searchText.toLowerCase()) ||
        service.description.toLowerCase().includes(searchText.toLowerCase()) ||
        service.services.some(s => s.toLowerCase().includes(searchText.toLowerCase()))

      return matchType && matchAudience && matchSearch
    })
  }, [searchText, selectedType, selectedAudience])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900/40 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg">
              <FileText className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">VAT Faktura</span>
          </Link>
          <nav className="hidden sm:flex items-center gap-4">
            <Link href="/" className="text-purple-200 hover:text-white transition">Home</Link>
            <Link href="/register">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500">
                Rejestracja
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/15 border border-purple-500/30 rounded-full text-sm font-medium text-purple-300 mb-6">
            <Users className="w-4 h-4" />
            Bezpłatne porady prawne
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Porada Prawna
          </h1>
          <p className="text-lg text-purple-200/70 max-w-2xl mx-auto">
            Znajdź bezpłatne porady prawne od legalnych organizacji, instytucji publicznych i ekspertów w całej Polsce
          </p>
        </div>

        {/* AdSense - Leaderboard */}
        <AdSenseDisplay728x90 />

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 mt-8">
          {/* Search Input */}
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-purple-200 mb-2">
              <Search className="w-4 h-4 inline mr-2" />
              Szukaj po nazwie
            </label>
            <Input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Np. LAWER, Prawo..."
              className="bg-slate-700/50 border-purple-500/30 text-white"
            />
          </div>

          {/* Type Filter */}
          <div>
            <label className="block text-sm font-medium text-purple-200 mb-2">
              <Filter className="w-4 h-4 inline mr-2" />
              Dziedzina prawa
            </label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full bg-slate-700/50 border border-purple-500/30 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-pink-400"
            >
              {SERVICE_TYPES.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          {/* Audience Filter */}
          <div>
            <label className="block text-sm font-medium text-purple-200 mb-2">
              <Users className="w-4 h-4 inline mr-2" />
              Dla kogo
            </label>
            <select
              value={selectedAudience}
              onChange={(e) => setSelectedAudience(e.target.value)}
              className="w-full bg-slate-700/50 border border-purple-500/30 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-pink-400"
            >
              <option value="">Dla każdego</option>
              {AUDIENCES.map(audience => (
                <option key={audience} value={audience}>{audience}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-purple-200 text-sm">
          Znaleziono <span className="font-bold text-white">{filteredServices.length}</span> organizacji
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filteredServices.length > 0 ? (
            filteredServices.map(service => (
              <Card key={service.id} className="bg-slate-800/50 border border-purple-500/20 p-6 hover:border-purple-500/60 transition-all hover:shadow-lg hover:shadow-purple-500/20">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{service.name}</h3>
                    <p className="text-sm text-purple-400 font-semibold">{service.type}</p>
                  </div>
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-purple-500/20 border border-purple-500/50">
                    <Heart className="w-5 h-5 text-purple-400" />
                  </div>
                </div>

                <p className="text-purple-200 text-sm mb-4">{service.description}</p>

                {/* Services */}
                <div className="mb-4 space-y-2">
                  {service.services.slice(0, 3).map((svc, idx) => (
                    <div key={idx} className="flex gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span className="text-purple-200">{svc}</span>
                    </div>
                  ))}
                </div>

                {/* Target Audience */}
                <div className="mb-4 p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                  <p className="text-xs font-semibold text-purple-300 mb-2">Dla:</p>
                  <div className="flex flex-wrap gap-2">
                    {service.targetAudience.slice(0, 2).map(audience => (
                      <span key={audience} className="text-xs bg-purple-500/30 text-purple-200 px-2 py-1 rounded">
                        {audience}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-3 mb-6 pb-4 border-b border-purple-500/20">
                  {service.phone && (
                    <div className="flex gap-3 text-sm">
                      <Phone className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                      <a href={`tel:${service.phone}`} className="text-purple-200 hover:text-white">
                        {service.phone}
                      </a>
                    </div>
                  )}
                  <div className="flex gap-3 text-sm">
                    <Globe className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <a href={service.website} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
                      Odwiedź stronę <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500">
                  <Users className="w-4 h-4" />
                  Uzyskaj poradę
                </Button>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <Search className="w-16 h-16 text-purple-400/30 mx-auto mb-4" />
              <p className="text-xl text-purple-200 mb-2">Brak wyników</p>
              <p className="text-purple-200/70">Spróbuj zmienić filtry lub szukane słowo</p>
            </div>
          )}
        </div>

        {/* AdSense - Bottom */}
        <AdSenseDisplay300x250 />
      </main>
    </div>
  )
}
