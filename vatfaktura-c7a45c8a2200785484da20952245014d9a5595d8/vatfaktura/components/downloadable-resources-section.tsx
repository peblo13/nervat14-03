'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Download, FileText, BookOpen, Mail, CheckCircle, File } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { DOWNLOADABLE_RESOURCES } from '@/lib/downloadable-resources'
import { useLanguage } from '@/hooks/use-language'

type Category = 'forms' | 'guides' | 'letters' | 'checklists' | 'templates'

export function DownloadableResourcesSection() {
  const { language } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)

  const categoryLabels = {
    forms: { pl: 'Formularze', uk: 'Форми' },
    guides: { pl: 'Poradniki', uk: 'Поради' },
    letters: { pl: 'Pisma Szablony', uk: 'Листи Шаблони' },
    checklists: { pl: 'Checklists', uk: 'Чек-листи' },
    templates: { pl: 'Szablony', uk: 'Шаблони' },
  }

  const categoryIcons = {
    forms: <FileText className="w-5 h-5" />,
    guides: <BookOpen className="w-5 h-5" />,
    letters: <Mail className="w-5 h-5" />,
    checklists: <CheckCircle className="w-5 h-5" />,
    templates: <File className="w-5 h-5" />,
  }

  const filteredResources = selectedCategory
    ? DOWNLOADABLE_RESOURCES.filter(r => r.category === selectedCategory && (r.language === language || r.language === 'both'))
    : DOWNLOADABLE_RESOURCES.filter(r => r.language === language || r.language === 'both')

  const categories: Category[] = ['forms', 'guides', 'letters', 'checklists', 'templates']

  const heading = language === 'uk' ? 'Безкоштовні матеріали для завантаження' : 'Darmowe Materiały do Pobrania'
  const description = language === 'uk'
    ? 'Wszystkie dokumenty, formularze i szablony które Ci potrzebne do założenia firmy w Polsce'
    : 'Усе документи, форми та шаблони, які Вам потрібні для відкриття бізнесу в Польщі'

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-1.5 h-6 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full"></div>
          <span className="text-xs sm:text-sm font-bold tracking-widest text-blue-300 uppercase">
            {language === 'uk' ? 'Ресурси' : 'Zasoby'}
          </span>
          <div className="w-1.5 h-6 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full"></div>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          {heading}
        </h2>
        <p className="text-base sm:text-lg text-blue-200/80 max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
            selectedCategory === null
              ? 'bg-blue-600 text-white'
              : 'bg-blue-500/10 border border-blue-500/30 text-blue-300 hover:bg-blue-500/20'
          }`}
        >
          {language === 'uk' ? 'Усі' : 'Wszystkie'}
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-blue-500/10 border border-blue-500/30 text-blue-300 hover:bg-blue-500/20'
            }`}
          >
            {categoryIcons[category]}
            {categoryLabels[category][language]}
          </button>
        ))}
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((resource) => (
          <Card
            key={resource.id}
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/30 border border-blue-500/20 p-6 hover:border-blue-500/50 transition-all group"
          >
            <div className="space-y-4">
              {/* Icon and Category */}
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center text-2xl group-hover:bg-blue-500/30 transition-colors">
                  {resource.icon}
                </div>
                <span className="text-xs font-semibold text-blue-300 bg-blue-500/10 px-3 py-1 rounded-full">
                  {categoryLabels[resource.category][language]}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                {language === 'uk' ? resource.titleUk : resource.titlePl}
              </h3>

              {/* Description */}
              <p className="text-sm text-blue-200/70">
                {language === 'uk' ? resource.descriptionUk : resource.descriptionPl}
              </p>

              {/* File Info */}
              <div className="flex items-center justify-between text-xs text-blue-200/60 pt-4 border-t border-blue-500/10">
                <span>PDF • {resource.size}</span>
                <span>{language === 'uk' ? 'Безплатно' : 'Za darmo'}</span>
              </div>

              {/* Download Button */}
              <a href={`/documents/${language === 'uk' ? 'ua' : 'pl'}/${resource.fileName}`} download>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold flex items-center justify-center gap-2 mt-4">
                  <Download className="w-4 h-4" />
                  {language === 'uk' ? 'Завантажити' : 'Pobierz'}
                </Button>
              </a>
            </div>
          </Card>
        ))}
      </div>

      {/* Info Box */}
      <div className="mt-12 p-6 rounded-xl bg-blue-500/8 border border-blue-500/30">
        <p className="text-sm text-blue-200/80 text-center">
          {language === 'uk'
            ? 'Усі документи створені відповідно до польського законодавства. Завантажуйте безплатно і без реєстрації.'
            : 'Wszystkie dokumenty stworzone zgodnie z polskim prawem. Pobieraj bezpłatnie i bez rejestracji.'}
        </p>
      </div>
    </section>
  )
}
