"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateServiceAreaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_service_area_dto_1 = require("./create-service_area.dto");
class UpdateServiceAreaDto extends (0, mapped_types_1.PartialType)(create_service_area_dto_1.CreateServiceAreaDto) {
}
exports.UpdateServiceAreaDto = UpdateServiceAreaDto;
//# sourceMappingURL=update-service_area.dto.js.map