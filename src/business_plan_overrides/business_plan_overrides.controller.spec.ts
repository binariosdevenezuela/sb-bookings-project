import { Test, TestingModule } from '@nestjs/testing';
import { BusinessPlanOverridesController } from './business_plan_overrides.controller';
import { BusinessPlanOverridesService } from './business_plan_overrides.service';

describe('BusinessPlanOverridesController', () => {
  let controller: BusinessPlanOverridesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BusinessPlanOverridesController],
      providers: [BusinessPlanOverridesService],
    }).compile();

    controller = module.get<BusinessPlanOverridesController>(
      BusinessPlanOverridesController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
