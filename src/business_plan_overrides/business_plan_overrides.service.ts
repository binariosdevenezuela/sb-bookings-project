import { Injectable } from '@nestjs/common';
import { CreateBusinessPlanOverrideDto } from './dto/create-business_plan_override.dto';
import { UpdateBusinessPlanOverrideDto } from './dto/update-business_plan_override.dto';

@Injectable()
export class BusinessPlanOverridesService {
  create(createBusinessPlanOverrideDto: CreateBusinessPlanOverrideDto) {
    return 'This action adds a new businessPlanOverride';
  }

  findAll() {
    return `This action returns all businessPlanOverrides`;
  }

  findOne(id: number) {
    return `This action returns a #${id} businessPlanOverride`;
  }

  update(
    id: number,
    updateBusinessPlanOverrideDto: UpdateBusinessPlanOverrideDto
  ) {
    return `This action updates a #${id} businessPlanOverride`;
  }

  remove(id: number) {
    return `This action removes a #${id} businessPlanOverride`;
  }
}
