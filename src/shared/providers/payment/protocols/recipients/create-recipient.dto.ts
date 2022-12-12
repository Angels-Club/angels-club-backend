export type CreateRecipientDTO = {
  name: string
  email: string
  document: string
  type: 'individual' | 'company'
  // id da nossa api
  code: string
  default_bank_account: {
    holder_name: string
    // codigo do banco
    bank: string
    // agencia
    branch_number: string
    account_number: string
    account_check_digit: string
    holder_type: 'individual' | 'company'
    // igual ao documento de fora do objeto
    holder_document: string
    // conta corrente ou poupança
    type: 'checking' | 'savings'
  }
  transfer_settings: {
    // Indica se o recebedor receberá seus pagamentos automaticamente.
    transfer_enabled: boolean
    // Indica a frequência das transferências automáticas para a conta do recebedor
    transfer_interval: 'daily' | 'weekly'
    transfer_day?: number
  }
}
