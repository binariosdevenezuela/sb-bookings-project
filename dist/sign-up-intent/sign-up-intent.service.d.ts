import { Repository } from 'typeorm';
import { SignUpIntent } from '../sign-up-intent/entities/sign-up-intent.entity';
import { CreateSignUpIntentDto } from './dto/create-sign-up-intent.dto';
import { UpdateSignUpIntentDto } from './dto/update-sign-up-intent.dto';
export declare class SignUpIntentService {
    private signUpRepository;
    constructor(signUpRepository: Repository<SignUpIntent>);
    create(signUpDto: CreateSignUpIntentDto): Promise<SignUpIntent>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateSignUpIntentDto: UpdateSignUpIntentDto): string;
    remove(id: number): string;
}
