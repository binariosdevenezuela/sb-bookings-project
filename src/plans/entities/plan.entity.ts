import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('plans')
export class Plan {
  @PrimaryGeneratedColumn()
  plan_id: number;

  @Column({ length: 255 })
  plan_name: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'int', nullable: true })
  max_users: number;

  @Column({ type: 'boolean', default: false })
  has_marketing: boolean;

  @Column({ type: 'boolean', default: false })
  custom_domain: boolean;

  @Column({ type: 'int', nullable: true })
  storage_space: number;

  @Column({ type: 'int', nullable: true })
  max_appointments: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}
