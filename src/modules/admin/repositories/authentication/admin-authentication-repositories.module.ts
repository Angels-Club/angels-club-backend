import { Module } from '@nestjs/common'
import { PrismaModule } from 'src/prisma/prisma.module'
import { LoadAdminByEmailRepository, LoadAdminByIdRepository } from '.'

@Module({
  imports: [PrismaModule],
  exports: [LoadAdminByEmailRepository, LoadAdminByIdRepository],
  providers: [LoadAdminByEmailRepository, LoadAdminByIdRepository],
})
export class AdminAuthenticationRepositoriesModule {}
