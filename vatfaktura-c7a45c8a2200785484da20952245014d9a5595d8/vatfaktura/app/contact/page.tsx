import { Metadata } from 'next'
import Link from 'next/link'
import { Mail, Clock, HelpCircle, FileText, BookOpen, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kontakt — VAT Faktura | Pomoc i Wsparcie',
  description: 'Skontaktuj się z zespołem VAT Faktura. Pytania o fakturowanie, rozliczenie PIT, integrację KSEF lub konto użytkownika. Odpowiadamy w ciągu 24 godzin.',
  alternates: { canonical: 'https://www.vatfaktura.pl/contact' },
  openGraph: {
    title: 'Kontakt — VAT Faktura',
    description: 'Skontaktuj się z zespołem VAT Faktura. Odpowiadamy w ciągu 24 godzin roboczych.',
    url: 'https://www.vatfaktura.pl/contact',
    type: 'website',
    locale: 'pl_PL',
  },
}

const topics = [
  {
    icon: <FileText className="w-5 h-5" />,
    title: 'Pytania o fakturowanie',
    desc: 'Faktury VAT, faktury proforma, korekty, duplikaty, eksport do PDF.',
  },
  {
    icon: <HelpCircle className="w-5 h-5" />,
    title: 'Rozliczenia PIT',
    desc: 'PIT-37, PIT-36, PIT-28, podpis elektroniczny, e-Deklaracje, UPO.',
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: 'KSEF i integracje',
    desc: 'Konfiguracja KSEF, wysyłka faktur, certyfikaty, tokeny autoryzacyjne.',
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: 'Konto i dane',
    desc: 'Rejestracja, logowanie, usunięcie konta, eksport danych (RODO).',
  },
]

const faq = [
  {
    q: 'Czy VAT Faktura jest całkowicie bezpłatna?',
    a: 'Tak, 100% bezpłatnie na zawsze — bez abonamentów, bez limitów faktur, bez karty kredytowej. Utrzymujemy się z reklam i programów partnerskich.',
  },
  {
    q: 'Czy moje faktury są bezpieczne?',
    a: 'Tak. Dane faktur przechowywane są wyłącznie lokalnie w Twojej przeglądarce (localStorage). Nic nie jest przesyłane na nasze serwery.',
  },
  {
    q: 'Jak wysłać PIT do urzędu skarbowego przez VAT Faktura?',
    a: 'Przejdź do sekcji "Rozlicz PIT", wybierz odpowiedni formularz, wypełnij dane, podpisz elektronicznie (danymi autoryzującymi lub Profilem Zaufanym) i wyślij jednym kliknięciem.',
  },
  {
    q: 'Czy VAT Faktura obsługuje KSEF?',
    a: 'Tak, VAT Faktura jest w pełni zintegrowana z Krajowym Systemem e-Faktur (KSEF). Możesz wysyłać i odbierać faktury strukturyzowane bezpośrednio z aplikacji.',
  },
  {
    q: 'Ile czasu zajmuje odpowiedź na email?',
    a: 'Odpowiadamy w ciągu 24 godzin roboczych (poniedziałek–piątek, 9:00–18:00 CET). W weekendy możliwe opóźnienie do poniedziałku.',
  },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/50 to-slate-900 pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Skontaktuj się z nami</h1>
          <p className="text-blue-200/70 text-lg max-w-xl mx-auto">
            Masz pytanie lub problem? Jesteśmy tutaj, żeby pomóc. Zazwyczaj odpowiadamy w ciągu jednego dnia roboczego.
          </p>
        </div>

        {/* Main contact card */}
        <div className="bg-slate-800/60 border border-blue-500/20 rounded-2xl p-8 sm:p-10 mb-10">
          <div className="flex flex-col sm:flex-row gap-8 items-start">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white mb-2">Email</h2>
              <p className="text-blue-200/70 mb-4">
                Wyślij wiadomość na nasz adres — odpowiadamy na wszystkie pytania dotyczące fakturowania, PIT, KSEF i konta użytkownika.
              </p>
              <a
                href="mailto:kontakt@vatfaktura.pl"
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold rounded-xl shadow-lg transition-all"
              >
                <Mail className="w-5 h-5" />
                kontakt@vatfaktura.pl
              </a>
            </div>
            <div className="flex-shrink-0 bg-slate-700/50 border border-blue-500/15 rounded-xl p-6 min-w-[200px]">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-cyan-300" />
                <span className="text-sm font-semibold text-white">Czas odpowiedzi</span>
              </div>
              <p className="text-blue-200/70 text-sm mb-3">Do 24 godzin roboczych</p>
              <div className="h-px bg-blue-500/15 mb-3" />
              <p className="text-xs text-blue-200/50 font-medium uppercase tracking-wider">Godziny wsparcia</p>
              <p className="text-sm text-blue-200/70 mt-1">Pon–Pt, 9:00–18:00</p>
              <p className="text-xs text-blue-200/50 mt-0.5">Strefa CET (Polska)</p>
            </div>
          </div>
        </div>

        {/* Topic grid */}
        <h2 className="text-2xl font-bold text-white mb-6">W czym możemy pomóc</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
          {topics.map((t, i) => (
            <div key={i} className="bg-slate-800/40 border border-blue-500/15 rounded-xl p-5 flex gap-4 items-start hover:border-blue-400/30 transition-colors">
              <div className="p-2 bg-blue-500/15 rounded-lg text-cyan-300 flex-shrink-0">{t.icon}</div>
              <div>
                <h3 className="font-semibold text-white mb-1">{t.title}</h3>
                <p className="text-sm text-blue-200/60">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 className="text-2xl font-bold text-white mb-6">Najczęstsze pytania</h2>
        <div className="space-y-4 mb-14">
          {faq.map((item, i) => (
            <div key={i} className="bg-slate-800/40 border border-blue-500/15 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-blue-200/70 text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>

        {/* Footer links */}
        <div className="flex flex-wrap gap-4 justify-center pt-6 border-t border-blue-500/15">
          <Link href="/" className="text-sm text-blue-300 hover:text-white transition-colors">Strona główna</Link>
          <Link href="/faq" className="text-sm text-blue-300 hover:text-white transition-colors">Pełne FAQ</Link>
          <Link href="/privacy" className="text-sm text-blue-300 hover:text-white transition-colors">Polityka Prywatności</Link>
          <Link href="/terms" className="text-sm text-blue-300 hover:text-white transition-colors">Regulamin</Link>
          <Link href="/about" className="text-sm text-blue-300 hover:text-white transition-colors">O nas</Link>
        </div>

      </div>
    </main>
  )
}
