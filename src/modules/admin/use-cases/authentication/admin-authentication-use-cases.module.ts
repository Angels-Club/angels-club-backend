import { Module } from '@nestjs/common'
import { AdminRepositoriesModule } from '../../repositories/admin-repositories.module'
import { AuthenticateAdminUseCase, GetAdminInfoUseCase } from '.'

@Module({
  imports: [AdminRepositoriesModule],
  providers: [AuthenticateAdminUseCase, GetAdminInfoUseCase],
  exports: [AuthenticateAdminUseCase, GetAdminInfoUseCase],
})
export class AdminAuthenticationUseCasesModule {}
