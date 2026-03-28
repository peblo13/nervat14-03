import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2023-10-16',
});

export const SUBSCRIPTION_PLANS = {
  free: {
    id: 'free',
    name: 'Darmowy',
    price: 0,
    invoicesPerMonth: 5,
    stripePriceId: 'price_free',
    features: [
      'Do 5 faktur na miesiąc',
      'Eksport do PDF',
      'Zarządzanie kontrahentami',
      'Raporty VAT',
      'Integracja z kSEF',
      'Historia i archiwum',
    ],
  },
  pro: {
    id: 'pro',
    name: 'Pro',
    price: 9.99,
    invoicesPerMonth: 100,
    stripePriceId: 'price_pro',
    features: [
      'Wszystkie funkcje z Free',
      'Zaawansowane szablony',
      'Opóźnione fakturowanie',
      'Automatyczne przypomnienia',
      'Priorytetowe wsparcie',
      'Zaawansowana analityka',
    ],
  },
  premium: {
    id: 'premium',
    name: 'Premium',
    price: 99,
    invoicesPerMonth: -1,
    stripePriceId: 'price_premium',
    features: [
      'Nieograniczone faktury',
      'Wszystkie funkcje',
      'Dedykowany wspierający',
      'API dostęp',
      'Integracje niestandardowe',
      'Priorytet w obsłudze',
      'SLA gwarancji',
    ],
  },
};
