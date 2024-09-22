import { Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Appointment } from '../../appointments/entities/appointment.entity';
import { Service } from '../../services/entities/service.entity';

@Entity('appointments_services')
export class AppointmentsServices {
  @PrimaryColumn()
  appointment_id: number;

  @PrimaryColumn()
  service_id: number;

  @ManyToOne(() => Appointment, (appointment) => appointment.appointment_id)
  appointment: Appointment;

  @ManyToOne(() => Service, (service) => service.service_id)
  service: Service;
}
