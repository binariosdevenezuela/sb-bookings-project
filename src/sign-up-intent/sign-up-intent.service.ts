import {
  Injectable,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { SignUpIntent } from '../sign-up-intent/entities/sign-up-intent.entity';
import { CreateSignUpIntentDto } from './dto/create-sign-up-intent.dto';
import { UpdateSignUpIntentDto } from './dto/update-sign-up-intent.dto';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class SignUpIntentService {
  constructor(
    @InjectRepository(SignUpIntent)
    private signUpIntentRepository: Repository<SignUpIntent>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private usersService: UsersService
  ) {}

  async create(signUpDto: CreateSignUpIntentDto) {
    const signUpIntent = await this.userRepository.findOne({
      where: { email: signUpDto.email },
    });

    if (signUpIntent) {
      throw new ConflictException('There is an user with this email.');
    } else {
      const newSignUpIntent = new SignUpIntent();

      signUpDto.password = await bcrypt.hash(signUpDto.password, 10);
      newSignUpIntent.object = signUpDto;
      newSignUpIntent.code = this.generateRandomSixDigitNumber();
      await this.signUpIntentRepository.save(newSignUpIntent);
    }
  }

  async complete(id: string, code: string): Promise<User> {
    const signUpIntent = await this.signUpIntentRepository.findOne({
      where: { id, code },
    });
    if (signUpIntent) {
      
      const user = await this.userRepository.findOne(
        { where : {email: signUpIntent.object.email}}
      )
      
      if(user) {
        throw new ConflictException('User exists already.');
      }

      return this.usersService.signup(signUpIntent);

    } else {
      throw new BadRequestException('No valid.');
    }
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

  generateRandomSixDigitNumber(): string {
    return Math.floor(100000 + Math.random() * 900000)
      .toString()
      .padStart(6, '0');
  }
}
