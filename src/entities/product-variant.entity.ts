import { Entity, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { ProductEntity } from './product.entity';
import type { CartItemEntity } from './cart-item.entity';
import type { OrderItemEntity } from './order-item.entity';

@Entity('product_variants')
export class ProductVariantEntity extends BaseEntity {
  @Column({ name: 'product_id', type: 'uuid' })
  productId: string;

  @Column({ type: 'varchar', length: 150 })
  name: string;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  price: number;

  @Column({ name: 'stock_qty', type: 'integer', default: 0 })
  stockQty: number;

  @Column({ name: 'is_available', type: 'boolean', default: true })
  isAvailable: boolean;

  // ─── Relations ──────────────────────────────────────────────

  @ManyToOne(() => ProductEntity, (product) => product.variants, {
    nullable: false,
  })
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity;

  @OneToMany('CartItemEntity', (item: CartItemEntity) => item.variant)
  cartItems: CartItemEntity[];

  @OneToMany('OrderItemEntity', (item: OrderItemEntity) => item.variant)
  orderItems: OrderItemEntity[];
}
