import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('system_settings')
export class SystemSettingEntity extends BaseEntity {
  @Column({ name: 'code', type: 'varchar', length: 50 })
  code: string;

  @Column({ name: 'name', type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'text', nullable: true })
  value: string | null;

  @Column({ type: 'text', nullable: true })
  description: string | null;
}
