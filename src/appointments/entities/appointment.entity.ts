import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne } from 'typeorm';
import { Client } from '../../clients/entities/client.entity';
import { Worker } from '../../workers/entities/worker.entity';
import { Service } from '../../services/entities/service.entity';

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Client, (client) => client.appointments, { nullable: false })
  client: Client;

  @ManyToOne(() => Worker, (worker) => worker.appointments, { nullable: false })
  worker: Worker;

  @ManyToOne(() => Service, (service) => service.appointments, { nullable: false })
  service: Service;

  @Column({ type: 'datetime' })
  start_time: Date;

  @Column({ type: 'datetime' })
  end_time: Date;

  @Column({ length: 255, nullable: true })
  service_location: string;

  @Column({
    type: 'enum',
    enum: ['Scheduled', 'In Progress', 'Completed'],
    default: 'Scheduled',
  })
  appointment_status: 'Scheduled' | 'In Progress' | 'Completed';
}