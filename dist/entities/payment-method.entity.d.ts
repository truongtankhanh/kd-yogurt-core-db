import { BaseEntity } from './base.entity';
import { PaymentMethodName } from '../enums/payment-method.enums';
import type { OrderEntity } from './order.entity';
export declare class PaymentMethodEntity extends BaseEntity {
    name: PaymentMethodName;
    meaning: string;
    orders: OrderEntity[];
}
//# sourceMappingURL=payment-method.entity.d.ts.map