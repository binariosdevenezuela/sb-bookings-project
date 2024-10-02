import { ValidateNested, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateUserDto } from '../../users/dto/create-user.dto';
import { CreateBusinessDto } from 'src/businesses/dto/create-business.dto';
import { CreateBusinessLocationDto } from 'src/business_locations/dto/create-business_location.dto';
export class CreateSignUpIntentDto {

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CreateUserDto)
    user: CreateUserDto;

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CreateBusinessDto)
    business: CreateBusinessDto;

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CreateBusinessLocationDto)
    business_location: CreateBusinessLocationDto;

}
