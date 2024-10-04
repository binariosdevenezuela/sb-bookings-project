'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.UpdateBusinessHourDto = void 0;
const mapped_types_1 = require('@nestjs/mapped-types');
const create_business_hour_dto_1 = require('./create-business_hour.dto');
class UpdateBusinessHourDto extends (0, mapped_types_1.PartialType)(
  create_business_hour_dto_1.CreateBusinessHourDto
) {}
exports.UpdateBusinessHourDto = UpdateBusinessHourDto;
//# sourceMappingURL=update-business_hour.dto.js.map
