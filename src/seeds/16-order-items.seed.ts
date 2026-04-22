import { DataSource } from 'typeorm';
import { OrderItemEntity } from '../entities/order-item.entity';
import { SEED_ORDER_IDS, SEED_ORDER_ITEM_IDS, SEED_PRODUCT_VARIANT_IDS } from './constants';

export async function seedOrderItems(dataSource: DataSource): Promise<void> {
  const repo = dataSource.getRepository(OrderItemEntity);

  type Row = Pick<
    OrderItemEntity,
    | 'id'
    | 'orderId'
    | 'variantId'
    | 'productName'
    | 'variantName'
    | 'unitPrice'
    | 'quantity'
    | 'subtotal'
  >;

  const items: Row[] = [
    // ── ORD-001 ──────────────────────────────────────────────
    {
      id: SEED_ORDER_ITEM_IDS.ITEM_001,
      orderId: SEED_ORDER_IDS.ORD_001,
      variantId: SEED_PRODUCT_VARIANT_IDS.YG_FRUIT_STRAWBERRY_M,
      productName: 'Sữa Chua Dâu Tây',
      variantName: 'Vừa (250g)',
      unitPrice: 45000,
      quantity: 2,
      subtotal: 90000,
    },
    {
      id: SEED_ORDER_ITEM_IDS.ITEM_002,
      orderId: SEED_ORDER_IDS.ORD_001,
      variantId: SEED_PRODUCT_VARIANT_IDS.YG_ORIGINAL_M,
      productName: 'Sữa Chua Truyền Thống',
      variantName: 'Vừa (200g)',
      unitPrice: 25000,
      quantity: 1,
      subtotal: 25000,
    },

    // ── ORD-002 ──────────────────────────────────────────────
    {
      id: SEED_ORDER_ITEM_IDS.ITEM_003,
      orderId: SEED_ORDER_IDS.ORD_002,
      variantId: SEED_PRODUCT_VARIANT_IDS.YG_CREAM_VANILLA_L,
      productName: 'Sữa Chua Kem Vanilla',
      variantName: 'Ly Lớn (400ml)',
      unitPrice: 50000,
      quantity: 1,
      subtotal: 50000,
    },
    {
      id: SEED_ORDER_ITEM_IDS.ITEM_004,
      orderId: SEED_ORDER_IDS.ORD_002,
      variantId: SEED_PRODUCT_VARIANT_IDS.YG_FRUIT_MANGO_M,
      productName: 'Sữa Chua Xoài',
      variantName: 'Vừa (250g)',
      unitPrice: 45000,
      quantity: 1,
      subtotal: 45000,
    },

    // ── ORD-003 ──────────────────────────────────────────────
    {
      id: SEED_ORDER_ITEM_IDS.ITEM_005,
      orderId: SEED_ORDER_IDS.ORD_003,
      variantId: SEED_PRODUCT_VARIANT_IDS.YG_GRANOLA_FRUIT_M,
      productName: 'Sữa Chua Granola Hoa Quả',
      variantName: 'Phần Vừa',
      unitPrice: 55000,
      quantity: 2,
      subtotal: 110000,
    },
    {
      id: SEED_ORDER_ITEM_IDS.ITEM_006,
      orderId: SEED_ORDER_IDS.ORD_003,
      variantId: SEED_PRODUCT_VARIANT_IDS.DRK_MANGO_SMOOTHIE_M,
      productName: 'Sinh Tố Xoài',
      variantName: 'Ly Vừa (450ml)',
      unitPrice: 35000,
      quantity: 1,
      subtotal: 35000,
    },

    // ── ORD-004 ──────────────────────────────────────────────
    {
      id: SEED_ORDER_ITEM_IDS.ITEM_007,
      orderId: SEED_ORDER_IDS.ORD_004,
      variantId: SEED_PRODUCT_VARIANT_IDS.COMBO_CREAM_FRUIT_L,
      productName: 'Combo Sữa Chua Kem + Trái Cây',
      variantName: 'Combo Lớn (2 người)',
      unitPrice: 115000,
      quantity: 1,
      subtotal: 115000,
    },

    // ── ORD-005 ──────────────────────────────────────────────
    {
      id: SEED_ORDER_ITEM_IDS.ITEM_008,
      orderId: SEED_ORDER_IDS.ORD_005,
      variantId: SEED_PRODUCT_VARIANT_IDS.YG_CREAM_SALTED_L,
      productName: 'Sữa Chua Kem Vị Mặn',
      variantName: 'Ly Lớn (400ml)',
      unitPrice: 53000,
      quantity: 2,
      subtotal: 106000,
    },
    {
      id: SEED_ORDER_ITEM_IDS.ITEM_009,
      orderId: SEED_ORDER_IDS.ORD_005,
      variantId: SEED_PRODUCT_VARIANT_IDS.YG_FRUIT_BLUEBERRY_M,
      productName: 'Sữa Chua Việt Quất',
      variantName: 'Vừa (250g)',
      unitPrice: 50000,
      quantity: 1,
      subtotal: 50000,
    },

    // ── ORD-006 ──────────────────────────────────────────────
    {
      id: SEED_ORDER_ITEM_IDS.ITEM_010,
      orderId: SEED_ORDER_IDS.ORD_006,
      variantId: SEED_PRODUCT_VARIANT_IDS.YG_GRANOLA_NUT_L,
      productName: 'Sữa Chua Granola Hạt',
      variantName: 'Phần Lớn',
      unitPrice: 82000,
      quantity: 1,
      subtotal: 82000,
    },
    {
      id: SEED_ORDER_ITEM_IDS.ITEM_011,
      orderId: SEED_ORDER_IDS.ORD_006,
      variantId: SEED_PRODUCT_VARIANT_IDS.COMBO_GRANOLA_SMOOTHIE_M,
      productName: 'Combo Sữa Chua Granola + Sinh Tố',
      variantName: 'Combo Vừa (1 người)',
      unitPrice: 85000,
      quantity: 1,
      subtotal: 85000,
    },

    // ── ORD-007 ──────────────────────────────────────────────
    {
      id: SEED_ORDER_ITEM_IDS.ITEM_012,
      orderId: SEED_ORDER_IDS.ORD_007,
      variantId: SEED_PRODUCT_VARIANT_IDS.YG_FRUIT_PEACH_L,
      productName: 'Sữa Chua Đào',
      variantName: 'Lớn (400g)',
      unitPrice: 68000,
      quantity: 2,
      subtotal: 136000,
    },
    {
      id: SEED_ORDER_ITEM_IDS.ITEM_013,
      orderId: SEED_ORDER_IDS.ORD_007,
      variantId: SEED_PRODUCT_VARIANT_IDS.DRK_ORANGE_JUICE_M,
      productName: 'Nước Ép Cam Tươi',
      variantName: 'Ly Vừa (400ml)',
      unitPrice: 28000,
      quantity: 2,
      subtotal: 56000,
    },

    // ── ORD-008 ──────────────────────────────────────────────
    {
      id: SEED_ORDER_ITEM_IDS.ITEM_014,
      orderId: SEED_ORDER_IDS.ORD_008,
      variantId: SEED_PRODUCT_VARIANT_IDS.YG_CREAM_VANILLA_M,
      productName: 'Sữa Chua Kem Vanilla',
      variantName: 'Ly Vừa (250ml)',
      unitPrice: 35000,
      quantity: 3,
      subtotal: 105000,
    },
    {
      id: SEED_ORDER_ITEM_IDS.ITEM_015,
      orderId: SEED_ORDER_IDS.ORD_008,
      variantId: SEED_PRODUCT_VARIANT_IDS.YG_FRUIT_STRAWBERRY_S,
      productName: 'Sữa Chua Dâu Tây',
      variantName: 'Nhỏ (150g)',
      unitPrice: 32000,
      quantity: 2,
      subtotal: 64000,
    },

    // ── ORD-009 ──────────────────────────────────────────────
    {
      id: SEED_ORDER_ITEM_IDS.ITEM_016,
      orderId: SEED_ORDER_IDS.ORD_009,
      variantId: SEED_PRODUCT_VARIANT_IDS.COMBO_CREAM_FRUIT_M,
      productName: 'Combo Sữa Chua Kem + Trái Cây',
      variantName: 'Combo Vừa (1 người)',
      unitPrice: 75000,
      quantity: 2,
      subtotal: 150000,
    },
    {
      id: SEED_ORDER_ITEM_IDS.ITEM_017,
      orderId: SEED_ORDER_IDS.ORD_009,
      variantId: SEED_PRODUCT_VARIANT_IDS.YG_ORIGINAL_S,
      productName: 'Sữa Chua Truyền Thống',
      variantName: 'Nhỏ (100g)',
      unitPrice: 15000,
      quantity: 2,
      subtotal: 30000,
    },

    // ── ORD-010 ──────────────────────────────────────────────
    {
      id: SEED_ORDER_ITEM_IDS.ITEM_018,
      orderId: SEED_ORDER_IDS.ORD_010,
      variantId: SEED_PRODUCT_VARIANT_IDS.YG_GRANOLA_FRUIT_L,
      productName: 'Sữa Chua Granola Hoa Quả',
      variantName: 'Phần Lớn',
      unitPrice: 78000,
      quantity: 1,
      subtotal: 78000,
    },
    {
      id: SEED_ORDER_ITEM_IDS.ITEM_019,
      orderId: SEED_ORDER_IDS.ORD_010,
      variantId: SEED_PRODUCT_VARIANT_IDS.YG_NO_SUGAR_L,
      productName: 'Sữa Chua Không Đường',
      variantName: 'Lớn (400g)',
      unitPrice: 55000,
      quantity: 1,
      subtotal: 55000,
    },

    // ── ORD-011 ──────────────────────────────────────────────
    {
      id: SEED_ORDER_ITEM_IDS.ITEM_020,
      orderId: SEED_ORDER_IDS.ORD_011,
      variantId: SEED_PRODUCT_VARIANT_IDS.DRK_MANGO_SMOOTHIE_L,
      productName: 'Sinh Tố Xoài',
      variantName: 'Ly Lớn (600ml)',
      unitPrice: 50000,
      quantity: 2,
      subtotal: 100000,
    },
    {
      id: SEED_ORDER_ITEM_IDS.ITEM_021,
      orderId: SEED_ORDER_IDS.ORD_011,
      variantId: SEED_PRODUCT_VARIANT_IDS.YG_FRUIT_MANGO_L,
      productName: 'Sữa Chua Xoài',
      variantName: 'Lớn (400g)',
      unitPrice: 65000,
      quantity: 1,
      subtotal: 65000,
    },

    // ── ORD-012 ──────────────────────────────────────────────
    {
      id: SEED_ORDER_ITEM_IDS.ITEM_022,
      orderId: SEED_ORDER_IDS.ORD_012,
      variantId: SEED_PRODUCT_VARIANT_IDS.YG_CREAM_STRAWBERRY_L,
      productName: 'Sữa Chua Kem Dâu Tây',
      variantName: 'Ly Lớn (400ml)',
      unitPrice: 55000,
      quantity: 2,
      subtotal: 110000,
    },
    {
      id: SEED_ORDER_ITEM_IDS.ITEM_023,
      orderId: SEED_ORDER_IDS.ORD_012,
      variantId: SEED_PRODUCT_VARIANT_IDS.YG_FRUIT_BLUEBERRY_L,
      productName: 'Sữa Chua Việt Quất',
      variantName: 'Lớn (400g)',
      unitPrice: 72000,
      quantity: 1,
      subtotal: 72000,
    },

    // ── ORD-013 ──────────────────────────────────────────────
    {
      id: SEED_ORDER_ITEM_IDS.ITEM_024,
      orderId: SEED_ORDER_IDS.ORD_013,
      variantId: SEED_PRODUCT_VARIANT_IDS.COMBO_GRANOLA_SMOOTHIE_L,
      productName: 'Combo Sữa Chua Granola + Sinh Tố',
      variantName: 'Combo Lớn (2 người)',
      unitPrice: 125000,
      quantity: 1,
      subtotal: 125000,
    },
    {
      id: SEED_ORDER_ITEM_IDS.ITEM_025,
      orderId: SEED_ORDER_IDS.ORD_013,
      variantId: SEED_PRODUCT_VARIANT_IDS.YG_FRUIT_PEACH_M,
      productName: 'Sữa Chua Đào',
      variantName: 'Vừa (250g)',
      unitPrice: 48000,
      quantity: 1,
      subtotal: 48000,
    },

    // ── ORD-014 ──────────────────────────────────────────────
    {
      id: SEED_ORDER_ITEM_IDS.ITEM_026,
      orderId: SEED_ORDER_IDS.ORD_014,
      variantId: SEED_PRODUCT_VARIANT_IDS.YG_ORIGINAL_L,
      productName: 'Sữa Chua Truyền Thống',
      variantName: 'Lớn (400g)',
      unitPrice: 45000,
      quantity: 2,
      subtotal: 90000,
    },

    // ── ORD-015 ──────────────────────────────────────────────
    {
      id: SEED_ORDER_ITEM_IDS.ITEM_027,
      orderId: SEED_ORDER_IDS.ORD_015,
      variantId: SEED_PRODUCT_VARIANT_IDS.YG_GRANOLA_NUT_M,
      productName: 'Sữa Chua Granola Hạt',
      variantName: 'Phần Vừa',
      unitPrice: 58000,
      quantity: 2,
      subtotal: 116000,
    },
    {
      id: SEED_ORDER_ITEM_IDS.ITEM_028,
      orderId: SEED_ORDER_IDS.ORD_015,
      variantId: SEED_PRODUCT_VARIANT_IDS.DRK_ORANGE_JUICE_L,
      productName: 'Nước Ép Cam Tươi',
      variantName: 'Ly Lớn (500ml)',
      unitPrice: 38000,
      quantity: 1,
      subtotal: 38000,
    },

    // ── ORD-016 ──────────────────────────────────────────────
    {
      id: SEED_ORDER_ITEM_IDS.ITEM_029,
      orderId: SEED_ORDER_IDS.ORD_016,
      variantId: SEED_PRODUCT_VARIANT_IDS.COMBO_CREAM_FRUIT_L,
      productName: 'Combo Sữa Chua Kem + Trái Cây',
      variantName: 'Combo Lớn (2 người)',
      unitPrice: 115000,
      quantity: 2,
      subtotal: 230000,
    },

    // ── ORD-017 ──────────────────────────────────────────────
    {
      id: SEED_ORDER_ITEM_IDS.ITEM_030,
      orderId: SEED_ORDER_IDS.ORD_017,
      variantId: SEED_PRODUCT_VARIANT_IDS.YG_CREAM_VANILLA_S,
      productName: 'Sữa Chua Kem Vanilla',
      variantName: 'Ly Nhỏ (150ml)',
      unitPrice: 25000,
      quantity: 4,
      subtotal: 100000,
    },
    {
      id: SEED_ORDER_ITEM_IDS.ITEM_031,
      orderId: SEED_ORDER_IDS.ORD_017,
      variantId: SEED_PRODUCT_VARIANT_IDS.YG_FRUIT_STRAWBERRY_M,
      productName: 'Sữa Chua Dâu Tây',
      variantName: 'Vừa (250g)',
      unitPrice: 45000,
      quantity: 2,
      subtotal: 90000,
    },

    // ── ORD-018 ──────────────────────────────────────────────
    {
      id: SEED_ORDER_ITEM_IDS.ITEM_032,
      orderId: SEED_ORDER_IDS.ORD_018,
      variantId: SEED_PRODUCT_VARIANT_IDS.YG_NO_SUGAR_M,
      productName: 'Sữa Chua Không Đường',
      variantName: 'Vừa (200g)',
      unitPrice: 30000,
      quantity: 3,
      subtotal: 90000,
    },
    {
      id: SEED_ORDER_ITEM_IDS.ITEM_033,
      orderId: SEED_ORDER_IDS.ORD_018,
      variantId: SEED_PRODUCT_VARIANT_IDS.YG_FRUIT_MANGO_S,
      productName: 'Sữa Chua Xoài',
      variantName: 'Nhỏ (150g)',
      unitPrice: 32000,
      quantity: 2,
      subtotal: 64000,
    },

    // ── ORD-019 ──────────────────────────────────────────────
    {
      id: SEED_ORDER_ITEM_IDS.ITEM_034,
      orderId: SEED_ORDER_IDS.ORD_019,
      variantId: SEED_PRODUCT_VARIANT_IDS.YG_GRANOLA_FRUIT_M,
      productName: 'Sữa Chua Granola Hoa Quả',
      variantName: 'Phần Vừa',
      unitPrice: 55000,
      quantity: 1,
      subtotal: 55000,
    },
    {
      id: SEED_ORDER_ITEM_IDS.ITEM_035,
      orderId: SEED_ORDER_IDS.ORD_019,
      variantId: SEED_PRODUCT_VARIANT_IDS.YG_CREAM_SALTED_M,
      productName: 'Sữa Chua Kem Vị Mặn',
      variantName: 'Ly Vừa (250ml)',
      unitPrice: 37000,
      quantity: 2,
      subtotal: 74000,
    },

    // ── ORD-020 ──────────────────────────────────────────────
    {
      id: SEED_ORDER_ITEM_IDS.ITEM_036,
      orderId: SEED_ORDER_IDS.ORD_020,
      variantId: SEED_PRODUCT_VARIANT_IDS.COMBO_GRANOLA_SMOOTHIE_L,
      productName: 'Combo Sữa Chua Granola + Sinh Tố',
      variantName: 'Combo Lớn (2 người)',
      unitPrice: 125000,
      quantity: 1,
      subtotal: 125000,
    },
    {
      id: SEED_ORDER_ITEM_IDS.ITEM_037,
      orderId: SEED_ORDER_IDS.ORD_020,
      variantId: SEED_PRODUCT_VARIANT_IDS.YG_FRUIT_BLUEBERRY_S,
      productName: 'Sữa Chua Việt Quất',
      variantName: 'Nhỏ (150g)',
      unitPrice: 35000,
      quantity: 2,
      subtotal: 70000,
    },
  ];

  for (const item of items) {
    await repo.upsert(item, ['id']);
  }

  console.log(`[seed] order_items — ${items.length} rows`);
}
