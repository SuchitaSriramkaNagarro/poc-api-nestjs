import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import {OrdersModule} from './orders/orders.module'
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(OrdersModule);

  app.enableCors();
  app.useGlobalPipes(new ValidationPipe())

  const config = new DocumentBuilder()
  .setTitle('Orders')
  .setDescription('The Order Details API description')
  .setVersion('0.1')
  .build();
  const document = SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('api', app, document)
  
  await app.listen(8080);
}
bootstrap();
