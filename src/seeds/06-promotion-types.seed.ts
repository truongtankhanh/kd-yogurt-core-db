import { DataSource } from 'typeorm';
import { PromotionTypeEntity } from '../entities/promotion-type.entity';
import { PromotionTypeName } from '../enums/promotion-type.enums';
import { SEED_PROMOTION_TYPE_IDS } from './constants';

export async function seedPromotionTypes(dataSource: DataSource): Promise<void> {
  const repo = dataSource.getRepository(PromotionTypeEntity);

  const types: Pick<PromotionTypeEntity, 'id' | 'name' | 'meaning'>[] = [
    {
      id: SEED_PROMOTION_TYPE_IDS.PERCENTAGE,
      name: PromotionTypeName.PERCENTAGE,
      meaning: 'Giảm theo % giá trị đơn hàng (ví dụ: giảm 10%)',
    },
    {
      id: SEED_PROMOTION_TYPE_IDS.FIXED_AMOUNT,
      name: PromotionTypeName.FIXED_AMOUNT,
      meaning: 'Trừ trực tiếp một khoản cố định (VNĐ) khỏi giá trị đơn hàng',
    },
    {
      id: SEED_PROMOTION_TYPE_IDS.FREE_SHIPPING,
      name: PromotionTypeName.FREE_SHIPPING,
      meaning: 'Miễn phí phí vận chuyển bất kể hình thức giao hàng',
    },
  ];

  for (const type of types) {
    await repo.upsert(type, ['id']);
  }

  console.log(`[seed] promotion_types — ${types.length} rows`);
}
