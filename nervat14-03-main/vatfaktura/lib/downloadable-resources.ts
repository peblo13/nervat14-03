export interface DownloadableResource {
  id: string
  titlePl: string
  titleUk: string
  descriptionPl: string
  descriptionUk: string
  fileName: string
  category: 'forms' | 'guides' | 'letters' | 'checklists' | 'templates'
  language: 'pl' | 'uk' | 'both'
  icon: string
  size: string
}

export const DOWNLOADABLE_RESOURCES: DownloadableResource[] = [
  {
    id: 'company-checklist-uk',
    titlePl: 'Checklist Założenia Firmy',
    titleUk: 'Чеклист Відкриття Бізнесу',
    descriptionPl: 'Kompletna lista wszystkich kroków do założenia firmy w Polsce',
    descriptionUk: 'Повний список всіх кроків для відкриття бізнесу в Польщі',
    fileName: 'checklist-business-ua.txt',
    category: 'checklists',
    language: 'uk',
    icon: '✓',
    size: '1.2 MB',
  },
  {
    id: 'zus-guide-uk',
    titlePl: 'Poradnik ZUS dla Obcokrajowców',
    titleUk: 'Поради ZUS для Іноземців',
    descriptionPl: 'Wyjaśnienie systemu ZUS i obowiązków dla obcokrajowców',
    descriptionUk: 'Пояснення системи ZUS та обов\'язків для іноземців',
    fileName: 'zus-guide-ua.txt',
    category: 'guides',
    language: 'uk',
    icon: '📋',
    size: '2.1 MB',
  },
  {
    id: 'ceidg-form-uk',
    titlePl: 'Formularz CEIDG JED',
    titleUk: 'Форма CEIDG JED',
    descriptionPl: 'Instrukcja wypełniania formularza rejestracyjnego CEIDG',
    descriptionUk: 'Інструкція як заповнити реєстраційну форму CEIDG',
    fileName: 'ceidg-form-ua.txt',
    category: 'forms',
    language: 'uk',
    icon: '📝',
    size: '1.8 MB',
  },
  {
    id: 'letter-template-gus-uk',
    titlePl: 'Pismo do GUS - Szablon',
    titleUk: 'Лист до GUS - Шаблон',
    descriptionPl: 'Szablon pisma rejestracyjnego do Głównego Urzędu Statystycznego',
    descriptionUk: 'Шаблон реєстраційного листа до Центрального Статистичного Управління',
    fileName: 'letter-gus-ua.pdf',
    category: 'letters',
    language: 'uk',
    icon: '✉️',
    size: '0.9 MB',
  },
  {
    id: 'tax-forms-uk',
    titlePl: 'Szablony Oświadczeń Podatkowych',
    titleUk: 'Шаблони Податкових Декларацій',
    descriptionPl: 'Szablony PIT-37, PIT-36 z instrukcjami dla Ukraińców',
    descriptionUk: 'Шаблони PIT-37, PIT-36 з інструкціями для українців',
    fileName: 'tax-forms-ua.pdf',
    category: 'forms',
    language: 'uk',
    icon: '💰',
    size: '2.5 MB',
  },
  {
    id: 'invoice-template-uk',
    titlePl: 'Szablon Faktury VAT',
    titleUk: 'Шаблон Рахунку VAT',
    descriptionPl: 'Gotowy szablon faktury do pobrania i uzupełnienia',
    descriptionUk: 'Готовий шаблон рахунку для завантаження та заповнення',
    fileName: 'invoice-template-ua.pdf',
    category: 'templates',
    language: 'uk',
    icon: '🧾',
    size: '1.1 MB',
  },
  {
    id: 'social-insurance-uk',
    titlePl: 'Ubezpieczenia Społeczne - Poradnik',
    titleUk: 'Соціальне Страхування - Поради',
    descriptionPl: 'Wszystko o ubezpieczeniach społecznych dla przedsiębiorców',
    descriptionUk: 'Все про соціальне страхування для підприємців',
    fileName: 'social-insurance-ua.pdf',
    category: 'guides',
    language: 'uk',
    icon: '🛡️',
    size: '1.7 MB',
  },
  {
    id: 'employment-contract-uk',
    titlePl: 'Umowa o Pracę - Szablon',
    titleUk: 'Трудовий Договір - Шаблон',
    descriptionPl: 'Szablon umowy o pracę dla obcokrajowców',
    descriptionUk: 'Шаблон трудового договору для іноземців',
    fileName: 'employment-contract-ua.pdf',
    category: 'templates',
    language: 'uk',
    icon: '📄',
    size: '1.3 MB',
  },
  {
    id: 'tax-forms-uk',
    titlePl: 'Szablony Oświadczeń Podatkowych',
    titleUk: 'Шаблони Податкових Декларацій',
    descriptionPl: 'Szablony PIT-37, PIT-36 z instrukcjami dla Ukraińców',
    descriptionUk: 'Шаблони PIT-37, PIT-36 з інструкціями для українців',
    fileName: 'tax-forms-ua.pdf',
    category: 'forms',
    language: 'uk',
    icon: '💰',
    size: '2.5 MB',
  },
  {
    id: 'invoice-template-uk',
    titlePl: 'Szablon Faktury VAT',
    titleUk: 'Шаблон Рахунку VAT',
    descriptionPl: 'Gotowy szablon faktury do pobrania i uzupełnienia',
    descriptionUk: 'Готовий шаблон рахунку для завантаження та заповнення',
    fileName: 'invoice-template-ua.pdf',
    category: 'templates',
    language: 'uk',
    icon: '🧾',
    size: '1.1 MB',
  },
  {
    id: 'social-insurance-uk',
    titlePl: 'Ubezpieczenia Społeczne - Poradnik',
    titleUk: 'Соціальне Страхування - Поради',
    descriptionPl: 'Wszystko o ubezpieczeniach społecznych dla przedsiębiorców',
    descriptionUk: 'Все про соціальне страхування для підприємців',
    fileName: 'social-insurance-ua.pdf',
    category: 'guides',
    language: 'uk',
    icon: '🛡️',
    size: '1.7 MB',
  },
  {
    id: 'employment-contract-uk',
    titlePl: 'Umowa o Pracę - Szablon',
    titleUk: 'Трудовий Договір - Шаблон',
    descriptionPl: 'Szablon umowy o pracę dla obcokrajowców',
    descriptionUk: 'Шаблон трудового договору для іноземців',
    fileName: 'employment-contract-ua.pdf',
    category: 'templates',
    language: 'uk',
    icon: '📄',
    size: '1.3 MB',
  },
]

export function getResourcesByCategory(category: DownloadableResource['category']) {
  return DOWNLOADABLE_RESOURCES.filter(r => r.category === category)
}

export function getResourcesByLanguage(language: DownloadableResource['language']) {
  return DOWNLOADABLE_RESOURCES.filter(r => r.language === language || r.language === 'both')
}
