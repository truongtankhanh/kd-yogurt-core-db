import { BaseEntity } from './base.entity';
import { RoleName } from '../enums/role.enums';
import type { UserEntity } from './user.entity';
export declare class RoleEntity extends BaseEntity {
    name: RoleName;
    meaning: string;
    users: UserEntity[];
}
//# sourceMappingURL=role.entity.d.ts.map