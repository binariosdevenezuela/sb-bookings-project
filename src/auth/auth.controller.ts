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
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { ResponseService } from 'src/response/response.service';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly responseService: ResponseService
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

      return res
        .status(HttpStatus.OK)
        .json(
          this.responseService.success('Login successful', req.session.user)
        );
    } else {
      throw new UnauthorizedException('Invalid credentials');
    }
  }

  @Post('logout')
  logout(@Req() req: Request, @Res() res: Response) {
    if (req.session.user) {
      req.session.destroy(() => {});

      return res
        .status(HttpStatus.OK)
        .json(this.responseService.success('Logout successful'));
    } else {
      throw new UnauthorizedException('No session to destroy');
    }
  }
}
