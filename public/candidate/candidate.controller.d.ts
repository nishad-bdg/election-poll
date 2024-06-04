import { CandidateService } from './candidate.service';
export declare class CandidateController {
    private readonly candidateService;
    constructor(candidateService: CandidateService);
    createCandidate(name: string): Promise<import("./schemas/candidate.schema").Candidate>;
    createUnion(name: string): Promise<import("./schemas/union.schema").Union>;
    addCandidateToUnion(candidateId: string, unionId: string): Promise<void>;
    getCandidates(): Promise<import("./schemas/candidate.schema").Candidate[]>;
    getUnions(): Promise<import("./schemas/union.schema").Union[]>;
}
