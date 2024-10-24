import { UserRoleEnum } from '../../common/enums';
import { Business } from 'src/businesses/entities/business.entity';
import { BusinessLocation } from 'src/business_locations/entities/business_location.entity';
export declare class User {
    id: number;
    business: Business;
    businessLocation: BusinessLocation;
    name: string;
    lastname: string;
    email: string;
    phone: string;
    password?: string;
    role: UserRoleEnum;
    created_at: Date;
    deletedAt?: Date;
}
