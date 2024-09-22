import { BusinessHolidaysService } from './business_holidays.service';
import { CreateBusinessHolidayDto } from './dto/create-business_holiday.dto';
import { UpdateBusinessHolidayDto } from './dto/update-business_holiday.dto';
export declare class BusinessHolidaysController {
    private readonly businessHolidaysService;
    constructor(businessHolidaysService: BusinessHolidaysService);
    create(createBusinessHolidayDto: CreateBusinessHolidayDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateBusinessHolidayDto: UpdateBusinessHolidayDto): string;
    remove(id: string): string;
}
