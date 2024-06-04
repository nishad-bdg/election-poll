// src/schemas/union.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Candidate } from './candidate.schema';
import { VoteCenter } from 'src/votecenter/schemas/votecenter.schema';

@Schema()
export class Union extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Candidate' }] })
  candidates: Candidate[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'VoteCenter' }] })
  voteCenters: VoteCenter[];
}

export const UnionSchema = SchemaFactory.createForClass(Union);
