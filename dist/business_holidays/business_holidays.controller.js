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
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
      return Reflect.metadata(k, v);
  };
var __param =
  (this && this.__param) ||
  function (paramIndex, decorator) {
    return function (target, key) {
      decorator(target, key, paramIndex);
    };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.BusinessHolidaysController = void 0;
const common_1 = require('@nestjs/common');
const business_holidays_service_1 = require('./business_holidays.service');
const create_business_holiday_dto_1 = require('./dto/create-business_holiday.dto');
const update_business_holiday_dto_1 = require('./dto/update-business_holiday.dto');
let BusinessHolidaysController = class BusinessHolidaysController {
  constructor(businessHolidaysService) {
    this.businessHolidaysService = businessHolidaysService;
  }
  create(createBusinessHolidayDto) {
    return this.businessHolidaysService.create(createBusinessHolidayDto);
  }
  findAll() {
    return this.businessHolidaysService.findAll();
  }
  findOne(id) {
    return this.businessHolidaysService.findOne(+id);
  }
  update(id, updateBusinessHolidayDto) {
    return this.businessHolidaysService.update(+id, updateBusinessHolidayDto);
  }
  remove(id) {
    return this.businessHolidaysService.remove(+id);
  }
};
exports.BusinessHolidaysController = BusinessHolidaysController;
__decorate(
  [
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [
      create_business_holiday_dto_1.CreateBusinessHolidayDto,
    ]),
    __metadata('design:returntype', void 0),
  ],
  BusinessHolidaysController.prototype,
  'create',
  null
);
__decorate(
  [
    (0, common_1.Get)(),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', []),
    __metadata('design:returntype', void 0),
  ],
  BusinessHolidaysController.prototype,
  'findAll',
  null
);
__decorate(
  [
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [String]),
    __metadata('design:returntype', void 0),
  ],
  BusinessHolidaysController.prototype,
  'findOne',
  null
);
__decorate(
  [
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [
      String,
      update_business_holiday_dto_1.UpdateBusinessHolidayDto,
    ]),
    __metadata('design:returntype', void 0),
  ],
  BusinessHolidaysController.prototype,
  'update',
  null
);
__decorate(
  [
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [String]),
    __metadata('design:returntype', void 0),
  ],
  BusinessHolidaysController.prototype,
  'remove',
  null
);
exports.BusinessHolidaysController = BusinessHolidaysController = __decorate(
  [
    (0, common_1.Controller)('business-holidays'),
    __metadata('design:paramtypes', [
      business_holidays_service_1.BusinessHolidaysService,
    ]),
  ],
  BusinessHolidaysController
);
//# sourceMappingURL=business_holidays.controller.js.map
