import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import { CreateSignUpIntentDto } from '../dto/create-sign-up-intent.dto';
import { v4 as uuidv4 } from 'uuid';

@Entity('signup_intent')
export class SignUpIntent {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('json')
  object: CreateSignUpIntentDto;

  @Column({ length: 6 })
  code: string;

  @BeforeInsert()
  generateId() {
    this.id = uuidv4(); // Genera el UUID v4 y lo asigna al campo `id`
  }
}
