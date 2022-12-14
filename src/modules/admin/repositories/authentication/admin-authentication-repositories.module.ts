import { Module } from '@nestjs/common'
import { PrismaModule } from 'src/prisma/prisma.module'
import {
  LoadAdminByEmailRepository,
  LoadAdminByIdRepository,
  PrismaLoadAdminByEmailRepository,
  PrismaLoadAdminByIdRepository,
} from '.'

@Module({
  imports: [PrismaModule],
  providers: [
    {
      provide: LoadAdminByEmailRepository,
      useClass: PrismaLoadAdminByEmailRepository,
    },
    {
      provide: LoadAdminByIdRepository,
      useClass: PrismaLoadAdminByIdRepository,
    },
  ],
  exports: [LoadAdminByEmailRepository, LoadAdminByIdRepository],
})
export class AdminAuthenticationRepositoriesModule {}
