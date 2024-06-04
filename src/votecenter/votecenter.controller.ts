import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VotecenterService } from './votecenter.service';
import { CreateVotecenterDto } from './dto/create-votecenter.dto';
import { UpdateVotecenterDto } from './dto/update-votecenter.dto';

@Controller('votecenter')
export class VotecenterController {
  constructor(private readonly votecenterService: VotecenterService) {}

  @Post()
  create(@Body() createVotecenterDto: CreateVotecenterDto) {
    return this.votecenterService.create(createVotecenterDto);
  }

  @Get()
  findAll() {
    return this.votecenterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.votecenterService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVotecenterDto: UpdateVotecenterDto) {
    return this.votecenterService.update(+id, updateVotecenterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.votecenterService.remove(+id);
  }
}
