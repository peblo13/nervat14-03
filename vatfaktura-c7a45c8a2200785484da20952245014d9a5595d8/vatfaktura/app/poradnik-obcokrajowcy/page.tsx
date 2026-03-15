'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { AlertCircle, CheckCircle, FileText, Users, Building2, Briefcase, ArrowRight, Globe } from 'lucide-react'
import { useLanguage } from '@/hooks/use-language'
import { t } from '@/lib/i18n/translations'
import { DownloadableResourcesSection } from '@/components/downloadable-resources-section'
import { AdSenseDisplayAuto } from '@/components/adsense-banner'

export default function ForeignersGuide() {
  const { language } = useLanguage()

  const sections = language === 'uk' ? [
    {
      id: 'welcome',
      title: 'Ласкаво просимо, українці!',
      content: 'Якщо ви приїхали в Польщу і хочете розпочати свій бізнес, цей посібник допоможе вам розібратися в процесі реєстрації ФОП. Ми розробили це спеціально для українців, які починають працювати в Польщі.'
    },
    {
      id: 'documents',
      title: 'Необхідні документи',
      items: [
        'Паспорт або ID-карта',
        'PESEL (персональний номер в Польщі) - можна отримати в УМС',
        'Адреса місцезнаходження бізнесу (може бути ваша адреса проживання)',
        'Email та номер телефону',
        'Назва ФОП (можна польською або українською)',
        'Код PKD (польська класифікація діяльності)',
      ]
    },
    {
      id: 'registration-process',
      title: 'Процес реєстрації',
      steps: [
        {
          num: 1,
          title: 'Отримайте PESEL',
          desc: 'Якщо у вас немає PESEL, звернітесь до Управління міграції та натуралізації (UdSC) чи в муніципальний офіс вашого міста.'
        },
        {
          num: 2,
          title: 'Вибери тип діяльності (PKD)',
          desc: 'Визначте свою основну діяльність. На нашому сайті є пошук кодів PKD з українськими пояснення.'
        },
        {
          num: 3,
          title: 'Заповніть форму реєстрації',
          desc: 'На сайті CEIDG.gov.pl або за допомогою VAT Faktura заповніть форму JED.'
        },
        {
          num: 4,
          title: 'Підпишіть електронно',
          desc: 'Використовуйте Профіль Зіун (Profil Zaufany) або електронний підпис.'
        },
        {
          num: 5,
          title: 'Отримайте підтвердження',
          desc: 'CEIDG відішле вам підтвердження електронною поштою. Зареєстрація зазвичай займає 1-2 дні.'
        },
        {
          num: 6,
          title: 'Відкрийте банківський рахунок',
          desc: 'З бізнес-NIP відкрийте рахунок у польському банку (PKO, mBank, ING тощо).'
        },
      ]
    },
    {
      id: 'visa-requirements',
      title: 'Вимоги щодо віз',
      content: 'Якщо ви громадянин України, ви можете перебувати в Польщі без візи протягом 90 днів у межах Шенгену. Після цього, щоб залишитися, вам потрібна виза або дозвіл на проживання. Реєстрація ФОП може допомогти отримати довгострокову візу за напрямком «працівник».'
    },
    {
      id: 'bank-account',
      title: 'Банківський рахунок',
      items: [
        'Після отримання NIP зайдіть у польський банк з паспортом та документом про реєстрацію',
        'Основні банки: PKO BP, mBank, ING, Millennium, BNP Paribas',
        'Деякі банки відкривають рахунки онлайн - це швидше',
        'Потрібен мінімальний рахунок для розрахунків з зарплатею, якщо у вас будуть працівники',
      ]
    },
    {
      id: 'zus-contributions',
      title: 'Соціальні внески (ZUS)',
      content: 'Після реєстрації ФОП ви повинні платити внески до ZUS. Базовий внесок - приблизно 250 PLN на місяць. Коли ви отримуєте дохід, розмір може змінитися. VAT Faktura допоможе вам розрахувати суму.'
    },
    {
      id: 'taxes',
      title: 'Податки',
      items: [
        'Вам потрібно буде подавати податкові декларації щороку',
        'Звіти по PIT (податок на доходи фізичних осіб) подаються до 30 квітня',
        'Якщо ви отримуєте дохід вище визначеної суми, вам потрібна реєстрація VAT',
        'VAT Faktura допоможе вам розрахувати всі податки',
      ]
    },
    {
      id: 'invoices',
      title: 'Видання рахунків',
      content: 'У Польщі вам потрібна система для видання рахунків. VAT Faktura дозволяє видавати рахунки онлайн, відстежувати платежі та отримувати звіти. Все це абсолютно безкоштовно для новачків.'
    },
  ] : [
    {
      id: 'welcome',
      title: 'Poradnik dla obcokrajowców',
      content: 'Jeśli przyjechałeś do Polski i chcesz założyć firmę, ten poradnik pomoże ci zrozumieć proces rejestracji. Szczególnie skierowany do Ukraińców pracujących w Polsce.'
    },
    {
      id: 'documents',
      title: 'Wymagane dokumenty',
      items: [
        'Paszport lub legitymacja',
        'PESEL (numer uczestnika w Polsce) - można uzyskać w UMiG',
        'Adres siedziby firmy (może być twój adres zamieszkania)',
        'Email i numer telefonu',
        'Nazwa firmy (możliwie po polsku)',
        'Kod PKD (Polska Klasyfikacja Działalności)',
      ]
    },
    {
      id: 'registration-process',
      title: 'Proces rejestracji',
      steps: [
        {
          num: 1,
          title: 'Uzyskaj PESEL',
          desc: 'Jeśli nie masz PESEL, zwróć się do Urzędu Migracji (UdSC) lub urzędu miasta.'
        },
        {
          num: 2,
          title: 'Wybierz typ działalności (PKD)',
          desc: 'Określ swoją główną działalność. Na naszej stronie mamy wyszukiwarkę kodów PKD.'
        },
        {
          num: 3,
          title: 'Wypełnij formularz rejestracji',
          desc: 'Na stronie CEIDG.gov.pl lub za pośrednictwem VAT Faktura wypełnij formularz JED.'
        },
        {
          num: 4,
          title: 'Podpisz elektronicznie',
          desc: 'Użyj Profilu Zaufanego (Profil Zaufany) lub podpisu elektronicznego.'
        },
        {
          num: 5,
          title: 'Otrzymaj potwierdzenie',
          desc: 'CEIDG wy��le ci potwierdzenie na email. Rejestracja zwykle trwa 1-2 dni.'
        },
        {
          num: 6,
          title: 'Otwórz konto bankowe',
          desc: 'Z biznesowym NIP otwórz konto w polskim banku (PKO, mBank, ING itp.).'
        },
      ]
    },
    {
      id: 'visa-requirements',
      title: 'Wymagania wizowe',
      content: 'Jako obywatel Ukrainy możesz przebywać w Polsce bez wizy przez 90 dni w ramach Schengen. Po tym okresie, aby pozostać, potrzebujesz wizy lub zezwolenia na pobyt. Rejestracja firmy może pomóc w uzyskaniu długoterminowej wizy typu "pracownik".'
    },
    {
      id: 'bank-account',
      title: 'Konto bankowe',
      items: [
        'Po otrzymaniu NIP udaj się do polskiego banku z paszportem i dokumentem rejestracji',
        'Główne banki: PKO BP, mBank, ING, Millennium, BNP Paribas',
        'Niektóre banki otwierają konta online - jest to szybsze',
        'Konto jest niezbędne do wypłacania wynagrodzeń pracownikom',
      ]
    },
    {
      id: 'zus-contributions',
      title: 'Składki do ZUS',
      content: 'Po rejestracji firmy musisz płacić składki do ZUS. Minimalna składka to około 250 PLN miesięcznie. Gdy osiągniesz przychody, wysokość może się zmienić. VAT Faktura pomoże ci to obliczyć.'
    },
    {
      id: 'taxes',
      title: 'Podatki',
      items: [
        'Musisz składać roczne deklaracje podatkowe',
        'Zeznania PIT składa się do 30 kwietnia',
        'Jeśli przychód przekroczy określoną kwotę, trzeba się zarejestrować na VAT',
        'VAT Faktura pomoże ci obliczyć wszystkie podatki',
      ]
    },
    {
      id: 'invoices',
      title: 'Wystawianie faktur',
      content: 'W Polsce musisz mieć system do wystawiania faktur. VAT Faktura umożliwia wystawianie faktur online, śledzenie płatności i otrzymywanie raportów. To wszystko jest całkowicie bezpłatne dla początkujących.'
    },
  ]

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full">
            <Globe className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-semibold text-blue-300">{language === 'uk' ? 'Українська' : 'Polski'}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            {language === 'uk' ? 'Путівник для Іноземців' : 'Poradnik dla Obcokrajowców'}
          </h1>
          <p className="text-lg text-blue-200/80 max-w-2xl mx-auto mb-8">
            {language === 'uk' 
              ? 'Як зареєструвати ФОП у Польщі та розпочати вашу діяльність' 
              : 'Jak założyć firmę w Polsce i rozpocząć swoją działalność'}
          </p>
        </div>

        {/* AdSense */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <AdSenseDisplayAuto />
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="space-y-12">
            {sections.map((section, idx) => (
              <section key={section.id} id={section.id} className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1.5 h-8 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full flex-shrink-0"></div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">{section.title}</h2>
                </div>

                {section.content && (
                  <p className="text-base sm:text-lg text-blue-100/80 leading-relaxed mb-6">
                    {section.content}
                  </p>
                )}

                {section.items && (
                  <div className="space-y-3 mb-6">
                    {section.items.map((item, i) => (
                      <div key={i} className="flex gap-3 items-start p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-blue-100">{item}</span>
                      </div>
                    ))}
                  </div>
                )}

                {section.steps && (
                  <div className="space-y-4">
                    {section.steps.map((step) => (
                      <Card key={step.num} className="bg-slate-900/50 border border-blue-500/20 p-6 hover:border-blue-500/50 transition-all">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white font-bold">
                              {step.num}
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-white mb-2">{step.title}</h3>
                            <p className="text-blue-100/70">{step.desc}</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </section>
            ))}

            {/* CTA Section */}
            <section className="mt-16 p-8 bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-500/30 rounded-2xl">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {language === 'uk' ? 'Готові розпочати?' : 'Gotowy do startu?'}
                </h3>
                <p className="text-blue-100/80 mb-6">
                  {language === 'uk' 
                    ? 'VAT Faktura допоможе вам упродовж всього процесу'
                    : 'VAT Faktura pomoże ci na każdym etapie'}
                </p>
                <Link href="/zaloz-firme-online">
                  <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold px-8 py-3 text-lg">
                    {language === 'uk' ? 'Зареєструвати ФОП' : 'Założyć firmę'}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </section>

            {/* Downloadable Resources Section */}
            <section className="my-20 sm:my-28">
              <DownloadableResourcesSection />
            </section>

            {/* AdSense */}
            <div className="my-12">
              <AdSenseDisplayAuto />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
