import { PaymentType, PlanAutoRecurring } from './create-plan.dto';

export interface CreateSignaturePlanResponseDto {
  id: string;
  application_id: number;
  collector_id: number;
  reason: string;
  auto_recurring: PlanAutoRecurring;
  payment_methods_allowed: {
    payment_types: PaymentType[];
    payment_methods: PaymentType[];
  };
  back_url: string;
  external_reference: number;
  init_point: string;
  date_created: string;
  last_modified: string;
  status: string;
}
