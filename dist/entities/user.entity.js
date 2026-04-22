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
exports.UserEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const role_entity_1 = require("./role.entity");
let UserEntity = class UserEntity extends base_entity_1.BaseEntity {
    fullName;
    phone;
    email;
    passwordHash;
    roleId;
    loyaltyPoints;
    isActive;
    lastLoginAt;
    role;
    addresses;
    carts;
    orders;
    reviews;
    notifications;
    refreshTokens;
};
exports.UserEntity = UserEntity;
__decorate([
    (0, typeorm_1.Column)({ name: 'full_name', type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], UserEntity.prototype, "fullName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20 }),
    __metadata("design:type", String)
], UserEntity.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", Object)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'password_hash', type: 'varchar', length: 255, select: false }),
    __metadata("design:type", String)
], UserEntity.prototype, "passwordHash", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'role_id', type: 'uuid' }),
    __metadata("design:type", String)
], UserEntity.prototype, "roleId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'loyalty_points', type: 'integer', default: 0 }),
    __metadata("design:type", Number)
], UserEntity.prototype, "loyaltyPoints", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_active', type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], UserEntity.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'last_login_at', type: 'timestamptz', nullable: true }),
    __metadata("design:type", Object)
], UserEntity.prototype, "lastLoginAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => role_entity_1.RoleEntity, (role) => role.users, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'role_id' }),
    __metadata("design:type", role_entity_1.RoleEntity)
], UserEntity.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.OneToMany)('UserAddressEntity', (addr) => addr.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "addresses", void 0);
__decorate([
    (0, typeorm_1.OneToMany)('CartEntity', (cart) => cart.customer),
    __metadata("design:type", Array)
], UserEntity.prototype, "carts", void 0);
__decorate([
    (0, typeorm_1.OneToMany)('OrderEntity', (order) => order.customer),
    __metadata("design:type", Array)
], UserEntity.prototype, "orders", void 0);
__decorate([
    (0, typeorm_1.OneToMany)('ReviewEntity', (review) => review.customer),
    __metadata("design:type", Array)
], UserEntity.prototype, "reviews", void 0);
__decorate([
    (0, typeorm_1.OneToMany)('NotificationEntity', (notif) => notif.customer),
    __metadata("design:type", Array)
], UserEntity.prototype, "notifications", void 0);
__decorate([
    (0, typeorm_1.OneToMany)('RefreshTokenEntity', (token) => token.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "refreshTokens", void 0);
exports.UserEntity = UserEntity = __decorate([
    (0, typeorm_1.Entity)('users')
], UserEntity);
