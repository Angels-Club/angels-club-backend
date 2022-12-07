export type PlanAutoRecurring = {
  frequency: number;
  frequency_type: string;
  transaction_amount: number;
  currency_id: 'BRL' | string;
};

export type PaymentType = {
  id: string;
};

export type CreateSignaturePlanDto = {
  back_url: string;
  reason: string;
  auto_recurring: PlanAutoRecurring;
  payment_methods_allowed: {
    payment_types: PaymentType[];
    payment_methods?: PaymentType[];
  };
};
