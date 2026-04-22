import { BaseEntity } from './base.entity';
import { OrderStatusCode } from '../enums/order-status.enums';
import type { OrderEntity } from './order.entity';
export declare class OrderStatusEntity extends BaseEntity {
    code: OrderStatusCode;
    name: string;
    meaning: string;
    orders: OrderEntity[];
}
//# sourceMappingURL=order-status.entity.d.ts.map