import { SchedulingModelEnum } from 'src/common/enums';
import { CreateBusinessLocationDto } from 'src/business_locations/dto/create-business_location.dto';
export declare class CreateBusinessDto {
    name: string;
    scheduling_model: SchedulingModelEnum;
    location: CreateBusinessLocationDto;
}
