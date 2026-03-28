'use client'

import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import { useUser } from '@/hooks/useUser'
import { SUBSCRIPTION_PLANS } from '@/lib/stripe'
import Link from 'next/link'
import { AdSenseDisplay728x90, AdSenseDisplayAuto } from '@/components/adsense-banner'

export default function PricingPage() {
  const { user } = useUser()

  const plans = [
    SUBSCRIPTION_PLANS.free,
    SUBSCRIPTION_PLANS.premium,
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8 sm:py-12 px-3 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block mb-4 px-3 sm:px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-full">
            <span className="text-xs sm:text-sm font-semibold text-blue-300">ELASTYCZNE PLANY CENOWE</span>
          </div>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 px-2">
            Zacznij za darmo, płać gdy potrzebujesz
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-300 px-4">
            Darmowy plan z 5 fakturami miesięcznie. Kiedy ich będzie za mało, przejdź na Premium.
          </p>
        </div>

        {/* Trust Signals */}
        <div className="grid grid-cols-1 xs:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">5</div>
            <p className="text-xs sm:text-sm md:text-base text-slate-300">Faktur w planie darmowym</p>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">∞</div>
            <p className="text-xs sm:text-sm md:text-base text-slate-300">Faktur w planie Premium</p>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">99 PLN</div>
            <p className="text-xs sm:text-sm md:text-base text-slate-300">Miesięczna opłata za Premium</p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          {plans.map((plan, idx) => (
            <div
              key={plan.id}
              className={`relative rounded-lg transition-all duration-300 shadow-lg ${
                plan.id === 'premium'
                  ? 'bg-gradient-to-br from-green-900/40 to-slate-800 border-2 border-green-500/60 ring-2 ring-green-500/30 scale-105 md:scale-110 origin-center'
                  : 'bg-slate-800 border border-blue-500/30 hover:border-blue-500/50'
              }`}
            >
              {plan.id === 'premium' && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  REKOMENDOWANY
                </div>
              )}
              <div className={`p-4 sm:p-6 md:p-8 ${plan.id === 'premium' ? 'relative z-10' : ''}`}>
                {/* Plan Name */}
                <h3 className={`text-lg sm:text-xl md:text-2xl font-bold mb-2 ${
                  plan.id === 'premium' ? 'text-green-300' : 'text-white'
                }`}>{plan.name}</h3>

                {/* Price */}
                <div className="mb-4 sm:mb-6">
                  <span className={`text-3xl sm:text-4xl md:text-5xl font-bold ${
                    plan.id === 'premium' ? 'text-green-400' : 'text-blue-400'
                  }`}>
                    {plan.price === 0 ? '0 PLN' : `${plan.price} PLN`}
                  </span>
                  <span className="text-slate-400 ml-2 text-xs sm:text-sm">
                    {plan.price === 0 ? 'zawsze' : '/miesiąc'}
                  </span>
                </div>

                {/* Invoice Limit */}
                {plan.id === 'free' && (
                  <p className="text-yellow-300 text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
                    Do {plan.invoicesPerMonth} faktur na miesiąc
                  </p>
                )}
                {plan.id === 'premium' && (
                  <p className="text-green-300 text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
                    Nieograniczone faktury
                  </p>
                )}
                {plan.id === 'pro' && (
                  <p className="text-blue-300 text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
                    Do {plan.invoicesPerMonth} faktur na miesiąc
                  </p>
                )}

                {/* CTA Button */}
                <Link href={user ? '/dashboard' : '/register'} className="block w-full mb-4 sm:mb-8">
                  <Button className={`w-full min-h-[44px] text-xs sm:text-sm md:text-base font-semibold text-white ${
                    plan.id === 'premium'
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500'
                      : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700'
                  }`}>
                    {user ? 'Przejdź do dashboardu' : (plan.id === 'free' ? 'Zacznij za darmo' : 'Wybierz ten plan')}
                  </Button>
                </Link>

                {/* Features */}
                <ul className="space-y-3 sm:space-y-4">
                  {plan.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start gap-2 sm:gap-3">
                      <Check className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5 ${
                        plan.id === 'premium' ? 'text-green-400' : 'text-green-400'
                      }`} />
                      <span className="text-slate-300 text-xs sm:text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ / Info Section */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 sm:p-6 md:p-8 max-w-3xl mx-auto">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6">Pytania i odpowiedzi</h2>
          
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-2">Czy mogę zacząć za darmo?</h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Tak! Plan Darmowy zawiera 5 faktur na miesiąc. Żadna karta kredytowa nie jest wymagana.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-2">Co się stanie gdy przekroczę 5 faktur?</h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Otrzymasz powiadomienie w aplikacji. Możesz wtedy zakupić plan Premium za 99 PLN/miesiąc, aby uzyskać nieograniczone faktury.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-2">Jak długo trwa subskrypcja Premium?</h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Subskrypcja Premium to automatyczne płatności miesięczne. Możesz ją anulować w każdej chwili bez kar.
              </p>
            </div>

            <div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-2">Co zawiera plan Pro?</h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Plan Pro to wariant pośredni z 100 fakturami na miesiąc. Zawiera zaawansowane szablony i automatyczne przypomnienia.
              </p>
            </div>

            <div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-2">Czy cena jest na pewno 99 PLN?</h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Tak, 99 PLN to jednorazowa miesięczna opłata za nieograniczone fakturowanie. Brak ukrytych opłat.
              </p>
            </div>
          </div>
        </div>

        {/* AdSense - baner przed CTA */}
        <div className="mt-12">
          <AdSenseDisplay728x90 />
        </div>

        {/* Footer CTA */}
        {!user && (
          <div className="text-center mt-12">
            <p className="text-slate-300 mb-4">Gotów zacząć?</p>
            <Link href="/register">
              <Button className="bg-green-600 hover:bg-green-700 text-white h-12 px-8 text-lg font-semibold">
                Załóż darmowe konto
              </Button>
            </Link>
          </div>
        )}

        {/* AdSense - baner na dole */}
        <div className="mt-12">
          <AdSenseDisplayAuto />
        </div>
      </div>
    </div>
  )
}
