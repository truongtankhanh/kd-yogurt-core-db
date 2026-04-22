import { BaseEntity } from './base.entity';
import { ProductEntity } from './product.entity';
import type { UserEntity } from './user.entity';
export declare class ReviewEntity extends BaseEntity {
    productId: string;
    customerId: string | null;
    rating: number;
    body: string | null;
    isVisible: boolean;
    product: ProductEntity;
    customer: UserEntity | null;
}
//# sourceMappingURL=review.entity.d.ts.map