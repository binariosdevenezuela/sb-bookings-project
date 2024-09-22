import { CreateBusinessHourDto } from './dto/create-business_hour.dto';
import { UpdateBusinessHourDto } from './dto/update-business_hour.dto';
export declare class BusinessHoursService {
    create(createBusinessHourDto: CreateBusinessHourDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateBusinessHourDto: UpdateBusinessHourDto): string;
    remove(id: number): string;
}
