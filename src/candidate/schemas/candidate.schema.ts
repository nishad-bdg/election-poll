import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Candidate {
  @Prop({ unique: [true, 'Duplicate name entered'] })
  name: string;

  @Prop({ unique: [true, 'Duplicate symbol entered'] })
  symbol: string;

  @Prop({ required: true })
  symbolUrl: URL;
}

export const CandidateSchema = SchemaFactory.createForClass(Candidate);
