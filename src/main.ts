import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cors from 'cors-ts';
import mongoose from 'mongoose';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  app.use(
    cors({
      origin: 'https://up-election.vercel.app/',
      optionsSuccessStatus: 200,
    }),
  );
  mongoose.set('strictPopulate', false);
  await app.listen(3001);
}
bootstrap();
