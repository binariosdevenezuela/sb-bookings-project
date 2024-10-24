"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAppointmentsServiceDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_appointments_service_dto_1 = require("./create-appointments_service.dto");
class UpdateAppointmentsServiceDto extends (0, mapped_types_1.PartialType)(create_appointments_service_dto_1.CreateAppointmentsServiceDto) {
}
exports.UpdateAppointmentsServiceDto = UpdateAppointmentsServiceDto;
//# sourceMappingURL=update-appointments_service.dto.js.map