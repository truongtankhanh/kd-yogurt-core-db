import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { RoleCode } from '../enums/role.enums';
import type { UserEntity } from './user.entity';

@Entity('roles')
export class RoleEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  code: RoleCode;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'text' })
  meaning: string;

  @OneToMany('UserEntity', (user: UserEntity) => user.role)
  users: UserEntity[];
}
