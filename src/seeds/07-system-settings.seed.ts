import { DataSource } from 'typeorm';
import { SystemSettingEntity } from '../entities/system-setting.entity';
import { SEED_SYSTEM_SETTING_IDS } from './constants';

const DEFAULT_SETTINGS: Pick<
  SystemSettingEntity,
  'id' | 'code' | 'name' | 'value' | 'description'
>[] = [
  {
    id: SEED_SYSTEM_SETTING_IDS.SHOP_NAME,
    code: 'ten_cua_hang',
    name: 'Tên cửa hàng',
    value: 'KD Yogurt',
    description: 'Tên hiển thị của cửa hàng',
  },
  {
    id: SEED_SYSTEM_SETTING_IDS.SHOP_PHONE,
    code: 'so_dien_thoai_cua_hang',
    name: 'Số điện thoại cửa hàng',
    value: '0363.947.059',
    description: 'Số điện thoại liên hệ',
  },
  {
    id: SEED_SYSTEM_SETTING_IDS.SHOP_ADDRESS,
    code: 'dia_chi_cua_hang',
    name: 'Địa chỉ cửa hàng',
    value: '267 Hiệp Lễ, Tân Thành, Lâm Đồng, Việt Nam',
    description: 'Địa chỉ cửa hàng',
  },
  {
    id: SEED_SYSTEM_SETTING_IDS.CURRENCY,
    code: 'don_vi_tien_te',
    name: 'Đơn vị tiền tệ',
    value: 'VND',
    description: 'Đơn vị tiền tệ',
  },
  {
    id: SEED_SYSTEM_SETTING_IDS.SHIPPING_FEE,
    code: 'phi_giao_hang',
    name: 'Phí giao hàng',
    value: '15000',
    description: 'Phí giao hàng mặc định (VNĐ)',
  },
  {
    id: SEED_SYSTEM_SETTING_IDS.FREE_SHIP_MIN_ORDER,
    code: 'gia_tri_don_hang_duoc_mien_phi_giao_hang',
    name: 'Giá trị đơn hàng để được miễn phí giao hàng',
    value: '150000',
    description: 'Giá trị đơn hàng tối thiểu để được miễn phí giao hàng (0 = luôn tính phí)',
  },
  {
    id: SEED_SYSTEM_SETTING_IDS.ORDER_PREFIX,
    code: 'tien_to_ma_don_hang',
    name: 'Tiền tố mã đơn hàng',
    value: 'YG',
    description: 'Tiền tố mã đơn hàng',
  },
  // ── Bank / payment info (used by POS payment sheet) ───────────────────────
  {
    id: SEED_SYSTEM_SETTING_IDS.BANK_VIETQR_CODE,
    code: 'ma_ngan_hang_vietqr',
    name: 'Mã ngân hàng VietQR',
    value: '',
    description:
      'Mã ngân hàng dùng cho VietQR (ví dụ: MB, VCB, TCB, BIDV). Xem danh sách tại img.vietqr.io',
  },
  {
    id: SEED_SYSTEM_SETTING_IDS.BANK_ACCOUNT_NO,
    code: 'so_tai_khoan',
    name: 'Số tài khoản ngân hàng',
    value: '',
    description: 'Số tài khoản nhận chuyển khoản',
  },
  {
    id: SEED_SYSTEM_SETTING_IDS.BANK_ACCOUNT_NAME,
    code: 'chu_tai_khoan',
    name: 'Chủ tài khoản',
    value: '',
    description: 'Tên chủ tài khoản ngân hàng',
  },
  {
    id: SEED_SYSTEM_SETTING_IDS.BANK_DISPLAY_NAME,
    code: 'ten_ngan_hang',
    name: 'Tên ngân hàng',
    value: '',
    description: 'Tên hiển thị của ngân hàng (ví dụ: MB Bank, Vietcombank)',
  },
  {
    id: SEED_SYSTEM_SETTING_IDS.MOMO_PHONE,
    code: 'so_dt_momo',
    name: 'Số điện thoại MoMo',
    value: '',
    description: 'Số điện thoại tài khoản MoMo nhận thanh toán',
  },
  {
    id: SEED_SYSTEM_SETTING_IDS.VNPAY_PHONE,
    code: 'so_dt_vnpay',
    name: 'Số điện thoại VNPay',
    value: '',
    description: 'Số điện thoại tài khoản VNPay nhận thanh toán',
  },
  {
    id: SEED_SYSTEM_SETTING_IDS.ZALOPAY_PHONE,
    code: 'so_dt_zalopay',
    name: 'Số điện thoại ZaloPay',
    value: '',
    description: 'Số điện thoại tài khoản ZaloPay nhận thanh toán',
  },
];

export async function seedSystemSettings(dataSource: DataSource): Promise<void> {
  const repo = dataSource.getRepository(SystemSettingEntity);

  for (const setting of DEFAULT_SETTINGS) {
    await repo.upsert(setting, ['id']);
  }

  console.log(`[seed] system_settings — ${DEFAULT_SETTINGS.length} rows`);
}
