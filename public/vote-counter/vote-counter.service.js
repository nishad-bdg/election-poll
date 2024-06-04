"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoteCounterService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const candidate_schema_1 = require("../candidate/schemas/candidate.schema");
const votecenter_schema_1 = require("../votecenter/schemas/votecenter.schema");
const vote_counter_schema_1 = require("./schema/vote-counter.schema");
let VoteCounterService = class VoteCounterService {
    constructor(candidateModel, voteCenterModel, voteCounterModel) {
        this.candidateModel = candidateModel;
        this.voteCenterModel = voteCenterModel;
        this.voteCounterModel = voteCounterModel;
    }
    async create(createVoteCounterDto) {
        const voteCounter = new this.voteCounterModel({
            votes: createVoteCounterDto.votes,
            voteCenter: createVoteCounterDto.voteCenterId,
            candidate: createVoteCounterDto.candidateId,
        });
        await this.voteCenterModel.findByIdAndUpdate(createVoteCounterDto.voteCenterId, {
            $addToSet: { voteCounters: voteCounter },
        });
        return voteCounter.save();
    }
};
exports.VoteCounterService = VoteCounterService;
exports.VoteCounterService = VoteCounterService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(candidate_schema_1.Candidate.name)),
    __param(1, (0, mongoose_1.InjectModel)(votecenter_schema_1.VoteCenter.name)),
    __param(2, (0, mongoose_1.InjectModel)(vote_counter_schema_1.VoteCounter.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], VoteCounterService);
//# sourceMappingURL=vote-counter.service.js.map