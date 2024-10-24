import {
  Controller,
  Body,
  Param,
  Patch,
} from '@nestjs/common';
import { BusinessHoursService } from './business_hours.service';
import { UpdateBusinessHourDto } from './dto/update-business_hour.dto';

@Controller('my-business/locations/:locationId/hours')
export class BusinessHoursController {
  constructor(private readonly businessHoursService: BusinessHoursService) {}

  @Patch()
  async update(
    @Param('locationId') locationId: string,
    @Body() updateBusinessHourDto: UpdateBusinessHourDto
  ) {

    await this.businessHoursService.update(+locationId, updateBusinessHourDto);
    return "Edited successfully."
    
  }

}