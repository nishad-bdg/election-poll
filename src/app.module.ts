import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CandidateModule } from './candidate/candidate.module';
import { UnionModule } from './union/union.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    CandidateModule,
    UnionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
