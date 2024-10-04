import { Test, TestingModule } from '@nestjs/testing';
import { BusinessPlanOverridesService } from './business_plan_overrides.service';

describe('BusinessPlanOverridesService', () => {
  let service: BusinessPlanOverridesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BusinessPlanOverridesService],
    }).compile();

    service = module.get<BusinessPlanOverridesService>(
      BusinessPlanOverridesService
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
