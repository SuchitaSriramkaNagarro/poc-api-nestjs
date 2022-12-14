import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger'
import {AppModule} from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.useGlobalPipes(new ValidationPipe())

  const config = new DocumentBuilder()
  .setTitle('Orders')
  .setDescription('The Order Details API description')
  .setVersion('0.2')
  .build();
  const document = SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('api', app, document)
  const port = process.env.PORT || 8080;
  await app.listen(port);
}
bootstrap();
