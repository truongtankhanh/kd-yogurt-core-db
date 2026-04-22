import { DataSource } from 'typeorm';
import { CategoryEntity } from '../entities/category.entity';
import { SEED_CATEGORY_IDS } from './constants';

export async function seedCategories(dataSource: DataSource): Promise<void> {
  const repo = dataSource.getRepository(CategoryEntity);

  type Row = Pick<
    CategoryEntity,
    'id' | 'parentId' | 'name' | 'description' | 'sortOrder' | 'isVisible'
  >;

  // Insert parent categories first (no parentId)
  const parents: Row[] = [
    {
      id: SEED_CATEGORY_IDS.YOGURT,
      parentId: null,
      name: 'Sữa Chua',
      description: 'Các loại sữa chua tươi handmade từ sữa nguyên chất',
      sortOrder: 1,
      isVisible: true,
    },
    {
      id: SEED_CATEGORY_IDS.TOPPING,
      parentId: null,
      name: 'Topping',
      description: 'Topping đa dạng để thêm vào sữa chua theo sở thích',
      sortOrder: 2,
      isVisible: true,
    },
    {
      id: SEED_CATEGORY_IDS.DRINK,
      parentId: null,
      name: 'Đồ Uống',
      description: 'Nước ép và sinh tố tươi ngon kết hợp cùng sữa chua',
      sortOrder: 3,
      isVisible: true,
    },
    {
      id: SEED_CATEGORY_IDS.COMBO,
      parentId: null,
      name: 'Combo',
      description: 'Các combo tiết kiệm gồm sữa chua và đồ uống',
      sortOrder: 4,
      isVisible: true,
    },
  ];

  for (const row of parents) {
    await repo.upsert(row, ['id']);
  }

  // Insert child categories
  const children: Row[] = [
    // Children of YOGURT
    {
      id: SEED_CATEGORY_IDS.YG_ORIGINAL,
      parentId: SEED_CATEGORY_IDS.YOGURT,
      name: 'Sữa Chua Truyền Thống',
      description: 'Sữa chua truyền thống làm từ sữa tươi nguyên chất, chua ngọt tự nhiên',
      sortOrder: 1,
      isVisible: true,
    },
    {
      id: SEED_CATEGORY_IDS.YG_CREAM,
      parentId: SEED_CATEGORY_IDS.YOGURT,
      name: 'Sữa Chua Kem',
      description: 'Sữa chua kem béo ngậy, mịn màng với nhiều hương vị hấp dẫn',
      sortOrder: 2,
      isVisible: true,
    },
    {
      id: SEED_CATEGORY_IDS.YG_FRUIT,
      parentId: SEED_CATEGORY_IDS.YOGURT,
      name: 'Sữa Chua Trái Cây',
      description: 'Sữa chua kết hợp cùng các loại trái cây tươi ngon theo mùa',
      sortOrder: 3,
      isVisible: true,
    },
    {
      id: SEED_CATEGORY_IDS.YG_GRANOLA,
      parentId: SEED_CATEGORY_IDS.YOGURT,
      name: 'Sữa Chua Granola',
      description: 'Sữa chua kết hợp granola giòn và các loại hạt dinh dưỡng',
      sortOrder: 4,
      isVisible: true,
    },
    // Children of TOPPING
    {
      id: SEED_CATEGORY_IDS.TOP_FRUIT,
      parentId: SEED_CATEGORY_IDS.TOPPING,
      name: 'Trái Cây Tươi',
      description: 'Topping trái cây tươi theo mùa: dâu, xoài, việt quất, đào...',
      sortOrder: 1,
      isVisible: true,
    },
    {
      id: SEED_CATEGORY_IDS.TOP_NUT,
      parentId: SEED_CATEGORY_IDS.TOPPING,
      name: 'Hạt & Ngũ Cốc',
      description: 'Các loại hạt dinh dưỡng và ngũ cốc giòn tan',
      sortOrder: 2,
      isVisible: true,
    },
    {
      id: SEED_CATEGORY_IDS.TOP_JELLY,
      parentId: SEED_CATEGORY_IDS.TOPPING,
      name: 'Thạch & Trân Châu',
      description: 'Thạch rau câu và trân châu nhiều màu sắc thêm phần thú vị',
      sortOrder: 3,
      isVisible: true,
    },
    // Children of DRINK
    {
      id: SEED_CATEGORY_IDS.DRK_JUICE,
      parentId: SEED_CATEGORY_IDS.DRINK,
      name: 'Nước Ép',
      description: 'Nước ép trái cây tươi nguyên chất không đường',
      sortOrder: 1,
      isVisible: true,
    },
    {
      id: SEED_CATEGORY_IDS.DRK_SMOOTHIE,
      parentId: SEED_CATEGORY_IDS.DRINK,
      name: 'Sinh Tố',
      description: 'Sinh tố trái cây xay đặc sánh bổ dưỡng',
      sortOrder: 2,
      isVisible: true,
    },
  ];

  for (const row of children) {
    await repo.upsert(row, ['id']);
  }

  console.log(`[seed] categories — ${parents.length + children.length} rows`);
}
