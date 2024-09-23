import { IsString, IsEmail, IsNotEmpty, MinLength } from 'class-validator';
export class CreateUserDto {

    @IsString()
    @IsNotEmpty({ message: 'Username is required' })
    username: string;

    @IsString()
    @IsNotEmpty({ message: 'Name is required' })
    name: string;

    @IsString()
    @IsNotEmpty({ message: 'Lastname is required' })
    lastname: string;

    @IsString()
    @IsNotEmpty({ message: 'Phone is required' })
    phone: string;
  
    @IsString()
    @MinLength(6, { message: 'Password must be at least 6 characters long' })
    password: string;
  
    @IsEmail({}, { message: 'Email must be valid' })
    email: string;

}
