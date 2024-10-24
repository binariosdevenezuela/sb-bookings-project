import { DayOfWeekEnum } from '../../common/enums';
import { BusinessLocation } from 'src/business_locations/entities/business_location.entity';
import { BusinessBreak } from 'src/business_hours/entities/business_break.entity';
export declare class BusinessHour {
    id: number;
    location: BusinessLocation;
    day_of_week: DayOfWeekEnum;
    start_time: string;
    end_time: string;
    breaks: BusinessBreak[];
    is_closed: boolean;
}
