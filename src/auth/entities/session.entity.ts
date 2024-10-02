import { Entity, Column, Index, PrimaryColumn } from 'typeorm';
import { ISession } from 'connect-typeorm'; // Importar la interfaz ISession

@Entity('sessions')
export class SessionEntity implements ISession {
  @Index()
  @Column('bigint')
  expiredAt: number;

  @PrimaryColumn('varchar', { length: 255 })
  id: string;

  @Column('text')
  json: string;
}