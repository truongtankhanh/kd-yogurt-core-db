import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { CartEntity } from './cart.entity';
import { ProductVariantEntity } from './product-variant.entity';

@Entity('cart_items')
export class CartItemEntity extends BaseEntity {
  @Column({ name: 'cart_id', type: 'uuid' })
  cartId: string;

  @Column({ name: 'variant_id', type: 'uuid' })
  variantId: string;

  @Column({ type: 'integer', default: 1 })
  quantity: number;

  @Column({ name: 'unit_price', type: 'decimal', precision: 12, scale: 2 })
  unitPrice: number;

  // ─── Relations ──────────────────────────────────────────────

  @ManyToOne(() => CartEntity, (cart) => cart.items, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'cart_id' })
  cart: CartEntity;

  @ManyToOne(() => ProductVariantEntity, (variant) => variant.cartItems, {
    nullable: false,
  })
  @JoinColumn({ name: 'variant_id' })
  variant: ProductVariantEntity;
}
