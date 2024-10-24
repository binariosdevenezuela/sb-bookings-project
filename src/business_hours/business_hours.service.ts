import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CreateBusinessHourDto } from './dto/create-business_hour.dto';
import { BusinessLocation } from 'src/business_locations/entities/business_location.entity';
import { BusinessHour } from './entities/business_hour.entity';
import { BusinessBreak } from './entities/business_break.entity';
import { UpdateBusinessHourDto } from './dto/update-business_hour.dto';
import { DateTime } from 'luxon';


@Injectable()
export class BusinessHoursService {
  constructor(private readonly dataSource: DataSource){}

  async update(locationId: number, updateBusinessHourDto: UpdateBusinessHourDto) {
    
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();

    try {
      await queryRunner.startTransaction();
      const businessLocation = await queryRunner.manager.findOne(BusinessLocation, { where: { id: locationId } });

      if(businessLocation) {

        for(const createBusinessHourDto of updateBusinessHourDto.business_hours) {

          var businessHour = await queryRunner.manager.findOne(BusinessHour, { where: { location: businessLocation, day_of_week: createBusinessHourDto.day_of_week  }, relations: ["breaks"]});
          
          await queryRunner.manager.remove(businessHour.breaks);
          businessHour.breaks = [];

          if(createBusinessHourDto.is_closed) {
            businessHour.start_time = null;  
            businessHour.end_time = null;
            businessHour.is_closed = true;
          } else {

            if(createBusinessHourDto.breaks) {

              const createBusinessHourDtoStartTimeDto = DateTime.fromFormat(createBusinessHourDto.start_time, 'HH:mm');
              const createBusinessHourDtoEndTimeDto = DateTime.fromFormat(createBusinessHourDto.end_time, 'HH:mm');

              for(const businessHourBreakDto of createBusinessHourDto.breaks) {
                const businessHourBreakStartTimeDto = DateTime.fromFormat(businessHourBreakDto.start_time, 'HH:mm');
                const businessHourBreakEndTimeDto = DateTime.fromFormat(businessHourBreakDto.end_time, 'HH:mm');
        
                const isBreakWithinBounds = businessHourBreakStartTimeDto >= createBusinessHourDtoStartTimeDto && businessHourBreakEndTimeDto <= createBusinessHourDtoEndTimeDto;
                if(!isBreakWithinBounds) {
                  throw new BadRequestException(`Break ${businessHourBreakDto.start_time} - ${businessHourBreakDto.end_time} is out of bounds for hours ${createBusinessHourDto.start_time} - ${createBusinessHourDto.end_time}`);
                }
                const newBusinessBreak = queryRunner.manager.create(BusinessBreak, businessHourBreakDto);
                businessHour.breaks.push(newBusinessBreak);      
              }

              if(businessHour.breaks.length == 2) {
                const break1StartTime = DateTime.fromFormat(businessHour.breaks[0].start_time, 'HH:mm');
                const break1EndTime = DateTime.fromFormat(businessHour.breaks[0].end_time, 'HH:mm');

                const break2StartTime = DateTime.fromFormat(businessHour.breaks[1].start_time, 'HH:mm');
                const break2EndTime = DateTime.fromFormat(businessHour.breaks[1].end_time, 'HH:mm');
                const isOverlapping = break1StartTime < break2EndTime && break1EndTime > break2StartTime;
                if (isOverlapping) {
                  throw new BadRequestException(`${createBusinessHourDto.day_of_week}'s breaks must not overlap each other.`);
                }

              }

            }

            businessHour.start_time = createBusinessHourDto.start_time;  
            businessHour.end_time = createBusinessHourDto.end_time;
            businessHour.is_closed = createBusinessHourDto.is_closed;
          }

          await queryRunner.manager.save(BusinessHour, businessHour);

        }

        await queryRunner.commitTransaction();
        
      } else {
        throw new NotFoundException(`Business location with ID ${locationId} not found`);
      }

    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }
}
