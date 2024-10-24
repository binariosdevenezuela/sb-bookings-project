import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SessionEntity } from './auth/entities/session.entity'; // Importa la entidad de sesión
import { BusinessesModule } from './businesses/businesses.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { BusinessPlanOverridesModule } from './business_plan_overrides/business_plan_overrides.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { PlansModule } from './plans/plans.module';
import { BusinessHolidaysModule } from './business_holidays/business_holidays.module';
import { BusinessHoursModule } from './business_hours/business_hours.module';
import { AppointmentsServicesModule } from './appointments_services/appointments_services.module';
import { ServiceAreasModule } from './service_areas/service_areas.module';
import { ServicesModule } from './services/services.module';
import { ClientsModule } from './clients/clients.module';
import { WorkersModule } from './workers/workers.module';
import { UsersModule } from './users/users.module';
import { BusinessLocationsModule } from './business_locations/business_locations.module';
import { SignUpIntentModule } from './sign-up-intent/sign-up-intent.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345678',
      database: 'bookings',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true
    }),
    TypeOrmModule.forFeature([SessionEntity]),
    BusinessesModule,
    UsersModule,
    WorkersModule,
    ClientsModule,
    ServicesModule,
    AppointmentsModule,
    ServiceAreasModule,
    AppointmentsServicesModule,
    BusinessHoursModule,
    BusinessHolidaysModule,
    PlansModule,
    SubscriptionsModule,
    BusinessPlanOverridesModule,
    BusinessLocationsModule,
    SignUpIntentModule,
    AuthModule,
  ],
  providers: [],
})
export class AppModule {}
