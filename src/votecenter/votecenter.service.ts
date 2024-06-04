import { Injectable } from '@nestjs/common';
import { CreateVotecenterDto } from './dto/create-votecenter.dto';
import { UpdateVotecenterDto } from './dto/update-votecenter.dto';
import { InjectModel } from '@nestjs/mongoose';
import { VoteCenter } from './schemas/votecenter.schema';
import { Model } from 'mongoose';
import { Union } from 'src/candidate/schemas/union.schema';

@Injectable()
export class VotecenterService {
  constructor(
    @InjectModel(VoteCenter.name)
    private readonly voteCenterModel: Model<VoteCenter>,
    @InjectModel(Union.name) private readonly unionModel: Model<Union>,
  ) {}
  async create(createVotecenterDto: CreateVotecenterDto) {
    const voteCenter = new this.voteCenterModel({
      name: createVotecenterDto.name,
      union: createVotecenterDto.unionId,
    });

    await this.unionModel.findByIdAndUpdate(createVotecenterDto.unionId, {
      $addToSet: { voteCenters: voteCenter },
    });
    return voteCenter.save();
  }

  async findAll(): Promise<VoteCenter[]> {
    return await this.voteCenterModel.find().populate('voteCounters').exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} votecenter`;
  }

  update(id: number, updateVotecenterDto: UpdateVotecenterDto) {
    return `This action updates a #${id} votecenter`;
  }

  remove(id: number) {
    return `This action removes a #${id} votecenter`;
  }
}
