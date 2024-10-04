'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.UpdateBusinessLocationDto = void 0;
const mapped_types_1 = require('@nestjs/mapped-types');
const create_business_location_dto_1 = require('./create-business_location.dto');
class UpdateBusinessLocationDto extends (0, mapped_types_1.PartialType)(
  create_business_location_dto_1.CreateBusinessLocationDto
) {}
exports.UpdateBusinessLocationDto = UpdateBusinessLocationDto;
//# sourceMappingURL=update-business_location.dto.js.map
