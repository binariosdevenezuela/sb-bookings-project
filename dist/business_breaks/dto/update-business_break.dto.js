'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.UpdateBusinessBreakDto = void 0;
const mapped_types_1 = require('@nestjs/mapped-types');
const create_business_break_dto_1 = require('./create-business_break.dto');
class UpdateBusinessBreakDto extends (0, mapped_types_1.PartialType)(
  create_business_break_dto_1.CreateBusinessBreakDto
) {}
exports.UpdateBusinessBreakDto = UpdateBusinessBreakDto;
//# sourceMappingURL=update-business_break.dto.js.map
