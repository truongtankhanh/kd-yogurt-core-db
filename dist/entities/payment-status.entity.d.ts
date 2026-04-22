import { BaseEntity } from './base.entity';
import { PaymentStatusName } from '../enums/payment-status.enums';
import type { OrderEntity } from './order.entity';
export declare class PaymentStatusEntity extends BaseEntity {
    name: PaymentStatusName;
    meaning: string;
    orders: OrderEntity[];
}
//# sourceMappingURL=payment-status.entity.d.ts.map