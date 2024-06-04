"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoteCounterModule = void 0;
const common_1 = require("@nestjs/common");
const vote_counter_service_1 = require("./vote-counter.service");
const vote_counter_controller_1 = require("./vote-counter.controller");
const mongoose_1 = require("@nestjs/mongoose");
const vote_counter_schema_1 = require("./schema/vote-counter.schema");
const candidate_schema_1 = require("../candidate/schemas/candidate.schema");
const votecenter_schema_1 = require("../votecenter/schemas/votecenter.schema");
let VoteCounterModule = class VoteCounterModule {
};
exports.VoteCounterModule = VoteCounterModule;
exports.VoteCounterModule = VoteCounterModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: vote_counter_schema_1.VoteCounter.name,
                    schema: vote_counter_schema_1.VoteCounterSchema,
                },
                {
                    name: candidate_schema_1.Candidate.name,
                    schema: candidate_schema_1.CandidateSchema,
                },
                {
                    name: votecenter_schema_1.VoteCenter.name,
                    schema: votecenter_schema_1.VoteCenterSchema,
                },
            ]),
        ],
        controllers: [vote_counter_controller_1.VoteCounterController],
        providers: [vote_counter_service_1.VoteCounterService],
    })
], VoteCounterModule);
//# sourceMappingURL=vote-counter.module.js.map