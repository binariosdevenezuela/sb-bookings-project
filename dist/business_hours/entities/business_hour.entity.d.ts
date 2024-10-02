import { DayOfWeekEnum } from '../../common/enums';
import { Business } from '../../businesses/entities/business.entity';
export declare class BusinessHour {
    business_hours_id: number;
    business: Business;
    day_of_week: DayOfWeekEnum;
    start_time: string;
    end_time: string;
    is_closed: boolean;
}
