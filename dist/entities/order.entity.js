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
exports.OrderEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const order_status_entity_1 = require("./order-status.entity");
const delivery_type_entity_1 = require("./delivery-type.entity");
const payment_method_entity_1 = require("./payment-method.entity");
const payment_status_entity_1 = require("./payment-status.entity");
let OrderEntity = class OrderEntity extends base_entity_1.BaseEntity {
    orderNumber;
    customerId;
    customerName;
    customerPhone;
    deliveryAddress;
    deliveryTypeId;
    statusId;
    paymentMethodId;
    paymentStatusId;
    subtotal;
    discountAmount;
    shippingFee;
    totalAmount;
    promotionId;
    note;
    customer;
    status;
    deliveryType;
    paymentMethod;
    paymentStatus;
    promotion;
    items;
};
exports.OrderEntity = OrderEntity;
__decorate([
    (0, typeorm_1.Column)({ name: 'order_number', type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], OrderEntity.prototype, "orderNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'customer_id', type: 'uuid', nullable: true }),
    __metadata("design:type", Object)
], OrderEntity.prototype, "customerId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'customer_name', type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], OrderEntity.prototype, "customerName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'customer_phone', type: 'varchar', length: 20 }),
    __metadata("design:type", String)
], OrderEntity.prototype, "customerPhone", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'delivery_address', type: 'text', nullable: true }),
    __metadata("design:type", Object)
], OrderEntity.prototype, "deliveryAddress", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'delivery_type_id', type: 'uuid' }),
    __metadata("design:type", String)
], OrderEntity.prototype, "deliveryTypeId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'status_id', type: 'uuid' }),
    __metadata("design:type", String)
], OrderEntity.prototype, "statusId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'payment_method_id', type: 'uuid' }),
    __metadata("design:type", String)
], OrderEntity.prototype, "paymentMethodId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'payment_status_id', type: 'uuid' }),
    __metadata("design:type", String)
], OrderEntity.prototype, "paymentStatusId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 14, scale: 2 }),
    __metadata("design:type", Number)
], OrderEntity.prototype, "subtotal", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'discount_amount', type: 'decimal', precision: 14, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], OrderEntity.prototype, "discountAmount", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'shipping_fee', type: 'decimal', precision: 12, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], OrderEntity.prototype, "shippingFee", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'total_amount', type: 'decimal', precision: 14, scale: 2 }),
    __metadata("design:type", Number)
], OrderEntity.prototype, "totalAmount", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'promotion_id', type: 'uuid', nullable: true }),
    __metadata("design:type", Object)
], OrderEntity.prototype, "promotionId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", Object)
], OrderEntity.prototype, "note", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)('UserEntity', (user) => user.orders, {
        nullable: true,
        onDelete: 'SET NULL',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'customer_id' }),
    __metadata("design:type", Object)
], OrderEntity.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => order_status_entity_1.OrderStatusEntity, (status) => status.orders, {
        nullable: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'status_id' }),
    __metadata("design:type", order_status_entity_1.OrderStatusEntity)
], OrderEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => delivery_type_entity_1.DeliveryTypeEntity, (type) => type.orders, {
        nullable: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'delivery_type_id' }),
    __metadata("design:type", delivery_type_entity_1.DeliveryTypeEntity)
], OrderEntity.prototype, "deliveryType", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => payment_method_entity_1.PaymentMethodEntity, (method) => method.orders, {
        nullable: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'payment_method_id' }),
    __metadata("design:type", payment_method_entity_1.PaymentMethodEntity)
], OrderEntity.prototype, "paymentMethod", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => payment_status_entity_1.PaymentStatusEntity, (status) => status.orders, {
        nullable: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'payment_status_id' }),
    __metadata("design:type", payment_status_entity_1.PaymentStatusEntity)
], OrderEntity.prototype, "paymentStatus", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)('PromotionEntity', (promo) => promo.orders, {
        nullable: true,
        onDelete: 'SET NULL',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'promotion_id' }),
    __metadata("design:type", Object)
], OrderEntity.prototype, "promotion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)('OrderItemEntity', (item) => item.order),
    __metadata("design:type", Array)
], OrderEntity.prototype, "items", void 0);
exports.OrderEntity = OrderEntity = __decorate([
    (0, typeorm_1.Entity)('orders')
], OrderEntity);
