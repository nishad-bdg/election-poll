import { Body, Controller, Post } from '@nestjs/common';
import { VoteCounterService } from './vote-counter.service';
import { CreateVoteCounterDto } from './dto/create-vote-couter.dto';

@Controller('vote-counter')
export class VoteCounterController {
  constructor(private readonly voteCounterService: VoteCounterService) {}
  @Post()
  create(@Body() createVoteCounterDto: CreateVoteCounterDto) {
    return this.voteCounterService.create(createVoteCounterDto);
  }
}
