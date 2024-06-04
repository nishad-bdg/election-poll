import { Injectable } from '@nestjs/common';
import { Candidate } from './schemas/candidate.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Union } from './schemas/union.schema';
import { Model } from 'mongoose';

@Injectable()
export class CandidateService {
  constructor(
    @InjectModel(Candidate.name) private candidateModel: Model<Candidate>,
    @InjectModel(Union.name) private unionModel: Model<Union>,
  ) {}

  async createCandidate(name: string): Promise<Candidate> {
    const createdCandidate = new this.candidateModel({ name });
    return createdCandidate.save();
  }

  async createUnion(name: string): Promise<Union> {
    const createdUnion = new this.unionModel({ name });
    return createdUnion.save();
  }

  async addCandidateToUnion(
    candidateId: string,
    unionId: string,
  ): Promise<void> {
    const unionData = await this.unionModel.findById(unionId);
    await this.candidateModel.findByIdAndUpdate(candidateId, {
      $addToSet: { unions: unionData },
    });
    await this.unionModel.findByIdAndUpdate(unionId, {
      $addToSet: { candidates: candidateId },
    });
  }

  async getCandidates(): Promise<Candidate[]> {
    return this.candidateModel
      .find()
      .populate('unions')
      .populate('votecenters')
      .exec();
  }

  async getUnions(): Promise<Union[]> {
    return this.unionModel
      .find()
      .populate('candidates')
      .populate('votecenters')
      .exec();
  }
}
