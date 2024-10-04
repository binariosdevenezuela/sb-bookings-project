import { CreateServiceAreaDto } from './dto/create-service_area.dto';
import { UpdateServiceAreaDto } from './dto/update-service_area.dto';
export declare class ServiceAreasService {
  create(createServiceAreaDto: CreateServiceAreaDto): string;
  findAll(): string;
  findOne(id: number): string;
  update(id: number, updateServiceAreaDto: UpdateServiceAreaDto): string;
  remove(id: number): string;
}
