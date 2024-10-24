import { BusinessLocationsService } from './business_locations.service';
import { CreateBusinessLocationDto } from './dto/create-business_location.dto';
import { UpdateBusinessLocationDto } from './dto/update-business_location.dto';
import { SessionData } from 'express-session';
export declare class BusinessLocationsController {
    private readonly businessLocationsService;
    constructor(businessLocationsService: BusinessLocationsService);
    create(createBusinessLocationDto: CreateBusinessLocationDto, session: SessionData): Promise<import("./entities/business_location.entity").BusinessLocation>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateBusinessLocationDto: UpdateBusinessLocationDto): string;
    remove(id: string): string;
}
