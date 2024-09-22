import { Module } from '@nestjs/common';
import { AppointmentsServicesService } from './appointments_services.service';
import { AppointmentsServicesController } from './appointments_services.controller';

@Module({
  controllers: [AppointmentsServicesController],
  providers: [AppointmentsServicesService],
})
export class AppointmentsServicesModule {}
