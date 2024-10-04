import { CreateSignUpIntentDto } from '../dto/create-sign-up-intent.dto';
export declare class SignUpIntent {
  id: string;
  object: CreateSignUpIntentDto;
  code: string;
  generateId(): void;
}
