import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { OrderStatusCode } from '../enums/order-status.enums';
import type { OrderEntity } from './order.entity';

@Entity('order_statuses')
export class OrderStatusEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  code: OrderStatusCode;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'text' })
  meaning: string;

  @OneToMany('OrderEntity', (order: OrderEntity) => order.status)
  orders: OrderEntity[];
}
