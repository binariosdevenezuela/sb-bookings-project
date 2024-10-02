import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { CreateSignUpIntentDto } from '../dto/create-sign-up-intent.dto';

@Entity('signup_intent')
export class SignUpIntent {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('json')
    object: CreateSignUpIntentDto;

    @Column({ length: 6 })
    code: string;

}
