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
exports.VoteCenterSchema = exports.VoteCenter = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const union_schema_1 = require("../../candidate/schemas/union.schema");
let VoteCenter = class VoteCenter extends mongoose_2.Document {
};
exports.VoteCenter = VoteCenter;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], VoteCenter.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: 0 }),
    __metadata("design:type", Number)
], VoteCenter.prototype, "totalVotes", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Union' }),
    __metadata("design:type", union_schema_1.Union)
], VoteCenter.prototype, "union", void 0);
__decorate([
    (0, mongoose_1.Prop)([{ type: mongoose_2.Types.ObjectId, ref: 'VoteCounter' }]),
    __metadata("design:type", Array)
], VoteCenter.prototype, "voteCounters", void 0);
exports.VoteCenter = VoteCenter = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], VoteCenter);
exports.VoteCenterSchema = mongoose_1.SchemaFactory.createForClass(VoteCenter);
//# sourceMappingURL=votecenter.schema.js.map