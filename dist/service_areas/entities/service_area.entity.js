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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceArea = void 0;
const typeorm_1 = require("typeorm");
const business_entity_1 = require("../../businesses/entities/business.entity");
let ServiceArea = class ServiceArea {
};
exports.ServiceArea = ServiceArea;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ServiceArea.prototype, "service_area_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => business_entity_1.Business, (business) => business.business_id),
    __metadata("design:type", business_entity_1.Business)
], ServiceArea.prototype, "business", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20 }),
    __metadata("design:type", String)
], ServiceArea.prototype, "postal_code", void 0);
exports.ServiceArea = ServiceArea = __decorate([
    (0, typeorm_1.Entity)('service_areas')
], ServiceArea);
//# sourceMappingURL=service_area.entity.js.map