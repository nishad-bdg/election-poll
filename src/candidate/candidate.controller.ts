import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CandidateService } from './candidate.service';
import { Candidate } from './schemas/candidate.schema';
import { CreateCandidateDto } from './dto/create-candidate.dto';

@Controller('candidate')
export class CandidateController {
  constructor(private readonly candidateService: CandidateService) {}

  @Post()
  async createCandidate(
    @Body() candidate: CreateCandidateDto,
  ): Promise<Candidate> {
    return await this.candidateService.create(candidate);
  }

  @Get()
  async findAllCandidates(): Promise<Candidate[]> {
    return await this.candidateService.findAll();
  }

  @Patch(':candidateId/unions/:unionId')
  async addCandidateToGroup(
    @Param('candidateId') candidateId: string,
    @Param('unionId') unionId: string,
  ): Promise<Candidate> {
    return this.candidateService.addCandidateToUnion(candidateId, unionId);
  }
}
