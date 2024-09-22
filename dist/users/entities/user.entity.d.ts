import { Business } from '../../businesses/entities/business.entity';
export declare class User {
    user_id: number;
    business: Business;
    username: string;
    password: string;
    role: 'owner' | 'manager' | 'worker';
    platform_role: 'admin';
    email: string;
    created_at: Date;
}
