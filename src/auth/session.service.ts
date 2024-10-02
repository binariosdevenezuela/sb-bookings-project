import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SessionEntity } from './entities/session.entity';

@Injectable()
export class SessionService {
  constructor(
    @InjectRepository(SessionEntity)
    private sessionRepository: Repository<SessionEntity>,
  ) {}

  // Encontrar todas las sesiones (opcional)
  async findAll(): Promise<SessionEntity[]> {
    return this.sessionRepository.find();
  }

  // Guardar o actualizar una sesión
  async save(session: SessionEntity): Promise<SessionEntity> {
    return this.sessionRepository.save(session);
  }

  // Eliminar una sesión
  async delete(sessionId: string): Promise<void> {
    await this.sessionRepository.delete(sessionId);
  }
}
