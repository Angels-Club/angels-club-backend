import axios from 'axios';
import { PAGARME_SECRET_KEY } from 'src/env';

export const pagarmeInstance = axios.create({
  baseURL: 'https://api.pagar.me/core/v5',
  auth: {
    username: PAGARME_SECRET_KEY,
    password: '',
  },
});
