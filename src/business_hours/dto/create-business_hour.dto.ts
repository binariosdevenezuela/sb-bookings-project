import { IsOptional, IsEnum, Matches, IsBoolean, ValidateIf, ValidateNested, IsString, IsArray, arrayMinSize, ArrayMinSize, ArrayMaxSize } from 'class-validator';
import { Type  } from 'class-transformer';
import { BusinessBreakDto } from 'src/business_hours/dto/business_break.dto';
import { DayOfWeekEnum } from 'src/common/enums';

export class CreateBusinessHourDto {
    @IsEnum(DayOfWeekEnum)
    day_of_week: DayOfWeekEnum;

    @IsBoolean()
    is_closed: boolean;
  
    @ValidateIf(o => o.is_closed === false)
    @IsString()
    @Matches(/^([01][0-9]|2[0-3]):[0-5][0-9]$/, {
      message: 'start_time must be in the format HH:mm',
    })
    start_time?: string;
  
    @ValidateIf(o => o.is_closed === false)  
    @IsString()
    @Matches(/^([01][0-9]|2[0-3]):[0-5][0-9]$/, {
      message: 'end_time must be in the format HH:mm',
    })
    end_time?: string;

    @IsOptional()
    @IsArray()
    @ArrayMinSize(1)
    @ArrayMaxSize(2)
    @ValidateNested({ each: true })
    @Type(() => BusinessBreakDto)
    breaks: BusinessBreakDto[];
  }