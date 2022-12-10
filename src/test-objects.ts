import { CreatePlanDto } from './shared/providers';

export const createRecipient = {
  name: 'Erick Scur Padilha',
  code: '123',
  document: '07419380902',
  type: 'individual',
  email: 'erickscur@gmail.com',
  default_bank_account: {
    holder_name: 'Erick Scur Padilha',
    holder_document: '07419380902',
    holder_type: 'individual',
    account_check_digit: '9',
    account_number: '6202432',
    branch_number: '0001',
    bank: '077',
    type: 'checking',
  },
  transfer_settings: {
    transfer_enabled: true,
    transfer_interval: 'daily',
    transfer_day: 0,
  },
};

export const createPlan: CreatePlanDto = {
  name: 'Plano Heaven',
  description: 'Plano bla bla bla',
  statement_descriptor: 'Poder bla',
  currency: 'BRL',
  interval: 'month',
  interval_count: 1,
  billing_type: 'prepaid',
  items: [
    {
      name: 'Plano Heaven',
      description: 'Plano bla bla bla',
      quantity: 1,
      pricing_scheme: {
        price: 30,
        scheme_type: 'unit',
      },
    },
  ],
};
