import { Test, TestingModule } from '@nestjs/testing';
import { SignUpIntentService } from './sign-up-intent.service';

describe('SignUpIntentService', () => {
  let service: SignUpIntentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SignUpIntentService],
    }).compile();

    service = module.get<SignUpIntentService>(SignUpIntentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
