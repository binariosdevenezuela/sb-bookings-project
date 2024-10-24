import { Appointment } from 'src/appointments/entities/appointment.entity';
import { Business } from 'src/businesses/entities/business.entity';
import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity('clients')
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 20, nullable: true })
  phone: string;

  @Column({ length: 255, nullable: true })
  email: string;

  @Column({ length: 255 })
  password?: string;

  @OneToMany(() => Appointment, (appointment) => appointment.client)
  appointments: Appointment[];

  @Column({ length: 255, nullable: true })
  address: string;

  @ManyToOne(() => Business, (business) => business.clients)
  business: Business;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @DeleteDateColumn({ nullable: true })
  deletedAt?: Date;
}
