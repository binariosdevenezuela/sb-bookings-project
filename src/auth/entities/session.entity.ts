import {
  Entity,
  Column,
  Index,
  PrimaryColumn,
  DeleteDateColumn,
  ManyToOne,
} from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Entity('sessions')
export class SessionEntity {
  @PrimaryColumn('varchar', { length: 255 })
  id: string;

  @ManyToOne(() => User, (user) => user.user_id)
  user: User;

  @Column('text')
  json: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  logged_on: Date;

  @Index()
  @Column('bigint')
  expiredAt: number;

  @DeleteDateColumn()
  deletedAt?: Date;
}
