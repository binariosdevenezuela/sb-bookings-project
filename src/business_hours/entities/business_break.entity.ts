import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { BusinessHour } from 'src/business_hours/entities/business_hour.entity';
import { DateTime } from 'luxon';

@Entity('business_breaks')
export class BusinessBreak {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => BusinessHour, (businessHour) => businessHour.breaks, { nullable: false })
  businessHour: BusinessHour;

  @Column({ type: 'time' })
  start_time: string;

  @Column({ type: 'time' })
  end_time: string;
}
