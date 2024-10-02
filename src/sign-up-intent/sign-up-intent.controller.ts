import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SignUpIntentService } from './sign-up-intent.service';
import { CreateSignUpIntentDto } from './dto/create-sign-up-intent.dto';
import { UpdateSignUpIntentDto } from './dto/update-sign-up-intent.dto';

@Controller('sign-up-intent')
export class SignUpIntentController {
  constructor(private readonly signUpIntentService: SignUpIntentService) {}

  @Post()
  create(@Body() createSignUpIntentDto: CreateSignUpIntentDto) {
    return this.signUpIntentService.create(createSignUpIntentDto);
  }

  @Get()
  findAll() {
    return this.signUpIntentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.signUpIntentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSignUpIntentDto: UpdateSignUpIntentDto) {
    return this.signUpIntentService.update(+id, updateSignUpIntentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.signUpIntentService.remove(+id);
  }
}
