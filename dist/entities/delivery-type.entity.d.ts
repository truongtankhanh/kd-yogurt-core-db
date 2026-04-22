import { BaseEntity } from './base.entity';
import { DeliveryTypeCode } from '../enums/delivery-type.enums';
import type { OrderEntity } from './order.entity';
export declare class DeliveryTypeEntity extends BaseEntity {
    code: DeliveryTypeCode;
    name: string;
    meaning: string;
    orders: OrderEntity[];
}
//# sourceMappingURL=delivery-type.entity.d.ts.map