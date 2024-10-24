import { Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Appointment } from '../../appointments/entities/appointment.entity';
import { Service } from '../../services/entities/service.entity';

@Entity('appointments_services')
export class AppointmentsServices {
  @PrimaryColumn()
  id: number;

  @PrimaryColumn()
  service_id: number;

  @ManyToOne(() => Appointment, (appointment) => appointment.id)
  appointment: Appointment;

  @ManyToOne(() => Service, (service) => service.id)
  service: Service;
}
