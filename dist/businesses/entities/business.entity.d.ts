import { SchedulingModelEnum } from '../../common/enums';
import { BusinessLocation } from '../../business_locations/entities/business_location.entity';
export declare class Business {
    business_id: number;
    name: string;
    locations: BusinessLocation[];
    domain: string;
    scheduling_model: SchedulingModelEnum;
    created_at: Date;
    deletedAt?: Date;
}
