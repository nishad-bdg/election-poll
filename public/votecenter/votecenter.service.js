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
exports.VotecenterService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const votecenter_schema_1 = require("./schemas/votecenter.schema");
const mongoose_2 = require("mongoose");
const union_schema_1 = require("../candidate/schemas/union.schema");
let VotecenterService = class VotecenterService {
    constructor(voteCenterModel, unionModel) {
        this.voteCenterModel = voteCenterModel;
        this.unionModel = unionModel;
    }
    async create(createVotecenterDto) {
        const voteCenter = new this.voteCenterModel({
            name: createVotecenterDto.name,
            union: createVotecenterDto.unionId,
        });
        await this.unionModel.findByIdAndUpdate(createVotecenterDto.unionId, {
            $addToSet: { voteCenters: voteCenter },
        });
        return voteCenter.save();
    }
    async findAll() {
        return await this.voteCenterModel.find().populate('voteCounters').exec();
    }
    findOne(id) {
        return `This action returns a #${id} votecenter`;
    }
    update(id, updateVotecenterDto) {
        return `This action updates a #${id} votecenter`;
    }
    remove(id) {
        return `This action removes a #${id} votecenter`;
    }
};
exports.VotecenterService = VotecenterService;
exports.VotecenterService = VotecenterService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(votecenter_schema_1.VoteCenter.name)),
    __param(1, (0, mongoose_1.InjectModel)(union_schema_1.Union.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], VotecenterService);
//# sourceMappingURL=votecenter.service.js.map