import { Test, TestingModule } from '@nestjs/testing';
import { BusinessBreaksController } from './business_breaks.controller';
import { BusinessBreaksService } from './business_breaks.service';

describe('BusinessBreaksController', () => {
  let controller: BusinessBreaksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BusinessBreaksController],
      providers: [BusinessBreaksService],
    }).compile();

    controller = module.get<BusinessBreaksController>(BusinessBreaksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
