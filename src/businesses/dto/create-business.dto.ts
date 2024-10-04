import { IsString, IsNotEmpty, IsEnum, MinLength } from 'class-validator';
import { SchedulingModelEnum } from 'src/common/enums';
export class CreateBusinessDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(SchedulingModelEnum)
  scheduling_mode: SchedulingModelEnum;
}
