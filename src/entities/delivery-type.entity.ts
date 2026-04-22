import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { DeliveryTypeName } from '../enums/delivery-type.enums';
import type { OrderEntity } from './order.entity';

@Entity('delivery_types')
export class DeliveryTypeEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  name: DeliveryTypeName;

  @Column({ type: 'varchar', length: 100 })
  meaning: string;

  @OneToMany('OrderEntity', (order: OrderEntity) => order.deliveryType)
  orders: OrderEntity[];
}
