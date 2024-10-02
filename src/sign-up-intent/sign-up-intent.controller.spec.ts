import { Test, TestingModule } from '@nestjs/testing';
import { SignUpIntentController } from './sign-up-intent.controller';
import { SignUpIntentService } from './sign-up-intent.service';

describe('SignUpIntentController', () => {
  let controller: SignUpIntentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SignUpIntentController],
      providers: [SignUpIntentService],
    }).compile();

    controller = module.get<SignUpIntentController>(SignUpIntentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
