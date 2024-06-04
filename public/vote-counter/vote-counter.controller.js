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
exports.VoteCounterController = void 0;
const common_1 = require("@nestjs/common");
const vote_counter_service_1 = require("./vote-counter.service");
const create_vote_couter_dto_1 = require("./dto/create-vote-couter.dto");
let VoteCounterController = class VoteCounterController {
    constructor(voteCounterService) {
        this.voteCounterService = voteCounterService;
    }
    create(createVoteCounterDto) {
        return this.voteCounterService.create(createVoteCounterDto);
    }
};
exports.VoteCounterController = VoteCounterController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_vote_couter_dto_1.CreateVoteCounterDto]),
    __metadata("design:returntype", void 0)
], VoteCounterController.prototype, "create", null);
exports.VoteCounterController = VoteCounterController = __decorate([
    (0, common_1.Controller)('vote-counter'),
    __metadata("design:paramtypes", [vote_counter_service_1.VoteCounterService])
], VoteCounterController);
//# sourceMappingURL=vote-counter.controller.js.map