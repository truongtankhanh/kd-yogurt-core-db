import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { PaymentMethodCode } from '../enums/payment-method.enums';
import type { OrderEntity } from './order.entity';

@Entity('payment_methods')
export class PaymentMethodEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  code: PaymentMethodCode;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'text' })
  meaning: string;

  @OneToMany('OrderEntity', (order: OrderEntity) => order.paymentMethod)
  orders: OrderEntity[];
}
