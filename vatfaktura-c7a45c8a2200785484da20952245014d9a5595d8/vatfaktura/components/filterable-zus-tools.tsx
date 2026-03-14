'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { FileText, Calculator, Calendar, HelpCircle, Download } from 'lucide-react'

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
    id: 'z3a-zleceniobiorcy',
    title: 'Generator ZUS Z-3a (zleceniobiorcy)',
    description: 'Formularz dla osób pracujących na umowę zlecenie. Zgłoszenie czasowej niezdolności do pracy.',
    icon: FileText,
    color: 'from-purple-600 to-pink-600',
    link: '/generator-zus-z3a',
    keywords: ['Z-3a', 'zleceniobiorca', 'umowa'],
  },
  {
    id: 'z3b-przedsiebiorca',
    title: 'Generator ZUS Z-3b (przedsiębiorcy)',
    description: 'Formularz dla samozatrudnionych i przedsiębiorców. Zaświadczenie o niezdolności do pracy.',
    icon: FileText,
    color: 'from-orange-600 to-red-600',
    link: '/generator-zus-z3b',
    keywords: ['Z-3b', 'przedsiębiorca', 'samozatrudniony'],
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

const categories = [
  { id: 'all', label: 'Wszystkie narzędzia' },
  { id: 'formularze', label: 'Formularze' },
  { id: 'kalkulatory', label: 'Kalkulatory' },
]

const getCategoryType = (id: string) => {
  if (id.includes('generator') || id.includes('z3') || id.includes('z15') || id === 'z3a-zleceniobiorcy' || id === 'z3b-przedsiebiorca') return 'formularze'
  if (id.includes('kalkulator') || id.includes('zasilek')) return 'kalkulatory'
  return 'all'
}

export default function FilterableZUSTools() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredTools = selectedCategory === 'all' ? tools : tools.filter(t => getCategoryType(t.id) === selectedCategory)

  return (
    <>
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

              <div className="flex gap-2 mb-4">
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
    </>
  )
}
