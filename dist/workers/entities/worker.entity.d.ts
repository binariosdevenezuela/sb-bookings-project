import { Business } from '../../businesses/entities/business.entity';
import { Appointment } from 'src/appointments/entities/appointment.entity';
export declare class Worker {
    id: number;
    business: Business;
    appointments: Appointment[];
    name: string;
    specialty: string;
}
