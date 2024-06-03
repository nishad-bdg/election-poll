import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Candidate } from 'src/candidate/schemas/candidate.schema';

@Schema({ timestamps: true })
export class Union {
  @Prop()
  name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Candidate' })
  candidates: Candidate[];
}

export const UnionSChema = SchemaFactory.createForClass(Union);
