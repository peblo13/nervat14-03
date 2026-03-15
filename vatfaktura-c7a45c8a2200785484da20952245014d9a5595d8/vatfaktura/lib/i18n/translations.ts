export type Language = 'pl' | 'uk';

export const translations: Record<Language, Record<string, string>> = {
  pl: {
    // Header & Navigation
    'nav.menu': 'Menu',
    'nav.language': 'Język',
    'nav.polish': 'Polski',
    'nav.ukrainian': 'Українська',
    'nav.faq': 'FAQ',
    'nav.blog': 'Blog',
    'nav.pricing': 'Cennik',
    'nav.partners': 'Partnerzy',
    'nav.login': 'Zaloguj się',
    'nav.register': 'Załóż konto',

    // Menu Items
    'menu.company': 'Załóż firmę',
    'menu.invoice': 'Faktura',
    'menu.pit': 'PIT',
    'menu.zus': 'ZUS',

    // Hero Section
    'hero.title': 'Faktury, PIT, ZUS i Rejestracja Firmy Online',
    'hero.subtitle': 'Wszystko czego potrzebujesz do zarządzania biznesem w Polsce',
    'hero.cta': 'Zacznij za Darmo',

    // Company Registration
    'company.title': 'Załóż firmę online',
    'company.description': 'Rejestracja firmy w systemach CEIDG, ZUS i GUS bez wychodzenia z domu',
    'company.button': 'Załóż firmę teraz',

    // Forms
    'form.companyName': 'Nazwa firmy',
    'form.ownerName': 'Imię i nazwisko',
    'form.address': 'Adres siedziby',
    'form.pkd': 'Kod PKD',
    'form.submit': 'Załóż firmę',
    'form.previous': 'Wróć',
    'form.next': 'Dalej',

    // For Foreigners Page
    'foreigners.title': 'Poradnik dla Obcokrajowców',
    'foreigners.subtitle': 'Jak założyć firmę w Polsce jako obcokrajowiec',
    'foreigners.section.documents': 'Wymagane dokumenty',
    'foreigners.section.registration': 'Proces rejestracji',
    'foreigners.section.accounts': 'Konto bankowe',
    'foreigners.section.visa': 'Wymogi wizowe',
  },
  uk: {
    // Header & Navigation
    'nav.menu': 'Меню',
    'nav.language': 'Мова',
    'nav.polish': 'Польська',
    'nav.ukrainian': 'Українська',
    'nav.faq': 'Питання',
    'nav.blog': 'Блог',
    'nav.pricing': 'Ціни',
    'nav.partners': 'Партнери',
    'nav.login': 'Увійти',
    'nav.register': 'Створити рахунок',

    // Menu Items
    'menu.company': 'Реєстрація ФОП',
    'menu.invoice': 'Рахунки',
    'menu.pit': 'Податки',
    'menu.zus': 'Соціальні внески',

    // Hero Section
    'hero.title': 'Рахунки, Податки, Соціальні внески та Реєстрація ФОП',
    'hero.subtitle': 'Все що вам потрібно для управління бізнесом у Польщі',
    'hero.cta': 'Почніть Безкоштовно',

    // Company Registration
    'company.title': 'Зареєструйте ФОП онлайн',
    'company.description': 'Реєстрація у CEIDG, ZUS та GUS без відвідування офісів',
    'company.button': 'Розпочати реєстрацію',

    // Forms
    'form.companyName': "Назва бізнесу",
    'form.ownerName': 'Ім\'я та прізвище',
    'form.address': 'Адреса місцезнаходження',
    'form.pkd': 'Код PKD',
    'form.submit': 'Зареєструвати ФОП',
    'form.previous': 'Назад',
    'form.next': 'Далі',

    // For Foreigners Page
    'foreigners.title': 'Путівник для іноземців',
    'foreigners.subtitle': 'Як зареєструвати ФОП у Польщі як іноземець',
    'foreigners.section.documents': 'Необхідні документи',
    'foreigners.section.registration': 'Процес реєстрації',
    'foreigners.section.accounts': 'Банківський рахунок',
    'foreigners.section.visa': 'Вимоги щодо віз',
  },
};

export function t(key: string, lang: Language = 'pl'): string {
  return translations[lang]?.[key] || key;
}
