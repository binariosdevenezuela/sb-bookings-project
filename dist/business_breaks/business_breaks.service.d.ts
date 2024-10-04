import { CreateBusinessBreakDto } from './dto/create-business_break.dto';
import { UpdateBusinessBreakDto } from './dto/update-business_break.dto';
export declare class BusinessBreaksService {
  create(createBusinessBreakDto: CreateBusinessBreakDto): string;
  findAll(): string;
  findOne(id: number): string;
  update(id: number, updateBusinessBreakDto: UpdateBusinessBreakDto): string;
  remove(id: number): string;
}
