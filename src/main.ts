import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import mongoose from 'mongoose';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  mongoose.set('strictPopulate', false);
  app.enableCors({
    allowedHeaders: ['content-type'],
    origin: 'https://up-election.vercel.app',
    credentials: true,
  });
  await app.listen(3001);
}
bootstrap();
