import { Test, TestingModule } from '@nestjs/testing';
import { BusinessBreaksService } from './business_breaks.service';

describe('BusinessBreaksService', () => {
  let service: BusinessBreaksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BusinessBreaksService],
    }).compile();

    service = module.get<BusinessBreaksService>(BusinessBreaksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
