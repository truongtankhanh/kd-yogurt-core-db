import { BaseEntity } from './base.entity';
import { PromotionTypeEntity } from './promotion-type.entity';
import type { OrderEntity } from './order.entity';
export declare class PromotionEntity extends BaseEntity {
    code: string | null;
    name: string;
    typeId: string;
    value: number;
    minOrderValue: number;
    maxDiscount: number | null;
    usageLimit: number | null;
    usageCount: number;
    isActive: boolean;
    startsAt: Date | null;
    expiresAt: Date | null;
    type: PromotionTypeEntity;
    orders: OrderEntity[];
}
//# sourceMappingURL=promotion.entity.d.ts.map