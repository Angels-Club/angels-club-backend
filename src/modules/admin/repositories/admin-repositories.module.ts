import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AdminAuthenticationRepositoriesModule } from './authentication/admin-authentication-repositories.module';

@Module({
  imports: [PrismaModule, AdminAuthenticationRepositoriesModule],
  exports: [AdminAuthenticationRepositoriesModule],
})
export class AdminRepositoriesModule {}
