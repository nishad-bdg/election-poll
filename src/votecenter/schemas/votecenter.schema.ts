import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Union } from 'src/candidate/schemas/union.schema';

@Schema({ timestamps: true })
export class VoteCenter extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, default: 0 })
  totalVotes: number;

  @Prop({ type: Types.ObjectId, ref: 'Union' })
  union: Union;
}

export const VoteCenterSchema = SchemaFactory.createForClass(VoteCenter);
