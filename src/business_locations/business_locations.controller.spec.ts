import { Test, TestingModule } from '@nestjs/testing';
import { BusinessLocationsController } from './business_locations.controller';
import { BusinessLocationsService } from './business_locations.service';

describe('BusinessLocationsController', () => {
  let controller: BusinessLocationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BusinessLocationsController],
      providers: [BusinessLocationsService],
    }).compile();

    controller = module.get<BusinessLocationsController>(
      BusinessLocationsController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
