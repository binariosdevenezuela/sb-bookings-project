import { Appointment } from '../../appointments/entities/appointment.entity';
import { Service } from '../../services/entities/service.entity';
export declare class AppointmentsServices {
    id: number;
    service_id: number;
    appointment: Appointment;
    service: Service;
}
