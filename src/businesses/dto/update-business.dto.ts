import { IsString, IsNotEmpty, IsEnum, IsOptional } from 'class-validator';
import { SchedulingModelEnum } from 'src/common/enums';

export class UpdateBusinessDto {
    
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    name: string;
  
    @IsOptional()
    @IsNotEmpty()
    @IsEnum(SchedulingModelEnum)
    scheduling_model: SchedulingModelEnum;
}
