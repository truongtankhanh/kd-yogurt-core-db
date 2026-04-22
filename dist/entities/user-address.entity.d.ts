import { BaseEntity } from './base.entity';
import { UserEntity } from './user.entity';
export declare class UserAddressEntity extends BaseEntity {
    userId: string;
    label: string | null;
    recipientName: string;
    phone: string;
    address: string;
    isDefault: boolean;
    user: UserEntity;
}
//# sourceMappingURL=user-address.entity.d.ts.map