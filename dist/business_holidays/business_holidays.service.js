'use strict';
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
            ? (desc = Object.getOwnPropertyDescriptor(target, key))
            : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.BusinessHolidaysService = void 0;
const common_1 = require('@nestjs/common');
let BusinessHolidaysService = class BusinessHolidaysService {
  create(createBusinessHolidayDto) {
    return 'This action adds a new businessHoliday';
  }
  findAll() {
    return `This action returns all businessHolidays`;
  }
  findOne(id) {
    return `This action returns a #${id} businessHoliday`;
  }
  update(id, updateBusinessHolidayDto) {
    return `This action updates a #${id} businessHoliday`;
  }
  remove(id) {
    return `This action removes a #${id} businessHoliday`;
  }
};
exports.BusinessHolidaysService = BusinessHolidaysService;
exports.BusinessHolidaysService = BusinessHolidaysService = __decorate(
  [(0, common_1.Injectable)()],
  BusinessHolidaysService
);
//# sourceMappingURL=business_holidays.service.js.map
