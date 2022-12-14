import { Module } from '@nestjs/common'
import { AdminRepositoriesModule } from '../../repositories/admin-repositories.module'
import { AuthenticateAdmin, GetAdminInfo } from '.'

@Module({
  imports: [AdminRepositoriesModule],
  providers: [AuthenticateAdmin, GetAdminInfo],
  exports: [AuthenticateAdmin, GetAdminInfo],
})
export class AdminAuthenticationUseCasesModule {}
