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
exports.BusinessLocation = void 0;
const typeorm_1 = require("typeorm");
const business_entity_1 = require("../../businesses/entities/business.entity");
const service_entity_1 = require("../../services/entities/service.entity");
const business_hour_entity_1 = require("../../business_hours/entities/business_hour.entity");
const user_entity_1 = require("../../users/entities/user.entity");
let BusinessLocation = class BusinessLocation {
};
exports.BusinessLocation = BusinessLocation;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], BusinessLocation.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => business_entity_1.Business, (business) => business.locations, { nullable: false }),
    __metadata("design:type", business_entity_1.Business)
], BusinessLocation.prototype, "business", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => business_hour_entity_1.BusinessHour, (businessHour) => businessHour.location, { cascade: true }),
    __metadata("design:type", Array)
], BusinessLocation.prototype, "businessHours", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => service_entity_1.Service, (service) => service.location),
    __metadata("design:type", Array)
], BusinessLocation.prototype, "services", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_entity_1.User, (user) => user.businessLocation),
    __metadata("design:type", Array)
], BusinessLocation.prototype, "users", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], BusinessLocation.prototype, "is_mobile", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 8, nullable: true }),
    __metadata("design:type", Number)
], BusinessLocation.prototype, "latitude", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 11, scale: 8, nullable: true }),
    __metadata("design:type", Number)
], BusinessLocation.prototype, "longitude", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], BusinessLocation.prototype, "service_radius", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], BusinessLocation.prototype, "street", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], BusinessLocation.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], BusinessLocation.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], BusinessLocation.prototype, "postal_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 15 }),
    __metadata("design:type", String)
], BusinessLocation.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: false }),
    __metadata("design:type", String)
], BusinessLocation.prototype, "timezone", void 0);
exports.BusinessLocation = BusinessLocation = __decorate([
    (0, typeorm_1.Entity)('business_locations')
], BusinessLocation);
//# sourceMappingURL=business_location.entity.js.map