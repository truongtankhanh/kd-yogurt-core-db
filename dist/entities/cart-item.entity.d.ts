import { BaseEntity } from './base.entity';
import { CartEntity } from './cart.entity';
import { ProductVariantEntity } from './product-variant.entity';
export declare class CartItemEntity extends BaseEntity {
    cartId: string;
    variantId: string;
    quantity: number;
    unitPrice: number;
    cart: CartEntity;
    variant: ProductVariantEntity;
}
//# sourceMappingURL=cart-item.entity.d.ts.map