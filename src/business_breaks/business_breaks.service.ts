import { Injectable } from '@nestjs/common';
import { CreateBusinessBreakDto } from './dto/create-business_break.dto';
import { UpdateBusinessBreakDto } from './dto/update-business_break.dto';

@Injectable()
export class BusinessBreaksService {
  create(createBusinessBreakDto: CreateBusinessBreakDto) {
    return 'This action adds a new businessBreak';
  }

  findAll() {
    return `This action returns all businessBreaks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} businessBreak`;
  }

  update(id: number, updateBusinessBreakDto: UpdateBusinessBreakDto) {
    return `This action updates a #${id} businessBreak`;
  }

  remove(id: number) {
    return `This action removes a #${id} businessBreak`;
  }
}
