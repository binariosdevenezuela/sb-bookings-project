import { User } from 'src/users/entities/user.entity';
export declare class SessionEntity {
  id: string;
  user: User;
  json: string;
  logged_on: Date;
  expiredAt: number;
  deletedAt?: Date;
}
