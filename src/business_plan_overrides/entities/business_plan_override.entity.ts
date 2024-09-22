import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Business } from '../../businesses/entities/business.entity';

@Entity('business_plan_overrides')
export class BusinessPlanOverride {
  @PrimaryGeneratedColumn()
  override_id: number;

  @ManyToOne(() => Business, (business) => business.business_id)
  business: Business;

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
}
