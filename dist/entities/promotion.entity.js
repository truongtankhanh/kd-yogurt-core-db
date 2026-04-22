"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const promotion_type_entity_1 = require("./promotion-type.entity");
let PromotionEntity = class PromotionEntity extends base_entity_1.BaseEntity {
    code;
    name;
    typeId;
    value;
    minOrderValue;
    maxDiscount;
    usageLimit;
    usageCount;
    isActive;
    startsAt;
    expiresAt;
    type;
    orders;
};
exports.PromotionEntity = PromotionEntity;
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", Object)
], PromotionEntity.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 200 }),
    __metadata("design:type", String)
], PromotionEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'type_id', type: 'uuid' }),
    __metadata("design:type", String)
], PromotionEntity.prototype, "typeId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 12, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], PromotionEntity.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'min_order_value', type: 'decimal', precision: 12, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], PromotionEntity.prototype, "minOrderValue", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'max_discount', type: 'decimal', precision: 12, scale: 2, nullable: true }),
    __metadata("design:type", Object)
], PromotionEntity.prototype, "maxDiscount", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'usage_limit', type: 'integer', nullable: true }),
    __metadata("design:type", Object)
], PromotionEntity.prototype, "usageLimit", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'usage_count', type: 'integer', default: 0 }),
    __metadata("design:type", Number)
], PromotionEntity.prototype, "usageCount", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_active', type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], PromotionEntity.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'starts_at', type: 'timestamptz', nullable: true }),
    __metadata("design:type", Object)
], PromotionEntity.prototype, "startsAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'expires_at', type: 'timestamptz', nullable: true }),
    __metadata("design:type", Object)
], PromotionEntity.prototype, "expiresAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => promotion_type_entity_1.PromotionTypeEntity, (type) => type.promotions, {
        nullable: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'type_id' }),
    __metadata("design:type", promotion_type_entity_1.PromotionTypeEntity)
], PromotionEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.OneToMany)('OrderEntity', (order) => order.promotion),
    __metadata("design:type", Array)
], PromotionEntity.prototype, "orders", void 0);
exports.PromotionEntity = PromotionEntity = __decorate([
    (0, typeorm_1.Entity)('promotions')
], PromotionEntity);
