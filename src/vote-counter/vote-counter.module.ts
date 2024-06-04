import { Module } from '@nestjs/common';
import { VoteCounterService } from './vote-counter.service';
import { VoteCounterController } from './vote-counter.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { VoteCounter, VoteCounterSchema } from './schema/vote-counter.schema';
import {
  Candidate,
  CandidateSchema,
} from 'src/candidate/schemas/candidate.schema';
import {
  VoteCenter,
  VoteCenterSchema,
} from 'src/votecenter/schemas/votecenter.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: VoteCounter.name,
        schema: VoteCounterSchema,
      },
      {
        name: Candidate.name,
        schema: CandidateSchema,
      },
      {
        name: VoteCenter.name,
        schema: VoteCenterSchema,
      },
    ]),
  ],
  controllers: [VoteCounterController],
  providers: [VoteCounterService],
})
export class VoteCounterModule {}
