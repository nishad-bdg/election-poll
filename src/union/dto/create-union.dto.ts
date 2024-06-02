import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUnionDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
}
