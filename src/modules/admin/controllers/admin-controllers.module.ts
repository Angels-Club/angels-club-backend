import { Module } from '@nestjs/common'
import { AdminUseCasesModule } from '../use-cases/admin-use-cases.module'
import { AdminAuthenticationControllersModule } from './authentication/admin-authentication-controllers.module'

@Module({
  imports: [AdminUseCasesModule, AdminAuthenticationControllersModule],
})
export class AdminControllersModule {}
