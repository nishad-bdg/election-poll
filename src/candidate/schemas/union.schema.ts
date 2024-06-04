// src/schemas/union.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Candidate } from './candidate.schema';

@Schema()
export class Union extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Candidate' }] })
  candidates: Candidate[];
}

export const UnionSchema = SchemaFactory.createForClass(Union);
