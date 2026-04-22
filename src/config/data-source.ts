import 'reflect-metadata';
import * as path from 'path';
import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';

import { RoleEntity } from '../entities/role.entity';
import { OrderStatusEntity } from '../entities/order-status.entity';
import { DeliveryTypeEntity } from '../entities/delivery-type.entity';
import { PaymentMethodEntity } from '../entities/payment-method.entity';
import { PaymentStatusEntity } from '../entities/payment-status.entity';
import { PromotionTypeEntity } from '../entities/promotion-type.entity';
import { UserEntity } from '../entities/user.entity';
import { CategoryEntity } from '../entities/category.entity';
import { ProductEntity } from '../entities/product.entity';
import { ProductVariantEntity } from '../entities/product-variant.entity';
import { ProductImageEntity } from '../entities/product-image.entity';
import { UserAddressEntity } from '../entities/user-address.entity';
import { CartEntity } from '../entities/cart.entity';
import { CartItemEntity } from '../entities/cart-item.entity';
import { PromotionEntity } from '../entities/promotion.entity';
import { OrderEntity } from '../entities/order.entity';
import { OrderItemEntity } from '../entities/order-item.entity';
import { ReviewEntity } from '../entities/review.entity';
import { NotificationEntity } from '../entities/notification.entity';
import { SystemSettingEntity } from '../entities/system-setting.entity';
import { RefreshTokenEntity } from '../entities/refresh-token.entity';

// ── Environment resolution ────────────────────────────────────────────────────
// Loading priority (highest → lowest):
//   1. Real process.env vars  — set by CI/CD, Docker secrets, etc. (never overridden)
//   2. .env.<NODE_ENV>        — e.g. .env.staging, .env.production
//   3. .env                   — base / local development fallback
const env = process.env['NODE_ENV'] ?? 'development';
dotenv.config({ path: path.resolve(process.cwd(), `.env.${env}`) });
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const isProduction = env === 'production';
const isStaging = env === 'staging';

// ── Required-var guard ────────────────────────────────────────────────────────
// Development tolerates missing vars (defaults kick in).
// Staging and production must have every DB var explicitly set.
if (isProduction || isStaging) {
  const required = ['DB_HOST', 'DB_PORT', 'DB_USERNAME', 'DB_PASSWORD', 'DB_NAME'];
  const missing = required.filter((k) => !process.env[k]);
  if (missing.length > 0) {
    throw new Error(
      `[core-db] Missing required environment variable(s) for NODE_ENV="${env}": ${missing.join(', ')}`,
    );
  }
}

// ── SSL ───────────────────────────────────────────────────────────────────────
// DB_SSL=true           → enable SSL
// DB_SSL_REJECT_UNAUTHORIZED=false → allow self-signed certs (staging only)
const sslEnabled = process.env['DB_SSL'] === 'true';
const sslOptions = sslEnabled
  ? { rejectUnauthorized: process.env['DB_SSL_REJECT_UNAUTHORIZED'] !== 'false' }
  : undefined;

// ── Query logging ─────────────────────────────────────────────────────────────
// development → all queries
// staging     → errors only
// production  → disabled
type LogLevel = 'query' | 'schema' | 'error' | 'warn' | 'info' | 'log';
const logging: boolean | LogLevel[] = isProduction
  ? false
  : isStaging
    ? (['error'] as LogLevel[])
    : true;

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env['DB_HOST'] ?? 'localhost',
  port: parseInt(process.env['DB_PORT'] ?? '5432', 10),
  username: process.env['DB_USERNAME'] ?? 'postgres',
  password: process.env['DB_PASSWORD'] ?? '',
  database: process.env['DB_NAME'] ?? 'yogurt_db',
  ...(sslOptions !== undefined && { ssl: sslOptions }),
  entities: [
    RoleEntity,
    OrderStatusEntity,
    DeliveryTypeEntity,
    PaymentMethodEntity,
    PaymentStatusEntity,
    PromotionTypeEntity,
    UserEntity,
    CategoryEntity,
    ProductEntity,
    ProductVariantEntity,
    ProductImageEntity,
    UserAddressEntity,
    CartEntity,
    CartItemEntity,
    PromotionEntity,
    OrderEntity,
    OrderItemEntity,
    ReviewEntity,
    NotificationEntity,
    SystemSettingEntity,
    RefreshTokenEntity,
  ],
  synchronize: false,
  logging,
});
