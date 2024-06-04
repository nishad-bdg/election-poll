import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Candidate } from 'src/candidate/schemas/candidate.schema';
import { VoteCenter } from 'src/votecenter/schemas/votecenter.schema';
import { VoteCounter } from './schema/vote-counter.schema';
import { CreateVoteCounterDto } from './dto/create-vote-couter.dto';

@Injectable()
export class VoteCounterService {
  constructor(
    @InjectModel(Candidate.name)
    private readonly candidateModel: Model<Candidate>,

    @InjectModel(VoteCenter.name)
    private readonly voteCenterModel: Model<Candidate>,

    @InjectModel(VoteCounter.name)
    private readonly voteCounterModel: Model<VoteCounter>,
  ) {}

  async create(createVoteCounterDto: CreateVoteCounterDto) {
    const voteCounter = new this.voteCounterModel({
      votes: createVoteCounterDto.votes,
      voteCenter: createVoteCounterDto.voteCenterId,
      candidate: createVoteCounterDto.candidateId,
    });

    if (voteCounter) {
      await this.voteCenterModel.findByIdAndUpdate(
        createVoteCounterDto.voteCenterId,
        {
          $addToSet: { voteCounters: voteCounter },
        },
      );
      return voteCounter.save();
    }
    throw new Error('Unable save vote center data');
  }

  async findAll() {
    return await this.voteCounterModel.find().populate('voteCenter').exec();
  }
}
