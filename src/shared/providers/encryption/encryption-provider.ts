import { Injectable } from '@nestjs/common';
import { SALT_ROUNDS } from 'src/env';
import * as bcrypt from 'bcrypt';

@Injectable()
export class EncryptionProvider {
  private readonly salt: number;

  constructor() {
    this.salt = SALT_ROUNDS;
  }

  async hash(value: string): Promise<string> {
    return await bcrypt.hash(value, this.salt);
  }

  async compare(value: string, hashedValue: string): Promise<boolean> {
    return await bcrypt.compare(value, hashedValue);
  }
}
