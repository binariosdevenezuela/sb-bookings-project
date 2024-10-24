import {
  Controller,
  Post,
  Body,
  Patch,
  HttpStatus,
  Session,
  Res
} from '@nestjs/common';
import { BusinessesService } from './businesses.service';
import { UpdateBusinessDto } from './dto/update-business.dto';
import { CreateBusinessDto } from './dto/create-business.dto';
import { SessionData } from 'express-session';
import { Response } from 'express';

@Controller('my-business')
export class BusinessesController {
  constructor(private readonly businessesService: BusinessesService) {}

  @Post()
  async create(@Body() createBusinessDto: CreateBusinessDto, @Res() res: Response, @Session() session: SessionData) {
    await this.businessesService.insert(session.user, createBusinessDto);
  }

  @Patch()
  async update(
    @Body() updateBusinessDto: UpdateBusinessDto, 
    @Res() res: Response,
    @Session() session: SessionData
  ) {
    
    await this.businessesService.update(session.user, updateBusinessDto);
    return "Edited successfully."
  }

}
