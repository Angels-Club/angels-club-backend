import { Module } from '@nestjs/common'
import { AuthenticateAdminController, GetLoggedAdminController } from '.'
import { AdminUseCasesModule } from '../../use-cases/admin-use-cases.module'
import { AdminAuthenticationUseCasesModule } from '../../use-cases/authentication/admin-authentication-use-cases.module'

@Module({
  imports: [AdminUseCasesModule, AdminAuthenticationUseCasesModule],
  controllers: [AuthenticateAdminController, GetLoggedAdminController],
})
export class AdminAuthenticationControllersModule {}
