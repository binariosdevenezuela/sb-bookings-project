import { CreateBusinessLocationDto } from './dto/create-business_location.dto';
import { UpdateBusinessLocationDto } from './dto/update-business_location.dto';
export declare class BusinessLocationsService {
  create(createBusinessLocationDto: CreateBusinessLocationDto): string;
  findAll(): string;
  findOne(id: number): string;
  update(
    id: number,
    updateBusinessLocationDto: UpdateBusinessLocationDto
  ): string;
  remove(id: number): string;
}
