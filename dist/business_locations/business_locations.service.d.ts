import { DataSource, QueryRunner } from 'typeorm';
import { CreateBusinessLocationDto } from './dto/create-business_location.dto';
import { UpdateBusinessLocationDto } from './dto/update-business_location.dto';
import { BusinessLocation } from './entities/business_location.entity';
import { Business } from 'src/businesses/entities/business.entity';
export declare class BusinessLocationsService {
    private readonly dataSource;
    constructor(dataSource: DataSource);
    insert(business: Business, createBusinessLocationDto: CreateBusinessLocationDto, queryRunner?: QueryRunner): Promise<BusinessLocation>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateBusinessLocationDto: UpdateBusinessLocationDto): string;
    remove(id: number): string;
}
