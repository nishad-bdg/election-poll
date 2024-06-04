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
exports.VotecenterController = void 0;
const common_1 = require("@nestjs/common");
const votecenter_service_1 = require("./votecenter.service");
const create_votecenter_dto_1 = require("./dto/create-votecenter.dto");
const update_votecenter_dto_1 = require("./dto/update-votecenter.dto");
let VotecenterController = class VotecenterController {
    constructor(votecenterService) {
        this.votecenterService = votecenterService;
    }
    create(createVotecenterDto) {
        return this.votecenterService.create(createVotecenterDto);
    }
    async findAll() {
        return await this.votecenterService.findAll();
    }
    findOne(id) {
        return this.votecenterService.findOne(+id);
    }
    update(id, updateVotecenterDto) {
        return this.votecenterService.update(+id, updateVotecenterDto);
    }
    remove(id) {
        return this.votecenterService.remove(+id);
    }
};
exports.VotecenterController = VotecenterController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_votecenter_dto_1.CreateVotecenterDto]),
    __metadata("design:returntype", void 0)
], VotecenterController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VotecenterController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VotecenterController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_votecenter_dto_1.UpdateVotecenterDto]),
    __metadata("design:returntype", void 0)
], VotecenterController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VotecenterController.prototype, "remove", null);
exports.VotecenterController = VotecenterController = __decorate([
    (0, common_1.Controller)('votecenter'),
    __metadata("design:paramtypes", [votecenter_service_1.VotecenterService])
], VotecenterController);
//# sourceMappingURL=votecenter.controller.js.map