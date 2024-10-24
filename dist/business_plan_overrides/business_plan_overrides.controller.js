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
exports.BusinessPlanOverridesController = void 0;
const common_1 = require("@nestjs/common");
const business_plan_overrides_service_1 = require("./business_plan_overrides.service");
const create_business_plan_override_dto_1 = require("./dto/create-business_plan_override.dto");
const update_business_plan_override_dto_1 = require("./dto/update-business_plan_override.dto");
let BusinessPlanOverridesController = class BusinessPlanOverridesController {
    constructor(businessPlanOverridesService) {
        this.businessPlanOverridesService = businessPlanOverridesService;
    }
    create(createBusinessPlanOverrideDto) {
        return this.businessPlanOverridesService.create(createBusinessPlanOverrideDto);
    }
    findAll() {
        return this.businessPlanOverridesService.findAll();
    }
    findOne(id) {
        return this.businessPlanOverridesService.findOne(+id);
    }
    update(id, updateBusinessPlanOverrideDto) {
        return this.businessPlanOverridesService.update(+id, updateBusinessPlanOverrideDto);
    }
    remove(id) {
        return this.businessPlanOverridesService.remove(+id);
    }
};
exports.BusinessPlanOverridesController = BusinessPlanOverridesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_business_plan_override_dto_1.CreateBusinessPlanOverrideDto]),
    __metadata("design:returntype", void 0)
], BusinessPlanOverridesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BusinessPlanOverridesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BusinessPlanOverridesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_business_plan_override_dto_1.UpdateBusinessPlanOverrideDto]),
    __metadata("design:returntype", void 0)
], BusinessPlanOverridesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BusinessPlanOverridesController.prototype, "remove", null);
exports.BusinessPlanOverridesController = BusinessPlanOverridesController = __decorate([
    (0, common_1.Controller)('business-plan-overrides'),
    __metadata("design:paramtypes", [business_plan_overrides_service_1.BusinessPlanOverridesService])
], BusinessPlanOverridesController);
//# sourceMappingURL=business_plan_overrides.controller.js.map