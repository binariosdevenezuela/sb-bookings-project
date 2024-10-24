import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Business } from './entities/business.entity';
import { CreateBusinessDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';
import { User } from 'src/users/entities/user.entity';
import { BusinessLocation } from 'src/business_locations/entities/business_location.entity';
import { BusinessHour } from 'src/business_hours/entities/business_hour.entity';
import { DayOfWeekEnum } from 'src/common/enums';

@Injectable()
export class BusinessesService {
  constructor(
    private readonly dataSource: DataSource,
    @InjectRepository(Business)
    private businessRepository: Repository<Business>
  ) {}

  async insert(user: User, createBusinessDto: CreateBusinessDto) {

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();

    try {
      await queryRunner.startTransaction();

      const newBusiness = queryRunner.manager.create(Business, createBusinessDto);
      newBusiness.user = user;

      const newLocation = queryRunner.manager.create(BusinessLocation, createBusinessDto.location);
      
      const mondayBusinessHour = queryRunner.manager.create(BusinessHour, { day_of_week: DayOfWeekEnum.Monday, is_closed: true });
      const tuesdayBusinessHour = queryRunner.manager.create(BusinessHour, { day_of_week: DayOfWeekEnum.Tuesday, is_closed: true });
      const wednesdayBusinessHour = queryRunner.manager.create(BusinessHour, { day_of_week: DayOfWeekEnum.Wednesday, is_closed: true });
      const thrusdayBusinessHour = queryRunner.manager.create(BusinessHour, { day_of_week: DayOfWeekEnum.Thursday, is_closed: true });
      const fridayBusinessHour = queryRunner.manager.create(BusinessHour, { day_of_week: DayOfWeekEnum.Friday, is_closed: true });
      const saturdayBusinessHour = queryRunner.manager.create(BusinessHour, { day_of_week: DayOfWeekEnum.Saturday, is_closed: true });
      const sundayBusinessHour = queryRunner.manager.create(BusinessHour, { day_of_week: DayOfWeekEnum.Sunday, is_closed: true });

      newLocation.businessHours = [mondayBusinessHour, tuesdayBusinessHour, wednesdayBusinessHour, thrusdayBusinessHour, fridayBusinessHour, saturdayBusinessHour, sundayBusinessHour];

      newBusiness.locations = [newLocation];
    
      const savedNewBusiness = await queryRunner.manager.save(newBusiness);

      await queryRunner.commitTransaction();

      return savedNewBusiness;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }

  }

  async update(user: User, updateBusinessDto: UpdateBusinessDto) {
    const result = await this.businessRepository.update({ user: user }, updateBusinessDto);

    if (result.affected === 0) {
      throw new NotFoundException('Business not found');
    }

  } 

}
