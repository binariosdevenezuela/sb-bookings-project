import 'express-session';
import { UserRoleEnum } from './enums';

declare module 'express-session' {
  interface SessionData {
    user: {
      id: number;
      role: UserRoleEnum;
      name: string;
      lastname: string;
    };
  }
}
