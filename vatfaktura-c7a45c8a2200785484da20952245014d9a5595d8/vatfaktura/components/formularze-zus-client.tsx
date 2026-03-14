'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { FileText, Calculator, Calendar, HelpCircle, Download, AlertCircle } from 'lucide-react'
import { AdSenseDisplay728x90, AdSenseDisplayAuto } from '@/components/adsense-banner'

const tools = [
  {
    id: 'z3-chorobowe',
    title: 'Generator ZUS Z-3 (chorobowe)',
    description: 'Formularz zaświadczenia o czasowej niezdolności do pracy dla pracowników. Wypełnij online, pobierz PDF do wysyłki przez PUE ZUS.',
    icon: FileText,
    color: 'from-blue-600 to-cyan-600',
    link: '/generator-zus-z3',
    keywords: ['Z-3', 'chorobowe', 'zaświadczenie'],
  },
  {
    id: 'zasilek-chorobowy',
    title: 'Kalkulator zasiłku chorobowego',
    description: 'Oblicz wysokość zasiłku chorobowego (80% lub 100% podstawy obliczeniowej). Dowiedz się, ile otrzymasz od ZUS.',
    icon: Calculator,
    color: 'from-green-600 to-emerald-600',
    link: '/kalkulator-zasilek-chorobowy',
    keywords: ['zasiłek', 'chorobowy', 'obliczenie'],
  },
  {
    id: 'zasilek-macierzynski',
    title: 'Kalkulator zasiłku macierzyńskiego',
    description: 'Oblicz wysokość zasiłku macierzyńskiego i porodu. Wylicz dokładną kwotę zasiłku z ZUS.',
    icon: Calculator,
    color: 'from-pink-600 to-rose-600',
    link: '/kalkulator-zasilek-macierzynski',
    keywords: ['zasiłek', 'macierzyński', 'poród'],
  },
  {
    id: 'z15-opieka',
    title: 'Generator ZUS Z-15A/Z-15B (zasiłek opiekuńczy)',
    description: 'Wniosek o zasiłek opiekuńczy - opieka nad dzieckiem, członkiem rodziny lub osobą bliską.',
    icon: FileText,
    color: 'from-teal-600 to-cyan-600',
    link: '/generator-zus-z15',
    keywords: ['Z-15', 'zasiłek', 'opieka'],
  },
  {
    id: 'kalendarz-terminy',
    title: 'Kalendarz terminów ZUS',
    description: '7-dniowy termin na przesłanie dokumentów, daty wpłat, przypomnienia o ważnych datach.',
    icon: Calendar,
    color: 'from-indigo-600 to-blue-600',
    link: '/kalendarz-zus',
    keywords: ['terminy', 'daty', 'przypomnienia'],
  },
  {
    id: 'poradnik-pue',
    title: 'Poradnik wysyłki przez PUE ZUS',
    description: 'Krok po kroku jak wysłać formularz chorobowy przez Portal Usług Elektronicznych ZUS.',
    icon: HelpCircle,
    color: 'from-yellow-600 to-orange-600',
    link: '/poradnik-pue-zus',
    keywords: ['PUE', 'portal', 'wysyłka'],
  },
]

export function FormularzeZUSClient() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'Wszystkie' },
    { id: 'formularze', label: 'Formularze' },
    { id: 'kalkulatory', label: 'Kalkulatory' },
  ]

  const getCategoryType = (toolId: string) => {
    if (['z3-chorobowe', 'z15-opieka'].includes(toolId)) return 'formularze'
    return 'kalkulatory'
  }

  const filteredTools = selectedCategory === 'all' 
    ? tools 
    : tools.filter(tool => getCategoryType(tool.id) === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-blue-900 pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-300 bg-clip-text text-transparent mb-4">
            Formularze i narzędzia ZUS
          </h1>
          <p className="text-blue-200/70 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
            Kompletny zestaw generatorów formularzy ZUS i kalkulatorów do zarządzania zasiłkami. Wszystkie narzędzia przygotują Ci dokumenty do wysyłki przez PUE ZUS.
          </p>
        </div>

        {/* Important Info */}
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 sm:p-6 mb-12 flex gap-4">
          <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-yellow-300 font-semibold mb-2">Ważne informacje</h3>
            <p className="text-yellow-200/80 text-sm">
              Formularze wygenerowane na tej stronie to dokumenty pomocnicze. Zawsze weryfikuj dane z oficjalnymi formularza ZUS. Dokumenty wysyłaj wyłącznie przez Portal Usług Elektronicznych ZUS (PUE).
            </p>
          </div>
        </div>

        {/* AdSense Banner */}
        <div className="mb-12">
          <AdSenseDisplay728x90 />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-12 justify-center">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/50'
                  : 'bg-slate-800/50 border border-blue-500/20 text-blue-300 hover:border-blue-500/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredTools.map((tool) => {
            const Icon = tool.icon
            const gradientClass = tool.color
            return (
              <Card key={tool.id} className="bg-slate-800/50 border border-blue-500/20 hover:border-blue-500/50 p-6 sm:p-8 group transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 sm:p-4 bg-gradient-to-br ${gradientClass} rounded-xl shadow-lg`}>
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs sm:text-sm font-semibold rounded-full whitespace-nowrap">
                    {getCategoryType(tool.id) === 'formularze' ? 'Formularz' : 'Kalkulator'}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {tool.title}
                </h3>

                <p className="text-blue-200/70 text-sm sm:text-base mb-6 leading-relaxed">
                  {tool.description}
                </p>

                <div className="flex gap-2 mb-4 flex-wrap">
                  {tool.keywords.map(kw => (
                    <span key={kw} className="text-xs px-2 py-1 bg-slate-700/50 text-blue-300 rounded">
                      {kw}
                    </span>
                  ))}
                </div>

                <Link href={tool.link}>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold py-2 sm:py-3">
                    <Download className="w-4 h-4 mr-2" />
                    Otwórz narzędzie
                  </Button>
                </Link>
              </Card>
            )
          })}
        </div>

        {/* AdSense Banner */}
        <div className="mb-16">
          <AdSenseDisplayAuto />
        </div>
      </div>
    </div>
  )
}
