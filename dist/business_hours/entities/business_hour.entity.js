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
Object.defineProperty(exports, '__esModule', { value: true });
exports.BusinessHour = void 0;
const enums_1 = require('../../common/enums');
const typeorm_1 = require('typeorm');
const business_entity_1 = require('../../businesses/entities/business.entity');
let BusinessHour = class BusinessHour {};
exports.BusinessHour = BusinessHour;
__decorate(
  [(0, typeorm_1.PrimaryGeneratedColumn)(), __metadata('design:type', Number)],
  BusinessHour.prototype,
  'business_hours_id',
  void 0
);
__decorate(
  [
    (0, typeorm_1.ManyToOne)(
      () => business_entity_1.Business,
      (business) => business.business_id
    ),
    __metadata('design:type', business_entity_1.Business),
  ],
  BusinessHour.prototype,
  'business',
  void 0
);
__decorate(
  [
    (0, typeorm_1.Column)({ type: 'enum', enum: enums_1.DayOfWeekEnum }),
    __metadata('design:type', String),
  ],
  BusinessHour.prototype,
  'day_of_week',
  void 0
);
__decorate(
  [(0, typeorm_1.Column)({ type: 'time' }), __metadata('design:type', String)],
  BusinessHour.prototype,
  'start_time',
  void 0
);
__decorate(
  [(0, typeorm_1.Column)({ type: 'time' }), __metadata('design:type', String)],
  BusinessHour.prototype,
  'end_time',
  void 0
);
__decorate(
  [
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata('design:type', Boolean),
  ],
  BusinessHour.prototype,
  'is_closed',
  void 0
);
exports.BusinessHour = BusinessHour = __decorate(
  [(0, typeorm_1.Entity)('business_hours')],
  BusinessHour
);
//# sourceMappingURL=business_hour.entity.js.map
