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
exports.CreateBusinessHourDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const business_break_dto_1 = require("./business_break.dto");
const enums_1 = require("../../common/enums");
class CreateBusinessHourDto {
}
exports.CreateBusinessHourDto = CreateBusinessHourDto;
__decorate([
    (0, class_validator_1.IsEnum)(enums_1.DayOfWeekEnum),
    __metadata("design:type", String)
], CreateBusinessHourDto.prototype, "day_of_week", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateBusinessHourDto.prototype, "is_closed", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)(o => o.is_closed === false),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^([01][0-9]|2[0-3]):[0-5][0-9]$/, {
        message: 'start_time must be in the format HH:mm',
    }),
    __metadata("design:type", String)
], CreateBusinessHourDto.prototype, "start_time", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)(o => o.is_closed === false),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^([01][0-9]|2[0-3]):[0-5][0-9]$/, {
        message: 'end_time must be in the format HH:mm',
    }),
    __metadata("design:type", String)
], CreateBusinessHourDto.prototype, "end_time", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.ArrayMaxSize)(2),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => business_break_dto_1.BusinessBreakDto),
    __metadata("design:type", Array)
], CreateBusinessHourDto.prototype, "breaks", void 0);
//# sourceMappingURL=create-business_hour.dto.js.map