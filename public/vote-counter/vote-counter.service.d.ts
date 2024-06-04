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
import { Model } from 'mongoose';
import { Candidate } from 'src/candidate/schemas/candidate.schema';
import { VoteCounter } from './schema/vote-counter.schema';
import { CreateVoteCounterDto } from './dto/create-vote-couter.dto';
export declare class VoteCounterService {
    private readonly candidateModel;
    private readonly voteCenterModel;
    private readonly voteCounterModel;
    constructor(candidateModel: Model<Candidate>, voteCenterModel: Model<Candidate>, voteCounterModel: Model<VoteCounter>);
    create(createVoteCounterDto: CreateVoteCounterDto): Promise<import("mongoose").Document<unknown, {}, VoteCounter> & VoteCounter & Required<{
        _id: unknown;
    }>>;
}
