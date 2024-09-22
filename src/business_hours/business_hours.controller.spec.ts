import { Test, TestingModule } from '@nestjs/testing';
import { BusinessHoursController } from './business_hours.controller';
import { BusinessHoursService } from './business_hours.service';

describe('BusinessHoursController', () => {
  let controller: BusinessHoursController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BusinessHoursController],
      providers: [BusinessHoursService],
    }).compile();

    controller = module.get<BusinessHoursController>(BusinessHoursController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
