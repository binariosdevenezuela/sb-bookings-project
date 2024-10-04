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
exports.AppModule = void 0;
const common_1 = require('@nestjs/common');
const typeorm_1 = require('@nestjs/typeorm');
const session_entity_1 = require('./auth/entities/session.entity');
const businesses_module_1 = require('./businesses/businesses.module');
const appointments_module_1 = require('./appointments/appointments.module');
const business_plan_overrides_module_1 = require('./business_plan_overrides/business_plan_overrides.module');
const subscriptions_module_1 = require('./subscriptions/subscriptions.module');
const plans_module_1 = require('./plans/plans.module');
const business_breaks_module_1 = require('./business_breaks/business_breaks.module');
const business_holidays_module_1 = require('./business_holidays/business_holidays.module');
const business_hours_module_1 = require('./business_hours/business_hours.module');
const appointments_services_module_1 = require('./appointments_services/appointments_services.module');
const service_areas_module_1 = require('./service_areas/service_areas.module');
const services_module_1 = require('./services/services.module');
const clients_module_1 = require('./clients/clients.module');
const workers_module_1 = require('./workers/workers.module');
const users_module_1 = require('./users/users.module');
const business_locations_module_1 = require('./business_locations/business_locations.module');
const sign_up_intent_module_1 = require('./sign-up-intent/sign-up-intent.module');
const auth_module_1 = require('./auth/auth.module');
const response_service_1 = require('./response/response.service');
let AppModule = class AppModule {};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate(
  [
    (0, common_1.Module)({
      imports: [
        typeorm_1.TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: '12345678',
          database: 'bookings',
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          synchronize: true,
        }),
        typeorm_1.TypeOrmModule.forFeature([session_entity_1.SessionEntity]),
        businesses_module_1.BusinessesModule,
        users_module_1.UsersModule,
        workers_module_1.WorkersModule,
        clients_module_1.ClientsModule,
        services_module_1.ServicesModule,
        appointments_module_1.AppointmentsModule,
        service_areas_module_1.ServiceAreasModule,
        appointments_services_module_1.AppointmentsServicesModule,
        business_hours_module_1.BusinessHoursModule,
        business_holidays_module_1.BusinessHolidaysModule,
        business_breaks_module_1.BusinessBreaksModule,
        plans_module_1.PlansModule,
        subscriptions_module_1.SubscriptionsModule,
        business_plan_overrides_module_1.BusinessPlanOverridesModule,
        business_locations_module_1.BusinessLocationsModule,
        sign_up_intent_module_1.SignUpIntentModule,
        auth_module_1.AuthModule,
      ],
      providers: [response_service_1.ResponseService],
    }),
  ],
  AppModule
);
//# sourceMappingURL=app.module.js.map
