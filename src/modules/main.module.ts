import { Module } from '@nestjs/common';
import { AdminsModule } from './admin/admins.module';

@Module({
  imports: [AdminsModule],
})
export class MainModule {}
