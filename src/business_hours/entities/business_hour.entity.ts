import { DayOfWeekEnum } from '../../common/enums'
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Business } from '../../businesses/entities/business.entity';

@Entity('business_hours')
export class BusinessHour {
  @PrimaryGeneratedColumn()
  business_hours_id: number;

  @ManyToOne(() => Business, (business) => business.business_id)
  business: Business;

  @Column({ type: 'enum', enum: DayOfWeekEnum })
  day_of_week: DayOfWeekEnum;

  @Column({ type: 'time' })
  start_time: string;

  @Column({ type: 'time' })
  end_time: string;

  @Column({ type: 'boolean', default: false })
  is_closed: boolean;
}
