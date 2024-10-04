import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BusinessBreaksService } from './business_breaks.service';
import { CreateBusinessBreakDto } from './dto/create-business_break.dto';
import { UpdateBusinessBreakDto } from './dto/update-business_break.dto';

@Controller('business-breaks')
export class BusinessBreaksController {
  constructor(private readonly businessBreaksService: BusinessBreaksService) {}

  @Post()
  create(@Body() createBusinessBreakDto: CreateBusinessBreakDto) {
    return this.businessBreaksService.create(createBusinessBreakDto);
  }

  @Get()
  findAll() {
    return this.businessBreaksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.businessBreaksService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBusinessBreakDto: UpdateBusinessBreakDto
  ) {
    return this.businessBreaksService.update(+id, updateBusinessBreakDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.businessBreaksService.remove(+id);
  }
}
