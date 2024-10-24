import { AppointmentsServicesService } from './appointments_services.service';
import { CreateAppointmentsServiceDto } from './dto/create-appointments_service.dto';
import { UpdateAppointmentsServiceDto } from './dto/update-appointments_service.dto';
export declare class AppointmentsServicesController {
    private readonly appointmentsServicesService;
    constructor(appointmentsServicesService: AppointmentsServicesService);
    create(createAppointmentsServiceDto: CreateAppointmentsServiceDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAppointmentsServiceDto: UpdateAppointmentsServiceDto): string;
    remove(id: string): string;
}
