import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Union } from 'src/union/schemas/union.schema';

@Schema({ timestamps: true })
export class Candidate {
  @Prop({ unique: [true, 'Duplicate name entered'] })
  name: string;

  @Prop({ unique: [true, 'Duplicate symbol entered'] })
  symbol: string;

  @Prop({ required: true })
  symbolUrl: URL;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Union' })
  unions: Union[];
}

export const CandidateSchema = SchemaFactory.createForClass(Candidate);
