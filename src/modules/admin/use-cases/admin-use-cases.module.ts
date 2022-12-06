import { Module } from '@nestjs/common';
import { AdminAuthenticationUseCasesModule } from './authentication/admin-authentication-use-cases.module';
import { AdminRepositoriesModule } from '../repositories/admin-repositories.module';

@Module({
  imports: [AdminRepositoriesModule, AdminAuthenticationUseCasesModule],
})
export class AdminUseCasesModule {}
