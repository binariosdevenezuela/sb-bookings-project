import { PartialType } from '@nestjs/mapped-types';
import { CreateSignUpIntentDto } from './create-sign-up-intent.dto';

export class UpdateSignUpIntentDto extends PartialType(CreateSignUpIntentDto) {}
