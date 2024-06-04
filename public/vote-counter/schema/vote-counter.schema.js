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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoteCounterSchema = exports.VoteCounter = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const candidate_schema_1 = require("../../candidate/schemas/candidate.schema");
const votecenter_schema_1 = require("../../votecenter/schemas/votecenter.schema");
let VoteCounter = class VoteCounter extends mongoose_2.Document {
};
exports.VoteCounter = VoteCounter;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], VoteCounter.prototype, "votes", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Candidate' }),
    __metadata("design:type", candidate_schema_1.Candidate)
], VoteCounter.prototype, "candidate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'VoteCenter' }),
    __metadata("design:type", votecenter_schema_1.VoteCenter)
], VoteCounter.prototype, "voteCenter", void 0);
exports.VoteCounter = VoteCounter = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], VoteCounter);
exports.VoteCounterSchema = mongoose_1.SchemaFactory.createForClass(VoteCounter);
//# sourceMappingURL=vote-counter.schema.js.map