import { PartialType } from '@nestjs/mapped-types';
import { CreateVotecenterDto } from './create-votecenter.dto';

export class UpdateVotecenterDto extends PartialType(CreateVotecenterDto) {}
