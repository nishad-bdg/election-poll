import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Union } from './schemas/union.schema';

@Injectable()
export class UnionService {
  constructor(
    @InjectModel(Union.name)
    private unionModel: mongoose.Model<Union>,
  ) {}

  async findAll(): Promise<Union[]> {
    return await this.unionModel.find();
  }

  async create(createUnionDto: Union): Promise<Union> {
    const res = await this.unionModel.create(createUnionDto);
    return res;
  }
}
