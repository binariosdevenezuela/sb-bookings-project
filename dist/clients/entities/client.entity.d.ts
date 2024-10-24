import { Appointment } from 'src/appointments/entities/appointment.entity';
import { Business } from 'src/businesses/entities/business.entity';
export declare class Client {
    id: number;
    name: string;
    phone: string;
    email: string;
    password?: string;
    appointments: Appointment[];
    address: string;
    business: Business;
    created_at: Date;
    deletedAt?: Date;
}
