'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, AlertCircle, CheckCircle, Clock, Filter, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/hooks/use-language'
import { AdSenseDisplayAuto } from '@/components/adsense-banner'

interface Deadline {
  id: string
  date: string
  day: number
  month: number
  title: string
  description: string
  category: string
  importance: 'critical' | 'important' | 'normal'
  details: string[]
}

export default function DeadlinesCalendar() {
  const { language } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const deadlines: Deadline[] = [
    // January
    {
      id: 'jan1',
      date: '15 stycznia / 15 січня',
      day: 15,
      month: 1,
      title: language === 'uk' ? 'Termin ZUS za grudzień' : 'Termin ZUS za grudzień',
      category: 'ZUS',
      importance: 'critical',
      description: language === 'uk' ? 'Ostateczny termin wpłaty składek ZUS za grudzień poprzedniego roku' : 'Ostateczny termin wpłaty składek ZUS za grudzień poprzedniego roku',
      details: [
        language === 'uk' ? 'Płatność przez rachunek bankowy' : 'Płatność przez rachunek bankowy',
        language === 'uk' ? 'Zapomnij o karach za opóźnienia' : 'Zapomnij o karach za opóźnienia',
        language === 'uk' ? 'Wymagane dla wszystkich przedsiębiorców' : 'Wymagane dla wszystkich przedsiębiorców'
      ]
    },
    {
      id: 'jan20',
      date: '20 stycznia / 20 січня',
      day: 20,
      month: 1,
      title: language === 'uk' ? 'Zał. 2 do PIT' : 'Zał. 2 do PIT',
      category: 'PIT',
      importance: 'important',
      description: language === 'uk' ? 'Złożyć załączniki do PIT dla rachunków zagraicznych' : 'Złożyć załączniki do PIT dla rachunków zagraicznych',
      details: [
        language === 'uk' ? 'Dotyczy dochodów z zagranicy' : 'Dotyczy dochodów z zagranicy',
        language === 'uk' ? 'Kaucja do 31 marca' : 'Kaucja do 31 marca',
      ]
    },
    {
      id: 'jan31',
      date: '31 stycznia / 31 січня',
      day: 31,
      month: 1,
      title: language === 'uk' ? 'Rozliczenie za 2023 rok' : 'Rozliczenie za 2023 rok',
      category: 'PIT',
      importance: 'critical',
      description: language === 'uk' ? 'Ostateczny termin złożenia PIT za poprzedni rok' : 'Ostateczny termin złożenia PIT za poprzedni rok',
      details: [
        language === 'uk' ? 'Dotyczy pracowników i przedsiębiorców' : 'Dotyczy pracowników i przedsiębiorców',
        language === 'uk' ? 'Możliwość zwrotu podatku' : 'Możliwość zwrotu podatku',
      ]
    },

    // February
    {
      id: 'feb15',
      date: '15 lutego / 15 лютого',
      day: 15,
      month: 2,
      title: language === 'uk' ? 'Termin ZUS za styczeń' : 'Termin ZUS za styczeń',
      category: 'ZUS',
      importance: 'critical',
      description: language === 'uk' ? 'Wpłata składek ubezpieczeniowych ZUS' : 'Wpłata składek ubezpieczeniowych ZUS',
      details: [
        language === 'uk' ? 'Opłacalne przez bank lub online' : 'Opłacalne przez bank lub online',
        language === 'uk' ? 'Wymagane dla samozatrudnionych' : 'Wymagane dla samozatrudnionych',
      ]
    },

    // March
    {
      id: 'mar15',
      date: '15 marca / 15 березня',
      day: 15,
      month: 3,
      title: language === 'uk' ? 'Termin VAT za styczeń' : 'Termin VAT za styczeń',
      category: 'VAT',
      importance: 'critical',
      description: language === 'uk' ? 'Złożenie deklaracji VAT za pierwszy miesiąc' : 'Złożenie deklaracji VAT za pierwszy miesiąc',
      details: [
        language === 'uk' ? 'Dla podatników VAT' : 'Dla podatników VAT',
        language === 'uk' ? 'Online przez eDeklaracje' : 'Online przez eDeklaracje',
      ]
    },

    // April
    {
      id: 'apr15',
      date: '15 kwietnia / 15 квітня',
      day: 15,
      month: 4,
      title: language === 'uk' ? 'Termin ZUS za marzec' : 'Termin ZUS za marzec',
      category: 'ZUS',
      importance: 'critical',
      description: language === 'uk' ? 'Wpłata składek ZUS' : 'Wpłata składek ZUS',
      details: []
    },
    {
      id: 'apr30',
      date: '30 kwietnia / 30 квітня',
      day: 30,
      month: 4,
      title: language === 'uk' ? 'PIT-ów na 2023 rok' : 'PIT na 2023 rok',
      category: 'PIT',
      importance: 'critical',
      description: language === 'uk' ? 'Ostateczny termin złożenia PIT za rok ubiegły' : 'Ostateczny termin złożenia PIT za rok ubiegły',
      details: [
        language === 'uk' ? 'Najważniejszy termin w roku' : 'Najważniejszy termin w roku',
        language === 'uk' ? 'Dotyczy wszystkich pracowników' : 'Dotyczy wszystkich pracowników',
        language === 'uk' ? 'Opóźnienie grozi karą' : 'Opóźnienie grozi karą',
      ]
    },

    // June
    {
      id: 'jun15',
      date: '15 czerwca / 15 червня',
      day: 15,
      month: 6,
      title: language === 'uk' ? 'Termin ZUS za maj' : 'Termin ZUS za maj',
      category: 'ZUS',
      importance: 'critical',
      description: language === 'uk' ? 'Wpłata składek ubezpieczeniowych' : 'Wpłata składek ubezpieczeniowych',
      details: []
    },

    // July
    {
      id: 'jul15',
      date: '15 lipca / 15 липня',
      day: 15,
      month: 7,
      title: language === 'uk' ? 'Termin ZUS za czerwiec' : 'Termin ZUS za czerwiec',
      category: 'ZUS',
      importance: 'critical',
      description: language === 'uk' ? 'Wpłata składek ubezpieczeniowych ZUS' : 'Wpłata składek ubezpieczeniowych ZUS',
      details: []
    },
    {
      id: 'jul20',
      date: '20 lipca / 20 липня',
      day: 20,
      month: 7,
      title: language === 'uk' ? 'JPK_VAT za pierwszy kwartał' : 'JPK_VAT za pierwszy kwartał',
      category: 'VAT',
      importance: 'important',
      description: language === 'uk' ? 'Złożenie informacji o VAT za Q1' : 'Złożenie informacji o VAT za Q1',
      details: [
        language === 'uk' ? 'Dla wybranego podatku VAT' : 'Dla wybranego podatku VAT',
      ]
    },

    // September
    {
      id: 'sep15',
      date: '15 września / 15 вересня',
      day: 15,
      month: 9,
      title: language === 'uk' ? 'Termin ZUS za sierpień' : 'Termin ZUS za sierpień',
      category: 'ZUS',
      importance: 'critical',
      description: language === 'uk' ? 'Wpłata składek ZUS' : 'Wpłata składek ZUS',
      details: []
    },

    // October
    {
      id: 'oct15',
      date: '15 października / 15 жовтня',
      day: 15,
      month: 10,
      title: language === 'uk' ? 'Termin ZUS za wrzesień' : 'Termin ZUS za wrzesień',
      category: 'ZUS',
      importance: 'critical',
      description: language === 'uk' ? 'Wpłata składek ubezpieczeniowych' : 'Wpłata składek ubezpieczeniowych',
      details: []
    },

    // November
    {
      id: 'nov15',
      date: '15 listopada / 15 листопада',
      day: 15,
      month: 11,
      title: language === 'uk' ? 'Termin ZUS za październik' : 'Termin ZUS za październik',
      category: 'ZUS',
      importance: 'critical',
      description: language === 'uk' ? 'Wpłata składek ZUS' : 'Wpłata składek ZUS',
      details: []
    },

    // December
    {
      id: 'dec15',
      date: '15 grudnia / 15 грудня',
      day: 15,
      month: 12,
      title: language === 'uk' ? 'Termin ZUS za listopad' : 'Termin ZUS za listopad',
      category: 'ZUS',
      importance: 'critical',
      description: language === 'uk' ? 'Wpłata składek ubezpieczeniowych ZUS' : 'Wpłata składek ubezpieczeniowych ZUS',
      details: []
    },
    {
      id: 'dec31',
      date: '31 grudnia / 31 грудня',
      day: 31,
      month: 12,
      title: language === 'uk' ? 'Zamknięcie księgi rachunkowej' : 'Zamknięcie księgi rachunkowej',
      category: 'Księgowość',
      importance: 'critical',
      description: language === 'uk' ? 'Ostateczny termin zamknięcia ksiąg za rok' : 'Ostateczny termin zamknięcia ksiąg za rok',
      details: [
        language === 'uk' ? 'Dla firm z rocznym obrachunkiem' : 'Dla firm z rocznym obrachunkiem',
      ]
    },
  ]

  const categories = ['all', 'ZUS', 'PIT', 'VAT', 'Księgowość']
  
  const filteredDeadlines = selectedCategory === 'all'
    ? deadlines
    : deadlines.filter(d => d.category === selectedCategory)

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'critical':
        return 'bg-red-100 border-red-300 text-red-800'
      case 'important':
        return 'bg-orange-100 border-orange-300 text-orange-800'
      default:
        return 'bg-blue-100 border-blue-300 text-blue-800'
    }
  }

  const getImportanceIcon = (importance: string) => {
    switch (importance) {
      case 'critical':
        return <AlertCircle className="w-5 h-5 text-red-600" />
      case 'important':
        return <Clock className="w-5 h-5 text-orange-600" />
      default:
        return <CheckCircle className="w-5 h-5 text-blue-600" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <AdSenseDisplayAuto />
      
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Calendar className="w-6 h-6 text-purple-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">
              {language === 'uk' ? 'Календар Terminów' : 'Kalendarz Terminów'}
            </h1>
          </div>
          <p className="text-gray-700 leading-relaxed">
            {language === 'uk'
              ? 'Pełny harmonogram wszystkich ważnych terminów podatkowo-ubezpieczeniowych na rok. Nie przegap żadnego ważnego deadlinea!'
              : 'Pełny harmonogram wszystkich ważnych terminów podatkowo-ubezpieczeniowych na rok. Nie przegap żadnego ważnego deadlinea!'}
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <Filter className="w-5 h-5 text-purple-600" />
            {language === 'uk' ? 'Filtruj po kategorii' : 'Filtruj po kategorii'}
          </h3>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <Button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === cat
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-purple-600'
                }`}
              >
                {cat === 'all' ? (language === 'uk' ? 'Все' : 'Wszystkie') : cat}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-gray-600 font-medium">
          {language === 'uk'
            ? `Znalezione ${filteredDeadlines.length} terminów`
            : `Znalezione ${filteredDeadlines.length} terminów`}
        </div>

        {/* Timeline */}
        <div className="space-y-4">
          {filteredDeadlines.map((deadline, idx) => (
            <Card key={deadline.id} className={`p-6 border-l-4 hover:shadow-lg transition-shadow ${
              deadline.importance === 'critical'
                ? 'border-l-red-600 bg-red-50'
                : deadline.importance === 'important'
                ? 'border-l-orange-600 bg-orange-50'
                : 'border-l-blue-600 bg-blue-50'
            }`}>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-lg flex items-center justify-center font-bold text-xl ${
                    deadline.importance === 'critical'
                      ? 'bg-red-100 text-red-700'
                      : deadline.importance === 'important'
                      ? 'bg-orange-100 text-orange-700'
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {deadline.day}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{deadline.title}</h3>
                      <p className="text-sm text-gray-600">{deadline.date}</p>
                    </div>
                    {getImportanceIcon(deadline.importance)}
                  </div>
                  <p className="text-gray-700 mb-3">{deadline.description}</p>
                  <div className="flex gap-2 items-center flex-wrap">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${
                      deadline.importance === 'critical'
                        ? 'bg-red-100 border-red-300 text-red-800'
                        : deadline.importance === 'important'
                        ? 'bg-orange-100 border-orange-300 text-orange-800'
                        : 'bg-blue-100 border-blue-300 text-blue-800'
                    }`}>
                      {deadline.importance === 'critical'
                        ? (language === 'uk' ? 'Критичне' : 'Krytyczne')
                        : deadline.importance === 'important'
                        ? (language === 'uk' ? 'Важливе' : 'Ważne')
                        : (language === 'uk' ? 'Стандартне' : 'Standardowe')}
                    </span>
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-200 text-gray-800">
                      {deadline.category}
                    </span>
                  </div>
                  {deadline.details.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-gray-300">
                      <ul className="space-y-1 text-sm">
                        {deadline.details.map((detail, idx) => (
                          <li key={idx} className="text-gray-700 flex gap-2">
                            <span>•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Info Box */}
        <div className="mt-12 bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-purple-300 rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-purple-600" />
            {language === 'uk' ? 'Важна інформація' : 'Ważne informacje'}
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex gap-2">
              <span className="text-purple-600 font-bold">•</span>
              <span>
                {language === 'uk'
                  ? 'Wszystkie terminy są wymagane - opóźnienie grozi karami podatkowymi'
                  : 'Wszystkie terminy są wymagane - opóźnienie grozi karami podatkowymi'}
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-purple-600 font-bold">•</span>
              <span>
                {language === 'uk'
                  ? 'Terminy krytyczne (czerwone) są najważniejsze dla każdego przedsiębiorcy'
                  : 'Terminy krytyczne (czerwone) są najważniejsze dla każdego przedsiębiorcy'}
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-purple-600 font-bold">•</span>
              <span>
                {language === 'uk'
                  ? 'Większość opłat można wykonać online przez platformę e-podatki'
                  : 'Większość opłat można wykonać online przez platformę e-podatki'}
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-purple-600 font-bold">•</span>
              <span>
                {language === 'uk'
                  ? 'Weź udział w VAT Faktura - będziemy cię przypominać o każdym terminie'
                  : 'Weź udział w VAT Faktura - będziemy cię przypominać o każdym terminie'}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
