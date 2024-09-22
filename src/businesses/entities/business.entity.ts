import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Business {
  @PrimaryGeneratedColumn()
  business_id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 255, nullable: true })
  address: string;

  @Column({ length: 255, nullable: true })
  domain: string;

  @Column({ type: 'boolean', default: false })
  is_mobile: boolean;

  @Column({ type: 'decimal', precision: 10, scale: 8, nullable: true })
  latitude: number;

  @Column({ type: 'decimal', precision: 11, scale: 8, nullable: true })
  longitude: number;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  service_radius: number;

  @Column({ type: 'enum', enum: ['Predefined Blocks', 'Service Duration'], default: 'Service Duration' })
  scheduling_model: 'Predefined Blocks' | 'Service Duration';

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}
