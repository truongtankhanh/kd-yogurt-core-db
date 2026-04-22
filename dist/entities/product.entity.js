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
exports.ProductEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const category_entity_1 = require("./category.entity");
let ProductEntity = class ProductEntity extends base_entity_1.BaseEntity {
    categoryId;
    name;
    description;
    isAvailable;
    isFeatured;
    sortOrder;
    category;
    variants;
    images;
    reviews;
};
exports.ProductEntity = ProductEntity;
__decorate([
    (0, typeorm_1.Column)({ name: 'category_id', type: 'uuid' }),
    __metadata("design:type", String)
], ProductEntity.prototype, "categoryId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 200 }),
    __metadata("design:type", String)
], ProductEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", Object)
], ProductEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_available', type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], ProductEntity.prototype, "isAvailable", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_featured', type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], ProductEntity.prototype, "isFeatured", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'sort_order', type: 'smallint', default: 0 }),
    __metadata("design:type", Number)
], ProductEntity.prototype, "sortOrder", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category_entity_1.CategoryEntity, (category) => category.products, {
        nullable: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'category_id' }),
    __metadata("design:type", category_entity_1.CategoryEntity)
], ProductEntity.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.OneToMany)('ProductVariantEntity', (variant) => variant.product),
    __metadata("design:type", Array)
], ProductEntity.prototype, "variants", void 0);
__decorate([
    (0, typeorm_1.OneToMany)('ProductImageEntity', (image) => image.product),
    __metadata("design:type", Array)
], ProductEntity.prototype, "images", void 0);
__decorate([
    (0, typeorm_1.OneToMany)('ReviewEntity', (review) => review.product),
    __metadata("design:type", Array)
], ProductEntity.prototype, "reviews", void 0);
exports.ProductEntity = ProductEntity = __decorate([
    (0, typeorm_1.Entity)('products')
], ProductEntity);
