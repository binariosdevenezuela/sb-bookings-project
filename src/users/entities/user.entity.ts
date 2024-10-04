import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  DeleteDateColumn,
} from 'typeorm';
import { UserRoleEnum } from '../../common/enums';
import { Business } from 'src/businesses/entities/business.entity';
import { BusinessLocation } from 'src/business_locations/entities/business_location.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @ManyToOne(() => Business, (business) => business.business_id)
  business: Business;

  @ManyToOne(
    () => BusinessLocation,
    (businessLocation) => businessLocation.id,
    { nullable: true }
  )
  businessLocation: BusinessLocation;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 50 })
  lastname: string;

  @Column({ length: 255, nullable: true })
  email: string;

  @Column({ length: 15, nullable: true })
  phone: string;

  @Column({ length: 255 })
  password: string;

  @Column({ type: 'enum', enum: UserRoleEnum, default: UserRoleEnum.Worker })
  role: UserRoleEnum;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @DeleteDateColumn({ nullable: true }) // Permite manejar soft deletes
  deletedAt?: Date;
}
