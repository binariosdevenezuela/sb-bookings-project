import { BusinessBreakDto } from 'src/business_hours/dto/business_break.dto';
import { DayOfWeekEnum } from 'src/common/enums';
export declare class CreateBusinessHourDto {
    day_of_week: DayOfWeekEnum;
    is_closed: boolean;
    start_time?: string;
    end_time?: string;
    breaks: BusinessBreakDto[];
}
