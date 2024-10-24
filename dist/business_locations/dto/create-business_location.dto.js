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
exports.CreateBusinessLocationDto = void 0;
const class_validator_1 = require("class-validator");
class CreateBusinessLocationDto {
}
exports.CreateBusinessLocationDto = CreateBusinessLocationDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateBusinessLocationDto.prototype, "is_mobile", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => o.is_mobile === true),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateBusinessLocationDto.prototype, "latitude", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => o.is_mobile === true),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateBusinessLocationDto.prototype, "longitude", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => o.is_mobile === true),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateBusinessLocationDto.prototype, "service_radius", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => o.is_mobile === false),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateBusinessLocationDto.prototype, "street", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => o.is_mobile === false),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateBusinessLocationDto.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => o.is_mobile === false),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateBusinessLocationDto.prototype, "state", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => o.is_mobile === false),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateBusinessLocationDto.prototype, "postal_code", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateBusinessLocationDto.prototype, "phone", void 0);
//# sourceMappingURL=create-business_location.dto.js.map