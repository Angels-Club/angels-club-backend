import { Module } from '@nestjs/common'
import { PrismaModule } from 'src/prisma/prisma.module'
import {
  PrismaLoadAdminByEmailRepository,
  PrismaLoadAdminByIdRepository,
} from '.'

@Module({
  imports: [PrismaModule],
  providers: [PrismaLoadAdminByEmailRepository, PrismaLoadAdminByIdRepository],
  exports: [PrismaLoadAdminByEmailRepository, PrismaLoadAdminByIdRepository],
})
export class AdminAuthenticationRepositoriesModule {}
