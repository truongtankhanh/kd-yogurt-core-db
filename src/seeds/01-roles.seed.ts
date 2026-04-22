import { DataSource } from 'typeorm';
import { RoleEntity } from '../entities/role.entity';
import { RoleCode } from '../enums/role.enums';
import { SEED_ROLE_IDS } from './constants';

export async function seedRoles(dataSource: DataSource): Promise<void> {
  const repo = dataSource.getRepository(RoleEntity);

  const roles: Pick<RoleEntity, 'id' | 'code' | 'name' | 'meaning'>[] = [
    {
      id: SEED_ROLE_IDS.OWNER,
      code: RoleCode.CHU_CUA_HANG,
      name: 'Chủ cửa hàng',
      meaning: 'Chủ cửa hàng — toàn quyền truy cập',
    },
    {
      id: SEED_ROLE_IDS.STAFF,
      code: RoleCode.NHAN_VIEN,
      name: 'Nhân viên',
      meaning: 'Nhân viên — quyền truy cập quản trị giới hạn',
    },
    {
      id: SEED_ROLE_IDS.CUSTOMER,
      code: RoleCode.KHACH_HANG,
      name: 'Khách hàng',
      meaning: 'Khách hàng — chỉ truy cập cửa hàng',
    },
  ];

  for (const role of roles) {
    await repo.upsert(role, ['id']);
  }

  console.log(`[seed] roles — ${roles.length} rows`);
}
