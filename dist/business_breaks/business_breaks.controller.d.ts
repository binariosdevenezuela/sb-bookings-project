import { BusinessBreaksService } from './business_breaks.service';
import { CreateBusinessBreakDto } from './dto/create-business_break.dto';
import { UpdateBusinessBreakDto } from './dto/update-business_break.dto';
export declare class BusinessBreaksController {
  private readonly businessBreaksService;
  constructor(businessBreaksService: BusinessBreaksService);
  create(createBusinessBreakDto: CreateBusinessBreakDto): string;
  findAll(): string;
  findOne(id: string): string;
  update(id: string, updateBusinessBreakDto: UpdateBusinessBreakDto): string;
  remove(id: string): string;
}
