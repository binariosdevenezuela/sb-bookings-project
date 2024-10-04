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
exports.AppointmentsServices = void 0;
const typeorm_1 = require('typeorm');
const appointment_entity_1 = require('../../appointments/entities/appointment.entity');
const service_entity_1 = require('../../services/entities/service.entity');
let AppointmentsServices = class AppointmentsServices {};
exports.AppointmentsServices = AppointmentsServices;
__decorate(
  [(0, typeorm_1.PrimaryColumn)(), __metadata('design:type', Number)],
  AppointmentsServices.prototype,
  'appointment_id',
  void 0
);
__decorate(
  [(0, typeorm_1.PrimaryColumn)(), __metadata('design:type', Number)],
  AppointmentsServices.prototype,
  'service_id',
  void 0
);
__decorate(
  [
    (0, typeorm_1.ManyToOne)(
      () => appointment_entity_1.Appointment,
      (appointment) => appointment.appointment_id
    ),
    __metadata('design:type', appointment_entity_1.Appointment),
  ],
  AppointmentsServices.prototype,
  'appointment',
  void 0
);
__decorate(
  [
    (0, typeorm_1.ManyToOne)(
      () => service_entity_1.Service,
      (service) => service.service_id
    ),
    __metadata('design:type', service_entity_1.Service),
  ],
  AppointmentsServices.prototype,
  'service',
  void 0
);
exports.AppointmentsServices = AppointmentsServices = __decorate(
  [(0, typeorm_1.Entity)('appointments_services')],
  AppointmentsServices
);
//# sourceMappingURL=appointments_service.entity.js.map
