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
exports.AppointmentsServicesModule = void 0;
const common_1 = require('@nestjs/common');
const appointments_services_service_1 = require('./appointments_services.service');
const appointments_services_controller_1 = require('./appointments_services.controller');
let AppointmentsServicesModule = class AppointmentsServicesModule {};
exports.AppointmentsServicesModule = AppointmentsServicesModule;
exports.AppointmentsServicesModule = AppointmentsServicesModule = __decorate(
  [
    (0, common_1.Module)({
      controllers: [
        appointments_services_controller_1.AppointmentsServicesController,
      ],
      providers: [appointments_services_service_1.AppointmentsServicesService],
    }),
  ],
  AppointmentsServicesModule
);
//# sourceMappingURL=appointments_services.module.js.map
