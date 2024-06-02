import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Union {
  @Prop()
  name: string;
}

export const UnionSChema = SchemaFactory.createForClass(Union);
