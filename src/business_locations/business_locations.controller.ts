import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Session
} from '@nestjs/common';
import { BusinessLocationsService } from './business_locations.service';
import { CreateBusinessLocationDto } from './dto/create-business_location.dto';
import { UpdateBusinessLocationDto } from './dto/update-business_location.dto';
import { SessionData } from 'express-session';

@Controller('my-business/locations')
export class BusinessLocationsController {
  constructor(
    private readonly businessLocationsService: BusinessLocationsService
  ) {}

  @Post()
  create(@Body() createBusinessLocationDto: CreateBusinessLocationDto, @Session() session: SessionData) {
    return this.businessLocationsService.insert(session.user.business, createBusinessLocationDto);
  }

  @Get()
  findAll() {
    return this.businessLocationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.businessLocationsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBusinessLocationDto: UpdateBusinessLocationDto
  ) {
    return this.businessLocationsService.update(+id, updateBusinessLocationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.businessLocationsService.remove(+id);
  }
}
