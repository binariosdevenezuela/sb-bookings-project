import { CreateAppointmentsServiceDto } from './dto/create-appointments_service.dto';
import { UpdateAppointmentsServiceDto } from './dto/update-appointments_service.dto';
export declare class AppointmentsServicesService {
    create(createAppointmentsServiceDto: CreateAppointmentsServiceDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAppointmentsServiceDto: UpdateAppointmentsServiceDto): string;
    remove(id: number): string;
}
