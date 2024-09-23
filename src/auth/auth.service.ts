// auth.service.ts
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  // Verificar credenciales de usuario
  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findByUsername(username);
    
    if (user && await bcrypt.compare(password, user.password)) {
      const { password, ...result } = user; // Excluye la contraseña del resultado
      return result; // Devuelve el usuario sin la contraseña
    }
    return null;
  }

  // Generar JWT
  async login(user: any) {
    const payload = { username: user.username, sub: user.id }; // Payload del token
    return {
      access_token: this.jwtService.sign(payload), // Firma y genera el JWT
    };
  }
}
