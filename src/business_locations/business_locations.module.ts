import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusinessLocationsService } from './business_locations.service';
import { BusinessLocationsController } from './business_locations.controller';
import { BusinessLocation } from './entities/business_location.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([BusinessLocation]),
  ],
  controllers: [BusinessLocationsController],
  providers: [BusinessLocationsService],
})
export class BusinessLocationsModule {}
