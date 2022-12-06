import { Module } from '@nestjs/common';
import { AdminsRepositoriesModule } from '../repositories/admins-repositories.module';

@Module({
  imports: [AdminsRepositoriesModule],
})
export class AdminsUseCasesModule {}
