import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { LoadAdminByEmailRepository } from '.';

@Module({
  imports: [PrismaModule],
  exports: [LoadAdminByEmailRepository],
  providers: [LoadAdminByEmailRepository],
})
export class AdminAuthenticationRepositoriesModule {}
