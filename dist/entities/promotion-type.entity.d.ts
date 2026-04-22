import { BaseEntity } from './base.entity';
import { PromotionTypeName } from '../enums/promotion-type.enums';
import type { PromotionEntity } from './promotion.entity';
export declare class PromotionTypeEntity extends BaseEntity {
    name: PromotionTypeName;
    meaning: string;
    promotions: PromotionEntity[];
}
//# sourceMappingURL=promotion-type.entity.d.ts.map