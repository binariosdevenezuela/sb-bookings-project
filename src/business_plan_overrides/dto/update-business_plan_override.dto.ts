import { PartialType } from '@nestjs/mapped-types';
import { CreateBusinessPlanOverrideDto } from './create-business_plan_override.dto';

export class UpdateBusinessPlanOverrideDto extends PartialType(
  CreateBusinessPlanOverrideDto
) {}
