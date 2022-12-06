import {
  AuthenticateAdminDTO,
  AuthenticateAdminResponseDTO,
} from 'src/modules/admin/dto';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoadAdminByEmailRepository } from 'src/modules/admin/repositories';
import { EncryptionProvider, TokenProvider } from 'src/shared/providers';

@Injectable()
export class AuthenticateAdminUseCase {
  constructor(
    private readonly loadAccountByEmail: LoadAdminByEmailRepository,
    private readonly encryptionProvider: EncryptionProvider,
    private readonly tokenProvider: TokenProvider,
  ) {}

  async execute(
    dto: AuthenticateAdminDTO,
  ): Promise<AuthenticateAdminResponseDTO> {
    const admin = await this.loadAccountByEmail.loadByEmail(dto.email);
    if (!admin) {
      throw new UnauthorizedException('Invalid credentials!');
    }

    const hashPassword = admin.password;
    const isPasswordValid = await this.encryptionProvider.compare(
      dto.password,
      hashPassword,
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials!');
    }

    const token = await this.tokenProvider.generateToken({
      id: admin.id,
      role: 'ADMIN',
    });

    return { token };
  }
}
