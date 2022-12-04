import { Controller, Post } from '@nestjs/common';
import { PaymentProvider } from './shared/providers';

@Controller('test')
export class TestController {
  constructor(private readonly payment: PaymentProvider) {}

  @Post()
  async handle() {
    return await this.payment.createPlan({
      back_url: 'https://www.yoursite.com',
      reason: 'Plano Assinatura Lucífer Teste',
      auto_recurring: {
        frequency: 1,
        frequency_type: 'months',
        transaction_amount: 30,
        currency_id: 'BRL',
      },
      payment_methods_allowed: {
        payment_types: [
          {
            id: 'creadit_card',
          },
        ],
      },
    });
  }
}
