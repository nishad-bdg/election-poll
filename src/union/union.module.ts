import { Module } from '@nestjs/common';
import { UnionService } from './union.service';
import { UnionController } from './union.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UnionSChema } from './schemas/union.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Union', schema: UnionSChema }]),
  ],
  controllers: [UnionController],
  providers: [UnionService],
})
export class UnionModule {}
