import { Module } from '@nestjs/common';
import { AdminsControllersModule } from './controllers/admins-controllers.module';

@Module({
  imports: [AdminsControllersModule],
})
export class AdminsModule {}
