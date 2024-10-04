import { Repository } from 'typeorm';
import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';
import { SignUpIntent } from 'src/sign-up-intent/entities/sign-up-intent.entity';
export declare class UsersService {
  private usersRepository;
  private readonly dataSource;
  saltRounds: number;
  constructor(usersRepository: Repository<User>, dataSource: DataSource);
  signup(signUpIntent: SignUpIntent): Promise<User>;
  add(): Promise<void>;
  findByUsername(email: string): Promise<User | undefined>;
  findAll(): Promise<User[]>;
  findOne(user_id: number): Promise<User>;
}
