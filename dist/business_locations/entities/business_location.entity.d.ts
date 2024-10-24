import { Business } from '../../businesses/entities/business.entity';
import { Service } from 'src/services/entities/service.entity';
import { BusinessHour } from 'src/business_hours/entities/business_hour.entity';
import { User } from 'src/users/entities/user.entity';
export declare class BusinessLocation {
    id: number;
    business: Business;
    businessHours: BusinessHour[];
    services: Service[];
    users: User[];
    is_mobile: boolean;
    latitude: number;
    longitude: number;
    service_radius: number;
    street: string;
    city: string;
    state: string;
    postal_code: string;
    phone: string;
    timezone: string;
}
