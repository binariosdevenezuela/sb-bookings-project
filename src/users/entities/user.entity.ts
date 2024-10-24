import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  DeleteDateColumn,
  OneToOne
} from 'typeorm';
import { UserRoleEnum } from '../../common/enums';
import { Business } from 'src/businesses/entities/business.entity';
import { BusinessLocation } from 'src/business_locations/entities/business_location.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Business, (business) => business.user, { cascade: true })
  business: Business;

  @ManyToOne(
    () => BusinessLocation,
    (businessLocation) => businessLocation.users,
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
  password?: string;

  @Column({ type: 'enum', enum: UserRoleEnum, default: UserRoleEnum.Worker })
  role: UserRoleEnum;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @DeleteDateColumn({ nullable: true })
  deletedAt?: Date;
}
