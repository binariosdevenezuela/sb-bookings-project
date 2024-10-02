import { BusinessLocationsService } from './business_locations.service';
import { CreateBusinessLocationDto } from './dto/create-business_location.dto';
import { UpdateBusinessLocationDto } from './dto/update-business_location.dto';
export declare class BusinessLocationsController {
    private readonly businessLocationsService;
    constructor(businessLocationsService: BusinessLocationsService);
    create(createBusinessLocationDto: CreateBusinessLocationDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateBusinessLocationDto: UpdateBusinessLocationDto): string;
    remove(id: string): string;
}
