export interface FeeDetails {
  type: 'mercadopago_fee' | string;
  amount: number;
  fee_payer: 'collector' | 'payer';
}

export interface PointOfInteraction {
  type: string;
  sub_type: string;
  application_data: {
    name: string;
    version: string;
  };
  transaction_data: {
    qr_code_base64: string;
    qr_code: string;
    ticket_url: string;
  };
}

export interface CreatePaymentResponseDto {
  id: string;
  date_created: Date;
  date_approved: Date;
  date_last_updated: Date;
  date_of_expiration: Date;
  payment_method_id: string;
  payment_type_id: string;
  status: string;
  status_detail: string;
  currency_id: string;
  description: string;
  taxes_amount: number;
  payer: {
    id: string;
    email: string;
  };
  external_reference: string;
  transaction_amount: number;
  fee_details: FeeDetails[];
  captured: boolean;
  point_of_interaction: PointOfInteraction;
}
