import { Injectable } from '@nestjs/common'
import { pagarmeInstance } from '../axios/axios-instance'
import {
  CreateCustomerDTO,
  CreatePlanDto,
  CreateRecipientDTO,
} from './protocols'

@Injectable()
export class PaymentProvider {
  async createRecipient(dto: CreateRecipientDTO): Promise<string> {
    try {
      return (await pagarmeInstance.post('/recipients', dto)).data?.id
    } catch (error) {
      throw error
    }
  }

  async createCustomer(dto: CreateCustomerDTO): Promise<string> {
    try {
      return (await pagarmeInstance.post('/customers', dto)).data?.id
    } catch (error) {
      throw error
    }
  }

  async createPlan(dto: CreatePlanDto): Promise<string> {
    try {
      return (await pagarmeInstance.post('/plans', dto)).data?.id
    } catch (error) {
      throw error
    }
  }
}
