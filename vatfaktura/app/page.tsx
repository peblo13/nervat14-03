// v5 - Cache clear
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'VAT Faktura - Faktury, PIT, ZUS, Generator Umów, Mapa Urzędów | KSEF',
  description: 'Bezpłatne narzędzie do tworzenia faktur. 5 faktur miesięcznie za darmo, Premium za 99 PLN. Integracja z kSEF, PIT, ZUS - wszystko online.',
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-white">VAT Faktura</div>
          <div className="flex items-center gap-4">
            <Link href="/pricing">
              <Button variant="ghost" className="text-slate-300 hover:text-white">Cennik</Button>
            </Link>
            <Link href="/login">
              <Button variant="ghost" className="text-slate-300 hover:text-white">Zaloguj się</Button>
            </Link>
            <Link href="/register">
              <Button className="bg-blue-600 hover:bg-blue-700">Rozpocznij</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Fakturowanie <br className="hidden sm:block" />bez limitów
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Profesjonalna, nowoczesna platforma do tworzenia faktur. 5 faktur za darmo każdego miesiąca, Premium za 99 PLN dla nieograniczonego fakturowania.
          </p>
          
          {/* Trust Signals */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-400 mb-1">5</div>
              <div className="text-sm text-slate-400">Faktur darmowo</div>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-400 mb-1">∞</div>
              <div className="text-sm text-slate-400">W planie Premium</div>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-400 mb-1">99 PLN</div>
              <div className="text-sm text-slate-400">Za Premium/miesiąc</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/register">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Rozpocznij za darmo
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
                Zaloguj się
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-white">50 000+</div>
            <div className="text-sm text-slate-400">aktywnych użytkowników</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-white">2 000 000+</div>
            <div className="text-sm text-slate-400">wystawionych faktur</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-white">4.9/5</div>
            <div className="text-sm text-slate-400">średnia ocena</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-slate-800/50 rounded-lg">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">Dlaczego VAT Faktura?</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Szybkie tworzenie', desc: 'Utwórz profesjonalną fakturę w kilka sekund' },
            { title: 'Bezpieczne', desc: 'Twoje dane są chronione i przechowywane bezpiecznie' },
            { title: 'Export do PDF', desc: 'Pobierz i wyślij faktury w formacie PDF' },
            { title: 'Szablony', desc: 'Korzystaj z gotowych szablonów dla swojej firmy' },
            { title: 'Automatyczne obliczenia', desc: 'Wszystkie obliczenia wykonywane automatycznie' },
            { title: 'Profesjonalny wygląd', desc: 'Faktury z designem dla Twojej firmy' },
          ].map((feature, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">Jak to działa?</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { step: '1', title: 'Zarejestruj się', desc: 'Załóż bezpłatne konto w 30 sekund. Bez karty kredytowej.' },
            { step: '2', title: 'Utwórz fakturę', desc: 'Wypełnij dane i gotowe. System obliczy VAT i sumy.' },
            { step: '3', title: 'Wyślij lub pobierz', desc: 'Wyślij emailem lub pobierz jako PDF.' },
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-4">{item.step}</div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/register">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Zacznij za darmo teraz
            </Button>
          </Link>
        </div>
      </section>

      {/* kSEF Integration */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-slate-800/50 rounded-lg">
        <h2 className="text-3xl font-bold text-white mb-8">Integracja Premium</h2>
        <p className="text-slate-300 mb-8">
          VAT Faktura jest w pełni zintegrowana z kSEF (Krajowym Systemem e-Faktur). Wysyłaj faktury bezpośrednio do kSEF za jednym kliknięciem - dostępne dla wszystkich użytkowników bez dodatkowych opłat.
        </p>
        <ul className="space-y-2 text-slate-300">
          <li>✓ Integracja z kSEF</li>
          <li>✓ Wysyłanie e-faktur</li>
          <li>✓ Pełna zgodność prawna</li>
        </ul>
      </section>

      {/* Partners */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Poleceni Partnerzy</h2>
        <p className="text-center text-slate-400 mb-12">Sprawdzeni partnerzy zaufania dla Twojego biznesu</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'Wise', desc: 'Przelewy międzynarodowe tanio i szybko' },
            { name: 'Stripe', desc: 'Płatności online dla Twojej firmy' },
            { name: 'Google Workspace', desc: 'Email i narzędzia dla zespołu' },
          ].map((partner, idx) => (
            <div key={idx} className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-2">{partner.name}</h3>
              <p className="text-slate-400">{partner.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Gotów na zmianę?</h2>
        <p className="text-slate-300 mb-8">
          Załóż darmowe konto i zacznij fakturować dzisiaj. Bez limitów, bez karty kredytowej.
        </p>
        <Link href="/register">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Rozpocznij
          </Button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-400 text-sm">
          <p>© 2026 VAT Faktura. Wszystkie prawa zastrzeżone.</p>
          <p className="mt-2">Ujawnienie: VAT Faktura zawiera linki partnerskie. Jeśli dokonasz zakupu poprzez te linki, możemy otrzymać prowizję bez dodatkowych kosztów dla Ciebie.</p>
        </div>
      </footer>
    </div>
  )
}
