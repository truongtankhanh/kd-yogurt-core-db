import { BaseEntity } from './base.entity';
import { OrderStatusName } from '../enums/order-status.enums';
import type { OrderEntity } from './order.entity';
export declare class OrderStatusEntity extends BaseEntity {
    name: OrderStatusName;
    meaning: string;
    orders: OrderEntity[];
}
//# sourceMappingURL=order-status.entity.d.ts.map