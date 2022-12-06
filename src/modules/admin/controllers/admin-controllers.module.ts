import { Module } from '@nestjs/common';
import { AdminUseCasesModule } from '../use-cases/admin-use-cases.module';

@Module({
  imports: [AdminUseCasesModule],
})
export class AdminControllersModule {}
