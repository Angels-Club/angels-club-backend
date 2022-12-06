import { Module } from '@nestjs/common';
import { AdminControllersModule } from './controllers/admin-controllers.module';

@Module({
  imports: [AdminControllersModule],
})
export class AdminModule {}
