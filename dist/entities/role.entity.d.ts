import { BaseEntity } from './base.entity';
import { RoleCode } from '../enums/role.enums';
import type { UserEntity } from './user.entity';
export declare class RoleEntity extends BaseEntity {
    code: RoleCode;
    name: string;
    meaning: string;
    users: UserEntity[];
}
//# sourceMappingURL=role.entity.d.ts.map