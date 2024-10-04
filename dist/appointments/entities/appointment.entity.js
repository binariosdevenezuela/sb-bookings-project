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
exports.Appointment = void 0;
const typeorm_1 = require('typeorm');
const client_entity_1 = require('../../clients/entities/client.entity');
const worker_entity_1 = require('../../workers/entities/worker.entity');
const service_entity_1 = require('../../services/entities/service.entity');
let Appointment = class Appointment {};
exports.Appointment = Appointment;
__decorate(
  [(0, typeorm_1.PrimaryGeneratedColumn)(), __metadata('design:type', Number)],
  Appointment.prototype,
  'appointment_id',
  void 0
);
__decorate(
  [
    (0, typeorm_1.ManyToOne)(
      () => client_entity_1.Client,
      (client) => client.client_id
    ),
    __metadata('design:type', client_entity_1.Client),
  ],
  Appointment.prototype,
  'client',
  void 0
);
__decorate(
  [
    (0, typeorm_1.ManyToOne)(
      () => worker_entity_1.Worker,
      (worker) => worker.worker_id
    ),
    __metadata('design:type', worker_entity_1.Worker),
  ],
  Appointment.prototype,
  'worker',
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
  Appointment.prototype,
  'service',
  void 0
);
__decorate(
  [
    (0, typeorm_1.Column)({ type: 'datetime' }),
    __metadata('design:type', Date),
  ],
  Appointment.prototype,
  'start_time',
  void 0
);
__decorate(
  [
    (0, typeorm_1.Column)({ type: 'datetime' }),
    __metadata('design:type', Date),
  ],
  Appointment.prototype,
  'end_time',
  void 0
);
__decorate(
  [
    (0, typeorm_1.Column)({ length: 255, nullable: true }),
    __metadata('design:type', String),
  ],
  Appointment.prototype,
  'service_location',
  void 0
);
__decorate(
  [
    (0, typeorm_1.Column)({
      type: 'decimal',
      precision: 10,
      scale: 8,
      nullable: true,
    }),
    __metadata('design:type', Number),
  ],
  Appointment.prototype,
  'latitude',
  void 0
);
__decorate(
  [
    (0, typeorm_1.Column)({
      type: 'decimal',
      precision: 11,
      scale: 8,
      nullable: true,
    }),
    __metadata('design:type', Number),
  ],
  Appointment.prototype,
  'longitude',
  void 0
);
__decorate(
  [
    (0, typeorm_1.Column)({
      type: 'enum',
      enum: ['Scheduled', 'In Progress', 'Completed'],
      default: 'Scheduled',
    }),
    __metadata('design:type', String),
  ],
  Appointment.prototype,
  'appointment_status',
  void 0
);
exports.Appointment = Appointment = __decorate(
  [(0, typeorm_1.Entity)('appointments')],
  Appointment
);
//# sourceMappingURL=appointment.entity.js.map
