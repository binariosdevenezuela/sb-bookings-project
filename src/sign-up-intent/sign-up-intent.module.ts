import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SignUpIntentService } from './sign-up-intent.service';
import { SignUpIntentController } from './sign-up-intent.controller';
import { SignUpIntent } from './entities/sign-up-intent.entity';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';

@Module({
  controllers: [SignUpIntentController],
  providers: [SignUpIntentService, UsersService],
  imports: [TypeOrmModule.forFeature([SignUpIntent, User])],
})
export class SignUpIntentModule {}
