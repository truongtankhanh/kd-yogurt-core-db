import { DataSource } from 'typeorm';
import { UserAddressEntity } from '../entities/user-address.entity';
import { SEED_USER_IDS, SEED_USER_ADDRESS_IDS } from './constants';

export async function seedUserAddresses(dataSource: DataSource): Promise<void> {
  const repo = dataSource.getRepository(UserAddressEntity);

  type Row = Pick<
    UserAddressEntity,
    'id' | 'userId' | 'label' | 'recipientName' | 'phone' | 'address' | 'isDefault'
  >;

  const addresses: Row[] = [
    // Owner
    {
      id: SEED_USER_ADDRESS_IDS.OWNER_HOME,
      userId: SEED_USER_IDS.OWNER,
      label: 'Nhà',
      recipientName: 'Khánh Dương',
      phone: '0363947059',
      address: '267 Hiệp Lễ, Tân Thành, Lâm Đồng, Việt Nam',
      isDefault: true,
    },
    // Staff 1
    {
      id: SEED_USER_ADDRESS_IDS.STAFF1_HOME,
      userId: SEED_USER_IDS.STAFF_1,
      label: 'Nhà',
      recipientName: 'Nguyễn Thị Mai',
      phone: '0901111001',
      address: '15 Lê Hồng Phong, Phường 4, Đà Lạt, Lâm Đồng',
      isDefault: true,
    },
    // Staff 2
    {
      id: SEED_USER_ADDRESS_IDS.STAFF2_HOME,
      userId: SEED_USER_IDS.STAFF_2,
      label: 'Nhà',
      recipientName: 'Trần Văn Hùng',
      phone: '0901111002',
      address: '88 Trần Phú, Phường 3, Đà Lạt, Lâm Đồng',
      isDefault: true,
    },
    // Customer 01 — 2 addresses
    {
      id: SEED_USER_ADDRESS_IDS.CUST01_HOME,
      userId: SEED_USER_IDS.CUST_01,
      label: 'Nhà',
      recipientName: 'Lê Thị Hoa',
      phone: '0912000001',
      address: '32 Hoàng Diệu, Phường 5, Đà Lạt, Lâm Đồng',
      isDefault: true,
    },
    {
      id: SEED_USER_ADDRESS_IDS.CUST01_WORK,
      userId: SEED_USER_IDS.CUST_01,
      label: 'Công ty',
      recipientName: 'Lê Thị Hoa',
      phone: '0912000001',
      address: 'Lầu 3, Tòa nhà MHome, 29 Hùng Vương, Đà Lạt, Lâm Đồng',
      isDefault: false,
    },
    // Customer 02
    {
      id: SEED_USER_ADDRESS_IDS.CUST02_HOME,
      userId: SEED_USER_IDS.CUST_02,
      label: 'Nhà',
      recipientName: 'Phạm Minh Tuấn',
      phone: '0912000002',
      address: '7 Nguyễn Chí Thanh, Phường 1, Đà Lạt, Lâm Đồng',
      isDefault: true,
    },
    // Customer 03
    {
      id: SEED_USER_ADDRESS_IDS.CUST03_HOME,
      userId: SEED_USER_IDS.CUST_03,
      label: 'Nhà',
      recipientName: 'Nguyễn Thị Lan',
      phone: '0912000003',
      address: '124 Phan Đình Phùng, Phường 2, Đà Lạt, Lâm Đồng',
      isDefault: true,
    },
    // Customer 04
    {
      id: SEED_USER_ADDRESS_IDS.CUST04_HOME,
      userId: SEED_USER_IDS.CUST_04,
      label: 'Nhà',
      recipientName: 'Hoàng Văn Đức',
      phone: '0912000004',
      address: '56 Hai Bà Trưng, Phường 6, Đà Lạt, Lâm Đồng',
      isDefault: true,
    },
    // Customer 05
    {
      id: SEED_USER_ADDRESS_IDS.CUST05_HOME,
      userId: SEED_USER_IDS.CUST_05,
      label: 'Nhà',
      recipientName: 'Trịnh Thị Thu',
      phone: '0912000005',
      address: '9 Đinh Tiên Hoàng, Phường 1, Đà Lạt, Lâm Đồng',
      isDefault: true,
    },
    // Customer 06
    {
      id: SEED_USER_ADDRESS_IDS.CUST06_HOME,
      userId: SEED_USER_IDS.CUST_06,
      label: 'Nhà',
      recipientName: 'Võ Quốc Bảo',
      phone: '0912000006',
      address: '200 Nguyễn Văn Cừ, Phường 9, Đà Lạt, Lâm Đồng',
      isDefault: true,
    },
    // Customer 07
    {
      id: SEED_USER_ADDRESS_IDS.CUST07_HOME,
      userId: SEED_USER_IDS.CUST_07,
      label: 'Nhà',
      recipientName: 'Đặng Thị Kim Anh',
      phone: '0912000007',
      address: '45 Lê Lai, Phường 2, Đà Lạt, Lâm Đồng',
      isDefault: true,
    },
    // Customer 08
    {
      id: SEED_USER_ADDRESS_IDS.CUST08_HOME,
      userId: SEED_USER_IDS.CUST_08,
      label: 'Nhà',
      recipientName: 'Bùi Thanh Tùng',
      phone: '0912000008',
      address: '77 Khe Sanh, Phường 10, Đà Lạt, Lâm Đồng',
      isDefault: true,
    },
    // Customer 09
    {
      id: SEED_USER_ADDRESS_IDS.CUST09_HOME,
      userId: SEED_USER_IDS.CUST_09,
      label: 'Nhà',
      recipientName: 'Lý Ngọc Diễm',
      phone: '0912000009',
      address: '13 Yersin, Phường 10, Đà Lạt, Lâm Đồng',
      isDefault: true,
    },
    // Customer 10
    {
      id: SEED_USER_ADDRESS_IDS.CUST10_HOME,
      userId: SEED_USER_IDS.CUST_10,
      label: 'Nhà',
      recipientName: 'Phan Thế Vinh',
      phone: '0912000010',
      address: '3 Lý Tự Trọng, Phường 2, Đà Lạt, Lâm Đồng',
      isDefault: true,
    },
  ];

  for (const addr of addresses) {
    await repo.upsert(addr, ['id']);
  }

  console.log(`[seed] user_addresses — ${addresses.length} rows`);
}
