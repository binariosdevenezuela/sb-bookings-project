import { DataSource, Repository } from 'typeorm';
import { Business } from './entities/business.entity';
import { CreateBusinessDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';
import { User } from 'src/users/entities/user.entity';
export declare class BusinessesService {
    private readonly dataSource;
    private businessRepository;
    constructor(dataSource: DataSource, businessRepository: Repository<Business>);
    insert(user: User, createBusinessDto: CreateBusinessDto): Promise<Business>;
    update(user: User, updateBusinessDto: UpdateBusinessDto): Promise<void>;
}
