import { PartialType } from '@nestjs/mapped-types';
import { CreateAppointmentsServiceDto } from './create-appointments_service.dto';

export class UpdateAppointmentsServiceDto extends PartialType(
  CreateAppointmentsServiceDto
) {}
