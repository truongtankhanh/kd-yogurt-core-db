import { Entity, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { CategoryEntity } from './category.entity';
import type { ProductVariantEntity } from './product-variant.entity';
import type { ProductImageEntity } from './product-image.entity';
import type { ReviewEntity } from './review.entity';

@Entity('products')
export class ProductEntity extends BaseEntity {
  @Column({ name: 'category_id', type: 'uuid' })
  categoryId: string;

  @Column({ type: 'varchar', length: 200 })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string | null;

  @Column({ name: 'is_available', type: 'boolean', default: true })
  isAvailable: boolean;

  @Column({ name: 'is_featured', type: 'boolean', default: false })
  isFeatured: boolean;

  @Column({ name: 'sort_order', type: 'smallint', default: 0 })
  sortOrder: number;

  // ─── Relations ──────────────────────────────────────────────

  @ManyToOne(() => CategoryEntity, (category) => category.products, {
    nullable: false,
  })
  @JoinColumn({ name: 'category_id' })
  category: CategoryEntity;

  @OneToMany('ProductVariantEntity', (variant: ProductVariantEntity) => variant.product)
  variants: ProductVariantEntity[];

  @OneToMany('ProductImageEntity', (image: ProductImageEntity) => image.product)
  images: ProductImageEntity[];

  @OneToMany('ReviewEntity', (review: ReviewEntity) => review.product)
  reviews: ReviewEntity[];
}
