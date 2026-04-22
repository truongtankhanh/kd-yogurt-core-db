import { BaseEntity } from './base.entity';
import { PaymentStatusCode } from '../enums/payment-status.enums';
import type { OrderEntity } from './order.entity';
export declare class PaymentStatusEntity extends BaseEntity {
    code: PaymentStatusCode;
    name: string;
    meaning: string;
    orders: OrderEntity[];
}
//# sourceMappingURL=payment-status.entity.d.ts.map