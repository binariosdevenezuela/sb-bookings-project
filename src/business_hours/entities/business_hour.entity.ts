import { DayOfWeekEnum } from '../../common/enums';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, Unique, OneToMany } from 'typeorm';
import { BusinessLocation } from 'src/business_locations/entities/business_location.entity';
import { BusinessBreak } from 'src/business_hours/entities/business_break.entity';
import { DateTime } from 'luxon';

@Entity('business_hours')
@Unique(['location', 'day_of_week'])
export class BusinessHour {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => BusinessLocation, (location) => location.businessHours, { nullable: false })
  location: BusinessLocation;

  @Column({ type: 'enum', enum: DayOfWeekEnum })
  day_of_week: DayOfWeekEnum;

  @Column({ type: 'time', nullable: true })
  start_time: string;

  @Column({ type: 'time', nullable: true })
  end_time: string;

  @OneToMany(() => BusinessBreak, (businessBreak) => businessBreak.businessHour, { cascade: true })
  breaks: BusinessBreak[];

  @Column({ type: 'boolean', default: false })
  is_closed: boolean;
}
