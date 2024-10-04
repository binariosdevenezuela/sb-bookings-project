import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
export declare class AuthService {
  private userRepository;
  constructor(userRepository: Repository<User>);
  validateUser(email: string, password: string): Promise<any>;
}
