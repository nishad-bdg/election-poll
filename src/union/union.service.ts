import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Union } from './schemas/union.schema';
import { CreateCandidateDto } from 'src/candidate/dto/create-candidate.dto';

@Injectable()
export class UnionService {
  constructor(
    @InjectModel(Union.name)
    private unionModel: mongoose.Model<Union>,
  ) {}

  async findAll(): Promise<Union[]> {
    return await this.unionModel.find();
  }

  async create(createUnionDto: CreateCandidateDto): Promise<Union> {
    const res = await this.unionModel.create(createUnionDto);
    return res;
  }
}
