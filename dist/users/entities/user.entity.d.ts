import { UserRoleEnum } from '../../common/enums';
import { BusinessLocation } from 'src/business_locations/entities/business_location.entity';
export declare class User {
    user_id: number;
    businessLocation: BusinessLocation;
    name: string;
    lastname: string;
    email: string;
    phone: string;
    password: string;
    role: UserRoleEnum;
    created_at: Date;
    deletedAt?: Date;
}
