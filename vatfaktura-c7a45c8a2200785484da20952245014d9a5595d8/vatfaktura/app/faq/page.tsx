import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ChevronDown } from 'lucide-react'
import { AdSenseDisplayAuto, AdSenseDisplay300x250 } from '@/components/adsense-banner'

export const metadata: Metadata = {
  title: 'FAQ - VAT Faktura | Pytania o Fakturach, KSEF, PIT, Rozliczeniach Podatkowych',
  description: 'Kompletne FAQ VAT Faktura. Pytania o bezpłatnym programie do fakturowania, KSEF, rozliczeniach PIT-37, PIT-36, PIT-28, podpisie elektronicznym i wysyłce do urzędu skarbowego.',
  keywords: 'FAQ fakturowanie, pytania i odpowiedzi, KSEF, VAT Faktura, e-faktury, PIT-37, PIT-36, rozliczenie PIT, urząd skarbowy, podpis elektroniczny',
}

export default function FAQPage() {
  const pitFaqs = [
    {
      question: 'Jakie formularze PIT mogę rozliczyć w VAT Faktura?',
      answer: 'VAT Faktura obsługuje wszystkie główne deklaracje: PIT-37 (pracownicy, zleceniobiorcy), PIT-36 (działalność gospodarcza, skala), PIT-36L (podatek liniowy 19%), PIT-28 (ryczałt ewidencjonowany), PIT-38 (kapitały pieniężne, giełda), PIT-39 (zbycie nieruchomości), PIT-16A (karta podatkowa) oraz PIT-19A (ulga prorodzinna).'
    },
    {
      question: 'Czy mogę wysłać deklarację PIT bezpośrednio do urzędu skarbowego?',
      answer: 'Tak. Po wypełnieniu formularza i podpisaniu elektronicznym deklaracja jest wysyłana bezpośrednio do systemu e-Deklaracje Ministerstwa Finansów. Otrzymasz UPO (Urzędowe Potwierdzenie Odbioru) jako dowód złożenia zeznania.'
    },
    {
      question: 'Jak działa podpis elektroniczny przy rozliczaniu PIT?',
      answer: 'Możesz podpisać deklarację kwalifikowanym podpisem elektronicznym (certyfikat kwalifikowany) lub danymi autoryzującymi (kwota przychodu z roku poprzedniego). Obydwie metody są akceptowane przez Krajową Administrację Skarbową.'
    },
    {
      question: 'Czy rozliczenie PIT w VAT Faktura jest bezpłatne?',
      answer: 'Tak, rozliczanie wszystkich deklaracji PIT jest całkowicie bezpłatne — bez limitów, bez abonamentów, bez karty kredytowej. To część pakietu VAT Faktura dostępnego 100% za darmo.'
    },
    {
      question: 'Kiedy jest termin złożenia PIT?',
      answer: 'Standardowy termin złożenia PIT rocznego upływa 30 kwietnia roku następnego (np. PIT za 2025 rok należy złożyć do 30 kwietnia 2026 r.). Wyjątek: PIT-28 (ryczałt) do końca lutego. VAT Faktura wyświetla przypomnienia o zbliżających się terminach.'
    },
    {
      question: 'Czy mogę rozliczyć PIT wspólnie z małżonkiem?',
      answer: 'Tak, formularze PIT-37 i PIT-36 umożliwiają wspólne rozliczenie z małżonkiem. W VAT Faktura wystarczy zaznaczyć opcję "rozliczenie wspólne" i uzupełnić dane małżonka — system automatycznie wyliczy korzystniejszy wynik podatkowy.'
    },
    {
      question: 'Jakie ulgi podatkowe uwzględnia VAT Faktura przy rozliczeniu PIT?',
      answer: 'System obsługuje m.in.: ulgę na dziecko (prorodzinną), ulgę rehabilitacyjną, ulgę internetową, odliczenia IKZE, składki ZUS i NFZ, ulgę dla młodych (do 26 r.ż.), ulgę dla pracujących seniorów, 1,5% na OPP oraz kwotę zmniejszającą podatek.'
    },
    {
      question: 'Co to jest UPO i jak je uzyskać po wysłaniu PIT?',
      answer: 'UPO (Urzędowe Potwierdzenie Odbioru) to dokument potwierdzający, że urząd skarbowy przyjął Twoją deklarację. VAT Faktura automatycznie pobiera i wyświetla UPO zaraz po pomyślnym wysłaniu deklaracji — możesz je zapisać lub wydrukować.'
    },
    {
      question: 'Czy VAT Faktura obsługuje rozliczenie PIT dla działalności gospodarczej?',
      answer: 'Tak. PIT-36 (zasady ogólne, skala podatkowa 12%/32%) i PIT-36L (podatek liniowy 19%) są w pełni obsługiwane. Możesz wprowadzić przychody, koszty uzyskania, zapłacone zaliczki i odliczenia — system wyliczy należny podatek lub nadpłatę.'
    },
    {
      question: 'Co zrobić, jeśli popełnię błąd w złożonej deklaracji PIT?',
      answer: 'Możesz złożyć korektę deklaracji — formularz korygujący to ten sam typ PIT z zaznaczoną opcją "korekta zeznania". VAT Faktura obsługuje składanie korekt przez cały rok podatkowy. Korektę należy złożyć tak szybko jak to możliwe, szczególnie jeśli zaniżyłeś podatek.'
    },
    {
      question: 'Czy mogę rozliczyć przychody z zagranicy w VAT Faktura?',
      answer: 'Tak, PIT-36 obsługuje przychody z zagranicy z uwzględnieniem metody wyłączenia z progresją lub proporcjonalnego odliczenia (w zależności od umowy o unikaniu podwójnego opodatkowania z danym krajem).'
    },
    {
      question: 'Jak VAT Faktura chroni moje dane przy rozliczeniu PIT?',
      answer: 'Dane deklaracji PIT są szyfrowane i przesyłane bezpiecznie do systemu e-Deklaracje przez szyfrowane połączenie HTTPS. Nie są przechowywane na serwerach VAT Faktura — trafiają bezpośrednio do Ministerstwa Finansów.'
    },
  ]

  const faqs = [
    {
      question: 'Czy VAT Faktura jest naprawdę 100% bezpłatna?',
      answer: 'Tak, VAT Faktura jest w pełni bezpłatna. Nie trzeba podawać karty kredytowej, nie ma ukrytych opłat, a wszystkie funkcje są dostępne dla wszystkich użytkowników.'
    },
    {
      question: 'Czy mogę eksportować faktury do PDF?',
      answer: 'Tak, każdą fakturę możesz wysportować do pliku PDF i wydrukować. Faktury można również wysyłać jako e-faktury poprzez system KSEF.'
    },
    {
      question: 'Co to jest KSEF i czy VAT Faktura go wspiera?',
      answer: 'KSEF (Krajowy System e-Faktur) to obowiązkowy system do przesyłania faktur. VAT Faktura ma pełną integrację z KSEF, dzięki czemu możesz wysyłać faktury bezpośrednio z aplikacji.'
    },
    {
      question: 'Czy moje dane są bezpieczne?',
      answer: 'Tak, VAT Faktura przechowuje dane bezpośrednio w twojej przeglądarce. Twoje faktury i dane nigdy nie trafiają na serwery. Dodatkowo wszystkie dane są szyfrowane.'
    },
    {
      question: 'Czy mogę używać VAT Faktura na telefonie?',
      answer: 'Tak, aplikacja jest w pełni responsywna i działa na wszystkich urządzeniach - smartfonach, tabletach i komputerach.'
    },
    {
      question: 'Czy VAT Faktura wspiera wiele użytkowników/zespołów?',
      answer: 'Aktualnie każdy użytkownik ma swoje konto. Jeśli potrzebujesz zespołowego fakturowania, polecamy kontakt przez formularz kontaktowy.'
    },
    {
      question: 'Czy mogę importować dane z innego programu?',
      answer: 'Tak, VAT Faktura wspiera import danych z popularnych formatów. W sekcji ustawień znajdziesz opcje importu.'
    },
    {
      question: 'Czy faktury są archiwizowane?',
      answer: 'Tak, wszystkie faktury są automatycznie archiwizowane. Możesz do nich wracać i je edytować w każdej chwili.'
    },
    {
      question: 'Jakie są wymagania techniczne do używania aplikacji?',
      answer: 'VAT Faktura działa w każdej nowoczesnej przeglądarce (Chrome, Firefox, Safari, Edge). Nie trzeba instalować nic dodatkowego.'
    },
    {
      question: 'Czy VAT Faktura zmienia się w przyszłości?',
      answer: 'Tak, stale dodajemy nowe funkcje. Wszystkie aktualizacje są bezpłatne dla wszystkich użytkowników.'
    },
    {
      question: 'Czy wystawienie faktury w VAT Faktura jest legalne?',
      answer: 'Tak, VAT Faktura w pełni zgodna z ustawą o podatku VAT i wymogami KSEF. Faktury wystawiane są zgodnie z polskim prawem.'
    },
    {
      question: 'Czy mogę mieć nieograniczoną ilość kontrahentów?',
      answer: 'Tak, nie ma żadnych limitów na ilość kontrahentów. Możesz dodać każdy kontrahent, któremu wystawiasz faktury.'
    },
    {
      question: 'Czy VAT Faktura wspiera faktury korygujące?',
      answer: 'Tak, aplikacja w pełni wspiera faktury korygujące. Możesz łatwo korygować błędy na poprzednich fakturach.'
    },
    {
      question: 'Czy mogę eksportować wszystkie faktury na raz?',
      answer: 'Tak, możesz exportować wiele faktur jednocześnie w formacie CSV lub PDF. Funkcja masowego exportu znajduje się w ustawieniach.'
    },
    {
      question: 'Czy VAT Faktura ma kopie zapasowe moich danych?',
      answer: 'Tak, wszystkie dane są automatycznie szyfrowane i kopiowane. Twoje faktury są bezpieczne nawet jeśli stracisz dostęp do urządzenia.'
    },
    {
      question: 'Jak długo mogę przechowywać faktury w VAT Faktura?',
      answer: 'Bez ograniczeń. Możesz przechowywać faktury na zawsze. Po wystawieniu faktury nigdy nie zostaną usunięte.'
    },
    {
      question: 'Czy VAT Faktura wspiera faktury proforma?',
      answer: 'Tak, możesz wystawiać faktury proforma. Są to faktury informacyjne, które nie mają odpisu VAT.'
    },
    {
      question: 'Czy mogę importować faktury z poprzednich lat?',
      answer: 'Tak, możesz zaimportować faktury z poprzednich lat w formacie CSV. Przydatne przy przechodzeniu z innego programu.'
    },
    {
      question: 'Czy VAT Faktura wspiera faktury zaliczki?',
      answer: 'Tak, możesz wystawiać faktury zaliczki i faktury końcowe. System automatycznie śledzi zaliczki na kontach.'
    },
    {
      question: 'Jakie języki wspiera VAT Faktura?',
      answer: 'Aplikacja wspiera polski i angielski. Faktury mogą być wysyłane w dowolnym języku poprzez KSEF.'
    },
    {
      question: 'Czy VAT Faktura ma API dla integracji z innymi systemami?',
      answer: 'Tak, API jest dostępne dla zaawansowanych użytkowników. Skontaktuj się z nami aby otrzymać dokumentację API.'
    },
    {
      question: 'Czy mogę zmienić dane firmy w VAT Faktura?',
      answer: 'Tak, dane firmy można edytować w ustawieniach konta. Zmiany dotyczą wszystkich przyszłych faktur.'
    },
    {
      question: 'Czy VAT Faktura ma sms/email przypomnienia o terminie zapłaty?',
      answer: 'Funkcja powiadomień jest dostępna w ustawieniach. Możesz otrzymywać przypomnienia o zbliżających się terminach.'
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-28 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
            FAQ - Najczęściej Zadawane Pytania
          </h1>
          <p className="text-lg text-blue-200/80 mb-8">
            Wszystkie odpowiedzi na pytania dotyczące VAT Faktura, KSEF, bezpieczeństwa i funkcji
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <div className="inline-block px-4 py-2 bg-green-600/20 border border-green-500/50 rounded-full text-sm text-green-300 font-medium">
              {faqs.length} pytań o fakturowaniu
            </div>
            <div className="inline-block px-4 py-2 bg-emerald-600/20 border border-emerald-500/50 rounded-full text-sm text-emerald-300 font-medium">
              {pitFaqs.length} pytań o rozliczeniu PIT
            </div>
          </div>
        </div>

        {/* PIT FAQ Section */}
        <div id="pit" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-8 bg-gradient-to-b from-emerald-400 to-teal-400 rounded-full flex-shrink-0"></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Pytania o rozliczeniu PIT</h2>
          </div>
          <div className="space-y-4 mb-16">
            {pitFaqs.map((faq, idx) => (
              <Card key={idx} className="bg-emerald-900/20 backdrop-blur-sm border border-emerald-500/20 p-6 hover:border-emerald-500/50 transition-all group">
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4 cursor-pointer">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors flex-1">
                      {faq.question}
                    </h3>
                    <ChevronDown className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1 group-hover:rotate-180 transition-transform" />
                  </div>
                  <p className="text-blue-200/80 text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-8 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full flex-shrink-0"></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Pytania ogólne o fakturowaniu</h2>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <Card key={idx} className="bg-slate-800/40 backdrop-blur-sm border border-blue-500/20 p-6 hover:border-blue-500/50 transition-all group">
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4 cursor-pointer">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors flex-1">
                      {faq.question}
                    </h3>
                    <ChevronDown className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1 group-hover:rotate-180 transition-transform" />
                  </div>
                  <p className="text-blue-200/80 text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* AdSense Banner - After FAQ items */}
          <div className="my-12">
            <AdSenseDisplayAuto />
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 sm:p-12 bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-blue-600/20 border border-blue-500/50 rounded-2xl text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Nie znalazłeś odpowiedzi?
            </h2>
            <p className="text-blue-200/80 mb-6">
              Skontaktuj się z nami lub zacznij korzystać z aplikacji i odkryj wszystkie możliwości
            </p>
            <Link href="/register">
              <Button className="bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-700 hover:to-cyan-700 font-bold">
                Zaznij Za Darmo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
