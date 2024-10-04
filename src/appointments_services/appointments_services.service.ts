import { Injectable } from '@nestjs/common';
import { CreateAppointmentsServiceDto } from './dto/create-appointments_service.dto';
import { UpdateAppointmentsServiceDto } from './dto/update-appointments_service.dto';

@Injectable()
export class AppointmentsServicesService {
  create(createAppointmentsServiceDto: CreateAppointmentsServiceDto) {
    return 'This action adds a new appointmentsService';
  }

  findAll() {
    return `This action returns all appointmentsServices`;
  }

  findOne(id: number) {
    return `This action returns a #${id} appointmentsService`;
  }

  update(
    id: number,
    updateAppointmentsServiceDto: UpdateAppointmentsServiceDto
  ) {
    return `This action updates a #${id} appointmentsService`;
  }

  remove(id: number) {
    return `This action removes a #${id} appointmentsService`;
  }
}
