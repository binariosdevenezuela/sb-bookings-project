import { ConflictException, Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
    @Post('login')
    login(@Req() req: Request) {
      if(req.session.user) {
        throw new ConflictException('There is a session already. User: ' + req.session.user.username);
      }

      req.session.user = { id: 1, username: 'john_doe' }; // Almacenar el usuario en la sesión
      return { message: 'Login successful' };
    }
  
    @Post('logout')
    logout(@Req() req: Request) {
      req.session.destroy(() => {}); // Destruir la sesión del usuario
      return { message: 'Logout successful' };
    }
  }
