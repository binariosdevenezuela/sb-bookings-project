import { Module } from '@nestjs/common';
import { BusinessPlanOverridesService } from './business_plan_overrides.service';
import { BusinessPlanOverridesController } from './business_plan_overrides.controller';

@Module({
  controllers: [BusinessPlanOverridesController],
  providers: [BusinessPlanOverridesService],
})
export class BusinessPlanOverridesModule {}
