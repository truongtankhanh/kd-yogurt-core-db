import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { RoleName } from '../enums/role.enums';
import type { UserEntity } from './user.entity';

@Entity('roles')
export class RoleEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  name: RoleName;

  @Column({ type: 'varchar', length: 100 })
  meaning: string;

  @OneToMany('UserEntity', (user: UserEntity) => user.role)
  users: UserEntity[];
}
