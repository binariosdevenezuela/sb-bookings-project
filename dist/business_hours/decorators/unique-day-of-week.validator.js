"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniqueDayOfWeekConstraint = void 0;
exports.UniqueDayOfWeek = UniqueDayOfWeek;
const class_validator_1 = require("class-validator");
let UniqueDayOfWeekConstraint = class UniqueDayOfWeekConstraint {
    validate(business_hours) {
        if (!Array.isArray(business_hours)) {
            return true;
        }
        const days = business_hours.map(bh => bh.day_of_week);
        const uniqueDays = new Set(days);
        return days.length === uniqueDays.size;
    }
    defaultMessage() {
        return 'Duplicate days of the week are not allowed!';
    }
};
exports.UniqueDayOfWeekConstraint = UniqueDayOfWeekConstraint;
exports.UniqueDayOfWeekConstraint = UniqueDayOfWeekConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ async: false })
], UniqueDayOfWeekConstraint);
function UniqueDayOfWeek(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: UniqueDayOfWeekConstraint
        });
    };
}
//# sourceMappingURL=unique-day-of-week.validator.js.map