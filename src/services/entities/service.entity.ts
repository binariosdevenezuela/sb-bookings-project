import { Appointment } from 'src/appointments/entities/appointment.entity';
import { BusinessLocation } from 'src/business_locations/entities/business_location.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';

@Entity('services')
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  service_name: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({ type: 'int', nullable: true })
  duration_minutes: number;

  @ManyToOne(() => BusinessLocation, (location) => location.services)
  @JoinColumn()
  location: BusinessLocation;

  @OneToMany(() => Appointment, (appointment) => appointment.service)
  appointments: Appointment[];
}
