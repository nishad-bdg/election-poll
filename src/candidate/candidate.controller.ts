import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CandidateService } from './candidate.service';

@Controller('candidate')
export class CandidateController {
  constructor(private readonly candidateService: CandidateService) {}

  @Post('create')
  async createCandidate(@Body('name') name: string) {
    return this.candidateService.createCandidate(name);
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
