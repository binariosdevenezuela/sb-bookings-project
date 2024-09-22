import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Business } from '../../businesses/entities/business.entity';

@Entity('service_areas')
export class ServiceArea {
  @PrimaryGeneratedColumn()
  service_area_id: number;

  @ManyToOne(() => Business, (business) => business.business_id)
  business: Business;

  @Column({ length: 20 })
  postal_code: string;
}
