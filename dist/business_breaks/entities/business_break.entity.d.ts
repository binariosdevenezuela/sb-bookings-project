import { Business } from '../../businesses/entities/business.entity';
export declare class BusinessBreak {
    business_break_id: number;
    business: Business;
    day_of_week: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
    break_start_time: string;
    break_end_time: string;
}
