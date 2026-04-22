import { DataSource } from 'typeorm';
import { ProductImageEntity } from '../entities/product-image.entity';
import { SEED_PRODUCT_IDS, SEED_PRODUCT_IMAGE_IDS } from './constants';

const BASE = 'https://cdn.kdyogurt.vn/san-pham';

export async function seedProductImages(dataSource: DataSource): Promise<void> {
  const repo = dataSource.getRepository(ProductImageEntity);

  type Row = Pick<ProductImageEntity, 'id' | 'productId' | 'imageUrl' | 'isPrimary' | 'sortOrder'>;

  const images: Row[] = [
    // Sữa Chua Truyền Thống
    {
      id: SEED_PRODUCT_IMAGE_IDS.YG_ORIGINAL_1,
      productId: SEED_PRODUCT_IDS.YG_ORIGINAL,
      imageUrl: `${BASE}/yg-original-01.jpg`,
      isPrimary: true,
      sortOrder: 1,
    },
    {
      id: SEED_PRODUCT_IMAGE_IDS.YG_ORIGINAL_2,
      productId: SEED_PRODUCT_IDS.YG_ORIGINAL,
      imageUrl: `${BASE}/yg-original-02.jpg`,
      isPrimary: false,
      sortOrder: 2,
    },

    // Sữa Chua Không Đường
    {
      id: SEED_PRODUCT_IMAGE_IDS.YG_NO_SUGAR_1,
      productId: SEED_PRODUCT_IDS.YG_NO_SUGAR,
      imageUrl: `${BASE}/yg-no-sugar-01.jpg`,
      isPrimary: true,
      sortOrder: 1,
    },

    // Sữa Chua Kem Vanilla
    {
      id: SEED_PRODUCT_IMAGE_IDS.YG_CREAM_VANILLA_1,
      productId: SEED_PRODUCT_IDS.YG_CREAM_VANILLA,
      imageUrl: `${BASE}/yg-cream-vanilla-01.jpg`,
      isPrimary: true,
      sortOrder: 1,
    },
    {
      id: SEED_PRODUCT_IMAGE_IDS.YG_CREAM_VANILLA_2,
      productId: SEED_PRODUCT_IDS.YG_CREAM_VANILLA,
      imageUrl: `${BASE}/yg-cream-vanilla-02.jpg`,
      isPrimary: false,
      sortOrder: 2,
    },

    // Sữa Chua Kem Dâu Tây
    {
      id: SEED_PRODUCT_IMAGE_IDS.YG_CREAM_STRAWBERRY_1,
      productId: SEED_PRODUCT_IDS.YG_CREAM_STRAWBERRY,
      imageUrl: `${BASE}/yg-cream-strawberry-01.jpg`,
      isPrimary: true,
      sortOrder: 1,
    },
    {
      id: SEED_PRODUCT_IMAGE_IDS.YG_CREAM_STRAWBERRY_2,
      productId: SEED_PRODUCT_IDS.YG_CREAM_STRAWBERRY,
      imageUrl: `${BASE}/yg-cream-strawberry-02.jpg`,
      isPrimary: false,
      sortOrder: 2,
    },

    // Sữa Chua Kem Vị Mặn
    {
      id: SEED_PRODUCT_IMAGE_IDS.YG_CREAM_SALTED_1,
      productId: SEED_PRODUCT_IDS.YG_CREAM_SALTED,
      imageUrl: `${BASE}/yg-cream-salted-01.jpg`,
      isPrimary: true,
      sortOrder: 1,
    },

    // Sữa Chua Dâu Tây
    {
      id: SEED_PRODUCT_IMAGE_IDS.YG_FRUIT_STRAWBERRY_1,
      productId: SEED_PRODUCT_IDS.YG_FRUIT_STRAWBERRY,
      imageUrl: `${BASE}/yg-fruit-strawberry-01.jpg`,
      isPrimary: true,
      sortOrder: 1,
    },
    {
      id: SEED_PRODUCT_IMAGE_IDS.YG_FRUIT_STRAWBERRY_2,
      productId: SEED_PRODUCT_IDS.YG_FRUIT_STRAWBERRY,
      imageUrl: `${BASE}/yg-fruit-strawberry-02.jpg`,
      isPrimary: false,
      sortOrder: 2,
    },

    // Sữa Chua Xoài
    {
      id: SEED_PRODUCT_IMAGE_IDS.YG_FRUIT_MANGO_1,
      productId: SEED_PRODUCT_IDS.YG_FRUIT_MANGO,
      imageUrl: `${BASE}/yg-fruit-mango-01.jpg`,
      isPrimary: true,
      sortOrder: 1,
    },
    {
      id: SEED_PRODUCT_IMAGE_IDS.YG_FRUIT_MANGO_2,
      productId: SEED_PRODUCT_IDS.YG_FRUIT_MANGO,
      imageUrl: `${BASE}/yg-fruit-mango-02.jpg`,
      isPrimary: false,
      sortOrder: 2,
    },

    // Sữa Chua Việt Quất
    {
      id: SEED_PRODUCT_IMAGE_IDS.YG_FRUIT_BLUEBERRY_1,
      productId: SEED_PRODUCT_IDS.YG_FRUIT_BLUEBERRY,
      imageUrl: `${BASE}/yg-fruit-blueberry-01.jpg`,
      isPrimary: true,
      sortOrder: 1,
    },
    {
      id: SEED_PRODUCT_IMAGE_IDS.YG_FRUIT_BLUEBERRY_2,
      productId: SEED_PRODUCT_IDS.YG_FRUIT_BLUEBERRY,
      imageUrl: `${BASE}/yg-fruit-blueberry-02.jpg`,
      isPrimary: false,
      sortOrder: 2,
    },

    // Sữa Chua Đào
    {
      id: SEED_PRODUCT_IMAGE_IDS.YG_FRUIT_PEACH_1,
      productId: SEED_PRODUCT_IDS.YG_FRUIT_PEACH,
      imageUrl: `${BASE}/yg-fruit-peach-01.jpg`,
      isPrimary: true,
      sortOrder: 1,
    },

    // Sữa Chua Granola Hoa Quả
    {
      id: SEED_PRODUCT_IMAGE_IDS.YG_GRANOLA_FRUIT_1,
      productId: SEED_PRODUCT_IDS.YG_GRANOLA_FRUIT,
      imageUrl: `${BASE}/yg-granola-fruit-01.jpg`,
      isPrimary: true,
      sortOrder: 1,
    },
    {
      id: SEED_PRODUCT_IMAGE_IDS.YG_GRANOLA_FRUIT_2,
      productId: SEED_PRODUCT_IDS.YG_GRANOLA_FRUIT,
      imageUrl: `${BASE}/yg-granola-fruit-02.jpg`,
      isPrimary: false,
      sortOrder: 2,
    },

    // Sữa Chua Granola Hạt
    {
      id: SEED_PRODUCT_IMAGE_IDS.YG_GRANOLA_NUT_1,
      productId: SEED_PRODUCT_IDS.YG_GRANOLA_NUT,
      imageUrl: `${BASE}/yg-granola-nut-01.jpg`,
      isPrimary: true,
      sortOrder: 1,
    },
    {
      id: SEED_PRODUCT_IMAGE_IDS.YG_GRANOLA_NUT_2,
      productId: SEED_PRODUCT_IDS.YG_GRANOLA_NUT,
      imageUrl: `${BASE}/yg-granola-nut-02.jpg`,
      isPrimary: false,
      sortOrder: 2,
    },

    // Combo Sữa Chua Kem + Trái Cây
    {
      id: SEED_PRODUCT_IMAGE_IDS.COMBO_CREAM_FRUIT_1,
      productId: SEED_PRODUCT_IDS.COMBO_CREAM_FRUIT,
      imageUrl: `${BASE}/combo-cream-fruit-01.jpg`,
      isPrimary: true,
      sortOrder: 1,
    },

    // Combo Sữa Chua Granola + Sinh Tố
    {
      id: SEED_PRODUCT_IMAGE_IDS.COMBO_GRANOLA_SMOOTHIE_1,
      productId: SEED_PRODUCT_IDS.COMBO_GRANOLA_SMOOTHIE,
      imageUrl: `${BASE}/combo-granola-smoothie-01.jpg`,
      isPrimary: true,
      sortOrder: 1,
    },

    // Nước Ép Cam Tươi
    {
      id: SEED_PRODUCT_IMAGE_IDS.DRK_ORANGE_JUICE_1,
      productId: SEED_PRODUCT_IDS.DRK_ORANGE_JUICE,
      imageUrl: `${BASE}/drk-orange-juice-01.jpg`,
      isPrimary: true,
      sortOrder: 1,
    },

    // Sinh Tố Xoài
    {
      id: SEED_PRODUCT_IMAGE_IDS.DRK_MANGO_SMOOTHIE_1,
      productId: SEED_PRODUCT_IDS.DRK_MANGO_SMOOTHIE,
      imageUrl: `${BASE}/drk-mango-smoothie-01.jpg`,
      isPrimary: true,
      sortOrder: 1,
    },
    {
      id: SEED_PRODUCT_IMAGE_IDS.DRK_MANGO_SMOOTHIE_2,
      productId: SEED_PRODUCT_IDS.DRK_MANGO_SMOOTHIE,
      imageUrl: `${BASE}/drk-mango-smoothie-02.jpg`,
      isPrimary: false,
      sortOrder: 2,
    },
  ];

  for (const image of images) {
    await repo.upsert(image, ['id']);
  }

  console.log(`[seed] product_images — ${images.length} rows`);
}
