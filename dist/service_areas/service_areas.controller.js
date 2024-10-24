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
exports.ServiceAreasController = void 0;
const common_1 = require("@nestjs/common");
const service_areas_service_1 = require("./service_areas.service");
const create_service_area_dto_1 = require("./dto/create-service_area.dto");
const update_service_area_dto_1 = require("./dto/update-service_area.dto");
let ServiceAreasController = class ServiceAreasController {
    constructor(serviceAreasService) {
        this.serviceAreasService = serviceAreasService;
    }
    create(createServiceAreaDto) {
        return this.serviceAreasService.create(createServiceAreaDto);
    }
    findAll() {
        return this.serviceAreasService.findAll();
    }
    findOne(id) {
        return this.serviceAreasService.findOne(+id);
    }
    update(id, updateServiceAreaDto) {
        return this.serviceAreasService.update(+id, updateServiceAreaDto);
    }
    remove(id) {
        return this.serviceAreasService.remove(+id);
    }
};
exports.ServiceAreasController = ServiceAreasController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_service_area_dto_1.CreateServiceAreaDto]),
    __metadata("design:returntype", void 0)
], ServiceAreasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ServiceAreasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ServiceAreasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_service_area_dto_1.UpdateServiceAreaDto]),
    __metadata("design:returntype", void 0)
], ServiceAreasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ServiceAreasController.prototype, "remove", null);
exports.ServiceAreasController = ServiceAreasController = __decorate([
    (0, common_1.Controller)('service-areas'),
    __metadata("design:paramtypes", [service_areas_service_1.ServiceAreasService])
], ServiceAreasController);
//# sourceMappingURL=service_areas.controller.js.map