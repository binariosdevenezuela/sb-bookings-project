import { SchedulingModelEnum } from '../../common/enums';
import { BusinessLocation } from '../../business_locations/entities/business_location.entity';
import { User } from 'src/users/entities/user.entity';
import { Client } from 'src/clients/entities/client.entity';
export declare class Business {
    id: number;
    user: User;
    name: string;
    locations: BusinessLocation[];
    clients: Client[];
    domain: string;
    scheduling_model: SchedulingModelEnum;
    created_at: Date;
    deletedAt?: Date;
}
