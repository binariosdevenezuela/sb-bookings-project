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
exports.BusinessHoursController = void 0;
const common_1 = require("@nestjs/common");
const business_hours_service_1 = require("./business_hours.service");
const update_business_hour_dto_1 = require("./dto/update-business_hour.dto");
let BusinessHoursController = class BusinessHoursController {
    constructor(businessHoursService) {
        this.businessHoursService = businessHoursService;
    }
    async update(locationId, updateBusinessHourDto) {
        await this.businessHoursService.update(+locationId, updateBusinessHourDto);
        return "Edited successfully.";
    }
};
exports.BusinessHoursController = BusinessHoursController;
__decorate([
    (0, common_1.Patch)(),
    __param(0, (0, common_1.Param)('locationId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_business_hour_dto_1.UpdateBusinessHourDto]),
    __metadata("design:returntype", Promise)
], BusinessHoursController.prototype, "update", null);
exports.BusinessHoursController = BusinessHoursController = __decorate([
    (0, common_1.Controller)('my-business/locations/:locationId/hours'),
    __metadata("design:paramtypes", [business_hours_service_1.BusinessHoursService])
], BusinessHoursController);
//# sourceMappingURL=business_hours.controller.js.map