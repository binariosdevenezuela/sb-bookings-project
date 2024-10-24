import { IsString, Matches } from "class-validator";

export class BusinessBreakDto {

  @IsString()
  @Matches(/^([01][0-9]|2[0-3]):[0-5][0-9]$/, {
    message: 'start_time must be in the format HH:mm',
  })
  start_time: string;

  @IsString()
  @Matches(/^([01][0-9]|2[0-3]):[0-5][0-9]$/, {
    message: 'end_time must be in the format HH:mm',
  })
  end_time: string;

}
