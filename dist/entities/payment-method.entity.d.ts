import { BaseEntity } from './base.entity';
import { PaymentMethodCode } from '../enums/payment-method.enums';
import type { OrderEntity } from './order.entity';
export declare class PaymentMethodEntity extends BaseEntity {
    code: PaymentMethodCode;
    name: string;
    meaning: string;
    orders: OrderEntity[];
}
//# sourceMappingURL=payment-method.entity.d.ts.map