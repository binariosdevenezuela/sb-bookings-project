import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SessionEntity } from './entities/session.entity';
import { SessionService } from './session.service';

@Module({
  imports: [TypeOrmModule.forFeature([SessionEntity])], // Registrar la entidad de sesión
  providers: [SessionService],
  exports: [SessionService], // Exportar el servicio si es necesario en otros módulos
})
export class SessionModule {}
