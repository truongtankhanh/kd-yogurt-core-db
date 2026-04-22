import { DataSource } from 'typeorm';
import { SystemSettingEntity } from '../entities/system-setting.entity';
import { SEED_SYSTEM_SETTING_IDS } from './constants';

const DEFAULT_SETTINGS: Pick<SystemSettingEntity, 'id' | 'key' | 'value' | 'description'>[] = [
  {
    id: SEED_SYSTEM_SETTING_IDS.SHOP_NAME,
    key: 'shop_name',
    value: 'KD Yogurt',
    description: 'Tên hiển thị của cửa hàng',
  },
  {
    id: SEED_SYSTEM_SETTING_IDS.SHOP_PHONE,
    key: 'shop_phone',
    value: '0363.947.059',
    description: 'Số điện thoại liên hệ',
  },
  {
    id: SEED_SYSTEM_SETTING_IDS.SHOP_ADDRESS,
    key: 'shop_address',
    value: '267 Hiệp Lễ, Tân Thành, Lâm Đồng, Việt Nam',
    description: 'Địa chỉ cửa hàng',
  },
  {
    id: SEED_SYSTEM_SETTING_IDS.CURRENCY,
    key: 'currency',
    value: 'VND',
    description: 'Đơn vị tiền tệ',
  },
  {
    id: SEED_SYSTEM_SETTING_IDS.SHIPPING_FEE,
    key: 'shipping_fee',
    value: '15000',
    description: 'Phí giao hàng mặc định (VNĐ)',
  },
  {
    id: SEED_SYSTEM_SETTING_IDS.FREE_SHIP_MIN_ORDER,
    key: 'free_ship_min_order',
    value: '150000',
    description: 'Giá trị đơn hàng tối thiểu để được miễn phí giao hàng (0 = luôn tính phí)',
  },
  {
    id: SEED_SYSTEM_SETTING_IDS.ORDER_PREFIX,
    key: 'order_prefix',
    value: 'YG',
    description: 'Tiền tố mã đơn hàng',
  },
];

export async function seedSystemSettings(dataSource: DataSource): Promise<void> {
  const repo = dataSource.getRepository(SystemSettingEntity);

  for (const setting of DEFAULT_SETTINGS) {
    await repo.upsert(setting, ['id']);
  }

  console.log(`[seed] system_settings — ${DEFAULT_SETTINGS.length} rows`);
}
