import axios from 'axios';
import { MP_SECRET_KEY } from 'src/env';

export const mercadoPagoInstance = axios.create({
  baseURL: 'https://api.mercadopago.com',
  headers: {
    Authorization: `Bearer ${MP_SECRET_KEY}`,
  },
});
