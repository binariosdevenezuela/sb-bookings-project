import { CreateUserDto } from '../../users/dto/create-user.dto';
import { CreateBusinessDto } from 'src/businesses/dto/create-business.dto';
import { CreateBusinessLocationDto } from 'src/business_locations/dto/create-business_location.dto';
export declare class CreateSignUpIntentDto {
    user: CreateUserDto;
    business: CreateBusinessDto;
    business_location: CreateBusinessLocationDto;
}
