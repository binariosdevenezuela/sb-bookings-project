import { SchedulingModelEnum } from '../../common/enums';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  DeleteDateColumn,
  ManyToOne,
} from 'typeorm';
import { BusinessLocation } from '../../business_locations/entities/business_location.entity';
import { User } from 'src/users/entities/user.entity';

@Entity()
export class Business {
  @PrimaryGeneratedColumn()
  business_id: number;

  @Column({ length: 255 })
  name: string;

  @OneToMany(() => BusinessLocation, (location) => location.business)
  locations: BusinessLocation[];

  @Column({ length: 255, nullable: true })
  domain: string;

  @Column({
    type: 'enum',
    enum: SchedulingModelEnum,
    default: SchedulingModelEnum.ServiceDuration,
  })
  scheduling_model: SchedulingModelEnum;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @DeleteDateColumn({ nullable: true }) // Permite manejar soft deletes
  deletedAt?: Date;
}
