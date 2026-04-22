import { BaseEntity } from './base.entity';
import type { ProductEntity } from './product.entity';
export declare class CategoryEntity extends BaseEntity {
    parentId: string | null;
    name: string;
    description: string | null;
    sortOrder: number;
    isVisible: boolean;
    parent: CategoryEntity | null;
    children: CategoryEntity[];
    products: ProductEntity[];
}
//# sourceMappingURL=category.entity.d.ts.map