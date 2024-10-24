import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Business } from '../../businesses/entities/business.entity';

@Entity('business_holidays')
export class BusinessHoliday {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Business, (business) => business.locations, { nullable: false, onDelete: 'CASCADE' })
  business: Business;

  @Column({ type: 'date' })
  holiday_date: string;

  @Column({ length: 255, nullable: true })
  description: string;
}
