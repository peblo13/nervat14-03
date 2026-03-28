export interface SubscriptionLimitCheck {
  canCreateInvoice: boolean
  currentCount: number
  limit: number
  message?: string
}

export function checkSubscriptionLimit(
  planId: string,
  currentInvoiceCount: number
): SubscriptionLimitCheck {
  // Free plan: 5 invoices per month
  // Premium plan: unlimited (-1)
  const limits: { [key: string]: number } = {
    free: 5,
    pro: 100,
    premium: -1,
  }

  const limit = limits[planId] || 5

  if (limit === -1) {
    // Unlimited plan
    return {
      canCreateInvoice: true,
      currentCount: currentInvoiceCount,
      limit: Infinity,
    }
  }

  return {
    canCreateInvoice: currentInvoiceCount < limit,
    currentCount: currentInvoiceCount,
    limit,
  }
}

export function getInvoiceCountThisMonth(invoices: any[]): number {
  const now = new Date()
  const currentMonth = now.getMonth()
  const currentYear = now.getFullYear()

  return invoices.filter(invoice => {
    const invoiceDate = new Date(invoice.issueDate)
    return invoiceDate.getMonth() === currentMonth && invoiceDate.getFullYear() === currentYear
  }).length
}

export function getUpgradeMessage(planId: string): string {
  if (planId === 'free') {
    return 'Osiągnąłeś limit 5 faktur. Przechodzimy do planu Premium za 99 PLN aby tworzyć nieograniczone faktury.'
  }
  if (planId === 'pro') {
    return 'Osiągnąłeś limit 100 faktur. Przejdź na plan Premium za 99 PLN aby uzyskać nieograniczone fakturowanie.'
  }
  return 'Ulepsz swój plan, aby kontynuować.'
}
