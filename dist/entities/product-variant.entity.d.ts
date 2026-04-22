import { BaseEntity } from './base.entity';
import { ProductEntity } from './product.entity';
import type { CartItemEntity } from './cart-item.entity';
import type { OrderItemEntity } from './order-item.entity';
export declare class ProductVariantEntity extends BaseEntity {
    productId: string;
    name: string;
    price: number;
    stockQty: number;
    isAvailable: boolean;
    product: ProductEntity;
    cartItems: CartItemEntity[];
    orderItems: OrderItemEntity[];
}
//# sourceMappingURL=product-variant.entity.d.ts.map