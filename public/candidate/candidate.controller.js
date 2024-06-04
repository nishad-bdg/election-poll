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
exports.CandidateController = void 0;
const common_1 = require("@nestjs/common");
const candidate_service_1 = require("./candidate.service");
let CandidateController = class CandidateController {
    constructor(candidateService) {
        this.candidateService = candidateService;
    }
    async createCandidate(name) {
        return this.candidateService.createCandidate(name);
    }
    async createUnion(name) {
        return this.candidateService.createUnion(name);
    }
    async addCandidateToUnion(candidateId, unionId) {
        return this.candidateService.addCandidateToUnion(candidateId, unionId);
    }
    async getCandidates() {
        return this.candidateService.getCandidates();
    }
    async getUnions() {
        return this.candidateService.getUnions();
    }
};
exports.CandidateController = CandidateController;
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CandidateController.prototype, "createCandidate", null);
__decorate([
    (0, common_1.Post)('union/create'),
    __param(0, (0, common_1.Body)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CandidateController.prototype, "createUnion", null);
__decorate([
    (0, common_1.Post)(':candidateId/union/:unionId'),
    __param(0, (0, common_1.Param)('candidateId')),
    __param(1, (0, common_1.Param)('unionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], CandidateController.prototype, "addCandidateToUnion", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CandidateController.prototype, "getCandidates", null);
__decorate([
    (0, common_1.Get)('unions'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CandidateController.prototype, "getUnions", null);
exports.CandidateController = CandidateController = __decorate([
    (0, common_1.Controller)('candidate'),
    __metadata("design:paramtypes", [candidate_service_1.CandidateService])
], CandidateController);
//# sourceMappingURL=candidate.controller.js.map