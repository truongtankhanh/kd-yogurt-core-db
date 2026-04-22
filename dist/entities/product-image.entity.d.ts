import { BaseEntity } from './base.entity';
import { ProductEntity } from './product.entity';
export declare class ProductImageEntity extends BaseEntity {
    productId: string;
    imageUrl: string;
    isPrimary: boolean;
    sortOrder: number;
    product: ProductEntity;
}
//# sourceMappingURL=product-image.entity.d.ts.map