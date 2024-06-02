import { Injectable } from '@nestjs/common';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Candidate } from './schemas/candidate.schema';
import mongoose from 'mongoose';

@Injectable()
export class CandidateService {
  constructor(
    @InjectModel(Candidate.name)
    private readonly candidateModel: mongoose.Model<Candidate>,
  ) {}

  async create(candidate: Candidate): Promise<Candidate> {
    const res = await this.candidateModel.create(candidate);
    return res;
  }

  async findAll(): Promise<Candidate[]> {
    return await this.candidateModel.find();
  }
}
