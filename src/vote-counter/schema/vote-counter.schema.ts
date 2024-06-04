import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Candidate } from 'src/candidate/schemas/candidate.schema';
import { VoteCenter } from 'src/votecenter/schemas/votecenter.schema';

@Schema({ timestamps: true })
export class VoteCounter extends Document {
  @Prop({ required: true })
  votes: number;

  @Prop({ type: Types.ObjectId, ref: 'Candidate' })
  candidate: Candidate;

  @Prop({ type: Types.ObjectId, ref: 'VoteCenter' })
  voteCenter: VoteCenter;
}

export const VoteCounterSchema = SchemaFactory.createForClass(VoteCounter);

VoteCounterSchema.index({ candidate: 1, voteCenter: 1 }, { unique: true });
