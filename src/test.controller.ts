import { Controller, Post } from '@nestjs/common'
import { PaymentProvider } from './shared/providers'
import { createPlan } from './test-objects'

@Controller('test')
export class TestController {
  constructor(private readonly payment: PaymentProvider) {}

  @Post()
  async handle() {
    return await this.payment.createPlan(createPlan)
  }
}
