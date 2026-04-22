import { DataSource } from 'typeorm';
import { PromotionEntity } from '../entities/promotion.entity';
import { SEED_PROMOTION_TYPE_IDS, SEED_PROMOTION_IDS } from './constants';

export async function seedPromotions(dataSource: DataSource): Promise<void> {
  const repo = dataSource.getRepository(PromotionEntity);

  type Row = Pick<
    PromotionEntity,
    | 'id'
    | 'code'
    | 'name'
    | 'typeId'
    | 'value'
    | 'minOrderValue'
    | 'maxDiscount'
    | 'usageLimit'
    | 'usageCount'
    | 'isActive'
    | 'startsAt'
    | 'expiresAt'
  >;

  const promotions: Row[] = [
    {
      id: SEED_PROMOTION_IDS.SUMMER_10PCT,
      code: 'SUMMER10',
      name: 'Chào Hè 2024 — Giảm 10%',
      typeId: SEED_PROMOTION_TYPE_IDS.PERCENTAGE,
      value: 10,
      minOrderValue: 50000,
      maxDiscount: 30000,
      usageLimit: 500,
      usageCount: 87,
      isActive: true,
      startsAt: new Date('2024-06-01T00:00:00+07:00'),
      expiresAt: new Date('2024-08-31T23:59:59+07:00'),
    },
    {
      id: SEED_PROMOTION_IDS.LOYAL_15K,
      code: 'LOYAL15K',
      name: 'Khách Hàng Thân Thiết — Giảm 15.000đ',
      typeId: SEED_PROMOTION_TYPE_IDS.FIXED_AMOUNT,
      value: 15000,
      minOrderValue: 100000,
      maxDiscount: null,
      usageLimit: null,
      usageCount: 234,
      isActive: true,
      startsAt: new Date('2024-01-01T00:00:00+07:00'),
      expiresAt: new Date('2024-12-31T23:59:59+07:00'),
    },
    {
      id: SEED_PROMOTION_IDS.FREE_SHIP_150K,
      code: 'FREESHIP',
      name: 'Miễn Phí Giao Hàng Cho Đơn Từ 150.000đ',
      typeId: SEED_PROMOTION_TYPE_IDS.FREE_SHIPPING,
      value: 0,
      minOrderValue: 150000,
      maxDiscount: null,
      usageLimit: null,
      usageCount: 412,
      isActive: true,
      startsAt: new Date('2024-01-01T00:00:00+07:00'),
      expiresAt: null,
    },
    {
      id: SEED_PROMOTION_IDS.FLASH_20PCT,
      code: 'FLASH20',
      name: 'Flash Sale Cuối Tuần — Giảm 20%',
      typeId: SEED_PROMOTION_TYPE_IDS.PERCENTAGE,
      value: 20,
      minOrderValue: 80000,
      maxDiscount: 50000,
      usageLimit: 100,
      usageCount: 100,
      isActive: false,
      startsAt: new Date('2024-03-16T09:00:00+07:00'),
      expiresAt: new Date('2024-03-16T23:59:59+07:00'),
    },
    {
      id: SEED_PROMOTION_IDS.BIRTHDAY_25PCT,
      code: 'BIRTHDAY25',
      name: 'Tặng Sinh Nhật — Giảm 25%',
      typeId: SEED_PROMOTION_TYPE_IDS.PERCENTAGE,
      value: 25,
      minOrderValue: 0,
      maxDiscount: 50000,
      usageLimit: null,
      usageCount: 56,
      isActive: true,
      startsAt: new Date('2024-01-01T00:00:00+07:00'),
      expiresAt: new Date('2024-12-31T23:59:59+07:00'),
    },
  ];

  for (const promo of promotions) {
    // Remove any stale row that shares the same code but has a different id
    await dataSource.query(`DELETE FROM promotions WHERE code = $1 AND id != $2`, [
      promo.code,
      promo.id,
    ]);
    await repo.upsert(promo, ['id']);
  }

  console.log(`[seed] promotions — ${promotions.length} rows`);
}
