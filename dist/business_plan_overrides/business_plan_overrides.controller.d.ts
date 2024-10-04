import { BusinessPlanOverridesService } from './business_plan_overrides.service';
import { CreateBusinessPlanOverrideDto } from './dto/create-business_plan_override.dto';
import { UpdateBusinessPlanOverrideDto } from './dto/update-business_plan_override.dto';
export declare class BusinessPlanOverridesController {
  private readonly businessPlanOverridesService;
  constructor(businessPlanOverridesService: BusinessPlanOverridesService);
  create(createBusinessPlanOverrideDto: CreateBusinessPlanOverrideDto): string;
  findAll(): string;
  findOne(id: string): string;
  update(
    id: string,
    updateBusinessPlanOverrideDto: UpdateBusinessPlanOverrideDto
  ): string;
  remove(id: string): string;
}
