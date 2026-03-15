import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Regulamin — VAT Faktura',
  description: 'Regulamin korzystania z serwisu VAT Faktura. Zasady dostępu do usług, prawa i obowiązki użytkowników, ograniczenia odpowiedzialności oraz postanowienia dotyczące reklam.',
  alternates: { canonical: 'https://www.vatfaktura.pl/terms' },
}

const LAST_UPDATED = '14 marca 2026'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Regulamin serwisu</h1>
          <p className="text-blue-300/70 text-sm">VAT Faktura — ostatnia aktualizacja: {LAST_UPDATED}</p>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 space-y-10 text-blue-100">

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">1. Postanowienia ogólne</h2>
            <p>
              Niniejszy Regulamin określa zasady korzystania z serwisu <strong className="text-white">VAT Faktura</strong> dostępnego pod adresem{' '}
              <a href="https://www.vatfaktura.pl" className="text-cyan-300 underline hover:text-cyan-200">www.vatfaktura.pl</a>{' '}
              (dalej: &quot;Serwis&quot;), prowadzonego przez Pawła Śliwińskiego (dalej: &quot;Usługodawca&quot;).
            </p>
            <p>
              Korzystanie z Serwisu jest równoznaczne z akceptacją niniejszego Regulaminu. Jeśli nie zgadzasz się z którymkolwiek postanowieniem — zaprzestań korzystania z Serwisu.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">2. Definicje</h2>
            <ul className="list-disc list-inside space-y-2 ml-4 text-blue-200/80">
              <li><strong className="text-white">Serwis</strong> — platforma internetowa VAT Faktura dostępna pod adresem www.vatfaktura.pl</li>
              <li><strong className="text-white">Użytkownik</strong> — każda osoba fizyczna lub prawna korzystająca z Serwisu</li>
              <li><strong className="text-white">Usługi</strong> — wystawianie faktur, rozliczenia PIT, integracja KSEF i inne funkcje oferowane przez Serwis</li>
              <li><strong className="text-white">Konto</strong> — indywidualne konto Użytkownika w Serwisie</li>
              <li><strong className="text-white">KSEF</strong> — Krajowy System e-Faktur prowadzony przez Ministerstwo Finansów RP</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">3. Zakres usług</h2>
            <p>Serwis udostępnia bezpłatnie następujące funkcje:</p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-blue-200/80">
              <li>Wystawianie faktur VAT, faktur proforma i korekt</li>
              <li>Integracja z Krajowym Systemem e-Faktur (KSEF)</li>
              <li>Rozliczanie deklaracji podatkowych: PIT-37, PIT-36, PIT-36L, PIT-28, PIT-38, PIT-39, PIT-16A, PIT-19A</li>
              <li>Podpisywanie deklaracji danymi autoryzującymi lub Profilem Zaufanym</li>
              <li>Wysyłka e-Deklaracji do systemu Ministerstwa Finansów i pobieranie UPO</li>
              <li>Zarządzanie bazą kontrahentów i produktów</li>
              <li>Eksport danych do formatu PDF</li>
            </ul>
            <p className="mt-2">
              Usługodawca zastrzega sobie prawo do modyfikacji zakresu usług, w tym do wprowadzania nowych funkcji lub ograniczania istniejących, z zachowaniem zasady bezpłatności podstawowych funkcji.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">4. Wymagania techniczne</h2>
            <p>Do korzystania z Serwisu wymagane jest:</p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-blue-200/80">
              <li>Dostęp do Internetu</li>
              <li>Przeglądarka internetowa obsługująca JavaScript i localStorage (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)</li>
              <li>Aktywna obsługa JavaScript</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">5. Rejestracja konta</h2>
            <p>
              Rejestracja konta jest dobrowolna. Podczas rejestracji Użytkownik podaje adres e-mail i hasło. Użytkownik zobowiązany jest do podania prawdziwych danych i zachowania hasła w tajemnicy. Jeden Użytkownik może posiadać jedno konto.
            </p>
            <p>
              Usługodawca może zablokować lub usunąć konto w przypadku naruszenia postanowień Regulaminu.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">6. Bezpieczeństwo danych i przechowywanie</h2>
            <p>
              Dane faktur, kontrahentów i ustawień Użytkownika są przechowywane wyłącznie lokalnie — w pamięci przeglądarki Użytkownika (localStorage/IndexedDB). Dane te <strong className="text-white">nie są przesyłane ani przechowywane na serwerach Usługodawcy</strong>.
            </p>
            <p>
              Usunięcie danych przeglądarki lub korzystanie w trybie incognito może spowodować utratę danych. Usługodawca nie ponosi odpowiedzialności za utratę danych spowodowaną działaniem Użytkownika lub awariami sprzętu.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">7. Zakazy i ograniczenia</h2>
            <p>Użytkownik zobowiązuje się nie używać Serwisu w celu:</p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-blue-200/80">
              <li>Wystawiania faktur fikcyjnych, pustych lub w celu popełnienia przestępstwa podatkowego</li>
              <li>Naruszania przepisów prawa polskiego lub unijnego</li>
              <li>Wysyłania wirusów, złośliwego oprogramowania lub innych szkodliwych treści</li>
              <li>Automatycznego masowego pobierania danych (scraping) bez zgody Usługodawcy</li>
              <li>Podszywania się pod inne osoby lub podmioty</li>
              <li>Działania na szkodę Usługodawcy lub innych Użytkowników</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">8. Reklamy i treści sponsorowane</h2>
            <p>
              Serwis wyświetla reklamy dostarczane przez <strong className="text-white">Google AdSense</strong> (Google Ireland Limited) oraz linki partnerskie do usług firm trzecich. Reklamy są wyraźnie oznaczone. Przychody z reklam i programów partnerskich umożliwiają świadczenie usług bezpłatnie.
            </p>
            <p>
              Usługodawca nie ponosi odpowiedzialności za treści reklamowe ani za produkty i usługi oferowane przez reklamodawców. Kliknięcie w reklamę i dokonanie zakupu u reklamodawcy jest wyłączną decyzją Użytkownika.
            </p>
            <p>
              Użytkownik może zrezygnować z reklam spersonalizowanych poprzez{' '}
              <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ustawienia reklam Google</a>{' '}
              lub narzędzia dostępne w naszym{' '}
              <Link href="/privacy" className="text-cyan-300 underline">Panelu zgód (Polityka Prywatności)</Link>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">9. Odpowiedzialność Użytkownika za rozliczenia podatkowe</h2>
            <p>
              Użytkownik jest wyłącznie odpowiedzialny za prawidłowość i zgodność z prawem wystawionych faktur oraz złożonych deklaracji podatkowych. VAT Faktura służy jako narzędzie pomocnicze — nie zastępuje doradztwa podatkowego ani prawnego.
            </p>
            <p>
              Przed złożeniem deklaracji PIT zalecamy weryfikację danych z dokumentami źródłowymi (PIT-11, PIT-8C itp.). W razie wątpliwości skonsultuj się z doradcą podatkowym.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">10. Ograniczenie odpowiedzialności Usługodawcy</h2>
            <p>
              Serwis jest udostępniany &quot;w stanie istniejącym&quot; (as-is). Usługodawca nie gwarantuje nieprzerwanego dostępu, braku błędów ani dokładności obliczeń podatkowych. Do maksymalnego zakresu dozwolonego przez obowiązujące prawo, Usługodawca nie ponosi odpowiedzialności za:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-blue-200/80">
              <li>Straty finansowe wynikające z błędnie wypełnionych deklaracji podatkowych</li>
              <li>Utratę danych przechowywanych lokalnie w przeglądarce</li>
              <li>Przerwy w dostępie do Serwisu lub integracji z KSEF/e-Deklaracje (leżące po stronie Ministerstwa Finansów)</li>
              <li>Działania osób trzecich (hakerzy, dostawcy usług chmurowych)</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">11. Własność intelektualna</h2>
            <p>
              Wszelkie prawa autorskie, znaki towarowe i inne prawa własności intelektualnej do Serwisu należą do Usługodawcy lub podmiotów licencjonujących. Zabrania się kopiowania, modyfikowania lub dystrybucji jakichkolwiek elementów Serwisu bez pisemnej zgody.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">12. Prywatność</h2>
            <p>
              Zasady przetwarzania danych osobowych opisane są w{' '}
              <Link href="/privacy" className="text-cyan-300 underline hover:text-cyan-200">Polityce Prywatności</Link>,
              która stanowi integralną część niniejszego Regulaminu.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">13. Zmiany Regulaminu</h2>
            <p>
              Usługodawca zastrzega sobie prawo do zmiany Regulaminu. O istotnych zmianach poinformuje poprzez komunikat w Serwisie lub wiadomość e-mail (jeśli Użytkownik posiada konto). Dalsze korzystanie z Serwisu po wejściu w życie zmian oznacza ich akceptację.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">14. Prawo właściwe i rozstrzyganie sporów</h2>
            <p>
              Niniejszy Regulamin podlega prawu polskiemu. Wszelkie spory wynikające z korzystania z Serwisu będą rozstrzygane przez sąd właściwy dla siedziby Usługodawcy, z uwzględnieniem przepisów o ochronie konsumentów.
            </p>
            <p>
              Konsumenci mają prawo skorzystać z pozasądowego rozwiązywania sporów za pośrednictwem Platformy ODR:{' '}
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">ec.europa.eu/consumers/odr</a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">15. Kontakt</h2>
            <p>Pytania dotyczące Regulaminu kieruj na:</p>
            <p>Email: <a href="mailto:pawsli2532@gmail.com" className="text-cyan-300 underline hover:text-cyan-200">pawsli2532@gmail.com</a></p>
            <p>Adres: ul. Kościuszki 15e/2, 87-100 Toruń</p>
          </section>

          <div className="pt-6 border-t border-blue-500/20 flex flex-wrap gap-4 items-center justify-between">
            <p className="text-sm text-blue-200/50">Ostatnia aktualizacja: {LAST_UPDATED}</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="text-sm text-cyan-300 hover:text-cyan-200 underline">Polityka Prywatności</Link>
              <Link href="/contact" className="text-sm text-cyan-300 hover:text-cyan-200 underline">Kontakt</Link>
            </div>
          </div>

        </div>

        <div className="mt-8">
          <Link href="/" className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
            Wróć na stronę główną
          </Link>
        </div>
      </div>
    </div>
  )
}
