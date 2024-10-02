import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { QueryRunner, DataSource } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { SignUpDto } from './dto/signup.dto';
import { Business } from 'src/businesses/entities/business.entity';
import { BusinessLocation } from 'src/business_locations/entities/business_location.entity';

@Injectable()
export class UsersService {

  saltRounds: number = 10; 

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private readonly dataSource: DataSource
  ) {}

  async signup(signUpDto: SignUpDto): Promise<User> {
    const { user: userDto, business: businessDto, business_location: businessLocationDto } = signUpDto;

    const queryRunner: QueryRunner = this.dataSource.createQueryRunner();

    // Paso 1: Conectar a la base de datos
    await queryRunner.connect();

    // Paso 2: Iniciar la transacción
    await queryRunner.startTransaction();

    try {

      const newBusiness = new Business();
      Object.assign(newBusiness, businessDto);
      const savedBusiness = await queryRunner.manager.save(newBusiness);

      const newBusinessLocation = new BusinessLocation();
      Object.assign(newBusinessLocation, businessLocationDto);
      newBusinessLocation.business = savedBusiness;
      await queryRunner.manager.save(newBusinessLocation);

      const newUser = new User();
      Object.assign(newUser, userDto);
      newUser.businessLocation = newBusinessLocation;
      const savedUser = this.create(userDto, queryRunner);

      // Paso 3: Confirmar la transacción
      await queryRunner.commitTransaction();

      return savedUser;
    
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }

  }

  async add() {

  }

  async create(createUserDto: CreateUserDto, queryRunner: QueryRunner): Promise<User> {
    const { email } = createUserDto;

    const userExists = await this.usersRepository.findOne({ where: { email } });

    if (userExists) {
      throw new ConflictException('Username already exists');
    }
   
    const newUser = new User;
    Object.assign(newUser, createUserDto);
    newUser.password = await bcrypt.hash(newUser.password, this.saltRounds);
    return await queryRunner.manager.save(newUser);
  }

  async findByUsername(email: string): Promise<User | undefined> {
    return await this.usersRepository.findOne({ where: { email } });
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findOne(user_id: number): Promise<User> {
    return await this.usersRepository.findOne({ where: { user_id } }); // Búsqueda por `user_id`
  }
}
