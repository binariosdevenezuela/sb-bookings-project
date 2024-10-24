import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Business } from '../../businesses/entities/business.entity';

@Entity('service_areas')
export class ServiceArea {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Business, (business) => business.id)
  business: Business;

  @Column({ length: 20 })
  postal_code: string;
}
