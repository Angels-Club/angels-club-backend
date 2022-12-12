export type CreatePlanDto = {
  name: string
  description?: string
  // Texto exibido na fatura do cartão.
  statement_descriptor: string
  currency: 'BRL'
  interval: 'day' | 'week' | 'month' | 'year'
  interval_count: number
  trial_period_days?: number
  billing_type: 'prepaid'
  items: {
    name: string
    quantity: number
    description: string
    pricing_scheme: {
      scheme_type: 'unit'
      price: number
    }
  }[]
}
