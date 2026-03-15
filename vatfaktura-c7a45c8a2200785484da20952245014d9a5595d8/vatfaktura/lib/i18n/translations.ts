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

    // Additional Navigation Keys
    'nav.mainMenu': 'Główne',
    'nav.more': 'Więcej',
    'nav.account': 'Konto',
    'nav.foreigners': 'Dla obcokrajowców',
    'nav.zusForm': 'Formularze ZUS',
    'nav.openMenu': 'Otwórz menu',
    'nav.closeMenu': 'Zamknij menu',

    // Home Page Hero
    'home.badge': '100% Bezpłatnie na zawsze',
    'home.heroTitle1': 'Fakturowanie',
    'home.heroTitle2': 'bez limitów',
    'home.heroTitle3': 'bez dodatkowych kosztów',
    'home.heroDesc': 'Profesjonalna, nowoczesna platforma do tworzenia faktur z pełnymi funkcjami. Żadnych limitów, żadnej karty kredytowej, żadnych ukrytych opłat.',
    'home.signalsItem1': 'Bezpłatnie zawsze',
    'home.signalsItem2': 'Bez limitów',
    'home.signalsItem3': 'Brak karty',
    'home.cta.start': 'Rozpocznij za darmo',
    'home.cta.login': 'Zaloguj się',
    
    // Social Proof
    'home.users': 'aktywnych użytkowników',
    'home.invoices': 'wystawionych faktur',
    'home.rating': 'średnia ocena',
    'home.free': 'bezpłatnie na zawsze',

    // Affiliate Disclosure
    'home.disclosure': 'Ujawnienie:',
    'home.disclosureText': 'VAT Faktura zawiera linki partnerskie. Jeśli dokonasz zakupu poprzez te linki, możemy otrzymać prowizję bez dodatkowych kosztów dla Ciebie.',
    'home.moreInfo': 'Więcej informacji',

    // Features Section
    'home.featuresTitle': 'Dlaczego VAT Faktura?',
    'home.featuresDesc': 'Zaawansowane narzędzia zaprojektowane do maksymalnej wydajności. Wszystko czego potrzebujesz do profesjonalnego fakturowania.',
    'home.feature.quickCreate': 'Szybkie tworzenie',
    'home.feature.quickCreateDesc': 'Utwórz profesjonalną fakturę w kilka sekund dzięki intuicyjnemu interfejsowi',
    'home.feature.secure': 'Bezpieczne',
    'home.feature.secureDesc': 'Twoje dane są chronione i przechowywane bezpiecznie w przeglądarce',
    'home.feature.pdf': 'Export do PDF',
    'home.feature.pdfDesc': 'Pobierz i wyślij faktury w formacie PDF gotowym do druku',
    'home.feature.templates': 'Szablony',
    'home.feature.templatesDesc': 'Korzystaj z gotowych szablonów i stwórz własne dla swojej firmy',
    'home.feature.math': 'Automatyczne obliczenia',
    'home.feature.mathDesc': 'Wszystkie matematyczne obliczenia wykonywane automatycznie',
    'home.feature.professional': 'Profesjonalny wygląd',
    'home.feature.professionalDesc': 'Faktury z profesjonalnym designem dla Twojej firmy',
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

    // Additional Navigation Keys
    'nav.mainMenu': 'Основне',
    'nav.more': 'Більше',
    'nav.account': 'Рахунок',
    'nav.foreigners': 'Для іноземців',
    'nav.zusForm': 'Форми ZUS',
    'nav.openMenu': 'Відкрити меню',
    'nav.closeMenu': 'Закрити меню',

    // Home Page Hero
    'home.badge': '100% Безкоштовно на завжди',
    'home.heroTitle1': 'Виставлення рахунків',
    'home.heroTitle2': 'без обмежень',
    'home.heroTitle3': 'без додаткових витрат',
    'home.heroDesc': 'Професійна, сучасна платформа для створення рахунків з повним функціоналом. Жодних обмежень, жодної кредитної карти, жодних прихованих зборів.',
    'home.signalsItem1': 'Безкоштовно на завжди',
    'home.signalsItem2': 'Без обмежень',
    'home.signalsItem3': 'Без карти',
    'home.cta.start': 'Почніть безкоштовно',
    'home.cta.login': 'Увійти',
    
    // Social Proof
    'home.users': 'активних користувачів',
    'home.invoices': 'виставлених рахунків',
    'home.rating': 'середня оцінка',
    'home.free': 'безкоштовно на завжди',

    // Affiliate Disclosure
    'home.disclosure': 'Розкриття інформації:',
    'home.disclosureText': 'VAT Faktura містить партнерські посилання. Якщо ви здійснюєте покупку через ці посилання, ми можемо отримати комісію без додаткових витрат для вас.',
    'home.moreInfo': 'Докладніше',

    // Features Section
    'home.featuresTitle': 'Чому VAT Faktura?',
    'home.featuresDesc': 'Розширені інструменти, розроблені для максимальної продуктивності. Все, що вам потрібно для професійного виставлення рахунків.',
    'home.feature.quickCreate': 'Швидке створення',
    'home.feature.quickCreateDesc': 'Створіть професійний рахунок за кілька секунд завдяки інтуїтивному інтерфейсу',
    'home.feature.secure': 'Безпечно',
    'home.feature.secureDesc': 'Ваші дані захищені та безпечно зберігаються в браузері',
    'home.feature.pdf': 'Експорт у PDF',
    'home.feature.pdfDesc': 'Завантажуйте та надсилайте рахунки у форматі PDF, готові до друку',
    'home.feature.templates': 'Шаблони',
    'home.feature.templatesDesc': 'Використовуйте готові шаблони та створюйте власні для вашої компанії',
    'home.feature.math': 'Автоматичні розрахунки',
    'home.feature.mathDesc': 'Усі математичні розрахунки виконуються автоматично',
    'home.feature.professional': 'Професійний вигляд',
    'home.feature.professionalDesc': 'Рахунки з професійним дизайном для вашої компанії',
  },
};

export function t(key: string, lang: Language = 'pl'): string {
  return translations[lang]?.[key] || key;
}
