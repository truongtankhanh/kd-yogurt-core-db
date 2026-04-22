import { BaseEntity } from './base.entity';
import { PromotionTypeCode } from '../enums/promotion-type.enums';
import type { PromotionEntity } from './promotion.entity';
export declare class PromotionTypeEntity extends BaseEntity {
    code: PromotionTypeCode;
    name: string;
    meaning: string;
    promotions: PromotionEntity[];
}
//# sourceMappingURL=promotion-type.entity.d.ts.map