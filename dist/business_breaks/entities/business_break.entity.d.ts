import { DayOfWeekEnum } from '../../common/enums';
import { Business } from '../../businesses/entities/business.entity';
export declare class BusinessBreak {
    business_break_id: number;
    business: Business;
    day_of_week: DayOfWeekEnum;
    break_start_time: string;
    break_end_time: string;
}
