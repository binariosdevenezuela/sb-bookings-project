import 'express-session';
import { UserRoleEnum } from './enums';
import { Business } from 'src/businesses/entities/business.entity';
import { User } from 'src/users/entities/user.entity';

declare module 'express-session' {
  interface SessionData {
    user: User;
  }
}
