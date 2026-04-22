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
exports.CartItemEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const cart_entity_1 = require("./cart.entity");
const product_variant_entity_1 = require("./product-variant.entity");
let CartItemEntity = class CartItemEntity extends base_entity_1.BaseEntity {
    cartId;
    variantId;
    quantity;
    unitPrice;
    cart;
    variant;
};
exports.CartItemEntity = CartItemEntity;
__decorate([
    (0, typeorm_1.Column)({ name: 'cart_id', type: 'uuid' }),
    __metadata("design:type", String)
], CartItemEntity.prototype, "cartId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'variant_id', type: 'uuid' }),
    __metadata("design:type", String)
], CartItemEntity.prototype, "variantId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer', default: 1 }),
    __metadata("design:type", Number)
], CartItemEntity.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'unit_price', type: 'decimal', precision: 12, scale: 2 }),
    __metadata("design:type", Number)
], CartItemEntity.prototype, "unitPrice", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cart_entity_1.CartEntity, (cart) => cart.items, {
        nullable: false,
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'cart_id' }),
    __metadata("design:type", cart_entity_1.CartEntity)
], CartItemEntity.prototype, "cart", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_variant_entity_1.ProductVariantEntity, (variant) => variant.cartItems, {
        nullable: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'variant_id' }),
    __metadata("design:type", product_variant_entity_1.ProductVariantEntity)
], CartItemEntity.prototype, "variant", void 0);
exports.CartItemEntity = CartItemEntity = __decorate([
    (0, typeorm_1.Entity)('cart_items')
], CartItemEntity);
