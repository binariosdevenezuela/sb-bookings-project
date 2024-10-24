import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';
import { UserRoleEnum } from 'src/common/enums';
import { SignUpIntent } from 'src/sign-up-intent/entities/sign-up-intent.entity';

@Injectable()
export class UsersService {
  saltRounds: number = 10;

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private readonly dataSource: DataSource
  ) {}

  async signup(signUpIntent: SignUpIntent): Promise<User> {
    const { email } = signUpIntent.object;

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();

    try {
      await queryRunner.startTransaction();

      const newUser = new User();
      newUser.email = email;
      newUser.role = UserRoleEnum.Owner;
      newUser.password = signUpIntent.object.password;

      const savedNewUser = await queryRunner.manager.save(User, newUser);
      delete savedNewUser.password;

      await queryRunner.manager.remove(signUpIntent);

      await queryRunner.commitTransaction();

      return savedNewUser;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }

  async add() {}

  async findByUsername(email: string): Promise<User | undefined> {
    return await this.usersRepository.findOne({ where: { email } });
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findOne(user_id: number): Promise<User> {
    return await this.usersRepository.findOne({ where: { id: user_id } }); // Búsqueda por `user_id`
  }
}
