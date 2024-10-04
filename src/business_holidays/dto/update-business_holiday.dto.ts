import { PartialType } from '@nestjs/mapped-types';
import { CreateBusinessHolidayDto } from './create-business_holiday.dto';

export class UpdateBusinessHolidayDto extends PartialType(
  CreateBusinessHolidayDto
) {}
