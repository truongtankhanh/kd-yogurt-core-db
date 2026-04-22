import { BaseEntity } from './base.entity';
import type { UserEntity } from './user.entity';
import type { CartItemEntity } from './cart-item.entity';
export declare class CartEntity extends BaseEntity {
    customerId: string | null;
    sessionKey: string | null;
    expiresAt: Date | null;
    customer: UserEntity | null;
    items: CartItemEntity[];
}
//# sourceMappingURL=cart.entity.d.ts.map