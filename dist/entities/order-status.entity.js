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
exports.OrderStatusEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const order_status_enums_1 = require("../enums/order-status.enums");
let OrderStatusEntity = class OrderStatusEntity extends base_entity_1.BaseEntity {
    name;
    meaning;
    orders;
};
exports.OrderStatusEntity = OrderStatusEntity;
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], OrderStatusEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], OrderStatusEntity.prototype, "meaning", void 0);
__decorate([
    (0, typeorm_1.OneToMany)('OrderEntity', (order) => order.status),
    __metadata("design:type", Array)
], OrderStatusEntity.prototype, "orders", void 0);
exports.OrderStatusEntity = OrderStatusEntity = __decorate([
    (0, typeorm_1.Entity)('order_statuses')
], OrderStatusEntity);
