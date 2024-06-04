import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import mongoose from 'mongoose';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  mongoose.set('strictPopulate', false);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
