import {
  ConflictException,
  Controller,
  Post,
  Req,
  Res,
  HttpStatus,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}

  @Post('login')
  async login(@Req() req: Request, @Res() res: Response) {
    if (req.session.user) {
      throw new ConflictException('There is a session already.');
    }

    const { email, password } = req.body;
    const user = await this.authService.validateUser(email, password);

    if (user) {
      req.session.user = user;

      return "Welcome."
    } else {
      throw new UnauthorizedException('Invalid credentials');
    }
  }

  @Post('logout')
  logout(@Req() req: Request, @Res() res: Response) {
    if (req.session.user) {
      req.session.destroy(() => {});
      res.clearCookie('connect.sid');
      return "Logged out successfully."
    } else {
      throw new UnauthorizedException('No session to destroy');
    }
  }
}
