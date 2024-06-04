"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVotecenterDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_votecenter_dto_1 = require("./create-votecenter.dto");
class UpdateVotecenterDto extends (0, mapped_types_1.PartialType)(create_votecenter_dto_1.CreateVotecenterDto) {
}
exports.UpdateVotecenterDto = UpdateVotecenterDto;
//# sourceMappingURL=update-votecenter.dto.js.map