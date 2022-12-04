import { Injectable } from '@nestjs/common';
import { MP_SECRET_KEY } from 'src/env';
import * as mercadopago from 'mercadopago';
import { CreatePaymentDto, CreatePaymentResponseDto } from './protocols';
import { mercadoPagoInstance } from '../axios/axios-instance';
import { CreateSignaturePlanDto } from './protocols/plans/create-plan.dto';
import { CreateSignaturePlanResponseDto } from './protocols/plans/create-plan-response.dto';

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
    try {
      return (await mercadopago.payment.create(dto))
        .body as CreatePaymentResponseDto;
    } catch (error) {
      throw error;
    }
  }

  async createPlan(
    dto: CreateSignaturePlanDto,
  ): Promise<CreateSignaturePlanResponseDto> {
    try {
      const response = await mercadoPagoInstance.post('/preapproval_plan', dto);
      console.log(response);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
