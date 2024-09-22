import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Business } from '../../businesses/entities/business.entity';

@Entity('workers')
export class Worker {
  @PrimaryGeneratedColumn()
  worker_id: number;

  @ManyToOne(() => Business, (business) => business.business_id)
  business: Business;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 255, nullable: true })
  specialty: string;
}
