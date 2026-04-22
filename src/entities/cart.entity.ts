import { Entity, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import type { UserEntity } from './user.entity';
import type { CartItemEntity } from './cart-item.entity';

@Entity('carts')
export class CartEntity extends BaseEntity {
  @Column({ name: 'customer_id', type: 'uuid', nullable: true })
  customerId: string | null;

  @Column({ name: 'session_key', type: 'varchar', length: 128, nullable: true })
  sessionKey: string | null;

  @Column({ name: 'expires_at', type: 'timestamptz', nullable: true })
  expiresAt: Date | null;

  // ─── Relations ──────────────────────────────────────────────

  @ManyToOne('UserEntity', (user: UserEntity) => user.carts, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'customer_id' })
  customer: UserEntity | null;

  @OneToMany('CartItemEntity', (item: CartItemEntity) => item.cart)
  items: CartItemEntity[];
}
