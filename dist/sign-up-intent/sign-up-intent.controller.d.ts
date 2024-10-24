import { SignUpIntentService } from './sign-up-intent.service';
import { CreateSignUpIntentDto } from './dto/create-sign-up-intent.dto';
import { UpdateSignUpIntentDto } from './dto/update-sign-up-intent.dto';
import { Response } from 'express';
export declare class SignUpIntentController {
    private readonly signUpIntentService;
    constructor(signUpIntentService: SignUpIntentService);
    create(createSignUpIntentDto: CreateSignUpIntentDto, res: Response): Promise<void>;
    findAll(id: string, code: string): Promise<import("../users/entities/user.entity").User>;
    findOne(id: string): string;
    update(id: string, updateSignUpIntentDto: UpdateSignUpIntentDto): string;
    remove(id: string): string;
}
