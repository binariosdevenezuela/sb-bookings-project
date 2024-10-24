import { Repository } from 'typeorm';
import { SignUpIntent } from '../sign-up-intent/entities/sign-up-intent.entity';
import { CreateSignUpIntentDto } from './dto/create-sign-up-intent.dto';
import { UpdateSignUpIntentDto } from './dto/update-sign-up-intent.dto';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';
export declare class SignUpIntentService {
    private signUpIntentRepository;
    private userRepository;
    private usersService;
    constructor(signUpIntentRepository: Repository<SignUpIntent>, userRepository: Repository<User>, usersService: UsersService);
    create(signUpDto: CreateSignUpIntentDto): Promise<void>;
    complete(id: string, code: string): Promise<User>;
    findOne(id: number): string;
    update(id: number, updateSignUpIntentDto: UpdateSignUpIntentDto): string;
    remove(id: number): string;
    generateRandomSixDigitNumber(): string;
}
