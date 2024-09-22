import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AppointmentsServicesService } from './appointments_services.service';
import { CreateAppointmentsServiceDto } from './dto/create-appointments_service.dto';
import { UpdateAppointmentsServiceDto } from './dto/update-appointments_service.dto';

@Controller('appointments-services')
export class AppointmentsServicesController {
  constructor(private readonly appointmentsServicesService: AppointmentsServicesService) {}

  @Post()
  create(@Body() createAppointmentsServiceDto: CreateAppointmentsServiceDto) {
    return this.appointmentsServicesService.create(createAppointmentsServiceDto);
  }

  @Get()
  findAll() {
    return this.appointmentsServicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appointmentsServicesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAppointmentsServiceDto: UpdateAppointmentsServiceDto) {
    return this.appointmentsServicesService.update(+id, updateAppointmentsServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appointmentsServicesService.remove(+id);
  }
}
