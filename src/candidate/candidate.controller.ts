import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CandidateService } from './candidate.service';
import { CreateCandidateDto } from './dto/create-candidate.dto';

@Controller('candidate')
export class CandidateController {
  constructor(private readonly candidateService: CandidateService) {}

  @Post('create')
  async createCandidate(@Body() candidate: CreateCandidateDto) {
    console.info(candidate);
    return this.candidateService.createCandidate(candidate);
  }

  @Post('union/create')
  async createUnion(@Body('name') name: string) {
    return this.candidateService.createUnion(name);
  }

  @Post(':candidateId/union/:unionId')
  async addCandidateToUnion(
    @Param('candidateId') candidateId: string,
    @Param('unionId') unionId: string,
  ) {
    return this.candidateService.addCandidateToUnion(candidateId, unionId);
  }

  @Get()
  async getCandidates() {
    return this.candidateService.getCandidates();
  }

  @Get('unions')
  async getUnions() {
    return this.candidateService.getUnions();
  }
}
