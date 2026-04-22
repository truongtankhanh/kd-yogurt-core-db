import { DataSource } from 'typeorm';
import { DeliveryTypeEntity } from '../entities/delivery-type.entity';
import { DeliveryTypeCode } from '../enums/delivery-type.enums';
import { SEED_DELIVERY_TYPE_IDS } from './constants';

export async function seedDeliveryTypes(dataSource: DataSource): Promise<void> {
  const repo = dataSource.getRepository(DeliveryTypeEntity);

  const types: Pick<DeliveryTypeEntity, 'id' | 'code' | 'name' | 'meaning'>[] = [
    {
      id: SEED_DELIVERY_TYPE_IDS.PICKUP,
      code: DeliveryTypeCode.TU_DEN_LAY,
      name: 'Tự đến lấy',
      meaning: 'Khách đến lấy hàng trực tiếp tại cửa hàng',
    },
    {
      id: SEED_DELIVERY_TYPE_IDS.DELIVERY,
      code: DeliveryTypeCode.GIAO_TAN_NOI,
      name: 'Giao tận nơi',
      meaning: 'Giao hàng đến địa chỉ nhận của khách',
    },
  ];

  for (const type of types) {
    await repo.upsert(type, ['id']);
  }

  console.log(`[seed] delivery_types — ${types.length} rows`);
}
