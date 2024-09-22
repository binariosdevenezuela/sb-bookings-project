import { Injectable } from '@nestjs/common';
import { CreateServiceAreaDto } from './dto/create-service_area.dto';
import { UpdateServiceAreaDto } from './dto/update-service_area.dto';

@Injectable()
export class ServiceAreasService {
  create(createServiceAreaDto: CreateServiceAreaDto) {
    return 'This action adds a new serviceArea';
  }

  findAll() {
    return `This action returns all serviceAreas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} serviceArea`;
  }

  update(id: number, updateServiceAreaDto: UpdateServiceAreaDto) {
    return `This action updates a #${id} serviceArea`;
  }

  remove(id: number) {
    return `This action removes a #${id} serviceArea`;
  }
}
