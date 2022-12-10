export const PORT: number = parseInt(process.env.PORT) || 3009;

export const API_VERSION: string = process.env.API_VERSION || 'v1';

export const DATABASE_URL: string = process.env.DATABASE_URL || '';

export const SALT_ROUNDS: number = parseInt(process.env.SALT_ROUNDS) || 10;

export const JWT_SECRET: string = process.env.JWT_SECRET || 'fuahdufahufadvxzv';

export const JWT_EXPIRATION: string = process.env.JWT_EXPIRATION || '1d';

export const PAGARME_SECRET_KEY: string = process.env.PAGARME_SECRET_KEY || '';
