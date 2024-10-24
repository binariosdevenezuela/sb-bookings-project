import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('plans')
export class Plan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20 })
  plan_name: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'int' })
  max_users: number;

  @Column({ type: 'boolean', default: false })
  marketing_feature: boolean;

  @Column({ type: 'boolean', default: false })
  custom_domain_feature: boolean;

  @Column({ type: 'int', nullable: true })
  max_appointments: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}
