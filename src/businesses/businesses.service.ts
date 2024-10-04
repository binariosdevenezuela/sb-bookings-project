import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Business } from './entities/business.entity';
import { CreateBusinessDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';

@Injectable()
export class BusinessesService {
  constructor(
    @InjectRepository(Business)
    private businessRepository: Repository<Business>
  ) {}

  async create(createBusinessDto: CreateBusinessDto) {
    const newUser = this.businessRepository.create(createBusinessDto);
    return await this.businessRepository.save(newUser);
  }

  async findAll() {
    return `This action returns all businesses`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} business`;
  }

  async update(id: number, updateBusinessDto: UpdateBusinessDto) {
    return `This action updates a #${id} business`;
  }

  async remove(id: number) {
    return `This action removes a #${id} business`;
  }
}
