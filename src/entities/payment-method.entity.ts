import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { PaymentMethodName } from '../enums/payment-method.enums';
import type { OrderEntity } from './order.entity';

@Entity('payment_methods')
export class PaymentMethodEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  name: PaymentMethodName;

  @Column({ type: 'varchar', length: 100 })
  meaning: string;

  @OneToMany('OrderEntity', (order: OrderEntity) => order.paymentMethod)
  orders: OrderEntity[];
}
