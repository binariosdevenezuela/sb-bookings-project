import { SignUpIntentService } from './sign-up-intent.service';
import { CreateSignUpIntentDto } from './dto/create-sign-up-intent.dto';
import { UpdateSignUpIntentDto } from './dto/update-sign-up-intent.dto';
export declare class SignUpIntentController {
    private readonly signUpIntentService;
    constructor(signUpIntentService: SignUpIntentService);
    create(createSignUpIntentDto: CreateSignUpIntentDto): Promise<import("./entities/sign-up-intent.entity").SignUpIntent>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateSignUpIntentDto: UpdateSignUpIntentDto): string;
    remove(id: string): string;
}
