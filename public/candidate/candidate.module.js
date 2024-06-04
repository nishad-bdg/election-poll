"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidateModule = void 0;
const common_1 = require("@nestjs/common");
const candidate_service_1 = require("./candidate.service");
const candidate_controller_1 = require("./candidate.controller");
const mongoose_1 = require("@nestjs/mongoose");
const candidate_schema_1 = require("./schemas/candidate.schema");
const union_schema_1 = require("./schemas/union.schema");
const votecenter_schema_1 = require("../votecenter/schemas/votecenter.schema");
let CandidateModule = class CandidateModule {
};
exports.CandidateModule = CandidateModule;
exports.CandidateModule = CandidateModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: candidate_schema_1.Candidate.name,
                    schema: candidate_schema_1.CandidateSchema,
                },
                {
                    name: union_schema_1.Union.name,
                    schema: union_schema_1.UnionSchema,
                },
                {
                    name: votecenter_schema_1.VoteCenter.name,
                    schema: votecenter_schema_1.VoteCenterSchema,
                },
            ]),
        ],
        controllers: [candidate_controller_1.CandidateController],
        providers: [candidate_service_1.CandidateService],
    })
], CandidateModule);
//# sourceMappingURL=candidate.module.js.map