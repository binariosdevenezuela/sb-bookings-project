import { Injectable } from '@nestjs/common';
import { DataSource, QueryRunner, Repository } from 'typeorm';
import { CreateBusinessLocationDto } from './dto/create-business_location.dto';
import { UpdateBusinessLocationDto } from './dto/update-business_location.dto';
import { BusinessLocation } from './entities/business_location.entity';
import { Business } from 'src/businesses/entities/business.entity';

@Injectable()
export class BusinessLocationsService {

  constructor(private readonly dataSource: DataSource) {}

  async insert(business: Business, createBusinessLocationDto: CreateBusinessLocationDto, queryRunner?: QueryRunner) {

    // Verificar si estamos trabajando dentro de una transacción externa o crear una nueva
    const shouldReleaseQueryRunner = !queryRunner; // Si no hay un queryRunner, lo creamos
    if (!queryRunner) {
      queryRunner = this.dataSource.createQueryRunner();
      await queryRunner.connect();
      await queryRunner.startTransaction();
    }

    try {

      const newLocation = queryRunner.manager.create(BusinessLocation, createBusinessLocationDto);
      newLocation.business = business;

      const savedLocation = await queryRunner.manager.save(newLocation);

      if (shouldReleaseQueryRunner) {
        await queryRunner.commitTransaction();
      }

      return savedLocation;
    } catch (error) {

      if (shouldReleaseQueryRunner) {
        await queryRunner.rollbackTransaction();
      }
      throw error;
    } finally {

      if (shouldReleaseQueryRunner) {
        await queryRunner.release();
      }
    }

  }

  findAll() {
    return `This action returns all businessLocations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} businessLocation`;
  }

  update(id: number, updateBusinessLocationDto: UpdateBusinessLocationDto) {
    return `This action updates a #${id} businessLocation`;
  }

  remove(id: number) {
    return `This action removes a #${id} businessLocation`;
  }
}
