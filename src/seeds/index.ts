import 'reflect-metadata';
import { AppDataSource } from '../config/data-source';
import { seedRoles } from './01-roles.seed';
import { seedOrderStatuses } from './02-order-statuses.seed';
import { seedDeliveryTypes } from './03-delivery-types.seed';
import { seedPaymentMethods } from './04-payment-methods.seed';
import { seedPaymentStatuses } from './05-payment-statuses.seed';
import { seedPromotionTypes } from './06-promotion-types.seed';
import { seedSystemSettings } from './07-system-settings.seed';
import { seedCategories } from './08-categories.seed';
import { seedUsers } from './09-users.seed';
import { seedUserAddresses } from './10-user-addresses.seed';
import { seedProducts } from './11-products.seed';
import { seedProductVariants } from './12-product-variants.seed';
import { seedProductImages } from './13-product-images.seed';
import { seedPromotions } from './14-promotions.seed';
import { seedOrders } from './15-orders.seed';
import { seedOrderItems } from './16-order-items.seed';
import { seedReviews } from './17-reviews.seed';
import { seedCarts } from './18-carts.seed';
import { seedCartItems } from './19-cart-items.seed';
import { seedNotifications } from './20-notifications.seed';

const env = process.env['NODE_ENV'] ?? 'development';

if (env !== 'development') {
  console.error(
    `[seed] Seeds may only run in the development environment. Current NODE_ENV="${env}".`,
  );
  process.exit(1);
}

async function runSeeds(): Promise<void> {
  console.log('[seed] Initialising data source…');
  await AppDataSource.initialize();

  try {
    await AppDataSource.transaction(async (manager) => {
      const ds = manager.connection;

      // ── Lookup tables (no FK deps) ────────────────────────
      await seedRoles(ds);
      await seedOrderStatuses(ds);
      await seedDeliveryTypes(ds);
      await seedPaymentMethods(ds);
      await seedPaymentStatuses(ds);
      await seedPromotionTypes(ds);
      await seedSystemSettings(ds);

      // ── Catalogue ─────────────────────────────────────────
      await seedCategories(ds);
      await seedProducts(ds);
      await seedProductVariants(ds);
      await seedProductImages(ds);

      // ── Promotions ────────────────────────────────────────
      await seedPromotions(ds);

      // ── Users & addresses ─────────────────────────────────
      await seedUsers(ds);
      await seedUserAddresses(ds);

      // ── Orders & items ────────────────────────────────────
      await seedOrders(ds);
      await seedOrderItems(ds);

      // ── Engagement ────────────────────────────────────────
      await seedReviews(ds);
      await seedCarts(ds);
      await seedCartItems(ds);
      await seedNotifications(ds);
    });

    console.log('[seed] All seeds completed successfully.');
  } finally {
    await AppDataSource.destroy();
  }
}

runSeeds().catch((err: unknown) => {
  console.error('[seed] Fatal error:', err);
  process.exit(1);
});
