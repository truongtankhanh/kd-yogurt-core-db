import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { PaymentStatusName } from '../enums/payment-status.enums';
import type { OrderEntity } from './order.entity';

@Entity('payment_statuses')
export class PaymentStatusEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  name: PaymentStatusName;

  @Column({ type: 'varchar', length: 100 })
  meaning: string;

  @OneToMany('OrderEntity', (order: OrderEntity) => order.paymentStatus)
  orders: OrderEntity[];
}
