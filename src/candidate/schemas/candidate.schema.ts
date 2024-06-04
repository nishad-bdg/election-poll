// src/schemas/candidate.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Union } from './union.schema';

@Schema()
export class Candidate extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Union' }] })
  unions: Union[];
}

export const CandidateSchema = SchemaFactory.createForClass(Candidate);
