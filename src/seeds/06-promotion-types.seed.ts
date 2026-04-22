import { DataSource } from 'typeorm';
import { PromotionTypeEntity } from '../entities/promotion-type.entity';
import { PromotionTypeCode } from '../enums/promotion-type.enums';
import { SEED_PROMOTION_TYPE_IDS } from './constants';

export async function seedPromotionTypes(dataSource: DataSource): Promise<void> {
  const repo = dataSource.getRepository(PromotionTypeEntity);

  const types: Pick<PromotionTypeEntity, 'id' | 'code' | 'name' | 'meaning'>[] = [
    {
      id: SEED_PROMOTION_TYPE_IDS.PERCENTAGE,
      code: PromotionTypeCode.PHAN_TRAM,
      name: 'Giảm theo %',
      meaning: 'Giảm theo % giá trị đơn hàng (ví dụ: giảm 10%)',
    },
    {
      id: SEED_PROMOTION_TYPE_IDS.FIXED_AMOUNT,
      code: PromotionTypeCode.SO_TIEN_CO_DINH,
      name: 'Giảm theo số tiền cố định',
      meaning: 'Trừ trực tiếp một khoản cố định (VNĐ) khỏi giá trị đơn hàng',
    },
    {
      id: SEED_PROMOTION_TYPE_IDS.FREE_SHIPPING,
      code: PromotionTypeCode.MIEN_PHI_VAN_CHUYEN,
      name: 'Miễn phí vận chuyển',
      meaning: 'Miễn phí phí vận chuyển bất kể hình thức giao hàng',
    },
  ];

  for (const type of types) {
    await repo.upsert(type, ['id']);
  }

  console.log(`[seed] promotion_types — ${types.length} rows`);
}
