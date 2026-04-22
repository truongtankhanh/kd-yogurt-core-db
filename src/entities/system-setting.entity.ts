import { Entity, Column, PrimaryColumn } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('system_settings')
export class SystemSettingEntity extends BaseEntity {
  @PrimaryColumn({ name: 'key', type: 'varchar', length: 100 })
  key: string;

  @Column({ type: 'text', nullable: true })
  value: string | null;

  @Column({ type: 'varchar', length: 300, nullable: true })
  description: string | null;
}
