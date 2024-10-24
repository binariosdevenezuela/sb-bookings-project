import { BusinessesService } from './businesses.service';
import { UpdateBusinessDto } from './dto/update-business.dto';
import { CreateBusinessDto } from './dto/create-business.dto';
import { SessionData } from 'express-session';
import { Response } from 'express';
export declare class BusinessesController {
    private readonly businessesService;
    constructor(businessesService: BusinessesService);
    create(createBusinessDto: CreateBusinessDto, res: Response, session: SessionData): Promise<void>;
    update(updateBusinessDto: UpdateBusinessDto, res: Response, session: SessionData): Promise<string>;
}
