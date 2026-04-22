import { BaseEntity } from './base.entity';
import { UserEntity } from './user.entity';
export declare class NotificationEntity extends BaseEntity {
    customerId: string;
    type: string;
    title: string;
    body: string | null;
    isRead: boolean;
    readAt: Date | null;
    customer: UserEntity;
}
//# sourceMappingURL=notification.entity.d.ts.map