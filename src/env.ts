export const PORT: number = parseInt(process.env.PORT) || 3008;

export const API_VERSION: string = process.env.API_VERSION || 'v1';

export const DATABASE_URL: string = process.env.DATABASE_URL || '';

export const SALT_ROUNDS: number = parseInt(process.env.SALT_ROUNDS) || 10;
