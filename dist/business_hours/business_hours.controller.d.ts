import { BusinessHoursService } from './business_hours.service';
import { UpdateBusinessHourDto } from './dto/update-business_hour.dto';
export declare class BusinessHoursController {
    private readonly businessHoursService;
    constructor(businessHoursService: BusinessHoursService);
    update(locationId: string, updateBusinessHourDto: UpdateBusinessHourDto): Promise<string>;
}
