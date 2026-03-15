'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { AlertCircle, CheckCircle, FileText, Users, Building2, Briefcase, ArrowRight, Globe, MapPin, Phone, Clock, Download } from 'lucide-react'
import { useLanguage } from '@/hooks/use-language'
import { t } from '@/lib/i18n/translations'
import { DownloadableResourcesSection } from '@/components/downloadable-resources-section'
import { AdSenseDisplayAuto } from '@/components/adsense-banner'

export default function PassportGuide() {
  const { language } = useLanguage()

  const sections = language === 'uk' ? [
    {
      id: 'welcome',
      title: 'Посібник з паспортів у Польщі',
      content: 'Цей посібник допоможе вам зрозуміти процес отримання паспорту в Польщі, необхідні документи, процедури та де записатися на прийом. Усе що вам потрібно знати про паспорти у Польщі.'
    },
    {
      id: 'types',
      title: 'Типи паспортів',
      items: [
        'Паспорт туристичний (Paszport turystyczny) - для подорожей, вальний 10 років',
        'Паспорт дипломатичний - для дипломатичних працівників',
        'Паспорт служебний - для державних службовців',
        'Паспорт Евро - нові паспорти з мікрочіпом'
      ]
    },
    {
      id: 'requirements',
      title: 'Необхідні документи',
      items: [
        'Анкета (Wniosek o paszport) - заповнена форма',
        'Оригінальний паспорт (якщо замінюється)',
        'Свідоцтво про народження - оригінал або завірена копія',
        'Документ, що підтверджує громадянство',
        'Цифрова фотографія (паспортна, розмір 35x45 мм)',
        'Документ, що підтверджує оплату збору',
        'PESEL карта або витяг з реєстру (за наявності)'
      ]
    },
    {
      id: 'process',
      title: 'Процес отримання паспорту',
      steps: [
        {
          num: 1,
          title: 'Завантажте анкету',
          desc: 'Завантажте форму Wniosek о paszport з сайту www.mswia.gov.pl і заповніть її розбірливо'
        },
        {
          num: 2,
          title: 'Підготуйте документи',
          desc: 'Зберіть всі необхідні документи (паспорт, свідоцтво про народження, фото, документи громадянства)'
        },
        {
          num: 3,
          title: 'Запишіться на прийом',
          desc: 'Запишіться на прийом в уповноважений орган (мерія, повітовий офіс, або онлайн через портал'
        },
        {
          num: 4,
          title: 'Підпишіть анкету',
          desc: 'На прийомі вам потрібно буде особисто підписати анкету перед чиновником'
        },
        {
          num: 5,
          title: 'Отримайте розписку',
          desc: 'Ви отримаєте розписку з номером справи та датою видачі паспорту'
        },
        {
          num: 6,
          title: 'Отримайте паспорт',
          desc: 'Паспорт видається в установленому терміні (15-30 робочих днів у звичайному режимі)'
        }
      ]
    },
    {
      id: 'costs',
      title: 'Вартість паспорту',
      items: [
        'Паспорт туристичний (10 років) - 140 PLN для дорослих',
        'Паспорт туристичний (5 років) - 70 PLN для дітей до 18 років',
        'Приватний паспорт - 280 PLN за двадцять днів',
        'Прискорена видача (7 днів) - 420 PLN',
        'Дуже прискорена видача (3 дні) - 700 PLN'
      ]
    },
    {
      id: 'booking',
      title: 'Як записатися на прийом',
      items: [
        'Онлайн через портал https://www.gov.pl або мобільний додаток',
        'Телефоном на горячу лінію вашого органу паспортного забезпечення',
        'Особисто в офісі органу під час його роботи',
        'Через систему PARCC (Punkt Rejestracji Cudzoziemców)'
      ]
    },
    {
      id: 'for-foreigners',
      title: 'Інформація для іноземців',
      items: [
        'Іноземці зареєстровані в Польщі можуть отримати паспорт на загальних умовах',
        'Потребується документ про реєстрацію місця проживання (zameldowanie)',
        'Іноземці повинні мати дійсний документ про перебування (виза або дозвіл на проживання)',
        'Деякі національні паспорти можуть служити документом подорожі в межах ЄС',
        'Крайнам без консулату потрібна піклування через міжнародні канали'
      ]
    },
    {
      id: 'tips',
      title: 'Корисні поради',
      items: [
        'Запишіться онлайн завчасно - черги можуть бути довгими',
        'Замовте прискорену видачу паспорту, якщо у вас паспорт необхідний терміново',
        'Переконайтесь, що всі документи підготовлені - органи не приймають неповні заявки',
        'Записуйте номер справи та дату видачі паспорту - вам це буде потрібно при отриманні',
        'При втраті паспорту повідомте органи негайно'
      ]
    }
  ] : [
    {
      id: 'welcome',
      title: 'Poradnik Paszport w Polsce',
      content: 'Ten poradnik pomoże ci zrozumieć proces uzyskania paszportu w Polsce, wymagane dokumenty, procedury i gdzie się umówić na wizytę. Wszystko co musisz wiedzieć o paszportach w Polsce.'
    },
    {
      id: 'types',
      title: 'Rodzaje paszportów',
      items: [
        'Paszport turystyczny - standardowy paszport, ważny 10 lat',
        'Paszport dyplomatyczny - dla pracowników dyplomatycznych',
        'Paszport służbowy - dla pracowników publicznych',
        'Paszport EURO - nowy paszport z mikroczipem'
      ]
    },
    {
      id: 'requirements',
      title: 'Wymagane dokumenty',
      items: [
        'Wniosek o paszport - wypełniony formularz',
        'Oryginalny paszport (jeśli go zamieniasz)',
        'Zaświadczenie o urodzeniu - oryginał lub kopia poświadczona',
        'Dokument potwierdzający obywatelstwo',
        'Zdjęcie cyfrowe (paszportowe, rozmiar 35x45 mm)',
        'Potwierdzenie opłaty',
        'Karta PESEL lub wyciąg z rejestru (jeśli dostępne)'
      ]
    },
    {
      id: 'process',
      title: 'Proces uzyskania paszportu',
      steps: [
        {
          num: 1,
          title: 'Pobierz wniosek',
          desc: 'Pobierz formularz wniosku z www.mswia.gov.pl i wypełnij go czytelnie'
        },
        {
          num: 2,
          title: 'Przygotuj dokumenty',
          desc: 'Zgromadź wszystkie wymagane dokumenty (paszport, zaświadczenie, zdjęcie, dokumenty obywatelstwa)'
        },
        {
          num: 3,
          title: 'Umów się na wizytę',
          desc: 'Zarezerwuj termin wizyt w odpowiednim urzędzie (gmina, powiat, lub online przez portal)'
        },
        {
          num: 4,
          title: 'Podpisz wniosek',
          desc: 'Podczas wizyty musisz osobiście podpisać wniosek przed urzędnikiem'
        },
        {
          num: 5,
          title: 'Otrzymaj potwierdzenie',
          desc: 'Otrzymasz pokwitowanie z numerem sprawy i datą wydania paszportu'
        },
        {
          num: 6,
          title: 'Odbierz paszport',
          desc: 'Paszport jest wydawany w ustalonym terminie (15-30 dni roboczych w trybie zwyczajnym)'
        }
      ]
    },
    {
      id: 'costs',
      title: 'Koszty paszportu',
      items: [
        'Paszport turystyczny (10 lat) - 140 PLN dla dorosłych',
        'Paszport turystyczny (5 lat) - 70 PLN dla dzieci do 18 lat',
        'Paszport pośpieszny - 280 PLN za 20 dni',
        'Bardzo pośpieszny (7 dni) - 420 PLN',
        'Ekspresowy (3 dni) - 700 PLN'
      ]
    },
    {
      id: 'booking',
      title: 'Jak się umówić na wizytę',
      items: [
        'Online przez portal https://www.gov.pl lub aplikację mobilną',
        'Telefonicznie na infolinię twojego urzędu',
        'Osobiście w biurze podczas godzin pracy',
        'Przez system PARCC (Punkt Rejestracji Cudzoziemców)'
      ]
    },
    {
      id: 'for-foreigners',
      title: 'Informacje dla cudzoziemców',
      items: [
        'Cudzoziemcy zarejestrowani w Polsce mogą uzyskać paszport na zasadach ogólnych',
        'Wymagany jest dokument potwierdzający rejestrację miejsca zamieszkania (zameldowanie)',
        'Cudzoziemcy muszą posiadać ważny dokument pobytu (wizę lub pozwolenie na pobyt)',
        'Niektóre paszporty krajowe mogą stanowić dokument podróży w UE',
        'Dla krajów bez konsulatu wymagane pośrednictwo kanałów międzynarodowych'
      ]
    },
    {
      id: 'tips',
      title: 'Przydatne porady',
      items: [
        'Zarezerwuj termin wcześnie - kolejki mogą być długie',
        'Zamów wydanie pośpieszne paszportu, jeśli go szybko potrzebujesz',
        'Upewnij się, że wszystkie dokumenty są przygotowane - urzędy nie przyjmują niekompletnych wniosków',
        'Zanotuj numer sprawy i datę wydania - będziesz tego potrzebować przy odbiorze',
        'W przypadku zagubienia paszportu powiadom organy natychmiast'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <AdSenseDisplayAuto />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Welcome Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">
              {sections.find(s => s.id === 'welcome')?.title}
            </h1>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            {sections.find(s => s.id === 'welcome')?.content}
          </p>
        </div>

        {/* Types Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Globe className="w-6 h-6 text-blue-600" />
            {sections.find(s => s.id === 'types')?.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sections.find(s => s.id === 'types')?.items?.map((item, idx) => (
              <Card key={idx} className="p-4 border-l-4 border-l-blue-600 hover:shadow-lg transition-shadow">
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{item}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Requirements Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6 text-blue-600" />
            {sections.find(s => s.id === 'requirements')?.title}
          </h2>
          <Card className="p-6 bg-white border border-blue-200">
            <ul className="space-y-3">
              {sections.find(s => s.id === 'requirements')?.items?.map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Process Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-blue-600" />
            {sections.find(s => s.id === 'process')?.title}
          </h2>
          <div className="space-y-4">
            {sections.find(s => s.id === 'process')?.steps?.map((step) => (
              <Card key={step.num} className="p-6 border-l-4 border-l-blue-600 hover:shadow-lg transition-shadow">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="font-bold text-blue-600">{step.num}</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-700">{step.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Costs Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Building2 className="w-6 h-6 text-blue-600" />
            {sections.find(s => s.id === 'costs')?.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sections.find(s => s.id === 'costs')?.items?.map((item, idx) => (
              <Card key={idx} className="p-4 border-t-4 border-t-blue-600 hover:shadow-lg transition-shadow">
                <p className="text-gray-700 font-medium">{item}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Booking Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Clock className="w-6 h-6 text-blue-600" />
            {sections.find(s => s.id === 'booking')?.title}
          </h2>
          <Card className="p-6 bg-blue-50 border border-blue-200">
            <ul className="space-y-3">
              {sections.find(s => s.id === 'booking')?.items?.map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* For Foreigners Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Globe className="w-6 h-6 text-blue-600" />
            {sections.find(s => s.id === 'for-foreigners')?.title}
          </h2>
          <Card className="p-6 bg-white border border-blue-200">
            <ul className="space-y-3">
              {sections.find(s => s.id === 'for-foreigners')?.items?.map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Tips Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-green-600" />
            {sections.find(s => s.id === 'tips')?.title}
          </h2>
          <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
            <ul className="space-y-3">
              {sections.find(s => s.id === 'tips')?.items?.map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mb-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">
            {language === 'uk' ? 'Потрібна допомога?' : 'Potrzebujesz pomocy?'}
          </h2>
          <p className="mb-6 text-blue-100">
            {language === 'uk' 
              ? 'Jeśli masz pytania dotyczące paszportu lub procedur, nasze zespół jest tutaj, aby Ci pomóc.'
              : 'Jeśli masz pytania dotyczące paszportu lub procedur, nasz zespół jest tutaj, aby Ci pomóc.'}
          </p>
          <div className="flex gap-4 flex-wrap">
            <Button 
              className="bg-white text-blue-600 hover:bg-blue-50"
              asChild
            >
              <Link href="/porada-prawna">
                {language === 'uk' ? 'Darmowe porady' : 'Bezpłatne porady'}
              </Link>
            </Button>
            <Button 
              className="border-2 border-white text-white hover:bg-white/10"
              variant="outline"
            >
              {language === 'uk' ? 'Kontakt' : 'Kontakt'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
