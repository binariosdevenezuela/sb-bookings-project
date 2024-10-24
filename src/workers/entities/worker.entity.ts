import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Business } from '../../businesses/entities/business.entity';
import { Appointment } from 'src/appointments/entities/appointment.entity';

@Entity('workers')
export class Worker {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Business, (business) => business.id)
  business: Business;

  @OneToMany(() => Appointment, (appointment) => appointment.worker)
  appointments: Appointment[]

  @Column({ length: 255 })
  name: string;

  @Column({ length: 255, nullable: true })
  specialty: string;
}
