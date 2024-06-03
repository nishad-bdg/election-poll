import { Body, Controller, Get, Post } from '@nestjs/common';
import { UnionService } from './union.service';
import { Union } from './schemas/union.schema';
import { CreateUnionDto } from './dto/create-union.dto';

@Controller('union')
export class UnionController {
  constructor(private readonly unionService: UnionService) {}

  @Get()
  async getAllUnions(): Promise<Union[]> {
    return await this.unionService.findAll();
  }

  @Post()
  async createUnion(@Body() union): Promise<Union> {
    return await this.unionService.create(union);
  }
}
