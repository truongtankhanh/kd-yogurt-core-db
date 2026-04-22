import { BaseEntity } from './base.entity';
import { OrderStatusEntity } from './order-status.entity';
import { DeliveryTypeEntity } from './delivery-type.entity';
import { PaymentMethodEntity } from './payment-method.entity';
import { PaymentStatusEntity } from './payment-status.entity';
import type { UserEntity } from './user.entity';
import type { PromotionEntity } from './promotion.entity';
import type { OrderItemEntity } from './order-item.entity';
export declare class OrderEntity extends BaseEntity {
    orderNumber: string;
    customerId: string | null;
    customerName: string;
    customerPhone: string;
    deliveryAddress: string | null;
    deliveryTypeId: string;
    statusId: string;
    paymentMethodId: string;
    paymentStatusId: string;
    subtotal: number;
    discountAmount: number;
    shippingFee: number;
    totalAmount: number;
    promotionId: string | null;
    note: string | null;
    customer: UserEntity | null;
    status: OrderStatusEntity;
    deliveryType: DeliveryTypeEntity;
    paymentMethod: PaymentMethodEntity;
    paymentStatus: PaymentStatusEntity;
    promotion: PromotionEntity | null;
    items: OrderItemEntity[];
}
//# sourceMappingURL=order.entity.d.ts.map