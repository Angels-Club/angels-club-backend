import { Module } from '@nestjs/common';
import { AdminsUseCasesModule } from '../use-cases/admins-use-cases.module';

@Module({
  imports: [AdminsUseCasesModule],
})
export class AdminsControllersModule {}
