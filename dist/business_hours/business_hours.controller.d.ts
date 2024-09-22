import { BusinessHoursService } from './business_hours.service';
import { CreateBusinessHourDto } from './dto/create-business_hour.dto';
import { UpdateBusinessHourDto } from './dto/update-business_hour.dto';
export declare class BusinessHoursController {
    private readonly businessHoursService;
    constructor(businessHoursService: BusinessHoursService);
    create(createBusinessHourDto: CreateBusinessHourDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateBusinessHourDto: UpdateBusinessHourDto): string;
    remove(id: string): string;
}
