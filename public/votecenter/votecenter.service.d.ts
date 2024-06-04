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
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import { CreateVotecenterDto } from './dto/create-votecenter.dto';
import { UpdateVotecenterDto } from './dto/update-votecenter.dto';
import { VoteCenter } from './schemas/votecenter.schema';
import { Model } from 'mongoose';
import { Union } from 'src/candidate/schemas/union.schema';
export declare class VotecenterService {
    private readonly voteCenterModel;
    private readonly unionModel;
    constructor(voteCenterModel: Model<VoteCenter>, unionModel: Model<Union>);
    create(createVotecenterDto: CreateVotecenterDto): Promise<import("mongoose").Document<unknown, {}, VoteCenter> & VoteCenter & Required<{
        _id: unknown;
    }>>;
    findAll(): Promise<VoteCenter[]>;
    findOne(id: number): string;
    update(id: number, updateVotecenterDto: UpdateVotecenterDto): string;
    remove(id: number): string;
}
