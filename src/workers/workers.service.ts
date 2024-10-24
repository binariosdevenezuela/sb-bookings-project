import { Injectable } from '@nestjs/common';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';

@Injectable()
export class WorkersService {
  create(createWorkerDto: CreateWorkerDto) {
    return 'This action adds a new worker';
  }

  findAll() {
    return `This action returns all workers`;
  }

  findOne(id: number) {
    return { hola: 'hola' };
  }

  update(id: number, updateWorkerDto: UpdateWorkerDto) {
    return `This action updates a #${id} worker`;
  }

  remove(id: number) {
    return `This action removes a #${id} worker`;
  }
}
