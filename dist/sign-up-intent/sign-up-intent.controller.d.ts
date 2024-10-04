import { SignUpIntentService } from './sign-up-intent.service';
import { CreateSignUpIntentDto } from './dto/create-sign-up-intent.dto';
import { UpdateSignUpIntentDto } from './dto/update-sign-up-intent.dto';
import { Response } from 'express';
import { ResponseService } from 'src/response/response.service';
export declare class SignUpIntentController {
  private readonly signUpIntentService;
  private readonly responseService;
  constructor(
    signUpIntentService: SignUpIntentService,
    responseService: ResponseService
  );
  create(
    createSignUpIntentDto: CreateSignUpIntentDto,
    res: Response
  ): Promise<Response<any, Record<string, any>>>;
  findAll(
    id: string,
    code: string
  ): Promise<import('../users/entities/user.entity').User>;
  findOne(id: string): string;
  update(id: string, updateSignUpIntentDto: UpdateSignUpIntentDto): string;
  remove(id: string): string;
}
