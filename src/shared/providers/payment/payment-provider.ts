import { Injectable } from '@nestjs/common';
import { MP_SECRET_KEY } from 'src/env';
import * as mercadopago from 'mercadopago';
import { CreatePaymentDto, CreatePaymentResponseDto } from './protocols';

@Injectable()
export class PaymentProvider {
  private readonly MP_SECRET_KEY: string;

  constructor() {
    this.MP_SECRET_KEY = MP_SECRET_KEY;
    mercadopago.configure({ access_token: this.MP_SECRET_KEY });
  }

  async generatePayment(
    dto: CreatePaymentDto,
  ): Promise<CreatePaymentResponseDto> {
    return (await mercadopago.payment.create(dto))
      .body as CreatePaymentResponseDto;
  }
}
