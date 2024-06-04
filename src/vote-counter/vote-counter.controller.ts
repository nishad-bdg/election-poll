import { Body, Controller, Get, Post } from '@nestjs/common';
import { VoteCounterService } from './vote-counter.service';
import { CreateVoteCounterDto } from './dto/create-vote-couter.dto';

@Controller('vote-counter')
export class VoteCounterController {
  constructor(private readonly voteCounterService: VoteCounterService) {}
  @Post()
  create(@Body() createVoteCounterDto: CreateVoteCounterDto) {
    return this.voteCounterService.create(createVoteCounterDto);
  }

  @Get()
  findAll() {
    return this.voteCounterService.findAll();
  }
}
