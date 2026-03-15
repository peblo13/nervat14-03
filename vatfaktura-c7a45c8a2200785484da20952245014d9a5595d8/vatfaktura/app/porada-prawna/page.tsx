'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users, Phone, Globe, Mail, ExternalLink, AlertCircle, CheckCircle, Building2, Heart, Search, Filter } from 'lucide-react'
import { useLanguage } from '@/hooks/use-language'
import { AdSenseDisplayAuto } from '@/components/adsense-banner'

interface LegalService {
  id: string
  name: string
  type: string
  description: string
  targetAudience: string
  contact: string
  phone?: string
  email?: string
  website: string
  services: string[]
  isFree: boolean
}

export default function LegalAdvice() {
  const { language } = useLanguage()
  const [selectedType, setSelectedType] = useState<string>('all')
  const [contactFormOpen, setContactFormOpen] = useState(false)

  const services: LegalService[] = [
    {
      id: 'lawer',
      name: 'LAWER',
      type: language === 'uk' ? 'Doradztwo Prawne' : 'Doradztwo Prawne',
      description: language === 'uk'
        ? 'Bezpłatne konsultacje prawne dla firm, przedsiębiorców i obywateli'
        : 'Bezpłatne konsultacje prawne dla firm, przedsiębiorców i obywateli',
      targetAudience: language === 'uk' ? 'Wszyscy' : 'Wszyscy',
      contact: 'www.lawer.pl',
      phone: '+48 22 XXX XX XX',
      website: 'https://www.lawer.pl',
      services: [
        language === 'uk' ? 'Porady prawne online' : 'Porady prawne online',
        language === 'uk' ? 'Dokumenty szablanowe' : 'Dokumenty szablonowe',
        language === 'uk' ? 'Edukacja prawna' : 'Edukacja prawna',
      ],
      isFree: true
    },
    {
      id: 'ibngr',
      name: 'IBnGR',
      type: language === 'uk' ? 'Prawo Biznesu' : 'Prawo Biznesu',
      description: language === 'uk'
        ? 'Bezpłatne porady prawne dla małych i średnich przedsiębiorstw'
        : 'Bezpłatne porady prawne dla małych i średnich przedsiębiorstw',
      targetAudience: language === 'uk' ? 'MŚP' : 'MŚP',
      contact: 'www.ibngr.edu.pl',
      website: 'https://www.ibngr.edu.pl',
      services: [
        language === 'uk' ? 'Konsultacje dla firm' : 'Konsultacje dla firm',
        language === 'uk' ? 'Wsparcie w starcie biznesu' : 'Wsparcie w starcie biznesu',
        language === 'uk' ? 'Szkolenia biznesowe' : 'Szkolenia biznesowe',
      ],
      isFree: true
    },
    {
      id: 'strazymigracji',
      name: language === 'uk' ? 'Straż Migracji i Ochrony Granic' : 'Straż Migracji i Ochrony Granic',
      type: language === 'uk' ? 'Prawo Migracyjne' : 'Prawo Migracyjne',
      description: language === 'uk'
        ? 'Pomoc dla imigrantów i cudzoziemców w Polsce'
        : 'Pomoc dla imigrantów i cudzoziemców w Polsce',
      targetAudience: language === 'uk' ? 'Obcokrajowcy' : 'Obcokrajowcy',
      contact: 'www.gov.pl/web/smo',
      website: 'https://www.gov.pl/web/smo',
      services: [
        language === 'uk' ? 'Porady migracyjne' : 'Porady migracyjne',
        language === 'uk' ? 'Procedury wizy' : 'Procedury wizy',
        language === 'uk' ? 'Ochrona praw' : 'Ochrona praw',
      ],
      isFree: true
    },
    {
      id: 'prokuratura',
      name: language === 'uk' ? 'Prokuratura Generalna' : 'Prokuratura Generalna',
      type: language === 'uk' ? 'Prawo Karne' : 'Prawo Karne',
      description: language === 'uk'
        ? 'Porady dotyczące spraw karnych i ochrony praw obywatelskich'
        : 'Porady dotyczące spraw karnych i ochrony praw obywatelskich',
      targetAudience: language === 'uk' ? 'Wszyscy' : 'Wszyscy',
      contact: 'www.pg.gov.pl',
      website: 'https://www.pg.gov.pl',
      services: [
        language === 'uk' ? 'Poradnictwo karne' : 'Poradnictwo karne',
        language === 'uk' ? 'Ochrona konsumenta' : 'Ochrona konsumenta',
        language === 'uk' ? 'Sprawy administracyjne' : 'Sprawy administracyjne',
      ],
      isFree: true
    },
    {
      id: 'oiubpracownika',
      name: language === 'uk' ? 'Osobista Inspekcja Pracy' : 'Osobista Inspekcja Pracy',
      type: language === 'uk' ? 'Prawo Pracy' : 'Prawo Pracy',
      description: language === 'uk'
        ? 'Porady dotyczące praw pracowników i pracodawców'
        : 'Porady dotyczące praw pracowników i pracodawców',
      targetAudience: language === 'uk' ? 'Pracownicy i Pracodawcy' : 'Pracownicy i Pracodawcy',
      contact: 'www.pip.gov.pl',
      website: 'https://www.pip.gov.pl',
      services: [
        language === 'uk' ? 'Konsultacje pracownicze' : 'Konsultacje pracownicze',
        language === 'uk' ? 'BHP i bezpieczeństwo' : 'BHP i bezpieczeństwo',
        language === 'uk' ? 'Ochrona wynagrodzeń' : 'Ochrona wynagrodzeń',
      ],
      isFree: true
    },
    {
      id: 'usc',
      name: language === 'uk' ? 'Urząd do Spraw Cudzoziemców' : 'Urząd do Spraw Cudzoziemców',
      type: language === 'uk' ? 'Prawo Migracyjne' : 'Prawo Migracyjne',
      description: language === 'uk'
        ? 'Oficjalna instytucja zajmująca się sprawami imigrantów'
        : 'Oficjalna instytucja zajmująca się sprawami imigrantów',
      targetAudience: language === 'uk' ? 'Obcokrajowcy' : 'Obcokrajowcy',
      contact: 'www.udsc.gov.pl',
      website: 'https://www.udsc.gov.pl',
      services: [
        language === 'uk' ? 'Wizy i pozwolenia' : 'Wizy i pozwolenia',
        language === 'uk' ? 'Procedury migracyjne' : 'Procedury migracyjne',
        language === 'uk' ? 'Cudzoziemcy w Polsce' : 'Cudzoziemcy w Polsce',
      ],
      isFree: true
    },
    {
      id: 'rzecznik',
      name: language === 'uk' ? 'Rzecznik Praw Obywatelskich' : 'Rzecznik Praw Obywatelskich',
      type: language === 'uk' ? 'Ochrona Praw' : 'Ochrona Praw',
      description: language === 'uk'
        ? 'Niezależna instytucja broniąca praw i wolności jednostek'
        : 'Niezależna instytucja broniąca praw i wolności jednostek',
      targetAudience: language === 'uk' ? 'Wszyscy' : 'Wszyscy',
      contact: 'www.rpo.gov.pl',
      website: 'https://www.rpo.gov.pl',
      services: [
        language === 'uk' ? 'Skargi na naruszenia' : 'Skargi na naruszenia',
        language === 'uk' ? 'Ochrona praw' : 'Ochrona praw',
        language === 'uk' ? 'Edukacja obywatelska' : 'Edukacja obywatelska',
      ],
      isFree: true
    },
  ]

  const types = ['all', 'Doradztwo Prawne', 'Prawo Biznesu', 'Prawo Migracyjne', 'Prawo Pracy', 'Ochrona Praw']
  
  const filteredServices = selectedType === 'all'
    ? services
    : services.filter(s => s.type === selectedType)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      <AdSenseDisplayAuto />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">
              {language === 'uk' ? 'Безпла́тні Правні Поради' : 'Porada Prawna'}
            </h1>
          </div>
          <p className="text-gray-700 leading-relaxed">
            {language === 'uk'
              ? 'Dostęp do bezpłatnych porad prawnych z wielu dziedzin prawa. Znajduj pomoc ekspertów, organizacji wspierających i instytucji publicznych.'
              : 'Dostęp do bezpłatnych porad prawnych z wielu dziedzin prawa. Znajduj pomoc ekspertów, organizacji wspierających i instytucji publicznych.'}
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <Filter className="w-5 h-5 text-blue-600" />
            {language === 'uk' ? 'Filtruj po dziedzinie prawa' : 'Filtruj po dziedzinie prawa'}
          </h3>
          <div className="flex flex-wrap gap-2">
            {types.map(type => (
              <Button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedType === type
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-600'
                }`}
              >
                {type === 'all' ? (language === 'uk' ? 'Все' : 'Wszystkie') : type}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-gray-600 font-medium">
          {language === 'uk'
            ? `Znalezione ${filteredServices.length} organizacji`
            : `Znalezione ${filteredServices.length} organizacji`}
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filteredServices.map(service => (
            <Card key={service.id} className="p-6 hover:shadow-lg transition-shadow border-t-4 border-t-blue-600">
              <div className="mb-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{service.name}</h3>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {service.type}
                    </span>
                  </div>
                  {service.isFree && (
                    <div className="flex items-center gap-1 px-3 py-1 bg-green-100 rounded-full">
                      <Heart className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-semibold text-green-700">
                        {language === 'uk' ? 'Darmowe' : 'Darmowe'}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <p className="text-gray-700 mb-4">{service.description}</p>

              {/* Audience */}
              <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm font-semibold text-gray-700 mb-1">
                  {language === 'uk' ? 'Dla: ' : 'Dla: '}
                </p>
                <p className="text-gray-700">{service.targetAudience}</p>
              </div>

              {/* Services */}
              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-700 mb-2">
                  {language === 'uk' ? 'Usługi: ' : 'Usługi: '}
                </p>
                <ul className="space-y-1">
                  {service.services.map((svc, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{svc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div className="space-y-2 mb-4 pt-4 border-t border-gray-200">
                {service.website && (
                  <a
                    href={service.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                  >
                    <Globe className="w-4 h-4" />
                    {service.contact}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {service.phone && (
                  <p className="flex items-center gap-2 text-gray-700">
                    <Phone className="w-4 h-4 text-blue-600" />
                    {service.phone}
                  </p>
                )}
                {service.email && (
                  <p className="flex items-center gap-2 text-gray-700">
                    <Mail className="w-4 h-4 text-blue-600" />
                    {service.email}
                  </p>
                )}
              </div>

              {/* Button */}
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                asChild
              >
                <a href={service.website} target="_blank" rel="noopener noreferrer">
                  {language === 'uk' ? 'Odwiedź Stronę' : 'Odwiedź Stronę'}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </Card>
          ))}
        </div>

        {/* Contact Form Section */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg p-8 text-white mb-12">
          <h2 className="text-2xl font-bold mb-4">
            {language === 'uk' ? 'Potrzebujesz pomocy?' : 'Potrzebujesz pomocy?'}
          </h2>
          <p className="mb-6 text-blue-100">
            {language === 'uk'
              ? 'Jeśli masz pytanie dotyczące prawa lub potrzebujesz konsultacji, skontaktuj się z jedną z organizacji na tej liście.'
              : 'Jeśli masz pytanie dotyczące prawa lub potrzebujesz konsultacji, skontaktuj się z jedną z organizacji na tej liście.'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button
              className="bg-white text-blue-600 hover:bg-blue-50"
              asChild
            >
              <Link href="/poradnik-paszport">
                {language === 'uk' ? 'Poradnik Paszport' : 'Poradnik Paszport'}
              </Link>
            </Button>
            <Button
              className="bg-white text-blue-600 hover:bg-blue-50"
              asChild
            >
              <Link href="/mapa-urzedow">
                {language === 'uk' ? 'Mapa Urzędów' : 'Mapa Urzędów'}
              </Link>
            </Button>
            <Button
              className="border-2 border-white text-white hover:bg-white/10"
              variant="outline"
            >
              {language === 'uk' ? 'Zaproponuj Organizację' : 'Zaproponuj Organizację'}
            </Button>
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-blue-600" />
            {language === 'uk' ? 'Ważne informacje' : 'Ważne informacje'}
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span>
                {language === 'uk'
                  ? 'Wszystkie wymienione organizacje oferują bezpłatne konsultacje'
                  : 'Wszystkie wymienione organizacje oferują bezpłatne konsultacje'}
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span>
                {language === 'uk'
                  ? 'Większość porad prawnych jest dostępna online'
                  : 'Większość porad prawnych jest dostępna online'}
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span>
                {language === 'uk'
                  ? 'Porady są bezpłatne dla wszystkich obywateli i cudzoziemców'
                  : 'Porady są bezpłatne dla wszystkich obywateli i cudzoziemców'}
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span>
                {language === 'uk'
                  ? 'Zawsze sprawdź godziny pracy i sposoby kontaktu na oficjalnych stronach'
                  : 'Zawsze sprawdź godziny pracy i sposoby kontaktu na oficjalnych stronach'}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
