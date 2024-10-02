import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { SignUpIntent } from '../sign-up-intent/entities/sign-up-intent.entity';
import { CreateSignUpIntentDto } from './dto/create-sign-up-intent.dto';
import { UpdateSignUpIntentDto } from './dto/update-sign-up-intent.dto';


@Injectable()
export class SignUpIntentService {

  constructor(
    @InjectRepository(SignUpIntent)
    private signUpRepository: Repository<SignUpIntent>
  ) {}

  async create(signUpDto: CreateSignUpIntentDto): Promise<SignUpIntent> {

    const newSignUpIntent = new SignUpIntent();
    signUpDto.user.password = await bcrypt.hash(signUpDto.user.password, 10);
    newSignUpIntent.object = signUpDto;
    newSignUpIntent.code = "012563";
    return await this.signUpRepository.save(newSignUpIntent);

  }

  findAll() {
    return `This action returns all signUpIntent`;
  }

  findOne(id: number) {
    return `This action returns a #${id} signUpIntent`;
  }

  update(id: number, updateSignUpIntentDto: UpdateSignUpIntentDto) {
    return `This action updates a #${id} signUpIntent`;
  }

  remove(id: number) {
    return `This action removes a #${id} signUpIntent`;
  }
}
