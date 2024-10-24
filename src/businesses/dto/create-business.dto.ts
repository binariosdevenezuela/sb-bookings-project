import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { SchedulingModelEnum } from 'src/common/enums';
import { Type } from 'class-transformer';
import { CreateBusinessLocationDto } from 'src/business_locations/dto/create-business_location.dto';

export class CreateBusinessDto {

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEnum(SchedulingModelEnum)
  scheduling_model: SchedulingModelEnum;

  @IsNotEmpty()
  @Type(() => CreateBusinessLocationDto)
  location: CreateBusinessLocationDto
}
