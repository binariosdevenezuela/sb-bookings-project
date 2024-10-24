"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessLocationsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const business_locations_service_1 = require("./business_locations.service");
const business_locations_controller_1 = require("./business_locations.controller");
const business_location_entity_1 = require("./entities/business_location.entity");
let BusinessLocationsModule = class BusinessLocationsModule {
};
exports.BusinessLocationsModule = BusinessLocationsModule;
exports.BusinessLocationsModule = BusinessLocationsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([business_location_entity_1.BusinessLocation]),
        ],
        controllers: [business_locations_controller_1.BusinessLocationsController],
        providers: [business_locations_service_1.BusinessLocationsService],
    })
], BusinessLocationsModule);
//# sourceMappingURL=business_locations.module.js.map