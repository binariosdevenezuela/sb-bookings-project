import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { SignUpIntentService } from './sign-up-intent.service';
import { CreateSignUpIntentDto } from './dto/create-sign-up-intent.dto';
import { UpdateSignUpIntentDto } from './dto/update-sign-up-intent.dto';
import { Response } from 'express';

@Controller('sign-up-intent')
export class SignUpIntentController {
  constructor(
    private readonly signUpIntentService: SignUpIntentService
  ) {}

  @Post()
  async create(
    @Body() createSignUpIntentDto: CreateSignUpIntentDto,
    @Res() res: Response
  ) {
    await this.signUpIntentService.create(createSignUpIntentDto);

  }

  @Get('complete/:id/:code')
  async findAll(@Param('id') id: string, @Param('code') code: string) {
    return await this.signUpIntentService.complete(id, code);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.signUpIntentService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSignUpIntentDto: UpdateSignUpIntentDto
  ) {
    return this.signUpIntentService.update(+id, updateSignUpIntentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.signUpIntentService.remove(+id);
  }
}
