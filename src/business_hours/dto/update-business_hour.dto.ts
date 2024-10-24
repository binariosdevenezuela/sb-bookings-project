import { ValidateNested, IsArray, IsNotEmpty, ArrayMinSize, arrayMaxSize, ArrayMaxSize } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateBusinessHourDto } from './create-business_hour.dto';
import { UniqueDayOfWeek } from '../decorators/unique-day-of-week.validator';

export class UpdateBusinessHourDto {

  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(7)
  @ValidateNested({ each: true })
  @Type(() => CreateBusinessHourDto)
  @UniqueDayOfWeek({ message: 'The day_of_week must be unique across all entries.' })
  business_hours: CreateBusinessHourDto[];
  
}
