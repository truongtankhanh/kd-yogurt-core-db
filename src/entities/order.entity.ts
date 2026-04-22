import { Entity, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { OrderStatusEntity } from './order-status.entity';
import { DeliveryTypeEntity } from './delivery-type.entity';
import { PaymentMethodEntity } from './payment-method.entity';
import { PaymentStatusEntity } from './payment-status.entity';
import type { UserEntity } from './user.entity';
import type { PromotionEntity } from './promotion.entity';
import type { OrderItemEntity } from './order-item.entity';

@Entity('orders')
export class OrderEntity extends BaseEntity {
  @Column({ name: 'order_number', type: 'varchar', length: 50 })
  orderNumber: string;

  @Column({ name: 'customer_id', type: 'uuid', nullable: true })
  customerId: string | null;

  @Column({ name: 'customer_name', type: 'varchar', length: 100 })
  customerName: string;

  @Column({ name: 'customer_phone', type: 'varchar', length: 20 })
  customerPhone: string;

  @Column({ name: 'delivery_address', type: 'text', nullable: true })
  deliveryAddress: string | null;

  @Column({ name: 'delivery_type_id', type: 'uuid' })
  deliveryTypeId: string;

  @Column({ name: 'status_id', type: 'uuid' })
  statusId: string;

  @Column({ name: 'payment_method_id', type: 'uuid' })
  paymentMethodId: string;

  @Column({ name: 'payment_status_id', type: 'uuid' })
  paymentStatusId: string;

  @Column({ type: 'decimal', precision: 14, scale: 2 })
  subtotal: number;

  @Column({ name: 'discount_amount', type: 'decimal', precision: 14, scale: 2, default: 0 })
  discountAmount: number;

  @Column({ name: 'shipping_fee', type: 'decimal', precision: 12, scale: 2, default: 0 })
  shippingFee: number;

  @Column({ name: 'total_amount', type: 'decimal', precision: 14, scale: 2 })
  totalAmount: number;

  @Column({ name: 'promotion_id', type: 'uuid', nullable: true })
  promotionId: string | null;

  @Column({ type: 'text', nullable: true })
  note: string | null;

  // ─── Relations ──────────────────────────────────────────────

  @ManyToOne('UserEntity', (user: UserEntity) => user.orders, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'customer_id' })
  customer: UserEntity | null;

  @ManyToOne(() => OrderStatusEntity, (status) => status.orders, {
    nullable: false,
  })
  @JoinColumn({ name: 'status_id' })
  status: OrderStatusEntity;

  @ManyToOne(() => DeliveryTypeEntity, (type) => type.orders, {
    nullable: false,
  })
  @JoinColumn({ name: 'delivery_type_id' })
  deliveryType: DeliveryTypeEntity;

  @ManyToOne(() => PaymentMethodEntity, (method) => method.orders, {
    nullable: false,
  })
  @JoinColumn({ name: 'payment_method_id' })
  paymentMethod: PaymentMethodEntity;

  @ManyToOne(() => PaymentStatusEntity, (status) => status.orders, {
    nullable: false,
  })
  @JoinColumn({ name: 'payment_status_id' })
  paymentStatus: PaymentStatusEntity;

  @ManyToOne('PromotionEntity', (promo: PromotionEntity) => promo.orders, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'promotion_id' })
  promotion: PromotionEntity | null;

  @OneToMany('OrderItemEntity', (item: OrderItemEntity) => item.order)
  items: OrderItemEntity[];
}
