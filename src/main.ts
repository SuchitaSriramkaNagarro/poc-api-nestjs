import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import {OrdersModule} from './orders/orders.module'

async function bootstrap() {
  const app = await NestFactory.create(OrdersModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(8080);
}
bootstrap();
