import { CreateBusinessPlanOverrideDto } from './dto/create-business_plan_override.dto';
import { UpdateBusinessPlanOverrideDto } from './dto/update-business_plan_override.dto';
export declare class BusinessPlanOverridesService {
  create(createBusinessPlanOverrideDto: CreateBusinessPlanOverrideDto): string;
  findAll(): string;
  findOne(id: number): string;
  update(
    id: number,
    updateBusinessPlanOverrideDto: UpdateBusinessPlanOverrideDto
  ): string;
  remove(id: number): string;
}
