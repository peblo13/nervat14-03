'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { MapPin, Phone, Clock, Globe, ArrowRight, Search, Building2, ExternalLink } from 'lucide-react'
import { useLanguage } from '@/hooks/use-language'
import { AdSenseDisplayAuto } from '@/components/adsense-banner'

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
}

export default function OfficeMaps() {
  const { language } = useLanguage()
  const [selectedType, setSelectedType] = useState<string>('all')
  const [searchCity, setSearchCity] = useState<string>('')

  const offices: Office[] = [
    // ZUS Offices
    {
      id: 'zus-warsaw',
      name: language === 'uk' ? 'ZUS - Варшава (головний офіс)' : 'ZUS - Warszawa (Oddział Centralny)',
      type: 'ZUS',
      city: 'Warszawa',
      address: 'ul. Emilii Plater 1a, 00-113 Warszawa',
      phone: '+48 22 560 16 00',
      hours: 'pon-pt 08:00-16:00',
      website: 'www.zus.pl',
      bookingUrl: 'https://www.zus.pl/umowsie-wizyte'
    },
    {
      id: 'zus-krakow',
      name: language === 'uk' ? 'ZUS - Краків' : 'ZUS - Kraków',
      type: 'ZUS',
      city: 'Kraków',
      address: 'ul. św. Tomasza 35, 31-027 Kraków',
      phone: '+48 12 422 02 50',
      hours: 'pon-pt 08:00-16:00',
      website: 'www.zus.pl',
      bookingUrl: 'https://www.zus.pl/umowsie-wizyte'
    },
    {
      id: 'zus-wroclaw',
      name: language === 'uk' ? 'ZUS - Вроцлав' : 'ZUS - Wrocław',
      type: 'ZUS',
      city: 'Wrocław',
      address: 'ul. Tadeusza Kościuszki 33, 50-013 Wrocław',
      phone: '+48 71 343 93 00',
      hours: 'pon-pt 08:00-16:00',
      website: 'www.zus.pl',
      bookingUrl: 'https://www.zus.pl/umowsie-wizyte'
    },
    {
      id: 'zus-gdansk',
      name: language === 'uk' ? 'ZUS - Гданськ' : 'ZUS - Gdańsk',
      type: 'ZUS',
      city: 'Gdańsk',
      address: 'ul. Grunwaldzka 82, 80-244 Gdańsk',
      phone: '+48 58 308 50 00',
      hours: 'pon-pt 08:00-16:00',
      website: 'www.zus.pl',
      bookingUrl: 'https://www.zus.pl/umowsie-wizyte'
    },
    // CEIDG Offices
    {
      id: 'ceidg-warsaw',
      name: language === 'uk' ? 'CEIDG - Варшава (головна канцелярія)' : 'CEIDG - Warszawa (Centralna Kancelaria)',
      type: 'CEIDG',
      city: 'Warszawa',
      address: 'ul. Kredytowa 9, 00-056 Warszawa',
      phone: '+48 22 450 00 00',
      hours: 'pon-pt 09:00-17:00',
      website: 'www.ceidg.gov.pl',
      bookingUrl: 'https://www.ceidg.gov.pl'
    },
    {
      id: 'ceidg-online',
      name: language === 'uk' ? 'CEIDG - Онлайн реєстрація' : 'CEIDG - Rejestracja Online',
      type: 'CEIDG',
      city: language === 'uk' ? 'Онлайн' : 'Online',
      address: language === 'uk' ? 'Платформа www.ceidg.gov.pl' : 'Platforma www.ceidg.gov.pl',
      phone: '+48 22 450 00 00',
      hours: language === 'uk' ? 'Доступно 24/7' : 'Dostępne 24/7',
      website: 'www.ceidg.gov.pl',
      bookingUrl: 'https://www.ceidg.gov.pl'
    },
    // GUS Offices
    {
      id: 'gus-warsaw',
      name: language === 'uk' ? 'GUS - Варшава' : 'GUS - Warszawa',
      type: 'GUS',
      city: 'Warszawa',
      address: 'al. Niepodległości 208, 00-925 Warszawa',
      phone: '+48 22 608 30 00',
      hours: 'pon-pt 08:00-15:00',
      website: 'www.gus.pl',
      bookingUrl: 'https://www.gus.pl'
    },
    // Urzędy Skarbowe
    {
      id: 'us-warsaw',
      name: language === 'uk' ? 'Уряд Скарбу - Варшава' : 'Urząd Skarbowy - Warszawa',
      type: language === 'uk' ? 'Скарбниця' : 'Urzędy Skarbowe',
      city: 'Warszawa',
      address: 'ul. Wspólna 2/4, 00-926 Warszawa',
      phone: '+48 22 606 31 00',
      hours: 'pon-pt 08:00-18:00',
      website: 'www.mf.gov.pl',
      bookingUrl: 'https://www.mf.gov.pl'
    },
    {
      id: 'us-krakow',
      name: language === 'uk' ? 'Уряд Скарбу - Краків' : 'Urząd Skarbowy - Kraków',
      type: language === 'uk' ? 'Скарбниця' : 'Urzędy Skarbowe',
      city: 'Kraków',
      address: 'ul. Floriańska 18, 31-019 Kraków',
      phone: '+48 12 619 40 00',
      hours: 'pon-pt 08:00-18:00',
      website: 'www.mf.gov.pl',
      bookingUrl: 'https://www.mf.gov.pl'
    },
    // PARCC
    {
      id: 'parcc-warsaw',
      name: language === 'uk' ? 'PARCC - Варшава (Реєстрація іноземців)' : 'PARCC - Warszawa (Centrum Rejestracji Cudzoziemców)',
      type: 'PARCC',
      city: 'Warszawa',
      address: 'ul. Koszykowa 80, 02-953 Warszawa',
      phone: '+48 22 501 01 01',
      hours: 'pon-pt 08:00-16:00',
      website: 'www.gov.pl/web/udsc',
      bookingUrl: 'https://www.gov.pl/web/udsc'
    },
  ]

  const types = ['all', 'ZUS', 'CEIDG', 'GUS', language === 'uk' ? 'Скарбниця' : 'Urzędy Skarbowe', 'PARCC']
  
  const filteredOffices = offices.filter(office => {
    const typeMatch = selectedType === 'all' || office.type === selectedType
    const cityMatch = office.city.toLowerCase().includes(searchCity.toLowerCase())
    return typeMatch && cityMatch
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50">
      <AdSenseDisplayAuto />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <MapPin className="w-6 h-6 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">
              {language === 'uk' ? 'Карта Уповноважених органів' : 'Mapa Urzędów'}
            </h1>
          </div>
          <p className="text-gray-700 leading-relaxed">
            {language === 'uk'
              ? 'Знайдіть адреси, години роботи та контактні дані всіх важливих органів: ZUS, CEIDG, GUS, урядів скарбу та центрів реєстрації іноземців.'
              : 'Znajdź adresy, godziny otwarcia i dane kontaktowe wszystkich ważnych urzędów: ZUS, CEIDG, GUS, urzędów skarbowych i centrów rejestracji cudzoziemców.'}
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          {/* Type Filter */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              {language === 'uk' ? 'Фільтр за типом органу' : 'Filtruj po typie urzędu'}
            </h3>
            <div className="flex flex-wrap gap-2">
              {types.map(type => (
                <Button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedType === type
                      ? 'bg-green-600 text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:border-green-600'
                  }`}
                >
                  {type === 'all' ? (language === 'uk' ? 'Усі' : 'Wszystkie') : type}
                </Button>
              ))}
            </div>
          </div>

          {/* Search Filter */}
          <div>
            <label className="text-lg font-semibold text-gray-900 mb-3 block">
              {language === 'uk' ? 'Пошук за містом' : 'Szukaj po mieście'}
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder={language === 'uk' ? 'Введіть назву міста...' : 'Wpisz nazwę miasta...'}
                value={searchCity}
                onChange={(e) => setSearchCity(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-gray-600">
          {language === 'uk'
            ? `Знайдено ${filteredOffices.length} органів`
            : `Znaleziono ${filteredOffices.length} urzędów`}
        </div>

        {/* Office Cards */}
        {filteredOffices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {filteredOffices.map(office => (
              <Card key={office.id} className="p-6 hover:shadow-lg transition-shadow border-t-4 border-t-green-600">
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{office.name}</h3>
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        {office.type}
                      </span>
                    </div>
                    <Building2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  {/* Address */}
                  <div className="flex gap-3">
                    <MapPin className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-gray-700">{language === 'uk' ? 'Адреса' : 'Adres'}</p>
                      <p className="text-gray-700">{office.address}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-3">
                    <Phone className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-gray-700">{language === 'uk' ? 'Телефон' : 'Telefon'}</p>
                      <p className="text-gray-700">{office.phone}</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex gap-3">
                    <Clock className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-gray-700">{language === 'uk' ? 'Час роботи' : 'Godziny pracy'}</p>
                      <p className="text-gray-700">{office.hours}</p>
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-2 pt-4 border-t border-gray-200">
                  {office.bookingUrl && (
                    <Button
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                      asChild
                    >
                      <a href={office.bookingUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        {language === 'uk' ? 'Умовитись' : 'Umów się'}
                      </a>
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    className="flex-1 border-green-600 text-green-600 hover:bg-green-50"
                    asChild
                  >
                    <a href={`https://www.google.com/maps/search/${office.address}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <Globe className="w-4 h-4" />
                      {language === 'uk' ? 'Маршрут' : 'Mapa'}
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="p-12 text-center mb-12">
            <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 text-lg">
              {language === 'uk'
                ? 'Уповноважені органи не знайдені. Спробуйте змінити фільтри.'
                : 'Nie znaleziono urzędów. Spróbuj zmienić filtry.'}
            </p>
          </Card>
        )}

        {/* Info Box */}
        <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-3">
            {language === 'uk' ? 'Полезна информация' : 'Przydatne informacje'}
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex gap-2">
              <span className="text-green-600 font-bold">•</span>
              <span>
                {language === 'uk'
                  ? 'Більшість органів пропонують можливість записатися онлайн на www.gov.pl'
                  : 'Większość urzędów umożliwia rezerwację terminu online na www.gov.pl'}
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-600 font-bold">•</span>
              <span>
                {language === 'uk'
                  ? 'PARCC (центри реєстрації іноземців) розташовані в основних містах'
                  : 'PARCC (Centra Rejestracji Cudzoziemców) znajdują się w głównych miastach'}
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-600 font-bold">•</span>
              <span>
                {language === 'uk'
                  ? 'ZUS та CEIDG мають відділення у більшості повітів'
                  : 'ZUS i CEIDG mają oddziały w większości powiatów'}
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-600 font-bold">•</span>
              <span>
                {language === 'uk'
                  ? 'Багато операцій можна виконати онлайн - звіряйтесь з офіційними сайтами'
                  : 'Wiele operacji można załatwić online - sprawdź oficjalne strony'}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
