'use client'

import Link from 'next/link'
import { Metadata } from 'next'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { AdSenseDisplay728x90, AdSenseDisplayAuto } from '@/components/adsense-banner'

export const metadata: Metadata = {
  title: 'Poradnik PUE ZUS - Jak Wysyłać Formularze Online',
  description: 'Krok po kroku poradnik jak logować się do PUE ZUS i wysyłać formularze online. Instrukcje dla Z-3, zasiłków i innych dokumentów.',
  keywords: 'PUE ZUS, portal ZUS, formularze online, jak wysłać do ZUS, instrukcja PUE',
  openGraph: {
    title: 'Poradnik PUE ZUS - Wysyłanie Formularzy Online',
    description: 'Krok po kroku jak wysyłać dokumenty do ZUS przez PUE',
    type: 'website',
    url: 'https://www.vatfaktura.pl/poradnik-pue-zus',
  },
}

export default function PoradnikPUEZUSPage() {
  const steps = [
    {
      title: 'Zaloguj się do PUE ZUS',
      description: 'Przejdź na stronę pue.zus.pl i zaloguj się swoimi danymi.',
      details: [
        'Wejdź na https://pue.zus.pl',
        'Kliknij "Zaloguj się" lub "Moja konta"',
        'Wybierz sposób logowania (Profil Zaufany, mBanking, e-Dowód)',
        'Wpisz login i hasło'
      ]
    },
    {
      title: 'Przejdź do sekcji Usług',
      description: 'Znalezc odpowiednią sekcję dla Twojego dokumentu.',
      details: [
        'W menu głównym wybierz "Moje usługi"',
        'Poszukaj sekcji "Zaświadczenia" lub "Wnioski"',
        'Wybierz typ dokumentu (np. zaświadczenie o niezdolności)',
        'Kliknij "Nowe zaświadczenie" lub "Nowy wniosek"'
      ]
    },
    {
      title: 'Uploaduj lub wpisz dane',
      description: 'Wgraj PDF lub wpisz dane ręcznie w formularzu.',
      details: [
        'Kliknij "Wybierz plik" i wskaż pobrany PDF',
        'Lub wybierz opcję wpisania danych ręcznie',
        'Upewnij się, że wszystkie pola są wypełnione',
        'Sprawdź dane przed wysłaniem'
      ]
    },
    {
      title: 'Weryfikacja i podpis',
      description: 'Zweryfikuj dokument i podpisz elektronicznie.',
      details: [
        'Przejrzyj wydruk podglądu dokumentu',
        'Kliknij "Podpisz elektronicznie" lub "Wyślij"',
        'Podpisz usando Profil Zaufany, mBanking lub e-Dowód',
        'Poczekaj na potwierdzenie'
      ]
    },
    {
      title: 'Potwierdzenie wysyłki',
      description: 'Otrzymasz potwierdzenie wysyłki na Twoim rachunku.',
      details: [
        'System wyświetli numer potwierdzenia wysyłki',
        'Zrzuć ekran lub wydrukuj potwierdzenie',
        'Sprawdź swoją skrzynkę mailową',
        'Otrzymasz również powiadomienie SMS'
      ]
    },
    {
      title: 'Śledzenie statusu',
      description: 'Monitoruj status swojego dokumentu w PUE.',
      details: [
        'Wróć do sekcji "Moje usługi"',
        'Wybierz "Historia dokumentów" lub "Moje wnioski"',
        'Sprawdzaj status wysłanych dokumentów',
        'Oczekuj odpowiedzi od ZUS'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-blue-900 pt-20 pb-20">
      <div className="max-w-5xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/formularze-zus" className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-100 transition">
            <ArrowLeft className="w-5 h-5" />
            Wróć do formularzy
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-300 bg-clip-text text-transparent mb-4">
            Poradnik wysyłki formularzy przez PUE ZUS
          </h1>
          <p className="text-blue-200/70 text-sm sm:text-base">
            Krok po kroku jak wysłać zaświadczenia i wnioski przez Portal Usług Elektronicznych ZUS
          </p>
        </div>

        {/* AdSense */}
        <div className="mb-12">
          <AdSenseDisplay728x90 />
        </div>

        {/* Steps */}
        <div className="space-y-6 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="bg-slate-800/50 border border-blue-500/20 rounded-xl p-6 sm:p-8 hover:border-blue-500/50 transition-all">
              <div className="flex gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/50">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-blue-200/70 text-sm sm:text-base mb-4">
                    {step.description}
                  </p>
                  <ul className="space-y-2 text-sm text-blue-200/80">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AdSense */}
        <div className="mb-16">
          <AdSenseDisplayAuto />
        </div>

        {/* Tips */}
        <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/20 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Przydatne porady</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-white mb-3">Przed wysłaniem</h3>
              <ul className="text-sm text-blue-200/80 space-y-2 list-disc list-inside">
                <li>Upewnij się, że wszystkie dane są poprawne</li>
                <li>Sprawdź daty i numery PESEL</li>
                <li>Wszystkie pola powinny być wypełnione</li>
                <li>Zrób kopię przesyłanego dokumentu</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-3">Problemy logowania</h3>
              <ul className="text-sm text-blue-200/80 space-y-2 list-disc list-inside">
                <li>Zapomniałeś hasła? Kliknij "Nie pamiętam hasła"</li>
                <li>Problemy z Profilem Zaufanym? Użyj mBanking</li>
                <li>Potrzebujesz e-Dowodu? Załóż go w urzędzie gminy</li>
                <li>Kontakt: 22 560 16 00 (infolinia ZUS)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-3">Po wysłaniu</h3>
              <ul className="text-sm text-blue-200/80 space-y-2 list-disc list-inside">
                <li>Zapisz numer potwierdzenia wysyłki</li>
                <li>Czekaj na odpowiedź ZUS (5-7 dni)</li>
                <li>Sprawdzaj status w historii dokumentów</li>
                <li>Będziesz powiadomiony SMS-em i emailem</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-3">Najczęstsze błędy</h3>
              <ul className="text-sm text-blue-200/80 space-y-2 list-disc list-inside">
                <li>Zły format pliku (upewnij się, że to PDF)</li>
                <li>Nieczytelny dokument</li>
                <li>Niekompletne dane</li>
                <li>Brakująca podpis lub pieczęć lekarza</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-blue-900/30 border border-blue-500/20 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Najczęstsze pytania</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-white mb-2">Czy muszę mieć Profil Zaufany?</h3>
              <p className="text-sm text-blue-200/80">
                Nie, ale Profil Zaufany to najszybszy sposób. Możesz również zalogować się przez mBanking, e-Dowód lub tradycyjnie na konto ZUS.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Ile czasu trwa wysyłka?</h3>
              <p className="text-sm text-blue-200/80">
                Wysyłka jest natychmiastowa, ale ZUS rozpatruje dokumenty w ciągu 5-7 dni roboczych. Możesz śledzić status w PUE.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Co jeśli wysłę błędny dokument?</h3>
              <p className="text-sm text-blue-200/80">
                Możesz wysłać poprawiony dokument. System ZUS weźmie pod uwagę ostatnią wysłaną wersję. Możesz też skontaktować się z infolinią ZUS.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Czy mogę wysłać dokument spoza Polski?</h3>
              <p className="text-sm text-blue-200/80">
                Tak, PUE ZUS dostęp jest dostępny z dowolnego miejsca na świecie. Wystarczy internet i konto w ZUS.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-green-600 to-cyan-600 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Gotowy do wysłania?</h2>
          <p className="text-white/90 mb-6">Wróć do generatora formularzy i pobierz potrzebny dokument</p>
          <Link href="/formularze-zus" className="inline-block px-8 py-3 bg-white text-green-600 hover:bg-blue-50 font-bold rounded-lg shadow-lg transition-all">
            Przejdź do formularzy
          </Link>
        </div>
      </div>
    </div>
  )
}
