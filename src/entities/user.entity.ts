import { Entity, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { RoleEntity } from './role.entity';
import type { UserAddressEntity } from './user-address.entity';
import type { CartEntity } from './cart.entity';
import type { OrderEntity } from './order.entity';
import type { ReviewEntity } from './review.entity';
import type { NotificationEntity } from './notification.entity';
import type { RefreshTokenEntity } from './refresh-token.entity';

@Entity('users')
export class UserEntity extends BaseEntity {
  @Column({ name: 'full_name', type: 'varchar', length: 100 })
  fullName: string;

  @Column({ type: 'varchar', length: 20 })
  phone: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  email: string | null;

  @Column({ name: 'password_hash', type: 'varchar', length: 255, select: false })
  passwordHash: string;

  @Column({ name: 'role_id', type: 'uuid' })
  roleId: string;

  @Column({ name: 'loyalty_points', type: 'integer', default: 0 })
  loyaltyPoints: number;

  @Column({ name: 'is_active', type: 'boolean', default: true })
  isActive: boolean;

  @Column({ name: 'last_login_at', type: 'timestamptz', nullable: true })
  lastLoginAt: Date | null;

  // ─── Relations ──────────────────────────────────────────────

  @ManyToOne(() => RoleEntity, (role) => role.users, { nullable: false })
  @JoinColumn({ name: 'role_id' })
  role: RoleEntity;

  @OneToMany('UserAddressEntity', (addr: UserAddressEntity) => addr.user)
  addresses: UserAddressEntity[];

  @OneToMany('CartEntity', (cart: CartEntity) => cart.customer)
  carts: CartEntity[];

  @OneToMany('OrderEntity', (order: OrderEntity) => order.customer)
  orders: OrderEntity[];

  @OneToMany('ReviewEntity', (review: ReviewEntity) => review.customer)
  reviews: ReviewEntity[];

  @OneToMany('NotificationEntity', (notif: NotificationEntity) => notif.customer)
  notifications: NotificationEntity[];

  @OneToMany('RefreshTokenEntity', (token: RefreshTokenEntity) => token.user)
  refreshTokens: RefreshTokenEntity[];
}
