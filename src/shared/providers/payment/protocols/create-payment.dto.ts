import { PaymentPayerDto } from './payment-payer.dto';

export interface CreatePaymentDto {
  payer: PaymentPayerDto;

  /** Identificação fornecida pelo vendedor em seu sistema. */
  external_reference: string;

  /** Razão de pagamento ou título do item. */
  description: string;

  /** Custo do produto. */
  transaction_amount: number;

  /** Meio de pagamento escolhido para fazer o pagamento. */
  payment_method_id: string;

  /** Identificador de token card. (Obrigatório para cartão de crédito) */
  token?: string | undefined;

  /** Como aparecerá o pagamento no extrato do cartão (ex: o MERCADOPAGO). */
  statement_descriptor?: string | undefined;

  /** Quantidade selecionada de cotas. (Obrigatório) */
  installments: number;
}
