import { DataSource } from 'typeorm';
import { CartItemEntity } from '../entities/cart-item.entity';
import { SEED_CART_IDS, SEED_CART_ITEM_IDS, SEED_PRODUCT_VARIANT_IDS } from './constants';

export async function seedCartItems(dataSource: DataSource): Promise<void> {
  const repo = dataSource.getRepository(CartItemEntity);

  type Row = Pick<CartItemEntity, 'id' | 'cartId' | 'variantId' | 'quantity' | 'unitPrice'>;

  const items: Row[] = [
    // ── Cart: CUST_01 ─────────────────────────────────────────
    {
      id: SEED_CART_ITEM_IDS.CI_001,
      cartId: SEED_CART_IDS.CART_CUST01,
      variantId: SEED_PRODUCT_VARIANT_IDS.YG_CREAM_VANILLA_M,
      quantity: 2,
      unitPrice: 35000,
    },
    {
      id: SEED_CART_ITEM_IDS.CI_002,
      cartId: SEED_CART_IDS.CART_CUST01,
      variantId: SEED_PRODUCT_VARIANT_IDS.YG_FRUIT_STRAWBERRY_M,
      quantity: 1,
      unitPrice: 45000,
    },
    {
      id: SEED_CART_ITEM_IDS.CI_003,
      cartId: SEED_CART_IDS.CART_CUST01,
      variantId: SEED_PRODUCT_VARIANT_IDS.DRK_MANGO_SMOOTHIE_S,
      quantity: 2,
      unitPrice: 25000,
    },

    // ── Cart: CUST_02 ─────────────────────────────────────────
    {
      id: SEED_CART_ITEM_IDS.CI_004,
      cartId: SEED_CART_IDS.CART_CUST02,
      variantId: SEED_PRODUCT_VARIANT_IDS.COMBO_CREAM_FRUIT_L,
      quantity: 1,
      unitPrice: 115000,
    },
    {
      id: SEED_CART_ITEM_IDS.CI_005,
      cartId: SEED_CART_IDS.CART_CUST02,
      variantId: SEED_PRODUCT_VARIANT_IDS.DRK_ORANGE_JUICE_M,
      quantity: 2,
      unitPrice: 28000,
    },

    // ── Cart: CUST_03 ─────────────────────────────────────────
    {
      id: SEED_CART_ITEM_IDS.CI_006,
      cartId: SEED_CART_IDS.CART_CUST03,
      variantId: SEED_PRODUCT_VARIANT_IDS.YG_GRANOLA_FRUIT_M,
      quantity: 1,
      unitPrice: 55000,
    },
    {
      id: SEED_CART_ITEM_IDS.CI_007,
      cartId: SEED_CART_IDS.CART_CUST03,
      variantId: SEED_PRODUCT_VARIANT_IDS.YG_GRANOLA_NUT_M,
      quantity: 1,
      unitPrice: 58000,
    },
    {
      id: SEED_CART_ITEM_IDS.CI_008,
      cartId: SEED_CART_IDS.CART_CUST03,
      variantId: SEED_PRODUCT_VARIANT_IDS.YG_NO_SUGAR_M,
      quantity: 2,
      unitPrice: 30000,
    },

    // ── Cart: CUST_04 ─────────────────────────────────────────
    {
      id: SEED_CART_ITEM_IDS.CI_009,
      cartId: SEED_CART_IDS.CART_CUST04,
      variantId: SEED_PRODUCT_VARIANT_IDS.YG_FRUIT_MANGO_L,
      quantity: 1,
      unitPrice: 65000,
    },
    {
      id: SEED_CART_ITEM_IDS.CI_010,
      cartId: SEED_CART_IDS.CART_CUST04,
      variantId: SEED_PRODUCT_VARIANT_IDS.YG_FRUIT_PEACH_M,
      quantity: 1,
      unitPrice: 48000,
    },

    // ── Cart: CUST_05 ─────────────────────────────────────────
    {
      id: SEED_CART_ITEM_IDS.CI_011,
      cartId: SEED_CART_IDS.CART_CUST05,
      variantId: SEED_PRODUCT_VARIANT_IDS.COMBO_GRANOLA_SMOOTHIE_M,
      quantity: 2,
      unitPrice: 85000,
    },
    {
      id: SEED_CART_ITEM_IDS.CI_012,
      cartId: SEED_CART_IDS.CART_CUST05,
      variantId: SEED_PRODUCT_VARIANT_IDS.YG_CREAM_STRAWBERRY_S,
      quantity: 3,
      unitPrice: 28000,
    },
  ];

  for (const item of items) {
    // Remove any stale row that shares the same (cart_id, variant_id) but has a different id
    await dataSource.query(
      `DELETE FROM cart_items WHERE cart_id = $1 AND variant_id = $2 AND id != $3`,
      [item.cartId, item.variantId, item.id],
    );
    await repo.upsert(item, ['id']);
  }

  console.log(`[seed] cart_items — ${items.length} rows`);
}
