import { BusinessesService } from './businesses.service';
import { CreateBusinessDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';
export declare class BusinessesController {
    private readonly businessesService;
    constructor(businessesService: BusinessesService);
    create(createBusinessDto: CreateBusinessDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateBusinessDto: UpdateBusinessDto): string;
    remove(id: string): string;
}
