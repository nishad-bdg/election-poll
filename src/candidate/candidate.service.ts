import { Injectable } from '@nestjs/common';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Candidate } from './schemas/candidate.schema';
import mongoose from 'mongoose';

@Injectable()
export class CandidateService {
  constructor(
    @InjectModel(Candidate.name)
    private readonly candidateModel: mongoose.Model<Candidate>,
  ) {}

  async create(candidate: CreateCandidateDto): Promise<Candidate> {
    const res = await this.candidateModel.create(candidate);
    return res;
  }

  async findAll(): Promise<Candidate[]> {
    return await this.candidateModel.find().populate('unions').exec();
  }

  async addCandidateToUnion(
    candidateId: string,
    unionId: string,
  ): Promise<Candidate> {
    return this.candidateModel
      .findByIdAndUpdate(
        candidateId,
        { $addToSet: { unions: unionId } },
        { new: true },
      )
      .populate('unions')
      .exec();
  }
}
