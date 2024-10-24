import { BusinessHour } from 'src/business_hours/entities/business_hour.entity';
export declare class BusinessBreak {
    id: number;
    businessHour: BusinessHour;
    start_time: string;
    end_time: string;
}
