import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Business } from '../../businesses/entities/business.entity';
import { Service } from 'src/services/entities/service.entity';
import { BusinessHour } from 'src/business_hours/entities/business_hour.entity';
import { User } from 'src/users/entities/user.entity';

@Entity('business_locations')
export class BusinessLocation {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Business, (business) => business.locations, { nullable: false })
  business: Business;

  @OneToMany(() => BusinessHour, (businessHour) => businessHour.location, { cascade: true })
  businessHours: BusinessHour[];

  @OneToMany(() => Service, (service) => service.location)
  services: Service[];

  @OneToMany(() => User, (user) => user.businessLocation)
  users: User[]

  @Column({ type: 'boolean', default: false })
  is_mobile: boolean;

  @Column({ type: 'decimal', precision: 10, scale: 8, nullable: true })
  latitude: number;

  @Column({ type: 'decimal', precision: 11, scale: 8, nullable: true })
  longitude: number;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  service_radius: number;

  @Column({ nullable: true })
  street: string;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  state: string;

  @Column({ nullable: true })
  postal_code: string;

  @Column({ length: 15 })
  phone: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  timezone: string; 
}
