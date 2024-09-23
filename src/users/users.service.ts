import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findByUsername(username: string): Promise<User | undefined> {
    return await this.usersRepository.findOne({ where: { username } });
  }
  
  async create(createUserDto: CreateUserDto): Promise<User> {
    const { username, password} = createUserDto;

    const userExists = await this.usersRepository.findOne({ where: { username } });

    if (userExists) {
      throw new ConflictException('Username already exists');
    }

    const newUser = this.usersRepository.create({ username, password });
    return await this.usersRepository.save(newUser);
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findOne(user_id: number): Promise<User> {
    return await this.usersRepository.findOne({ where: { user_id } }); // Búsqueda por `user_id`
  }
}
