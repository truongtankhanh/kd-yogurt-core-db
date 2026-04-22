import { BaseEntity } from './base.entity';
import { UserEntity } from './user.entity';
export declare class RefreshTokenEntity extends BaseEntity {
    tokenHash: string;
    userId: string;
    expiresAt: Date;
    revoked: boolean;
    userAgent: string | null;
    ipAddress: string | null;
    user: UserEntity;
}
//# sourceMappingURL=refresh-token.entity.d.ts.map