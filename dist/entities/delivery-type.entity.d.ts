import { BaseEntity } from './base.entity';
import { DeliveryTypeName } from '../enums/delivery-type.enums';
import type { OrderEntity } from './order.entity';
export declare class DeliveryTypeEntity extends BaseEntity {
    name: DeliveryTypeName;
    meaning: string;
    orders: OrderEntity[];
}
//# sourceMappingURL=delivery-type.entity.d.ts.map