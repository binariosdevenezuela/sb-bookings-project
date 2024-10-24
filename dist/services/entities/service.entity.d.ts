import { Appointment } from 'src/appointments/entities/appointment.entity';
import { BusinessLocation } from 'src/business_locations/entities/business_location.entity';
export declare class Service {
    id: number;
    service_name: string;
    price: number;
    duration_minutes: number;
    location: BusinessLocation;
    appointments: Appointment[];
}
