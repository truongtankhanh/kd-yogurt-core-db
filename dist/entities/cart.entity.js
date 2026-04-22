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
exports.CartEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
let CartEntity = class CartEntity extends base_entity_1.BaseEntity {
    customerId;
    sessionKey;
    expiresAt;
    customer;
    items;
};
exports.CartEntity = CartEntity;
__decorate([
    (0, typeorm_1.Column)({ name: 'customer_id', type: 'uuid', nullable: true }),
    __metadata("design:type", Object)
], CartEntity.prototype, "customerId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'session_key', type: 'varchar', length: 128, nullable: true }),
    __metadata("design:type", Object)
], CartEntity.prototype, "sessionKey", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'expires_at', type: 'timestamptz', nullable: true }),
    __metadata("design:type", Object)
], CartEntity.prototype, "expiresAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)('UserEntity', (user) => user.carts, {
        nullable: true,
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'customer_id' }),
    __metadata("design:type", Object)
], CartEntity.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.OneToMany)('CartItemEntity', (item) => item.cart),
    __metadata("design:type", Array)
], CartEntity.prototype, "items", void 0);
exports.CartEntity = CartEntity = __decorate([
    (0, typeorm_1.Entity)('carts')
], CartEntity);
