import { Module } from '@nestjs/common';
import { AuthenticateAdminUseCase } from '.';
import { AdminRepositoriesModule } from '../../repositories/admin-repositories.module';

@Module({
  imports: [AdminRepositoriesModule],
  providers: [AuthenticateAdminUseCase],
  exports: [AuthenticateAdminUseCase],
})
export class AdminAuthenticationUseCasesModule {}
