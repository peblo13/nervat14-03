export interface Partner {
  name: string
  description: string
  icon: 'CreditCard' | 'Gem' | 'Banknote' | 'CircleDollarSign' | 'BarChart3' | 'Globe' | 'Mail' | 'MessageSquare' | 'Palette' | 'HardDrive' | 'KeyRound' | 'Zap'
  image: string
  color: string
  accentColor: string
  borderColor: string
  link: string
  category: 'payments' | 'workspace' | 'design' | 'hosting' | 'accounting' | 'security' | 'tools'
}

export const PARTNERS: Partner[] = [
  {
    name: 'Wise',
    description: 'Przelewy międzynarodowe tanio i szybko. Bez ukrytych prowizji.',
    icon: 'CreditCard',
    image: '/partners/wise.jpg',
    color: 'from-blue-600/20 to-cyan-600/20',
    accentColor: '#06b6d4',
    borderColor: 'border-blue-500/30 hover:border-blue-500/60',
    link: 'https://wise.com',
    category: 'payments',
  },
  {
    name: 'Revolut',
    description: 'Konto biznesowe nowej generacji. Wielowalutowe karty i przelewy.',
    icon: 'Gem',
    image: '/partners/revolut.jpg',
    color: 'from-indigo-600/20 to-blue-600/20',
    accentColor: '#6366f1',
    borderColor: 'border-indigo-500/30 hover:border-indigo-500/60',
    link: 'https://revolut.com/business',
    category: 'payments',
  },
  {
    name: 'Stripe',
    description: 'Platnosci online dla Twojej firmy. API klasy swiatowej.',
    icon: 'Banknote',
    image: '/partners/stripe.jpg',
    color: 'from-purple-600/20 to-pink-600/20',
    accentColor: '#8b5cf6',
    borderColor: 'border-purple-500/30 hover:border-purple-500/60',
    link: 'https://stripe.com',
    category: 'payments',
  },
  {
    name: 'PayPal',
    description: 'Bezpieczne platnosci i przelewy dla biznesu na calym swiecie.',
    icon: 'CircleDollarSign',
    image: '/partners/paypal.jpg',
    color: 'from-blue-700/20 to-sky-600/20',
    accentColor: '#0ea5e9',
    borderColor: 'border-blue-600/30 hover:border-blue-600/60',
    link: 'https://paypal.com/business',
    category: 'payments',
  },
  {
    name: 'Comarch',
    description: 'Zaawansowane rozwiazania ksiegowe i ERP dla polskich firm.',
    icon: 'BarChart3',
    image: '/partners/comarch.jpg',
    color: 'from-green-600/20 to-emerald-600/20',
    accentColor: '#10b981',
    borderColor: 'border-green-500/30 hover:border-green-500/60',
    link: 'https://comarch.com',
    category: 'accounting',
  },
  {
    name: 'Namecheap',
    description: 'Domeny i hosting w niskich cenach. Certyfikaty SSL gratis.',
    icon: 'Globe',
    image: '/partners/namecheap.jpg',
    color: 'from-orange-600/20 to-red-600/20',
    accentColor: '#f97316',
    borderColor: 'border-orange-500/30 hover:border-orange-500/60',
    link: 'https://namecheap.com',
    category: 'hosting',
  },
  {
    name: 'Google Workspace',
    description: 'Gmail, Dysk, Meet i narzedzia biurowe dla Twojego zespolu.',
    icon: 'Mail',
    image: '/partners/google-workspace.jpg',
    color: 'from-red-600/20 to-rose-600/20',
    accentColor: '#ef4444',
    borderColor: 'border-red-500/30 hover:border-red-500/60',
    link: 'https://workspace.google.com',
    category: 'workspace',
  },
  {
    name: 'Slack',
    description: 'Komunikacja calego zespolu w jednym miejscu. Kanaly i integracje.',
    icon: 'MessageSquare',
    image: '/partners/slack.jpg',
    color: 'from-pink-600/20 to-rose-600/20',
    accentColor: '#ec4899',
    borderColor: 'border-pink-500/30 hover:border-pink-500/60',
    link: 'https://slack.com',
    category: 'workspace',
  },
  {
    name: 'Canva',
    description: 'Tworz profesjonalne materialy graficzne bez znajomosci designu.',
    icon: 'Palette',
    image: '/partners/canva.jpg',
    color: 'from-indigo-600/20 to-purple-600/20',
    accentColor: '#a78bfa',
    borderColor: 'border-indigo-500/30 hover:border-indigo-500/60',
    link: 'https://canva.com',
    category: 'design',
  },
  {
    name: 'IDrive',
    description: 'Bezpieczny backup w chmurze. Chron dane swojej firmy.',
    icon: 'HardDrive',
    image: '/partners/idrive.jpg',
    color: 'from-cyan-600/20 to-teal-600/20',
    accentColor: '#14b8a6',
    borderColor: 'border-cyan-500/30 hover:border-cyan-500/60',
    link: 'https://idrive.com',
    category: 'security',
  },
  {
    name: 'LastPass',
    description: 'Manager hasel dla zespolu. Jedno haslo do wszystkiego.',
    icon: 'KeyRound',
    image: '/partners/lastpass.jpg',
    color: 'from-red-700/20 to-red-600/20',
    accentColor: '#dc2626',
    borderColor: 'border-red-600/30 hover:border-red-600/60',
    link: 'https://lastpass.com',
    category: 'security',
  },
  {
    name: 'Zapier',
    description: 'Automatyzuj powtarzalne zadania. Polacz swoje aplikacje bez kodu.',
    icon: 'Zap',
    image: '/partners/zapier.jpg',
    color: 'from-yellow-600/20 to-orange-600/20',
    accentColor: '#f59e0b',
    borderColor: 'border-yellow-500/30 hover:border-yellow-500/60',
    link: 'https://zapier.com',
    category: 'tools',
  },
]

export const getPartnersByCategory = (category: Partner['category']): Partner[] => {
  return PARTNERS.filter(partner => partner.category === category)
}

export const getPartnerLink = (partnerName: string): string | null => {
  const partner = PARTNERS.find(p => p.name === partnerName)
  return partner?.link || null
}

export const FEATURED_PARTNERS = PARTNERS.slice(0, 6) // Top 6 dla strony głównej
export const ALL_PARTNERS = PARTNERS // Wszystkie dla dedicated strony
