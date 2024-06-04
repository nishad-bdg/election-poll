"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotecenterModule = void 0;
const common_1 = require("@nestjs/common");
const votecenter_service_1 = require("./votecenter.service");
const votecenter_controller_1 = require("./votecenter.controller");
const votecenter_schema_1 = require("./schemas/votecenter.schema");
const mongoose_1 = require("@nestjs/mongoose");
const union_schema_1 = require("../candidate/schemas/union.schema");
let VotecenterModule = class VotecenterModule {
};
exports.VotecenterModule = VotecenterModule;
exports.VotecenterModule = VotecenterModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: votecenter_schema_1.VoteCenter.name, schema: votecenter_schema_1.VoteCenterSchema },
                { name: union_schema_1.Union.name, schema: union_schema_1.UnionSchema },
            ]),
        ],
        controllers: [votecenter_controller_1.VotecenterController],
        providers: [votecenter_service_1.VotecenterService],
    })
], VotecenterModule);
//# sourceMappingURL=votecenter.module.js.map