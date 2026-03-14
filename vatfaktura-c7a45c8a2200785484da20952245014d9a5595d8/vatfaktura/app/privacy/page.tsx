import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Polityka Prywatności — VAT Faktura',
  description: 'Polityka prywatności i ochrony danych osobowych VAT Faktura. Informacje o plikach cookies, reklamach Google AdSense i przetwarzaniu danych osobowych zgodnie z RODO.',
  alternates: { canonical: 'https://www.vatfaktura.pl/privacy' },
}

const LAST_UPDATED = '14 marca 2026'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Polityka Prywatności</h1>
          <p className="text-blue-300/70 text-sm">Ostatnia aktualizacja: {LAST_UPDATED}</p>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 space-y-10 text-blue-100">

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">1. Administrator danych</h2>
            <p>
              Administratorem danych osobowych jest <strong className="text-white">VAT Faktura</strong> (dalej: &quot;my&quot;, &quot;nas&quot;, &quot;nasze&quot;), dostępna pod adresem{' '}
              <a href="https://www.vatfaktura.pl" className="text-cyan-300 underline hover:text-cyan-200">www.vatfaktura.pl</a>.
              Kontakt w sprawach danych osobowych:{' '}
              <a href="mailto:kontakt@vatfaktura.pl" className="text-cyan-300 underline hover:text-cyan-200">kontakt@vatfaktura.pl</a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">2. Jakie dane zbieramy</h2>
            <p>Zbieramy dane, które podajesz nam dobrowolnie, w tym:</p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-blue-200/80">
              <li>Adres e-mail (przy rejestracji konta)</li>
              <li>Nazwa firmy i NIP (przy konfiguracji profilu)</li>
              <li>Dane kontrahentów i treść faktur (przechowywane lokalnie w przeglądarce)</li>
            </ul>
            <p className="mt-2">
              Dane faktur <strong className="text-white">nie są przesyłane ani przechowywane na naszych serwerach</strong> — pozostają wyłącznie w pamięci Twojej przeglądarki (localStorage).
            </p>
            <p>
              Ponadto automatycznie zbieramy dane techniczne: adres IP, typ przeglądarki, system operacyjny, czas wizyty, przeglądane strony — na potrzeby analizy ruchu i wyświetlania reklam.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">3. Pliki cookies</h2>
            <p>
              Nasza strona wykorzystuje pliki cookies (ciasteczka) — małe pliki tekstowe zapisywane na Twoim urządzeniu. Stosujemy:
            </p>
            <div className="space-y-4 mt-2">
              <div className="bg-slate-700/40 rounded-lg p-4 border border-blue-500/10">
                <h3 className="font-semibold text-white mb-1">Cookies niezbędne</h3>
                <p className="text-sm text-blue-200/70">Wymagane do działania strony (sesja użytkownika, zgoda na cookies). Nie mogą być wyłączone.</p>
              </div>
              <div className="bg-slate-700/40 rounded-lg p-4 border border-blue-500/10">
                <h3 className="font-semibold text-white mb-1">Cookies analityczne (Google Analytics)</h3>
                <p className="text-sm text-blue-200/70">
                  Używamy Google Analytics 4 do analizy ruchu. Google może gromadzić dane zgodnie z własną{' '}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Polityką Prywatności</a>.
                  Możesz zablokować Analytics za pomocą{' '}
                  <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">wtyczki opt-out</a>.
                </p>
              </div>
              <div className="bg-slate-700/40 rounded-lg p-4 border border-amber-500/20">
                <h3 className="font-semibold text-white mb-1">Cookies reklamowe (Google AdSense)</h3>
                <p className="text-sm text-blue-200/70">
                  Na naszej stronie wyświetlamy reklamy dostarczane przez <strong className="text-white">Google AdSense</strong> (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irlandia).
                  Google może używać plików cookies do wyświetlania reklam opartych na Twoich poprzednich wizytach na naszej stronie lub innych stronach. Możesz zrezygnować z reklam spersonalizowanych odwiedzając{' '}
                  <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ustawienia reklam Google</a>{' '}
                  lub stronę{' '}
                  <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">aboutads.info</a>.
                  Więcej informacji:{' '}
                  <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Jak Google używa cookies w reklamach</a>.
                </p>
              </div>
            </div>
            <p className="text-sm text-blue-200/60 mt-3">
              Możesz zarządzać ustawieniami cookies w przeglądarce lub skorzystać z{' '}
              <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">NAI Opt-Out</a>{' '}
              oraz{' '}
              <a href="https://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Your Online Choices (EU)</a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">4. Podstawa prawna i cele przetwarzania</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-blue-200/80 border-collapse">
                <thead>
                  <tr className="border-b border-blue-500/20">
                    <th className="text-left py-2 pr-4 text-white font-semibold">Cel przetwarzania</th>
                    <th className="text-left py-2 pr-4 text-white font-semibold">Podstawa prawna (RODO)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-blue-500/10">
                  <tr><td className="py-2 pr-4">Świadczenie usług (konto, faktury)</td><td className="py-2">Art. 6 ust. 1 lit. b — wykonanie umowy</td></tr>
                  <tr><td className="py-2 pr-4">Analiza ruchu (Google Analytics)</td><td className="py-2">Art. 6 ust. 1 lit. a — zgoda</td></tr>
                  <tr><td className="py-2 pr-4">Wyświetlanie reklam (Google AdSense)</td><td className="py-2">Art. 6 ust. 1 lit. a — zgoda</td></tr>
                  <tr><td className="py-2 pr-4">Komunikacja e-mail</td><td className="py-2">Art. 6 ust. 1 lit. f — uzasadniony interes</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">5. Odbiorcy danych</h2>
            <p>Twoje dane mogą być przekazywane następującym podmiotom:</p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-blue-200/80">
              <li><strong className="text-white">Google LLC</strong> — Google Analytics, Google AdSense (USA; Standard Contractual Clauses)</li>
              <li><strong className="text-white">Vercel Inc.</strong> — hosting platformy (USA; Standard Contractual Clauses)</li>
            </ul>
            <p className="text-sm text-blue-200/60">Nie sprzedajemy Twoich danych osobowych żadnym stronom trzecim.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">6. Okres przechowywania danych</h2>
            <p>
              Dane konta przechowujemy przez czas trwania konta, a po jego usunięciu przez maksymalnie 30 dni (kopia zapasowa).
              Dane analityczne w Google Analytics są przechowywane przez 14 miesięcy.
              Dane faktur przechowujesz wyłącznie Ty — lokalnie w przeglądarce.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">7. Twoje prawa (RODO)</h2>
            <p>Przysługują Ci następujące prawa:</p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-blue-200/80">
              <li>Prawo dostępu do danych (art. 15 RODO)</li>
              <li>Prawo do sprostowania danych (art. 16 RODO)</li>
              <li>Prawo do usunięcia danych (&quot;prawo do bycia zapomnianym&quot;, art. 17 RODO)</li>
              <li>Prawo do ograniczenia przetwarzania (art. 18 RODO)</li>
              <li>Prawo do przenoszenia danych (art. 20 RODO)</li>
              <li>Prawo do sprzeciwu wobec przetwarzania (art. 21 RODO)</li>
              <li>Prawo do wycofania zgody w każdym czasie (bez wpływu na wcześniejsze przetwarzanie)</li>
              <li>Prawo do skargi do Prezesa UODO (<a href="https://uodo.gov.pl" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">uodo.gov.pl</a>)</li>
            </ul>
            <p>Aby skorzystać z praw, skontaktuj się: <a href="mailto:kontakt@vatfaktura.pl" className="text-cyan-300 underline">kontakt@vatfaktura.pl</a></p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">8. Bezpieczeństwo danych</h2>
            <p>
              Stosujemy szyfrowanie HTTPS (TLS), politykę minimalnych uprawnień i regularne przeglądy bezpieczeństwa.
              Niemniej żaden system nie jest w 100% bezpieczny — korzystasz z serwisu na własne ryzyko.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">9. Dzieci</h2>
            <p>
              Nasza usługa nie jest skierowana do osób poniżej 16. roku życia. Nie zbieramy świadomie danych od dzieci.
              Jeśli dowiesz się, że dziecko przekazało nam swoje dane — skontaktuj się z nami niezwłocznie.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">10. Zmiany polityki</h2>
            <p>
              Zastrzegamy sobie prawo do zmiany niniejszej polityki. O istotnych zmianach poinformujemy poprzez widoczny komunikat na stronie lub e-mail.
              Data ostatniej aktualizacji widnieje w nagłówku dokumentu.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">11. Kontakt</h2>
            <p>W sprawach dotyczących prywatności i danych osobowych:</p>
            <p>Email: <a href="mailto:kontakt@vatfaktura.pl" className="text-cyan-300 underline">kontakt@vatfaktura.pl</a></p>
            <p>Strona: <a href="https://www.vatfaktura.pl/contact" className="text-cyan-300 underline">www.vatfaktura.pl/contact</a></p>
          </section>

          <div className="pt-6 border-t border-blue-500/20 flex flex-wrap gap-4 items-center justify-between">
            <p className="text-sm text-blue-200/50">Ostatnia aktualizacja: {LAST_UPDATED}</p>
            <div className="flex gap-3">
              <Link href="/terms" className="text-sm text-cyan-300 hover:text-cyan-200 underline">Regulamin</Link>
              <Link href="/contact" className="text-sm text-cyan-300 hover:text-cyan-200 underline">Kontakt</Link>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Link href="/">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
              Wróć na stronę główną
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
