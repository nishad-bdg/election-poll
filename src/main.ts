import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cors from 'cors-ts';
import mongoose from 'mongoose';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bodyParser: true,
  });

  app.use(
    cors({
      origin: '#front-end-url',
      optionsSuccessStatus: 200,
    }),
  );
  mongoose.set('strictPopulate', false);
  await app.listen(3001);
}
bootstrap();
