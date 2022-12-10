export type CreateCustomerDTO = {
  name: string;
  email: string;
  document: string;
  document_type: 'CPF';
  type: 'individual';
  // id da nossa api
  code: string;
};
