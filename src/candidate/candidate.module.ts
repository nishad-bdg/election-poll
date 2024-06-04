import { Module } from '@nestjs/common';
import { CandidateService } from './candidate.service';
import { CandidateController } from './candidate.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Candidate, CandidateSchema } from './schemas/candidate.schema';
import { Union, UnionSchema } from './schemas/union.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Candidate.name,
        schema: CandidateSchema,
      },
      {
        name: Union.name,
        schema: UnionSchema,
      },
    ]),
  ],
  controllers: [CandidateController],
  providers: [CandidateService],
})
export class CandidateModule {}
