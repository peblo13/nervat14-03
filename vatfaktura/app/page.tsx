import Link from 'next/link'

export const metadata = {
  title: 'VAT Faktura - Faktury, PIT, ZUS | KSEF',
  description: 'Bezpłatne faktury online. Plan darmowy z 5 fakturami, Premium 99 PLN za nieograniczone.',
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur border-b border-slate-700 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="text-xl font-bold text-white">VAT Faktura</div>
          <div className="flex gap-4">
            <Link href="/pricing" className="text-slate-300 hover:text-white">Cennik</Link>
            <Link href="/register" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded">Zaloguj</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Faktury bez limitów bez kosztów</h1>
        <p className="text-xl text-slate-300 mb-8">Darmowy plan z 5 fakturami, Premium za 99 PLN za nieograniczone.</p>
        
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div><div className="text-2xl font-bold text-green-400">5</div><p className="text-sm text-slate-300">Faktur darmowo</p></div>
          <div><div className="text-2xl font-bold text-green-400">∞</div><p className="text-sm text-slate-300">Faktur Premium</p></div>
          <div><div className="text-2xl font-bold text-green-400">99 PLN</div><p className="text-sm text-slate-300">/miesiąc</p></div>
        </div>

        <div className="flex gap-4 justify-center">
          <Link href="/register" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded">Zacznij za darmo</Link>
          <Link href="/pricing" className="px-8 py-3 border border-blue-500 text-blue-300 font-bold rounded">Cennik</Link>
        </div>

        <div className="grid grid-cols-3 gap-8 text-center py-12 border-t border-slate-700 mt-12">
          <div><div className="text-3xl font-bold text-white">50K+</div><p className="text-slate-400">użytkowników</p></div>
          <div><div className="text-3xl font-bold text-white">2M+</div><p className="text-slate-400">faktur</p></div>
          <div><div className="text-3xl font-bold text-white">4.9/5</div><p className="text-slate-400">ocena</p></div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Dlaczego VAT Faktura?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {title: 'Szybkie', desc: 'Utwórz fakturę w kilka sekund'},
              {title: 'Bezpieczne', desc: 'Dane chronione i przechowywane bezpiecznie'},
              {title: 'PDF Export', desc: 'Pobierz faktury jako PDF'},
              {title: 'Szablony', desc: 'Gotowe szablony dla firmy'},
              {title: 'Obliczenia', desc: 'Automatyczne wyliczanie VAT'},
              {title: 'Profesjonalne', desc: 'Faktury z profesjonalnym designem'},
            ].map((f, i) => (
              <div key={i} className="p-6 bg-slate-700/50 border border-slate-600 rounded">
                <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
                <p className="text-slate-300">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Elastyczne plany</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-slate-700/30 border border-slate-600 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-4">Darmowy</h3>
              <div className="text-4xl font-bold text-green-400 mb-4">0 PLN</div>
              <p className="text-slate-300 mb-6">5 faktur/miesiąc</p>
              <ul className="space-y-2 text-left text-slate-300">
                <li>✓ 5 faktur</li>
                <li>✓ PDF Export</li>
                <li>✓ Szablony</li>
                <li>✓ kSEF</li>
              </ul>
            </div>
            <div className="p-8 bg-gradient-to-br from-green-900/40 to-slate-700 border-2 border-green-500 rounded-lg">
              <div className="inline-block mb-4 px-3 py-1 bg-green-500 text-white text-sm font-bold rounded">NAJLEPSZY</div>
              <h3 className="text-2xl font-bold text-white mb-4">Premium</h3>
              <div className="text-4xl font-bold text-green-400 mb-4">99 PLN<span className="text-lg">/mth</span></div>
              <p className="text-slate-300 mb-6">∞ faktur</p>
              <ul className="space-y-2 text-left text-slate-300 mb-8">
                <li>✓ Nieograniczone</li>
                <li>✓ Wszystkie funkcje</li>
                <li>✓ Wsparcie</li>
                <li>✓ API</li>
              </ul>
              <Link href="/pricing" className="block w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded">
                Wybierz Premium
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-blue-600/20 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Gotów?</h2>
        <p className="text-lg text-slate-300 mb-8">Załóż konto i zacznij fakturować za darmo</p>
        <Link href="/register" className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded text-lg">
          Zacznij za darmo - 5 faktur
        </Link>
      </section>
    </div>
  )
}
