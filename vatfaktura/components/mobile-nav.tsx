'use client'

import { useState } from 'react'
import { Menu, X, FileText, Receipt, HelpCircle, BookOpen, Users, Tag, LogIn, UserPlus, ClipboardList, Building2, Briefcase, Globe } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/hooks/use-language'
import { t } from '@/lib/i18n/translations'

type NavGroup = {
  labelKey: string
  items: { href: string; labelKey: string; icon: React.ReactNode; accent?: string }[]
}

export function MobileNav() {
  const { language } = useLanguage()
  const [open, setOpen] = useState(false)

  const navGroups: NavGroup[] = [
    {
      labelKey: 'nav.mainMenu',
      items: [
        { href: '/zaloz-firme-online', labelKey: 'menu.company', icon: <Building2 className="w-4 h-4" />, accent: 'green' },
        { href: '/poradnik-obcokrajowcy', labelKey: 'nav.foreigners', icon: <Globe className="w-4 h-4" />, accent: 'blue' },
        { href: '/dashboard', labelKey: 'menu.invoice', icon: <FileText className="w-4 h-4" /> },
        { href: '/dashboard/pit', labelKey: 'menu.pit', icon: <Receipt className="w-4 h-4" />, accent: 'emerald' },
        { href: '/dashboard/zus', labelKey: 'menu.zus', icon: <Briefcase className="w-4 h-4" />, accent: 'orange' },
        { href: '/formularze-zus', labelKey: 'nav.zusForm', icon: <ClipboardList className="w-4 h-4" />, accent: 'orange' },
        { href: '/faq', labelKey: 'nav.faq', icon: <HelpCircle className="w-4 h-4" /> },
        { href: '/blog', labelKey: 'nav.blog', icon: <BookOpen className="w-4 h-4" /> },
      ],
    },
    {
      labelKey: 'nav.more',
      items: [
        { href: '/pricing', labelKey: 'nav.pricing', icon: <Tag className="w-4 h-4" /> },
        { href: '/#partners', labelKey: 'nav.partners', icon: <Users className="w-4 h-4" /> },
      ],
    },
    {
      labelKey: 'nav.account',
      items: [
        { href: '/login', labelKey: 'nav.login', icon: <LogIn className="w-4 h-4" /> },
        { href: '/register', labelKey: 'nav.register', icon: <UserPlus className="w-4 h-4" />, accent: 'green' },
      ],
    },
  ]

  return (
    <div className="sm:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-blue-300 hover:text-white hover:bg-white/10 transition-all duration-200"
        aria-label={open ? t('nav.closeMenu', language) : t('nav.openMenu', language)}
      >
        {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {open && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
          />

          {/* Dropdown */}
          <div className="absolute right-3 top-full mt-2 w-56 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            {/* Arrow */}
            <div className="absolute -top-1.5 right-4 w-3 h-3 bg-slate-900 border-t border-l border-white/10 transform rotate-45 z-10" />

            <div className="bg-slate-900/98 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden">
              {navGroups.map((group, gi) => (
                <div key={gi}>
                  {gi > 0 && <div className="h-px bg-white/8 mx-3" />}
                  <div className="px-3 pt-2.5 pb-1">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-white/30">{t(group.labelKey, language)}</span>
                  </div>
                  <div className="px-2 pb-2 space-y-0.5">
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-150 group ${
                          item.accent === 'emerald'
                            ? 'text-emerald-300 hover:text-emerald-100 hover:bg-emerald-500/15'
                            : item.accent === 'orange'
                            ? 'text-orange-300 hover:text-orange-100 hover:bg-orange-500/15'
                            : item.accent === 'green'
                            ? 'text-green-300 hover:text-green-100 hover:bg-green-500/15'
                            : 'text-blue-200/80 hover:text-white hover:bg-white/8'
                        }`}
                      >
                        <span className={`flex-shrink-0 transition-transform duration-150 group-hover:scale-110 ${
                          item.accent === 'emerald' ? 'text-emerald-400' : item.accent === 'orange' ? 'text-orange-400' : item.accent === 'green' ? 'text-green-400' : 'text-blue-400/70'
                        }`}>
                          {item.icon}
                        </span>
                        <span className="text-sm font-medium">{t(item.labelKey, language)}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
