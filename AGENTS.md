# AGENTS.md

## Scope and Ground Truth

- This package is a shared TypeORM model library for **PostgreSQL**, not a runnable NestJS service (`README.md`, `src/index.ts`).
- Treat repository reality as source of truth when global AI instructions conflict (for example, PostgreSQL + SQL scripts here vs MySQL tooling elsewhere).
- Public API surface is only `entities` and `enums` exported from `src/index.ts`; do not expose seeds or datasource config.

## Architecture (Big Picture)

- Schema lifecycle is SQL-first: DDL lives in `sql/V###__*.sql`, applied manually/CI; TypeORM `synchronize` is disabled in `src/config/data-source.ts`.
- Runtime model flow is: SQL tables/views -> entity mappings in `src/entities/*.entity.ts` -> consumed by downstream services via package exports.
- `BaseEntity` centralizes UUID PK, `timestamptz` audit timestamps (`createdAt`, `updatedAt`, `deletedAt`), and actor columns (`createdBy`, `updatedBy` as nullable `uuid`); feature entities inherit it (`src/entities/base.entity.ts`).
- Relations are explicit and mostly lazy by type reference strings (for circular safety), e.g. `OrderEntity` links to statuses/payment/promotion/users (`src/entities/order.entity.ts`).
- SQL views `v_products` and `v_open_orders` are part of the data contract and should be preserved/updated with schema changes (`sql/V001__initial_schema.sql`).
- `RefreshTokenEntity` (`src/entities/refresh-token.entity.ts`) stores hashed JWT refresh tokens; it is part of the exported public surface and registered in `AppDataSource`.

## Developer Workflows

- Install deps and compile package:
  - `npm install`
  - `npm run build`
  - `npm run build:watch` (incremental, re-compiles on change)
- Lint and format:
  - `npm run lint` (ESLint + Prettier auto-fix)
  - `npm run format:fix` (Prettier then ESLint; use before committing)
- Run seed data (development only guard is enforced in code):
  - `npm run seed`
  - `npm run seed:fresh` (destructive truncate/reset of lookup tables)
- Before seeding a fresh environment, apply schema first via `psql`, e.g.:
  `psql -h 127.0.0.1 -U postgres -d yogurt_db -f sql/V001__initial_schema.sql`
- There is no test suite in this package currently; use `npm run build` + targeted seed execution as the minimum validation loop.

## Project-Specific Conventions

- SQL migrations: `V<zero-padded>=3+ digits__snake_case.sql`; never edit already-applied files (`README.md`, `sql/README.md`).
- Keep SQL idempotent where possible (`CREATE TABLE IF NOT EXISTS`, `CREATE OR REPLACE VIEW`, `orIgnore()` in seeds).
- Entity naming maps camelCase fields to snake_case DB columns via `@Column({ name: '...' })`; keep index names explicit (`idx__`, `uq__`).
- Seed ordering is intentional and transactional (`src/seeds/index.ts` runs `01` -> `07` inside one transaction).
- Deterministic UUID constants in `src/seeds/constants.ts` are integration anchors; do not regenerate IDs casually.

## Integrations and Boundaries

- Environment loading precedence in `src/config/data-source.ts`: process env -> `.env.<NODE_ENV>` -> `.env`.
- Staging/production require all `DB_*` vars or startup throws; development falls back to defaults (`localhost:5432`, database `yogurt_db`).
- SSL is opt-in: set `DB_SSL=true` to enable; set `DB_SSL_REJECT_UNAUTHORIZED=false` to allow self-signed certs (staging only).
- Query logging differs by env (dev: all, staging: errors, prod: off); preserve this behavior when editing datasource config.
- External dependencies are minimal: `typeorm`, `pg`, `dotenv`, `reflect-metadata`; avoid adding app-layer framework concerns here.
- If adding new entities/enums, update both `src/config/data-source.ts` (for internal tools) and `src/index.ts` (public exports) together.

## Public API Surface

Package name: `@kd-yogurt/core-db`. Install from GitHub:

```bash
npm install github:your-org/your-repo#<tag-or-sha>
```

Then import:

```ts
import { UserEntity, RoleName } from '@kd-yogurt/core-db';
```

**22 exported entities** (all in `src/entities/`):
`BaseEntity`, `RoleEntity`, `OrderStatusEntity`, `DeliveryTypeEntity`, `PaymentMethodEntity`, `PaymentStatusEntity`, `PromotionTypeEntity`, `UserEntity`, `CategoryEntity`, `ProductEntity`, `ProductVariantEntity`, `ProductImageEntity`, `UserAddressEntity`, `CartEntity`, `CartItemEntity`, `PromotionEntity`, `OrderEntity`, `OrderItemEntity`, `ReviewEntity`, `NotificationEntity`, `SystemSettingEntity`, `RefreshTokenEntity`

**6 exported enums** (all in `src/enums/`):
`RoleName`, `OrderStatusName`, `DeliveryTypeName`, `PaymentMethodName`, `PaymentStatusName`, `PromotionTypeName`
