import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateCandidateDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly symbol: string;

  @IsNotEmpty()
  @IsUrl()
  readonly symbolUrl: URL;
}
