import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BusinessPlanOverridesService } from './business_plan_overrides.service';
import { CreateBusinessPlanOverrideDto } from './dto/create-business_plan_override.dto';
import { UpdateBusinessPlanOverrideDto } from './dto/update-business_plan_override.dto';

@Controller('business-plan-overrides')
export class BusinessPlanOverridesController {
  constructor(
    private readonly businessPlanOverridesService: BusinessPlanOverridesService
  ) {}

  @Post()
  create(@Body() createBusinessPlanOverrideDto: CreateBusinessPlanOverrideDto) {
    return this.businessPlanOverridesService.create(
      createBusinessPlanOverrideDto
    );
  }

  @Get()
  findAll() {
    return this.businessPlanOverridesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.businessPlanOverridesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBusinessPlanOverrideDto: UpdateBusinessPlanOverrideDto
  ) {
    return this.businessPlanOverridesService.update(
      +id,
      updateBusinessPlanOverrideDto
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.businessPlanOverridesService.remove(+id);
  }
}
