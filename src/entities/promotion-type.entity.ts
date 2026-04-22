import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { PromotionTypeName } from '../enums/promotion-type.enums';
import type { PromotionEntity } from './promotion.entity';

@Entity('promotion_types')
export class PromotionTypeEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  name: PromotionTypeName;

  @Column({ type: 'varchar', length: 100 })
  meaning: string;

  @OneToMany('PromotionEntity', (promo: PromotionEntity) => promo.type)
  promotions: PromotionEntity[];
}
