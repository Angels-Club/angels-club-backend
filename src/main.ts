import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'
import { PORT, API_VERSION } from './env'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    })
  )

  app.setGlobalPrefix(`api/${API_VERSION}`)

  app.enableCors()

  const config = new DocumentBuilder()
    .setTitle('API Angels Club')
    .setDescription('API Angels Club')
    .setVersion(API_VERSION)
    .addSecurity('bearer', {
      type: 'http',
      scheme: 'bearer',
    })
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api-docs', app, document)

  await app.listen(PORT)
}
bootstrap()
