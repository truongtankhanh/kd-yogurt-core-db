import { BaseEntity } from './base.entity';
import { RoleEntity } from './role.entity';
import type { UserAddressEntity } from './user-address.entity';
import type { CartEntity } from './cart.entity';
import type { OrderEntity } from './order.entity';
import type { ReviewEntity } from './review.entity';
import type { NotificationEntity } from './notification.entity';
import type { RefreshTokenEntity } from './refresh-token.entity';
export declare class UserEntity extends BaseEntity {
    fullName: string;
    phone: string;
    email: string | null;
    passwordHash: string;
    roleId: string;
    loyaltyPoints: number;
    isActive: boolean;
    lastLoginAt: Date | null;
    role: RoleEntity;
    addresses: UserAddressEntity[];
    carts: CartEntity[];
    orders: OrderEntity[];
    reviews: ReviewEntity[];
    notifications: NotificationEntity[];
    refreshTokens: RefreshTokenEntity[];
}
//# sourceMappingURL=user.entity.d.ts.map