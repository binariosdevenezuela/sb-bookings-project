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
exports.BusinessLocationsController = void 0;
const common_1 = require("@nestjs/common");
const business_locations_service_1 = require("./business_locations.service");
const create_business_location_dto_1 = require("./dto/create-business_location.dto");
const update_business_location_dto_1 = require("./dto/update-business_location.dto");
let BusinessLocationsController = class BusinessLocationsController {
    constructor(businessLocationsService) {
        this.businessLocationsService = businessLocationsService;
    }
    create(createBusinessLocationDto, session) {
        return this.businessLocationsService.insert(session.user.business, createBusinessLocationDto);
    }
    findAll() {
        return this.businessLocationsService.findAll();
    }
    findOne(id) {
        return this.businessLocationsService.findOne(+id);
    }
    update(id, updateBusinessLocationDto) {
        return this.businessLocationsService.update(+id, updateBusinessLocationDto);
    }
    remove(id) {
        return this.businessLocationsService.remove(+id);
    }
};
exports.BusinessLocationsController = BusinessLocationsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_business_location_dto_1.CreateBusinessLocationDto, Object]),
    __metadata("design:returntype", void 0)
], BusinessLocationsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BusinessLocationsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BusinessLocationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_business_location_dto_1.UpdateBusinessLocationDto]),
    __metadata("design:returntype", void 0)
], BusinessLocationsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BusinessLocationsController.prototype, "remove", null);
exports.BusinessLocationsController = BusinessLocationsController = __decorate([
    (0, common_1.Controller)('my-business/locations'),
    __metadata("design:paramtypes", [business_locations_service_1.BusinessLocationsService])
], BusinessLocationsController);
//# sourceMappingURL=business_locations.controller.js.map