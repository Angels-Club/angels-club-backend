import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { JWT_EXPIRATION, JWT_SECRET } from 'src/env';
import { RolesType } from '../../types';

type ISignToken = {
  id: string;
  role: RolesType;
};

type TokenPayload = {
  id: string;
  role: RolesType;
  iat: number;
  exp: number;
};

@Injectable()
export class TokenProvider {
  private readonly secret: string;
  private readonly expiration: string;

  constructor() {
    this.secret = JWT_SECRET;
    this.expiration = JWT_EXPIRATION;
  }

  async generateToken(payload: ISignToken): Promise<string> {
    return await jwt.sign(payload, this.secret, {
      expiresIn: this.expiration,
    });
  }

  async verifyToken(token: string): Promise<TokenPayload> {
    return (await jwt.verify(token, this.secret)) as TokenPayload;
  }
}
