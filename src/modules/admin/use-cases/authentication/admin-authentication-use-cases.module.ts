import { Module } from '@nestjs/common'
import { AdminRepositoriesModule } from '../../repositories/admin-repositories.module'
import { AuthenticateAdminUseCase, GetAdminInfoUseCase } from '.'
import {
  LoadAdminByEmailRepository,
  LoadAdminByIdRepository,
  PrismaLoadAdminByEmailRepository,
  PrismaLoadAdminByIdRepository,
} from '../../repositories'

@Module({
  imports: [AdminRepositoriesModule],
  providers: [
    AuthenticateAdminUseCase,
    GetAdminInfoUseCase,
    {
      provide: LoadAdminByEmailRepository,
      useClass: PrismaLoadAdminByEmailRepository,
    },
    {
      provide: LoadAdminByIdRepository,
      useClass: PrismaLoadAdminByIdRepository,
    },
  ],
  exports: [AuthenticateAdminUseCase, GetAdminInfoUseCase],
})
export class AdminAuthenticationUseCasesModule {}
