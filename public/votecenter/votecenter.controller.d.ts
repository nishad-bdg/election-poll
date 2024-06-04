/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import { VotecenterService } from './votecenter.service';
import { CreateVotecenterDto } from './dto/create-votecenter.dto';
import { UpdateVotecenterDto } from './dto/update-votecenter.dto';
import { VoteCenter } from './schemas/votecenter.schema';
export declare class VotecenterController {
    private readonly votecenterService;
    constructor(votecenterService: VotecenterService);
    create(createVotecenterDto: CreateVotecenterDto): Promise<import("mongoose").Document<unknown, {}, VoteCenter> & VoteCenter & Required<{
        _id: unknown;
    }>>;
    findAll(): Promise<VoteCenter[]>;
    findOne(id: string): string;
    update(id: string, updateVotecenterDto: UpdateVotecenterDto): string;
    remove(id: string): string;
}
