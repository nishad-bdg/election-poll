import { IsNotEmpty, IsString } from 'class-validator';

export class CreateVoteCounterDto {
  @IsNotEmpty()
  votes: number;
  @IsNotEmpty()
  @IsString()
  candidateId: string;
  @IsNotEmpty()
  @IsString()
  voteCenterId: string;
}
