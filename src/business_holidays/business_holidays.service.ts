import { Injectable } from '@nestjs/common';
import { CreateBusinessHolidayDto } from './dto/create-business_holiday.dto';
import { UpdateBusinessHolidayDto } from './dto/update-business_holiday.dto';

@Injectable()
export class BusinessHolidaysService {
  create(createBusinessHolidayDto: CreateBusinessHolidayDto) {
    return 'This action adds a new businessHoliday';
  }

  findAll() {
    return `This action returns all businessHolidays`;
  }

  findOne(id: number) {
    return `This action returns a #${id} businessHoliday`;
  }

  update(id: number, updateBusinessHolidayDto: UpdateBusinessHolidayDto) {
    return `This action updates a #${id} businessHoliday`;
  }

  remove(id: number) {
    return `This action removes a #${id} businessHoliday`;
  }
}
