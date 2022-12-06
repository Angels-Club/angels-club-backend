import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MainModule } from './modules/main.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProvidersModule } from './shared/providers/providers.module';
import { TestController } from './test.controller';

@Module({
  imports: [PrismaModule, ProvidersModule, MainModule],
  controllers: [TestController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}
