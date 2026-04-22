import { DataSource } from 'typeorm';
import { ProductVariantEntity } from '../entities/product-variant.entity';
import { SEED_PRODUCT_IDS, SEED_PRODUCT_VARIANT_IDS } from './constants';

export async function seedProductVariants(dataSource: DataSource): Promise<void> {
  const repo = dataSource.getRepository(ProductVariantEntity);

  type Row = Pick<
    ProductVariantEntity,
    'id' | 'productId' | 'name' | 'price' | 'stockQty' | 'isAvailable'
  >;

  const variants: Row[] = [
    // ── Sữa Chua Truyền Thống ────────────────────────────────
    {
      id: SEED_PRODUCT_VARIANT_IDS.YG_ORIGINAL_S,
      productId: SEED_PRODUCT_IDS.YG_ORIGINAL,
      name: 'Nhỏ (100g)',
      price: 15000,
      stockQty: 80,
      isAvailable: true,
    },
    {
      id: SEED_PRODUCT_VARIANT_IDS.YG_ORIGINAL_M,
      productId: SEED_PRODUCT_IDS.YG_ORIGINAL,
      name: 'Vừa (200g)',
      price: 25000,
      stockQty: 80,
      isAvailable: true,
    },
    {
      id: SEED_PRODUCT_VARIANT_IDS.YG_ORIGINAL_L,
      productId: SEED_PRODUCT_IDS.YG_ORIGINAL,
      name: 'Lớn (400g)',
      price: 45000,
      stockQty: 50,
      isAvailable: true,
    },

    // ── Sữa Chua Không Đường ──────────────────────────────────
    {
      id: SEED_PRODUCT_VARIANT_IDS.YG_NO_SUGAR_S,
      productId: SEED_PRODUCT_IDS.YG_NO_SUGAR,
      name: 'Nhỏ (100g)',
      price: 18000,
      stockQty: 60,
      isAvailable: true,
    },
    {
      id: SEED_PRODUCT_VARIANT_IDS.YG_NO_SUGAR_M,
      productId: SEED_PRODUCT_IDS.YG_NO_SUGAR,
      name: 'Vừa (200g)',
      price: 30000,
      stockQty: 60,
      isAvailable: true,
    },
    {
      id: SEED_PRODUCT_VARIANT_IDS.YG_NO_SUGAR_L,
      productId: SEED_PRODUCT_IDS.YG_NO_SUGAR,
      name: 'Lớn (400g)',
      price: 55000,
      stockQty: 40,
      isAvailable: true,
    },

    // ── Sữa Chua Kem Vanilla ──────────────────────────────────
    {
      id: SEED_PRODUCT_VARIANT_IDS.YG_CREAM_VANILLA_S,
      productId: SEED_PRODUCT_IDS.YG_CREAM_VANILLA,
      name: 'Ly Nhỏ (150ml)',
      price: 25000,
      stockQty: 70,
      isAvailable: true,
    },
    {
      id: SEED_PRODUCT_VARIANT_IDS.YG_CREAM_VANILLA_M,
      productId: SEED_PRODUCT_IDS.YG_CREAM_VANILLA,
      name: 'Ly Vừa (250ml)',
      price: 35000,
      stockQty: 70,
      isAvailable: true,
    },
    {
      id: SEED_PRODUCT_VARIANT_IDS.YG_CREAM_VANILLA_L,
      productId: SEED_PRODUCT_IDS.YG_CREAM_VANILLA,
      name: 'Ly Lớn (400ml)',
      price: 50000,
      stockQty: 40,
      isAvailable: true,
    },

    // ── Sữa Chua Kem Dâu Tây ─────────────────────────────────
    {
      id: SEED_PRODUCT_VARIANT_IDS.YG_CREAM_STRAWBERRY_S,
      productId: SEED_PRODUCT_IDS.YG_CREAM_STRAWBERRY,
      name: 'Ly Nhỏ (150ml)',
      price: 28000,
      stockQty: 60,
      isAvailable: true,
    },
    {
      id: SEED_PRODUCT_VARIANT_IDS.YG_CREAM_STRAWBERRY_M,
      productId: SEED_PRODUCT_IDS.YG_CREAM_STRAWBERRY,
      name: 'Ly Vừa (250ml)',
      price: 38000,
      stockQty: 60,
      isAvailable: true,
    },
    {
      id: SEED_PRODUCT_VARIANT_IDS.YG_CREAM_STRAWBERRY_L,
      productId: SEED_PRODUCT_IDS.YG_CREAM_STRAWBERRY,
      name: 'Ly Lớn (400ml)',
      price: 55000,
      stockQty: 35,
      isAvailable: true,
    },

    // ── Sữa Chua Kem Vị Mặn ──────────────────────────────────
    {
      id: SEED_PRODUCT_VARIANT_IDS.YG_CREAM_SALTED_S,
      productId: SEED_PRODUCT_IDS.YG_CREAM_SALTED,
      name: 'Ly Nhỏ (150ml)',
      price: 27000,
      stockQty: 50,
      isAvailable: true,
    },
    {
      id: SEED_PRODUCT_VARIANT_IDS.YG_CREAM_SALTED_M,
      productId: SEED_PRODUCT_IDS.YG_CREAM_SALTED,
      name: 'Ly Vừa (250ml)',
      price: 37000,
      stockQty: 50,
      isAvailable: true,
    },
    {
      id: SEED_PRODUCT_VARIANT_IDS.YG_CREAM_SALTED_L,
      productId: SEED_PRODUCT_IDS.YG_CREAM_SALTED,
      name: 'Ly Lớn (400ml)',
      price: 53000,
      stockQty: 30,
      isAvailable: true,
    },

    // ── Sữa Chua Dâu Tây ─────────────────────────────────────
    {
      id: SEED_PRODUCT_VARIANT_IDS.YG_FRUIT_STRAWBERRY_S,
      productId: SEED_PRODUCT_IDS.YG_FRUIT_STRAWBERRY,
      name: 'Nhỏ (150g)',
      price: 32000,
      stockQty: 60,
      isAvailable: true,
    },
    {
      id: SEED_PRODUCT_VARIANT_IDS.YG_FRUIT_STRAWBERRY_M,
      productId: SEED_PRODUCT_IDS.YG_FRUIT_STRAWBERRY,
      name: 'Vừa (250g)',
      price: 45000,
      stockQty: 60,
      isAvailable: true,
    },
    {
      id: SEED_PRODUCT_VARIANT_IDS.YG_FRUIT_STRAWBERRY_L,
      productId: SEED_PRODUCT_IDS.YG_FRUIT_STRAWBERRY,
      name: 'Lớn (400g)',
      price: 65000,
      stockQty: 40,
      isAvailable: true,
    },

    // ── Sữa Chua Xoài ─────────────────────────────────────────
    {
      id: SEED_PRODUCT_VARIANT_IDS.YG_FRUIT_MANGO_S,
      productId: SEED_PRODUCT_IDS.YG_FRUIT_MANGO,
      name: 'Nhỏ (150g)',
      price: 32000,
      stockQty: 55,
      isAvailable: true,
    },
    {
      id: SEED_PRODUCT_VARIANT_IDS.YG_FRUIT_MANGO_M,
      productId: SEED_PRODUCT_IDS.YG_FRUIT_MANGO,
      name: 'Vừa (250g)',
      price: 45000,
      stockQty: 55,
      isAvailable: true,
    },
    {
      id: SEED_PRODUCT_VARIANT_IDS.YG_FRUIT_MANGO_L,
      productId: SEED_PRODUCT_IDS.YG_FRUIT_MANGO,
      name: 'Lớn (400g)',
      price: 65000,
      stockQty: 35,
      isAvailable: true,
    },

    // ── Sữa Chua Việt Quất ────────────────────────────────────
    {
      id: SEED_PRODUCT_VARIANT_IDS.YG_FRUIT_BLUEBERRY_S,
      productId: SEED_PRODUCT_IDS.YG_FRUIT_BLUEBERRY,
      name: 'Nhỏ (150g)',
      price: 35000,
      stockQty: 45,
      isAvailable: true,
    },
    {
      id: SEED_PRODUCT_VARIANT_IDS.YG_FRUIT_BLUEBERRY_M,
      productId: SEED_PRODUCT_IDS.YG_FRUIT_BLUEBERRY,
      name: 'Vừa (250g)',
      price: 50000,
      stockQty: 45,
      isAvailable: true,
    },
    {
      id: SEED_PRODUCT_VARIANT_IDS.YG_FRUIT_BLUEBERRY_L,
      productId: SEED_PRODUCT_IDS.YG_FRUIT_BLUEBERRY,
      name: 'Lớn (400g)',
      price: 72000,
      stockQty: 25,
      isAvailable: true,
    },

    // ── Sữa Chua Đào ──────────────────────────────────────────
    {
      id: SEED_PRODUCT_VARIANT_IDS.YG_FRUIT_PEACH_S,
      productId: SEED_PRODUCT_IDS.YG_FRUIT_PEACH,
      name: 'Nhỏ (150g)',
      price: 33000,
      stockQty: 50,
      isAvailable: true,
    },
    {
      id: SEED_PRODUCT_VARIANT_IDS.YG_FRUIT_PEACH_M,
      productId: SEED_PRODUCT_IDS.YG_FRUIT_PEACH,
      name: 'Vừa (250g)',
      price: 48000,
      stockQty: 50,
      isAvailable: true,
    },
    {
      id: SEED_PRODUCT_VARIANT_IDS.YG_FRUIT_PEACH_L,
      productId: SEED_PRODUCT_IDS.YG_FRUIT_PEACH,
      name: 'Lớn (400g)',
      price: 68000,
      stockQty: 30,
      isAvailable: true,
    },

    // ── Sữa Chua Granola Hoa Quả ──────────────────────────────
    {
      id: SEED_PRODUCT_VARIANT_IDS.YG_GRANOLA_FRUIT_S,
      productId: SEED_PRODUCT_IDS.YG_GRANOLA_FRUIT,
      name: 'Phần Nhỏ',
      price: 38000,
      stockQty: 50,
      isAvailable: true,
    },
    {
      id: SEED_PRODUCT_VARIANT_IDS.YG_GRANOLA_FRUIT_M,
      productId: SEED_PRODUCT_IDS.YG_GRANOLA_FRUIT,
      name: 'Phần Vừa',
      price: 55000,
      stockQty: 50,
      isAvailable: true,
    },
    {
      id: SEED_PRODUCT_VARIANT_IDS.YG_GRANOLA_FRUIT_L,
      productId: SEED_PRODUCT_IDS.YG_GRANOLA_FRUIT,
      name: 'Phần Lớn',
      price: 78000,
      stockQty: 30,
      isAvailable: true,
    },

    // ── Sữa Chua Granola Hạt ──────────────────────────────────
    {
      id: SEED_PRODUCT_VARIANT_IDS.YG_GRANOLA_NUT_S,
      productId: SEED_PRODUCT_IDS.YG_GRANOLA_NUT,
      name: 'Phần Nhỏ',
      price: 40000,
      stockQty: 45,
      isAvailable: true,
    },
    {
      id: SEED_PRODUCT_VARIANT_IDS.YG_GRANOLA_NUT_M,
      productId: SEED_PRODUCT_IDS.YG_GRANOLA_NUT,
      name: 'Phần Vừa',
      price: 58000,
      stockQty: 45,
      isAvailable: true,
    },
    {
      id: SEED_PRODUCT_VARIANT_IDS.YG_GRANOLA_NUT_L,
      productId: SEED_PRODUCT_IDS.YG_GRANOLA_NUT,
      name: 'Phần Lớn',
      price: 82000,
      stockQty: 25,
      isAvailable: true,
    },

    // ── Combo Sữa Chua Kem + Trái Cây ────────────────────────
    {
      id: SEED_PRODUCT_VARIANT_IDS.COMBO_CREAM_FRUIT_M,
      productId: SEED_PRODUCT_IDS.COMBO_CREAM_FRUIT,
      name: 'Combo Vừa (1 người)',
      price: 75000,
      stockQty: 40,
      isAvailable: true,
    },
    {
      id: SEED_PRODUCT_VARIANT_IDS.COMBO_CREAM_FRUIT_L,
      productId: SEED_PRODUCT_IDS.COMBO_CREAM_FRUIT,
      name: 'Combo Lớn (2 người)',
      price: 115000,
      stockQty: 30,
      isAvailable: true,
    },

    // ── Combo Sữa Chua Granola + Sinh Tố ─────────────────────
    {
      id: SEED_PRODUCT_VARIANT_IDS.COMBO_GRANOLA_SMOOTHIE_M,
      productId: SEED_PRODUCT_IDS.COMBO_GRANOLA_SMOOTHIE,
      name: 'Combo Vừa (1 người)',
      price: 85000,
      stockQty: 35,
      isAvailable: true,
    },
    {
      id: SEED_PRODUCT_VARIANT_IDS.COMBO_GRANOLA_SMOOTHIE_L,
      productId: SEED_PRODUCT_IDS.COMBO_GRANOLA_SMOOTHIE,
      name: 'Combo Lớn (2 người)',
      price: 125000,
      stockQty: 25,
      isAvailable: true,
    },

    // ── Nước Ép Cam Tươi ──────────────────────────────────────
    {
      id: SEED_PRODUCT_VARIANT_IDS.DRK_ORANGE_JUICE_S,
      productId: SEED_PRODUCT_IDS.DRK_ORANGE_JUICE,
      name: 'Ly Nhỏ (250ml)',
      price: 20000,
      stockQty: 60,
      isAvailable: true,
    },
    {
      id: SEED_PRODUCT_VARIANT_IDS.DRK_ORANGE_JUICE_M,
      productId: SEED_PRODUCT_IDS.DRK_ORANGE_JUICE,
      name: 'Ly Vừa (400ml)',
      price: 28000,
      stockQty: 60,
      isAvailable: true,
    },
    {
      id: SEED_PRODUCT_VARIANT_IDS.DRK_ORANGE_JUICE_L,
      productId: SEED_PRODUCT_IDS.DRK_ORANGE_JUICE,
      name: 'Ly Lớn (500ml)',
      price: 38000,
      stockQty: 40,
      isAvailable: true,
    },

    // ── Sinh Tố Xoài ──────────────────────────────────────────
    {
      id: SEED_PRODUCT_VARIANT_IDS.DRK_MANGO_SMOOTHIE_S,
      productId: SEED_PRODUCT_IDS.DRK_MANGO_SMOOTHIE,
      name: 'Ly Nhỏ (300ml)',
      price: 25000,
      stockQty: 55,
      isAvailable: true,
    },
    {
      id: SEED_PRODUCT_VARIANT_IDS.DRK_MANGO_SMOOTHIE_M,
      productId: SEED_PRODUCT_IDS.DRK_MANGO_SMOOTHIE,
      name: 'Ly Vừa (450ml)',
      price: 35000,
      stockQty: 55,
      isAvailable: true,
    },
    {
      id: SEED_PRODUCT_VARIANT_IDS.DRK_MANGO_SMOOTHIE_L,
      productId: SEED_PRODUCT_IDS.DRK_MANGO_SMOOTHIE,
      name: 'Ly Lớn (600ml)',
      price: 50000,
      stockQty: 35,
      isAvailable: true,
    },
  ];

  for (const variant of variants) {
    await repo.upsert(variant, ['id']);
  }

  console.log(`[seed] product_variants — ${variants.length} rows`);
}
