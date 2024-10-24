"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBusinessHolidayDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_business_holiday_dto_1 = require("./create-business_holiday.dto");
class UpdateBusinessHolidayDto extends (0, mapped_types_1.PartialType)(create_business_holiday_dto_1.CreateBusinessHolidayDto) {
}
exports.UpdateBusinessHolidayDto = UpdateBusinessHolidayDto;
//# sourceMappingURL=update-business_holiday.dto.js.map