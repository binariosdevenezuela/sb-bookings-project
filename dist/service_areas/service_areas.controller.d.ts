import { ServiceAreasService } from './service_areas.service';
import { CreateServiceAreaDto } from './dto/create-service_area.dto';
import { UpdateServiceAreaDto } from './dto/update-service_area.dto';
export declare class ServiceAreasController {
  private readonly serviceAreasService;
  constructor(serviceAreasService: ServiceAreasService);
  create(createServiceAreaDto: CreateServiceAreaDto): string;
  findAll(): string;
  findOne(id: string): string;
  update(id: string, updateServiceAreaDto: UpdateServiceAreaDto): string;
  remove(id: string): string;
}
