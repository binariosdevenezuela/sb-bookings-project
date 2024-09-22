import { Module } from '@nestjs/common';
import { BusinessHolidaysService } from './business_holidays.service';
import { BusinessHolidaysController } from './business_holidays.controller';

@Module({
  controllers: [BusinessHolidaysController],
  providers: [BusinessHolidaysService],
})
export class BusinessHolidaysModule {}
