import { BusinessesService } from './businesses.service';
import { CreateBusinessDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';
export declare class BusinessesController {
  private readonly businessesService;
  constructor(businessesService: BusinessesService);
  create(
    createBusinessDto: CreateBusinessDto
  ): Promise<import('./entities/business.entity').Business>;
  findAll(): Promise<string>;
  findOne(id: string): Promise<string>;
  update(id: string, updateBusinessDto: UpdateBusinessDto): Promise<string>;
  remove(id: string): Promise<string>;
}
