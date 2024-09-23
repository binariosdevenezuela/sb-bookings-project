import { Business } from '../../businesses/entities/business.entity';
export declare class User {
    user_id: number;
    business: Business;
    username: string;
    name: string;
    lastname: string;
    email: string;
    phone: string;
    password: string;
    role: 'owner' | 'worker';
    platform_role: 'admin' | 'manager';
    created_at: Date;
}
