import { Module } from '@nestjs/common';
import { BusinessLocationsService } from './business_locations.service';
import { BusinessLocationsController } from './business_locations.controller';

@Module({
  controllers: [BusinessLocationsController],
  providers: [BusinessLocationsService],
})
export class BusinessLocationsModule {}
