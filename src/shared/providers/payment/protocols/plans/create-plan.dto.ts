export interface PlanAutoRecurring {
  frequency: number;
  frequency_type: string;
  transaction_amount: number;
  currency_id: 'BRL' | string;
}

export interface PaymentType {
  id: string;
}

export interface CreateSignaturePlanDto {
  back_url: string;
  reason: string;
  auto_recurring: PlanAutoRecurring;
  payment_methods_allowed: {
    payment_types: PaymentType[];
    payment_methods?: PaymentType[];
  };
}
