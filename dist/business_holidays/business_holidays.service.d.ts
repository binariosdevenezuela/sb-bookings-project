import { CreateBusinessHolidayDto } from './dto/create-business_holiday.dto';
import { UpdateBusinessHolidayDto } from './dto/update-business_holiday.dto';
export declare class BusinessHolidaysService {
  create(createBusinessHolidayDto: CreateBusinessHolidayDto): string;
  findAll(): string;
  findOne(id: number): string;
  update(
    id: number,
    updateBusinessHolidayDto: UpdateBusinessHolidayDto
  ): string;
  remove(id: number): string;
}
