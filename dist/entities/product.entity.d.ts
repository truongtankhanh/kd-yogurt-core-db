import { BaseEntity } from './base.entity';
import { CategoryEntity } from './category.entity';
import type { ProductVariantEntity } from './product-variant.entity';
import type { ProductImageEntity } from './product-image.entity';
import type { ReviewEntity } from './review.entity';
export declare class ProductEntity extends BaseEntity {
    categoryId: string;
    name: string;
    description: string | null;
    isAvailable: boolean;
    isFeatured: boolean;
    sortOrder: number;
    category: CategoryEntity;
    variants: ProductVariantEntity[];
    images: ProductImageEntity[];
    reviews: ReviewEntity[];
}
//# sourceMappingURL=product.entity.d.ts.map