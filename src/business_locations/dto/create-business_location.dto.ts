import {
  IsBoolean,
  IsNotEmpty,
  ValidateIf
} from 'class-validator';

export class CreateBusinessLocationDto {
  @IsNotEmpty()
  @IsBoolean()
  is_mobile: boolean;

  @ValidateIf((o) => o.is_mobile === true)
  @IsNotEmpty()
  latitude: number;

  @ValidateIf((o) => o.is_mobile === true)
  @IsNotEmpty()
  longitude: number;

  @ValidateIf((o) => o.is_mobile === true)
  @IsNotEmpty()
  service_radius: number;

  @ValidateIf((o) => o.is_mobile === false)
  @IsNotEmpty()
  street: string;

  @ValidateIf((o) => o.is_mobile === false)
  @IsNotEmpty()
  city: string;

  @ValidateIf((o) => o.is_mobile === false)
  @IsNotEmpty()
  state: string;

  @ValidateIf((o) => o.is_mobile === false)
  @IsNotEmpty()
  postal_code: string;

  @IsNotEmpty()
  phone: string;

}
