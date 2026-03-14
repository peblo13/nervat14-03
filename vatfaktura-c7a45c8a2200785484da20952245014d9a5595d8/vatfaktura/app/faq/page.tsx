'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronDown, FileText, Receipt, HelpCircle } from 'lucide-react'
import { AdSenseDisplayAuto } from '@/components/adsense-banner'

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

const invoiceFaqs = [
  {
    question: 'Czy VAT Faktura jest naprawdę 100% bezpłatna?',
    answer: 'Tak, VAT Faktura jest w pełni bezpłatna. Nie trzeba podawać karty kredytowej, nie ma ukrytych opłat, a wszystkie funkcje są dostępne dla wszystkich użytkowników.'
  },
  {
    question: 'Czy mogę eksportować faktury do PDF?',
    answer: 'Tak, każdą fakturę możesz wyeksportować do pliku PDF i wydrukować. Faktury można również wysyłać jako e-faktury poprzez system KSEF.'
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
    answer: 'Tak, VAT Faktura jest w pełni zgodna z ustawą o podatku VAT i wymogami KSEF. Faktury wystawiane są zgodnie z polskim prawem.'
  },
  {
    question: 'Czy mogę mieć nieograniczoną ilość kontrahentów?',
    answer: 'Tak, nie ma żadnych limitów na ilość kontrahentów. Możesz dodać każdego kontrahenta, któremu wystawiasz faktury.'
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

function AccordionItem({
  question,
  answer,
  index,
  accent,
}: {
  question: string
  answer: string
  index: number
  accent: 'emerald' | 'blue'
}) {
  const [open, setOpen] = useState(false)

  const isEmerald = accent === 'emerald'

  return (
    <div
      className={`faq-item rounded-xl border transition-all duration-300 overflow-hidden ${
        isEmerald
          ? open
            ? 'border-emerald-500/50 bg-emerald-950/40 shadow-lg shadow-emerald-900/30'
            : 'border-emerald-500/15 bg-slate-900/50 hover:border-emerald-500/35 hover:bg-emerald-950/20'
          : open
          ? 'border-blue-500/50 bg-blue-950/30 shadow-lg shadow-blue-900/20'
          : 'border-blue-500/15 bg-slate-900/50 hover:border-blue-500/35 hover:bg-blue-950/20'
      }`}
      style={{ animationDelay: `${index * 40}ms` }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-4 px-5 py-5 text-left cursor-pointer"
        aria-expanded={open}
      >
        <span
          className={`flex-shrink-0 w-6 h-6 mt-0.5 rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-300 ${
            isEmerald
              ? open ? 'bg-emerald-500/30 text-emerald-200' : 'bg-emerald-500/10 text-emerald-400'
              : open ? 'bg-blue-500/30 text-blue-200' : 'bg-blue-500/10 text-blue-400'
          }`}
        >
          {index + 1}
        </span>
        <span className={`flex-1 font-semibold text-sm sm:text-base leading-snug transition-colors duration-200 ${
          open
            ? isEmerald ? 'text-emerald-200' : 'text-blue-200'
            : 'text-white/90'
        }`}>
          {question}
        </span>
        <ChevronDown
          className={`flex-shrink-0 w-5 h-5 mt-0.5 transition-all duration-300 ${
            open ? 'rotate-180 ' + (isEmerald ? 'text-emerald-400' : 'text-blue-400') : 'text-white/30'
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className={`px-5 pb-5 pl-[3.75rem] text-sm sm:text-base leading-relaxed ${
            isEmerald ? 'text-emerald-100/70' : 'text-blue-100/70'
          }`}>
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}

function SectionHeader({
  icon,
  title,
  count,
  accent,
  id,
}: {
  icon: React.ReactNode
  title: string
  count: number
  accent: 'emerald' | 'blue'
  id?: string
}) {
  return (
    <div id={id} className="flex items-center gap-4 mb-6 pt-2 scroll-mt-24">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
        accent === 'emerald' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-blue-500/20 text-blue-300'
      }`}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">{title}</h2>
      </div>
      <span className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-semibold border ${
        accent === 'emerald'
          ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
          : 'bg-blue-500/10 border-blue-500/30 text-blue-300'
      }`}>
        {count} pytań
      </span>
    </div>
  )
}

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-emerald-600/8 rounded-full filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-cyan-600/8 rounded-full filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="py-16 sm:py-20 md:py-24 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/25 rounded-full">
            <HelpCircle className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-300">Centrum pomocy</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent text-balance">
            Najczęściej zadawane pytania
          </h1>
          <p className="text-base sm:text-lg text-blue-200/60 max-w-xl mx-auto text-balance">
            Odpowiedzi na pytania o fakturowaniu, KSEF, rozliczeniach PIT i bezpieczeństwie danych.
          </p>
          <div className="flex flex-wrap justify-center gap-2 pt-1">
            <a href="#pit" className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-500/10 border border-emerald-500/25 rounded-full text-xs font-semibold text-emerald-300 hover:bg-emerald-500/20 transition-colors">
              <Receipt className="w-3.5 h-3.5" />
              {pitFaqs.length} pytań o PIT
            </a>
            <a href="#faktury" className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-blue-500/10 border border-blue-500/25 rounded-full text-xs font-semibold text-blue-300 hover:bg-blue-500/20 transition-colors">
              <FileText className="w-3.5 h-3.5" />
              {invoiceFaqs.length} pytań o fakturowanie
            </a>
          </div>
        </div>

        {/* PIT FAQ */}
        <section id="pit" className="scroll-mt-20 mb-16">
          <SectionHeader
            id="pit-header"
            icon={<Receipt className="w-5 h-5" />}
            title="Rozliczenia PIT"
            count={pitFaqs.length}
            accent="emerald"
          />
          <div className="space-y-2">
            {pitFaqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                question={faq.question}
                answer={faq.answer}
                index={idx}
                accent="emerald"
              />
            ))}
          </div>
          <div className="mt-6 p-4 rounded-xl bg-emerald-500/8 border border-emerald-500/20 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="flex-1">
              <p className="text-sm font-semibold text-emerald-300">Gotowy rozliczyć PIT?</p>
              <p className="text-xs text-emerald-200/60 mt-0.5">Wypełnij deklarację w kilka minut i wyślij do urzędu skarbowego.</p>
            </div>
            <Link href="/dashboard/pit">
              <Button className="h-9 px-5 text-sm bg-emerald-600 hover:bg-emerald-500 text-white font-semibold flex-shrink-0">
                Rozlicz PIT
              </Button>
            </Link>
          </div>
        </section>

        {/* Invoice FAQ */}
        <section id="faktury" className="scroll-mt-20 mb-16">
          <SectionHeader
            icon={<FileText className="w-5 h-5" />}
            title="Fakturowanie i KSEF"
            count={invoiceFaqs.length}
            accent="blue"
          />
          <div className="space-y-2">
            {invoiceFaqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                question={faq.question}
                answer={faq.answer}
                index={idx}
                accent="blue"
              />
            ))}
          </div>
        </section>

        {/* AdSense */}
        <div className="my-10">
          <AdSenseDisplayAuto />
        </div>

        {/* CTA */}
        <div className="mb-24 p-8 sm:p-10 bg-gradient-to-r from-blue-600/15 via-cyan-600/10 to-blue-600/15 border border-blue-500/25 rounded-2xl text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Nie znalazles odpowiedzi?</h2>
          <p className="text-blue-200/60 text-sm sm:text-base">Skontaktuj sie z nami lub zacznij korzystac z aplikacji.</p>
          <Link href="/register">
            <Button className="h-11 px-8 bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-500 hover:to-cyan-500 font-semibold shadow-lg shadow-green-500/25">
              Zacznij za darmo
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
