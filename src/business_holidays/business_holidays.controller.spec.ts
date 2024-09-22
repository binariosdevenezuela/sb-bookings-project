import { Test, TestingModule } from '@nestjs/testing';
import { BusinessHolidaysController } from './business_holidays.controller';
import { BusinessHolidaysService } from './business_holidays.service';

describe('BusinessHolidaysController', () => {
  let controller: BusinessHolidaysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BusinessHolidaysController],
      providers: [BusinessHolidaysService],
    }).compile();

    controller = module.get<BusinessHolidaysController>(BusinessHolidaysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
