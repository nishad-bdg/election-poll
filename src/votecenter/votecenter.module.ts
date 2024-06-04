import { Module } from '@nestjs/common';
import { VotecenterService } from './votecenter.service';
import { VotecenterController } from './votecenter.controller';
import { VoteCenter, VoteCenterSchema } from './schemas/votecenter.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Union, UnionSchema } from 'src/candidate/schemas/union.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: VoteCenter.name, schema: VoteCenterSchema },
      { name: Union.name, schema: UnionSchema },
    ]),
  ],
  controllers: [VotecenterController],
  providers: [VotecenterService],
})
export class VotecenterModule {}
