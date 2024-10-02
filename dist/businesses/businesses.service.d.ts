import { Repository } from 'typeorm';
import { Business } from './entities/business.entity';
import { CreateBusinessDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';
export declare class BusinessesService {
    private businessRepository;
    constructor(businessRepository: Repository<Business>);
    create(createBusinessDto: CreateBusinessDto): Promise<Business>;
    findAll(): Promise<string>;
    findOne(id: number): Promise<string>;
    update(id: number, updateBusinessDto: UpdateBusinessDto): Promise<string>;
    remove(id: number): Promise<string>;
}
