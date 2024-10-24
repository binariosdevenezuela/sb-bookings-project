import { SchedulingModelEnum } from '../../common/enums';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  DeleteDateColumn,
  OneToOne,
  JoinColumn,
  ManyToMany,
  JoinTable
} from 'typeorm';
import { BusinessLocation } from '../../business_locations/entities/business_location.entity';
import { User } from 'src/users/entities/user.entity';
import { Client } from 'src/clients/entities/client.entity';

@Entity()
export class Business {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User, (user) => user.business, { nullable: false}) 
  @JoinColumn()
  user: User;

  @Column({ length: 255 })
  name: string;

  @OneToMany(() => BusinessLocation, (location) => location.business, { cascade: true })
  locations: BusinessLocation[];

  @OneToMany(() => Client, (client) => client.business)
  clients: Client[];

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
