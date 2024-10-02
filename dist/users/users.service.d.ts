import { Repository } from 'typeorm';
import { QueryRunner, DataSource } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { SignUpDto } from './dto/signup.dto';
export declare class UsersService {
    private usersRepository;
    private readonly dataSource;
    saltRounds: number;
    constructor(usersRepository: Repository<User>, dataSource: DataSource);
    signup(signUpDto: SignUpDto): Promise<User>;
    add(): Promise<void>;
    create(createUserDto: CreateUserDto, queryRunner: QueryRunner): Promise<User>;
    findByUsername(email: string): Promise<User | undefined>;
    findAll(): Promise<User[]>;
    findOne(user_id: number): Promise<User>;
}
