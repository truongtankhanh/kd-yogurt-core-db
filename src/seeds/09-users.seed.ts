import { DataSource } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { SEED_ROLE_IDS, SEED_USER_IDS } from './constants';

/**
 * Tất cả tài khoản dev dùng chung mật khẩu: Password@123
 * Hash được tính bằng bcrypt cost=10.
 */
const PASSWORD_HASH = '$2b$10$tCUM0x1fF4bLuBvEau9rr.q2f4Gja667hrMoToPj3xOm4rL7oK8Li';

export async function seedUsers(dataSource: DataSource): Promise<void> {
  const repo = dataSource.getRepository(UserEntity);

  type Row = Pick<
    UserEntity,
    'id' | 'fullName' | 'phone' | 'email' | 'passwordHash' | 'roleId' | 'loyaltyPoints' | 'isActive'
  >;

  const users: Row[] = [
    // ── Owner ────────────────────────────────────────────────
    {
      id: SEED_USER_IDS.OWNER,
      fullName: 'Khánh Dương',
      phone: '0363947059',
      email: 'owner@kdyogurt.vn',
      passwordHash: PASSWORD_HASH,
      roleId: SEED_ROLE_IDS.OWNER,
      loyaltyPoints: 0,
      isActive: true,
    },
    // ── Staff ────────────────────────────────────────────────
    {
      id: SEED_USER_IDS.STAFF_1,
      fullName: 'Nguyễn Thị Mai',
      phone: '0901111001',
      email: 'mai.nguyen@kdyogurt.vn',
      passwordHash: PASSWORD_HASH,
      roleId: SEED_ROLE_IDS.STAFF,
      loyaltyPoints: 0,
      isActive: true,
    },
    {
      id: SEED_USER_IDS.STAFF_2,
      fullName: 'Trần Văn Hùng',
      phone: '0901111002',
      email: 'hung.tran@kdyogurt.vn',
      passwordHash: PASSWORD_HASH,
      roleId: SEED_ROLE_IDS.STAFF,
      loyaltyPoints: 0,
      isActive: true,
    },
    // ── Customers ────────────────────────────────────────────
    {
      id: SEED_USER_IDS.CUST_01,
      fullName: 'Lê Thị Hoa',
      phone: '0912000001',
      email: 'hoa.le@gmail.com',
      passwordHash: PASSWORD_HASH,
      roleId: SEED_ROLE_IDS.CUSTOMER,
      loyaltyPoints: 320,
      isActive: true,
    },
    {
      id: SEED_USER_IDS.CUST_02,
      fullName: 'Phạm Minh Tuấn',
      phone: '0912000002',
      email: 'tuan.pham@gmail.com',
      passwordHash: PASSWORD_HASH,
      roleId: SEED_ROLE_IDS.CUSTOMER,
      loyaltyPoints: 150,
      isActive: true,
    },
    {
      id: SEED_USER_IDS.CUST_03,
      fullName: 'Nguyễn Thị Lan',
      phone: '0912000003',
      email: 'lan.nguyen@yahoo.com',
      passwordHash: PASSWORD_HASH,
      roleId: SEED_ROLE_IDS.CUSTOMER,
      loyaltyPoints: 480,
      isActive: true,
    },
    {
      id: SEED_USER_IDS.CUST_04,
      fullName: 'Hoàng Văn Đức',
      phone: '0912000004',
      email: null,
      passwordHash: PASSWORD_HASH,
      roleId: SEED_ROLE_IDS.CUSTOMER,
      loyaltyPoints: 90,
      isActive: true,
    },
    {
      id: SEED_USER_IDS.CUST_05,
      fullName: 'Trịnh Thị Thu',
      phone: '0912000005',
      email: 'thu.trinh@gmail.com',
      passwordHash: PASSWORD_HASH,
      roleId: SEED_ROLE_IDS.CUSTOMER,
      loyaltyPoints: 210,
      isActive: true,
    },
    {
      id: SEED_USER_IDS.CUST_06,
      fullName: 'Võ Quốc Bảo',
      phone: '0912000006',
      email: 'bao.vo@outlook.com',
      passwordHash: PASSWORD_HASH,
      roleId: SEED_ROLE_IDS.CUSTOMER,
      loyaltyPoints: 670,
      isActive: true,
    },
    {
      id: SEED_USER_IDS.CUST_07,
      fullName: 'Đặng Thị Kim Anh',
      phone: '0912000007',
      email: 'kimanh.dang@gmail.com',
      passwordHash: PASSWORD_HASH,
      roleId: SEED_ROLE_IDS.CUSTOMER,
      loyaltyPoints: 130,
      isActive: true,
    },
    {
      id: SEED_USER_IDS.CUST_08,
      fullName: 'Bùi Thanh Tùng',
      phone: '0912000008',
      email: null,
      passwordHash: PASSWORD_HASH,
      roleId: SEED_ROLE_IDS.CUSTOMER,
      loyaltyPoints: 55,
      isActive: true,
    },
    {
      id: SEED_USER_IDS.CUST_09,
      fullName: 'Lý Ngọc Diễm',
      phone: '0912000009',
      email: 'diem.ly@gmail.com',
      passwordHash: PASSWORD_HASH,
      roleId: SEED_ROLE_IDS.CUSTOMER,
      loyaltyPoints: 390,
      isActive: true,
    },
    {
      id: SEED_USER_IDS.CUST_10,
      fullName: 'Phan Thế Vinh',
      phone: '0912000010',
      email: 'vinh.phan@gmail.com',
      passwordHash: PASSWORD_HASH,
      roleId: SEED_ROLE_IDS.CUSTOMER,
      loyaltyPoints: 0,
      isActive: false,
    },
  ];

  for (const user of users) {
    // Remove any stale row that shares the same phone/email but has a different id
    // (happens when constants.ts is regenerated with new deterministic UUIDs)
    await dataSource.query(
      `DELETE FROM users WHERE id != $1 AND (phone = $2 OR (email IS NOT NULL AND email = $3))`,
      [user.id, user.phone, user.email],
    );
    await repo.upsert(user, ['id']);
  }

  console.log(`[seed] users — ${users.length} rows`);
}
