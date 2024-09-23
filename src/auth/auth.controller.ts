// auth.controller.ts
import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // Ruta para el login
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    // Verifica las credenciales del usuario
    const user = await this.authService.validateUser(loginDto.username, loginDto.password);

    if (!user) {
      // Si las credenciales son incorrectas, lanza un error 401 Unauthorized
      throw new UnauthorizedException('Invalid credentials');
    }

    // Si las credenciales son correctas, genera el JWT y lo devuelve
    return this.authService.login(user);
  }
}
