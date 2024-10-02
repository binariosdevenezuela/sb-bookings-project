import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SignUpIntentService } from './sign-up-intent.service';
import { SignUpIntentController } from './sign-up-intent.controller';
import { SignUpIntent } from './entities/sign-up-intent.entity';

@Module({
  controllers: [SignUpIntentController],
  providers: [SignUpIntentService],
  imports: [
    TypeOrmModule.forFeature([SignUpIntent]), // Registra el repositorio de User como provider
  ],
})
export class SignUpIntentModule {}
