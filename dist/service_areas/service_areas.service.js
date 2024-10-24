"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceAreasService = void 0;
const common_1 = require("@nestjs/common");
let ServiceAreasService = class ServiceAreasService {
    create(createServiceAreaDto) {
        return 'This action adds a new serviceArea';
    }
    findAll() {
        return `This action returns all serviceAreas`;
    }
    findOne(id) {
        return `This action returns a #${id} serviceArea`;
    }
    update(id, updateServiceAreaDto) {
        return `This action updates a #${id} serviceArea`;
    }
    remove(id) {
        return `This action removes a #${id} serviceArea`;
    }
};
exports.ServiceAreasService = ServiceAreasService;
exports.ServiceAreasService = ServiceAreasService = __decorate([
    (0, common_1.Injectable)()
], ServiceAreasService);
//# sourceMappingURL=service_areas.service.js.map