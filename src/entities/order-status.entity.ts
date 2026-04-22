import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { OrderStatusName } from '../enums/order-status.enums';
import type { OrderEntity } from './order.entity';

@Entity('order_statuses')
export class OrderStatusEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  name: OrderStatusName;

  @Column({ type: 'varchar', length: 100 })
  meaning: string;

  @OneToMany('OrderEntity', (order: OrderEntity) => order.status)
  orders: OrderEntity[];
}
