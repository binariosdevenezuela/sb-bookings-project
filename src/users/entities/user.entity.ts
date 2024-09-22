import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Business } from '../../businesses/entities/business.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @ManyToOne(() => Business, (business) => business.business_id, { nullable: true })
  business: Business;

  @Column({ length: 50, unique: true })
  username: string;

  @Column({ length: 255 })
  password: string;

  @Column({ type: 'enum', enum: ['owner', 'manager', 'worker'], default: 'owner' })
  role: 'owner' | 'manager' | 'worker';

  @Column({ type: 'enum', enum: ['admin'], nullable: true })
  platform_role: 'admin';

  @Column({ length: 255, nullable: true })
  email: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}
