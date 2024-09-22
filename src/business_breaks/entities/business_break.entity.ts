import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Business } from '../../businesses/entities/business.entity';

@Entity('business_breaks')
export class BusinessBreak {
  @PrimaryGeneratedColumn()
  business_break_id: number;

  @ManyToOne(() => Business, (business) => business.business_id)
  business: Business;

  @Column({ type: 'enum', enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] })
  day_of_week: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

  @Column({ type: 'time' })
  break_start_time: string;

  @Column({ type: 'time' })
  break_end_time: string;
}
