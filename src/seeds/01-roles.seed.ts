import { DataSource } from 'typeorm';
import { RoleEntity } from '../entities/role.entity';
import { RoleName } from '../enums/role.enums';
import { SEED_ROLE_IDS } from './constants';

export async function seedRoles(dataSource: DataSource): Promise<void> {
  const repo = dataSource.getRepository(RoleEntity);

  const roles: Pick<RoleEntity, 'id' | 'name' | 'meaning'>[] = [
    {
      id: SEED_ROLE_IDS.OWNER,
      name: RoleName.OWNER,
      meaning: 'Chủ cửa hàng — toàn quyền truy cập',
    },
    {
      id: SEED_ROLE_IDS.STAFF,
      name: RoleName.STAFF,
      meaning: 'Nhân viên — quyền truy cập quản trị giới hạn',
    },
    {
      id: SEED_ROLE_IDS.CUSTOMER,
      name: RoleName.CUSTOMER,
      meaning: 'Khách hàng — chỉ truy cập cửa hàng',
    },
  ];

  for (const role of roles) {
    await repo.upsert(role, ['id']);
  }

  console.log(`[seed] roles — ${roles.length} rows`);
}
