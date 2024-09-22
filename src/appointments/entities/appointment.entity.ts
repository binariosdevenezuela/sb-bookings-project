import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Client } from '../../clients/entities/client.entity';
import { Worker } from '../../workers/entities/worker.entity';
import { Service } from '../../services/entities/service.entity';

@Entity('appointments')
export class Appointment {
  @PrimaryGeneratedColumn()
  appointment_id: number;

  @ManyToOne(() => Client, (client) => client.client_id)
  client: Client;

  @ManyToOne(() => Worker, (worker) => worker.worker_id)
  worker: Worker;

  @ManyToOne(() => Service, (service) => service.service_id)
  service: Service;

  @Column({ type: 'datetime' })
  start_time: Date;

  @Column({ type: 'datetime' })
  end_time: Date;

  @Column({ length: 255, nullable: true })
  service_location: string;

  @Column({ type: 'decimal', precision: 10, scale: 8, nullable: true })
  latitude: number;

  @Column({ type: 'decimal', precision: 11, scale: 8, nullable: true })
  longitude: number;

  @Column({ type: 'enum', enum: ['Scheduled', 'In Progress', 'Completed'], default: 'Scheduled' })
  appointment_status: 'Scheduled' | 'In Progress' | 'Completed';
}
