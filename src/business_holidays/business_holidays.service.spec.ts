import { Test, TestingModule } from '@nestjs/testing';
import { BusinessHolidaysService } from './business_holidays.service';

describe('BusinessHolidaysService', () => {
  let service: BusinessHolidaysService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BusinessHolidaysService],
    }).compile();

    service = module.get<BusinessHolidaysService>(BusinessHolidaysService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
