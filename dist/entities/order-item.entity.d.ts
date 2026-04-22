import { BaseEntity } from './base.entity';
import { OrderEntity } from './order.entity';
import type { ProductVariantEntity } from './product-variant.entity';
export declare class OrderItemEntity extends BaseEntity {
    orderId: string;
    variantId: string | null;
    productName: string;
    variantName: string | null;
    unitPrice: number;
    quantity: number;
    subtotal: number;
    order: OrderEntity;
    variant: ProductVariantEntity | null;
}
//# sourceMappingURL=order-item.entity.d.ts.map