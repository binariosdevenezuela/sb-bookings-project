import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Business } from '../../businesses/entities/business.entity';

@Entity('business_holidays')
export class BusinessHoliday {
  @PrimaryGeneratedColumn()
  business_holiday_id: number;

  @ManyToOne(() => Business, (business) => business.business_id)
  business: Business;

  @Column({ type: 'date' })
  holiday_date: string;

  @Column({ length: 255, nullable: true })
  description: string;
}
