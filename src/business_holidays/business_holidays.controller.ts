import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BusinessHolidaysService } from './business_holidays.service';
import { CreateBusinessHolidayDto } from './dto/create-business_holiday.dto';
import { UpdateBusinessHolidayDto } from './dto/update-business_holiday.dto';

@Controller('business-holidays')
export class BusinessHolidaysController {
  constructor(private readonly businessHolidaysService: BusinessHolidaysService) {}

  @Post()
  create(@Body() createBusinessHolidayDto: CreateBusinessHolidayDto) {
    return this.businessHolidaysService.create(createBusinessHolidayDto);
  }

  @Get()
  findAll() {
    return this.businessHolidaysService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.businessHolidaysService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBusinessHolidayDto: UpdateBusinessHolidayDto) {
    return this.businessHolidaysService.update(+id, updateBusinessHolidayDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.businessHolidaysService.remove(+id);
  }
}
