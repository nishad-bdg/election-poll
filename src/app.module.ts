import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CandidateModule } from './candidate/candidate.module';
import { VotecenterModule } from './votecenter/votecenter.module';
import { VoteCounterModule } from './vote-counter/vote-counter.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    CandidateModule,
    VotecenterModule,
    VoteCounterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
