import { Module } from '@nestjs/common';
import { ProvidersModule } from 'src/shared/providers/providers.module';
import { AuthenticateAdminUseCase } from '.';
import { AdminRepositoriesModule } from '../../repositories/admin-repositories.module';

@Module({
  imports: [AdminRepositoriesModule, ProvidersModule],
  providers: [AuthenticateAdminUseCase],
  exports: [AuthenticateAdminUseCase],
})
export class AdminAuthenticationUseCasesModule {}
