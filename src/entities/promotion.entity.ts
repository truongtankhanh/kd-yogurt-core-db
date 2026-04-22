import { Entity, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { PromotionTypeEntity } from './promotion-type.entity';
import type { OrderEntity } from './order.entity';

@Entity('promotions')
export class PromotionEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 50, nullable: true })
  code: string | null;

  @Column({ type: 'varchar', length: 200 })
  name: string;

  @Column({ name: 'type_id', type: 'uuid' })
  typeId: string;

  @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
  value: number;

  @Column({ name: 'min_order_value', type: 'decimal', precision: 12, scale: 2, default: 0 })
  minOrderValue: number;

  @Column({ name: 'max_discount', type: 'decimal', precision: 12, scale: 2, nullable: true })
  maxDiscount: number | null;

  @Column({ name: 'usage_limit', type: 'integer', nullable: true })
  usageLimit: number | null;

  @Column({ name: 'usage_count', type: 'integer', default: 0 })
  usageCount: number;

  @Column({ name: 'is_active', type: 'boolean', default: true })
  isActive: boolean;

  @Column({ name: 'starts_at', type: 'timestamptz', nullable: true })
  startsAt: Date | null;

  @Column({ name: 'expires_at', type: 'timestamptz', nullable: true })
  expiresAt: Date | null;

  // ─── Relations ──────────────────────────────────────────────

  @ManyToOne(() => PromotionTypeEntity, (type) => type.promotions, {
    nullable: false,
  })
  @JoinColumn({ name: 'type_id' })
  type: PromotionTypeEntity;

  @OneToMany('OrderEntity', (order: OrderEntity) => order.promotion)
  orders: OrderEntity[];
}
