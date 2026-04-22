-- =============================================================================
-- V001__initial_schema.sql
-- Full initial schema for yogurt_db
-- PostgreSQL 16 / UTF-8
--
-- Apply:
--   psql -h <host> -U <user> -d <db> -f sql/V001__initial_schema.sql
--
-- Rollback (manual):
--   DROP VIEW  IF EXISTS v_open_orders, v_products;
--   DROP TABLE IF EXISTS refresh_tokens, system_settings, notifications, reviews,
--     order_items, orders, promotions, cart_items, carts,
--     user_addresses, product_images, product_variants, products,
--     categories, users, promotion_types, payment_statuses,
--     payment_methods, delivery_types, order_statuses, roles;
--   DROP FUNCTION IF EXISTS set_updated_at();
-- =============================================================================

-- ── Extensions ────────────────────────────────────────────────────────────────
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ── Trigger function: auto-update updated_at ──────────────────────────────────
CREATE OR REPLACE FUNCTION set_updated_at()
    RETURNS TRIGGER AS
$$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- ── Lookup: roles ─────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS roles
(
    id         UUID        NOT NULL DEFAULT gen_random_uuid(),
    name       VARCHAR(50) NOT NULL,
    meaning VARCHAR(100) NOT NULL,
    created_by UUID                 DEFAULT NULL,
    updated_by UUID                 DEFAULT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    deleted_at TIMESTAMPTZ          DEFAULT NULL,
    CONSTRAINT pk_roles PRIMARY KEY (id),
    CONSTRAINT uq_roles_name UNIQUE (name)
);
CREATE TRIGGER trg_roles_updated_at
    BEFORE UPDATE
    ON roles
    FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

-- ── Lookup: order_statuses ────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS order_statuses
(
    id         UUID        NOT NULL DEFAULT gen_random_uuid(),
    name       VARCHAR(50) NOT NULL,
    meaning VARCHAR(100) NOT NULL,
    created_by UUID                 DEFAULT NULL,
    updated_by UUID                 DEFAULT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    deleted_at TIMESTAMPTZ          DEFAULT NULL,
    CONSTRAINT pk_order_statuses PRIMARY KEY (id),
    CONSTRAINT uq_order_statuses_name UNIQUE (name)
);
CREATE TRIGGER trg_order_statuses_updated_at
    BEFORE UPDATE
    ON order_statuses
    FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

-- ── Lookup: delivery_types ────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS delivery_types
(
    id         UUID        NOT NULL DEFAULT gen_random_uuid(),
    name       VARCHAR(50) NOT NULL,
    meaning VARCHAR(100) NOT NULL,
    created_by UUID                 DEFAULT NULL,
    updated_by UUID                 DEFAULT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    deleted_at TIMESTAMPTZ          DEFAULT NULL,
    CONSTRAINT pk_delivery_types PRIMARY KEY (id),
    CONSTRAINT uq_delivery_types_name UNIQUE (name)
);
CREATE TRIGGER trg_delivery_types_updated_at
    BEFORE UPDATE
    ON delivery_types
    FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

-- ── Lookup: payment_methods ───────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS payment_methods
(
    id         UUID        NOT NULL DEFAULT gen_random_uuid(),
    name       VARCHAR(50) NOT NULL,
    meaning VARCHAR(100) NOT NULL,
    created_by UUID                 DEFAULT NULL,
    updated_by UUID                 DEFAULT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    deleted_at TIMESTAMPTZ          DEFAULT NULL,
    CONSTRAINT pk_payment_methods PRIMARY KEY (id),
    CONSTRAINT uq_payment_methods_name UNIQUE (name)
);
CREATE TRIGGER trg_payment_methods_updated_at
    BEFORE UPDATE
    ON payment_methods
    FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

-- ── Lookup: payment_statuses ──────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS payment_statuses
(
    id         UUID        NOT NULL DEFAULT gen_random_uuid(),
    name       VARCHAR(50) NOT NULL,
    meaning VARCHAR(100) NOT NULL,
    created_by UUID                 DEFAULT NULL,
    updated_by UUID                 DEFAULT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    deleted_at TIMESTAMPTZ          DEFAULT NULL,
    CONSTRAINT pk_payment_statuses PRIMARY KEY (id),
    CONSTRAINT uq_payment_statuses_name UNIQUE (name)
);
CREATE TRIGGER trg_payment_statuses_updated_at
    BEFORE UPDATE
    ON payment_statuses
    FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

-- ── Lookup: promotion_types ───────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS promotion_types
(
    id         UUID        NOT NULL DEFAULT gen_random_uuid(),
    name       VARCHAR(50) NOT NULL,
    meaning VARCHAR(100) NOT NULL,
    created_by UUID                 DEFAULT NULL,
    updated_by UUID                 DEFAULT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    deleted_at TIMESTAMPTZ          DEFAULT NULL,
    CONSTRAINT pk_promotion_types PRIMARY KEY (id),
    CONSTRAINT uq_promotion_types_name UNIQUE (name)
);
CREATE TRIGGER trg_promotion_types_updated_at
    BEFORE UPDATE
    ON promotion_types
    FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

-- ── users ─────────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS users
(
    id             UUID         NOT NULL DEFAULT gen_random_uuid(),
    full_name      VARCHAR(100) NOT NULL,
    phone          VARCHAR(20)  NOT NULL,
    email          VARCHAR(100)          DEFAULT NULL,
    password_hash  VARCHAR(255) NOT NULL,
    role_id        UUID         NOT NULL,
    loyalty_points INTEGER      NOT NULL DEFAULT 0,
    is_active      BOOLEAN      NOT NULL DEFAULT TRUE,
    last_login_at  TIMESTAMPTZ           DEFAULT NULL,
    created_by     UUID                  DEFAULT NULL,
    updated_by     UUID                  DEFAULT NULL,
    created_at     TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
    updated_at     TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
    deleted_at     TIMESTAMPTZ           DEFAULT NULL,
    CONSTRAINT pk_users PRIMARY KEY (id),
    CONSTRAINT uq_users_phone UNIQUE (phone),
    CONSTRAINT uq_users_email UNIQUE (email),
    CONSTRAINT fk_users_role FOREIGN KEY (role_id) REFERENCES roles (id)
);
CREATE INDEX idx_users_role_id ON users (role_id);
CREATE INDEX idx_users_deleted_at ON users (deleted_at);
CREATE TRIGGER trg_users_updated_at
    BEFORE UPDATE
    ON users
    FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

-- ── categories ────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS categories
(
    id          UUID         NOT NULL DEFAULT gen_random_uuid(),
    parent_id   UUID                  DEFAULT NULL,
    name        VARCHAR(100) NOT NULL,
    description TEXT                  DEFAULT NULL,
    sort_order  SMALLINT     NOT NULL DEFAULT 0,
    is_visible  BOOLEAN      NOT NULL DEFAULT TRUE,
    created_by  UUID                  DEFAULT NULL,
    updated_by  UUID                  DEFAULT NULL,
    created_at  TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
    updated_at  TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
    deleted_at  TIMESTAMPTZ           DEFAULT NULL,
    CONSTRAINT pk_categories PRIMARY KEY (id),
    CONSTRAINT fk_categories_parent FOREIGN KEY (parent_id)
        REFERENCES categories (id) ON DELETE SET NULL
);
CREATE INDEX idx_categories_parent_id ON categories (parent_id);
CREATE INDEX idx_categories_deleted_at ON categories (deleted_at);
CREATE TRIGGER trg_categories_updated_at
    BEFORE UPDATE
    ON categories
    FOR EACH ROW
EXECUTE FUNCTION set_updated_at();


-- ── products ──────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS products
(
    id           UUID         NOT NULL DEFAULT gen_random_uuid(),
    category_id  UUID         NOT NULL,
    name         VARCHAR(200) NOT NULL,
    description  TEXT                  DEFAULT NULL,
    is_available BOOLEAN      NOT NULL DEFAULT TRUE,
    is_featured  BOOLEAN      NOT NULL DEFAULT FALSE,
    sort_order   SMALLINT     NOT NULL DEFAULT 0,
    created_by   UUID                  DEFAULT NULL,
    updated_by   UUID                  DEFAULT NULL,
    created_at   TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
    updated_at   TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
    deleted_at   TIMESTAMPTZ           DEFAULT NULL,
    CONSTRAINT pk_products PRIMARY KEY (id),
    CONSTRAINT fk_products_category FOREIGN KEY (category_id) REFERENCES categories (id)
);
CREATE INDEX idx_products_category_id ON products (category_id);
CREATE INDEX idx_products_is_available ON products (is_available);
CREATE INDEX idx_products_deleted_at ON products (deleted_at);
CREATE TRIGGER trg_products_updated_at
    BEFORE UPDATE
    ON products
    FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

-- ── product_variants ──────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS product_variants
(
    id           UUID           NOT NULL DEFAULT gen_random_uuid(),
    product_id   UUID           NOT NULL,
    name         VARCHAR(150)   NOT NULL,
    price        NUMERIC(12, 2) NOT NULL,
    stock_qty    INTEGER        NOT NULL DEFAULT 0,
    is_available BOOLEAN        NOT NULL DEFAULT TRUE,
    created_by   UUID                    DEFAULT NULL,
    updated_by   UUID                    DEFAULT NULL,
    created_at   TIMESTAMPTZ    NOT NULL DEFAULT NOW(),
    updated_at   TIMESTAMPTZ    NOT NULL DEFAULT NOW(),
    deleted_at   TIMESTAMPTZ             DEFAULT NULL,
    CONSTRAINT pk_product_variants PRIMARY KEY (id),
    CONSTRAINT fk_product_variants_product FOREIGN KEY (product_id) REFERENCES products (id)
);
CREATE INDEX idx_product_variants_product_id ON product_variants (product_id);
CREATE INDEX idx_product_variants_deleted_at ON product_variants (deleted_at);
CREATE TRIGGER trg_product_variants_updated_at
    BEFORE UPDATE
    ON product_variants
    FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

-- ── product_images ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS product_images
(
    id         UUID         NOT NULL DEFAULT gen_random_uuid(),
    product_id UUID         NOT NULL,
    image_url  VARCHAR(500) NOT NULL,
    is_primary BOOLEAN      NOT NULL DEFAULT FALSE,
    sort_order SMALLINT     NOT NULL DEFAULT 0,
    created_by UUID                  DEFAULT NULL,
    updated_by UUID                  DEFAULT NULL,
    created_at TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
    deleted_at TIMESTAMPTZ           DEFAULT NULL,
    CONSTRAINT pk_product_images PRIMARY KEY (id),
    CONSTRAINT fk_product_images_product FOREIGN KEY (product_id)
        REFERENCES products (id) ON DELETE CASCADE
);
CREATE INDEX idx_product_images_product_id ON product_images (product_id);
CREATE INDEX idx_product_images_deleted_at ON product_images (deleted_at);
CREATE TRIGGER trg_product_images_updated_at
    BEFORE UPDATE
    ON product_images
    FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

-- ── user_addresses ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS user_addresses
(
    id             UUID         NOT NULL DEFAULT gen_random_uuid(),
    user_id        UUID         NOT NULL,
    label          VARCHAR(50)           DEFAULT NULL,
    recipient_name VARCHAR(100) NOT NULL,
    phone          VARCHAR(20)  NOT NULL,
    address        VARCHAR(500) NOT NULL,
    is_default     BOOLEAN      NOT NULL DEFAULT FALSE,
    created_by     UUID                  DEFAULT NULL,
    updated_by     UUID                  DEFAULT NULL,
    created_at     TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
    updated_at     TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
    deleted_at     TIMESTAMPTZ           DEFAULT NULL,
    CONSTRAINT pk_user_addresses PRIMARY KEY (id),
    CONSTRAINT fk_user_addresses_user FOREIGN KEY (user_id)
        REFERENCES users (id) ON DELETE CASCADE
);
CREATE INDEX idx_user_addresses_user_id ON user_addresses (user_id);
CREATE INDEX idx_user_addresses_deleted_at ON user_addresses (deleted_at);
CREATE TRIGGER trg_user_addresses_updated_at
    BEFORE UPDATE
    ON user_addresses
    FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

-- ── carts ─────────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS carts
(
    id          UUID        NOT NULL DEFAULT gen_random_uuid(),
    customer_id UUID                 DEFAULT NULL,
    session_key VARCHAR(128)         DEFAULT NULL,
    expires_at  TIMESTAMPTZ          DEFAULT NULL,
    created_by  UUID                 DEFAULT NULL,
    updated_by  UUID                 DEFAULT NULL,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    deleted_at  TIMESTAMPTZ          DEFAULT NULL,
    CONSTRAINT pk_carts PRIMARY KEY (id),
    CONSTRAINT fk_carts_user FOREIGN KEY (customer_id)
        REFERENCES users (id) ON DELETE CASCADE
);
CREATE INDEX idx_carts_customer_id ON carts (customer_id);
CREATE INDEX idx_carts_session_key ON carts (session_key);
CREATE TRIGGER trg_carts_updated_at
    BEFORE UPDATE
    ON carts
    FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

-- ── cart_items ────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS cart_items
(
    id         UUID           NOT NULL DEFAULT gen_random_uuid(),
    cart_id    UUID           NOT NULL,
    variant_id UUID           NOT NULL,
    quantity   INTEGER        NOT NULL DEFAULT 1,
    unit_price NUMERIC(12, 2) NOT NULL,
    created_by UUID                    DEFAULT NULL,
    updated_by UUID                    DEFAULT NULL,
    created_at TIMESTAMPTZ    NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ    NOT NULL DEFAULT NOW(),
    deleted_at TIMESTAMPTZ             DEFAULT NULL,
    CONSTRAINT pk_cart_items PRIMARY KEY (id),
    CONSTRAINT uq_cart_items_cart_variant UNIQUE (cart_id, variant_id),
    CONSTRAINT fk_cart_items_cart FOREIGN KEY (cart_id)
        REFERENCES carts (id) ON DELETE CASCADE,
    CONSTRAINT fk_cart_items_variant FOREIGN KEY (variant_id)
        REFERENCES product_variants (id)
);
CREATE INDEX idx_cart_items_variant_id ON cart_items (variant_id);
CREATE TRIGGER trg_cart_items_updated_at
    BEFORE UPDATE
    ON cart_items
    FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

-- ── promotions ────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS promotions
(
    id              UUID           NOT NULL DEFAULT gen_random_uuid(),
    code            VARCHAR(50)             DEFAULT NULL,
    name            VARCHAR(200)   NOT NULL,
    type_id         UUID           NOT NULL,
    value           NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
    min_order_value NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
    max_discount    NUMERIC(12, 2)          DEFAULT NULL,
    usage_limit     INTEGER                 DEFAULT NULL,
    usage_count     INTEGER        NOT NULL DEFAULT 0,
    is_active       BOOLEAN        NOT NULL DEFAULT TRUE,
    starts_at       TIMESTAMPTZ             DEFAULT NULL,
    expires_at      TIMESTAMPTZ             DEFAULT NULL,
    created_by      UUID                    DEFAULT NULL,
    updated_by      UUID                    DEFAULT NULL,
    created_at      TIMESTAMPTZ    NOT NULL DEFAULT NOW(),
    updated_at      TIMESTAMPTZ    NOT NULL DEFAULT NOW(),
    deleted_at      TIMESTAMPTZ             DEFAULT NULL,
    CONSTRAINT pk_promotions PRIMARY KEY (id),
    CONSTRAINT uq_promotions_code UNIQUE (code),
    CONSTRAINT fk_promotions_type FOREIGN KEY (type_id)
        REFERENCES promotion_types (id)
);
CREATE INDEX idx_promotions_type_id ON promotions (type_id);
CREATE INDEX idx_promotions_is_active ON promotions (is_active);
CREATE INDEX idx_promotions_expires_at ON promotions (expires_at);
CREATE INDEX idx_promotions_deleted_at ON promotions (deleted_at);
CREATE TRIGGER trg_promotions_updated_at
    BEFORE UPDATE
    ON promotions
    FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

-- ── orders ────────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS orders
(
    id                UUID           NOT NULL DEFAULT gen_random_uuid(),
    order_number      VARCHAR(50)    NOT NULL,
    customer_id       UUID                    DEFAULT NULL,
    customer_name     VARCHAR(100)   NOT NULL,
    customer_phone    VARCHAR(20)    NOT NULL,
    delivery_address  TEXT                    DEFAULT NULL,
    delivery_type_id  UUID           NOT NULL,
    status_id         UUID           NOT NULL,
    payment_method_id UUID           NOT NULL,
    payment_status_id UUID           NOT NULL,
    subtotal          NUMERIC(14, 2) NOT NULL,
    discount_amount   NUMERIC(14, 2) NOT NULL DEFAULT 0.00,
    shipping_fee      NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
    total_amount      NUMERIC(14, 2) NOT NULL,
    promotion_id      UUID                    DEFAULT NULL,
    note              TEXT                    DEFAULT NULL,
    created_by        UUID                    DEFAULT NULL,
    updated_by        UUID                    DEFAULT NULL,
    created_at        TIMESTAMPTZ    NOT NULL DEFAULT NOW(),
    updated_at        TIMESTAMPTZ    NOT NULL DEFAULT NOW(),
    deleted_at        TIMESTAMPTZ             DEFAULT NULL,
    CONSTRAINT pk_orders PRIMARY KEY (id),
    CONSTRAINT uq_orders_order_number UNIQUE (order_number),
    CONSTRAINT fk_orders_user FOREIGN KEY (customer_id)
        REFERENCES users (id) ON DELETE SET NULL,
    CONSTRAINT fk_orders_status FOREIGN KEY (status_id)
        REFERENCES order_statuses (id),
    CONSTRAINT fk_orders_delivery_type FOREIGN KEY (delivery_type_id)
        REFERENCES delivery_types (id),
    CONSTRAINT fk_orders_payment_method FOREIGN KEY (payment_method_id)
        REFERENCES payment_methods (id),
    CONSTRAINT fk_orders_payment_status FOREIGN KEY (payment_status_id)
        REFERENCES payment_statuses (id),
    CONSTRAINT fk_orders_promotion FOREIGN KEY (promotion_id)
        REFERENCES promotions (id) ON DELETE SET NULL
);
CREATE INDEX idx_orders_customer_id ON orders (customer_id);
CREATE INDEX idx_orders_status_id ON orders (status_id);
CREATE INDEX idx_orders_payment_status_id ON orders (payment_status_id);
CREATE INDEX idx_orders_created_at ON orders (created_at);
CREATE INDEX idx_orders_deleted_at ON orders (deleted_at);
CREATE INDEX idx_orders_delivery_type_id ON orders (delivery_type_id);
CREATE INDEX idx_orders_payment_method_id ON orders (payment_method_id);
CREATE INDEX idx_orders_promotion_id ON orders (promotion_id);
CREATE TRIGGER trg_orders_updated_at
    BEFORE UPDATE
    ON orders
    FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

-- ── order_items ───────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS order_items
(
    id           UUID           NOT NULL DEFAULT gen_random_uuid(),
    order_id     UUID           NOT NULL,
    variant_id   UUID                    DEFAULT NULL,
    product_name VARCHAR(200)   NOT NULL,
    variant_name VARCHAR(150)            DEFAULT NULL,
    unit_price   NUMERIC(12, 2) NOT NULL,
    quantity     INTEGER        NOT NULL,
    subtotal     NUMERIC(14, 2) NOT NULL,
    created_by   UUID                    DEFAULT NULL,
    updated_by   UUID                    DEFAULT NULL,
    created_at   TIMESTAMPTZ    NOT NULL DEFAULT NOW(),
    updated_at   TIMESTAMPTZ    NOT NULL DEFAULT NOW(),
    deleted_at   TIMESTAMPTZ             DEFAULT NULL,
    CONSTRAINT pk_order_items PRIMARY KEY (id),
    CONSTRAINT fk_order_items_order FOREIGN KEY (order_id)
        REFERENCES orders (id) ON DELETE CASCADE,
    CONSTRAINT fk_order_items_variant FOREIGN KEY (variant_id)
        REFERENCES product_variants (id) ON DELETE SET NULL
);
CREATE INDEX idx_order_items_order_id ON order_items (order_id);
CREATE INDEX idx_order_items_variant_id ON order_items (variant_id);
CREATE TRIGGER trg_order_items_updated_at
    BEFORE UPDATE
    ON order_items
    FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

-- ── reviews ───────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS reviews
(
    id          UUID        NOT NULL DEFAULT gen_random_uuid(),
    product_id  UUID        NOT NULL,
    customer_id UUID                 DEFAULT NULL,
    rating      SMALLINT    NOT NULL,
    body        TEXT                 DEFAULT NULL,
    is_visible  BOOLEAN     NOT NULL DEFAULT TRUE,
    created_by  UUID                 DEFAULT NULL,
    updated_by  UUID                 DEFAULT NULL,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    deleted_at  TIMESTAMPTZ          DEFAULT NULL,
    CONSTRAINT pk_reviews PRIMARY KEY (id),
    CONSTRAINT chk_reviews_rating CHECK (rating BETWEEN 1 AND 5),
    CONSTRAINT fk_reviews_product FOREIGN KEY (product_id)
        REFERENCES products (id),
    CONSTRAINT fk_reviews_user FOREIGN KEY (customer_id)
        REFERENCES users (id) ON DELETE SET NULL
);
CREATE INDEX idx_reviews_product_id ON reviews (product_id);
CREATE INDEX idx_reviews_customer_id ON reviews (customer_id);
CREATE INDEX idx_reviews_deleted_at ON reviews (deleted_at);
CREATE TRIGGER trg_reviews_updated_at
    BEFORE UPDATE
    ON reviews
    FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

-- ── notifications ─────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS notifications
(
    id          UUID         NOT NULL DEFAULT gen_random_uuid(),
    customer_id UUID         NOT NULL,
    type        VARCHAR(100) NOT NULL,
    title       VARCHAR(200) NOT NULL,
    body        TEXT                  DEFAULT NULL,
    is_read     BOOLEAN      NOT NULL DEFAULT FALSE,
    read_at     TIMESTAMPTZ           DEFAULT NULL,
    created_by  UUID                  DEFAULT NULL,
    updated_by  UUID                  DEFAULT NULL,
    created_at  TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
    updated_at  TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
    deleted_at  TIMESTAMPTZ           DEFAULT NULL,
    CONSTRAINT pk_notifications PRIMARY KEY (id),
    CONSTRAINT fk_notifications_user FOREIGN KEY (customer_id)
        REFERENCES users (id) ON DELETE CASCADE
);
CREATE INDEX idx_notifications_customer_id ON notifications (customer_id);
CREATE INDEX idx_notifications_is_read ON notifications (is_read);
CREATE INDEX idx_notifications_deleted_at ON notifications (deleted_at);
CREATE TRIGGER trg_notifications_updated_at
    BEFORE UPDATE
    ON notifications
    FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

-- ── system_settings ───────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS system_settings
(
    id          UUID         NOT NULL DEFAULT gen_random_uuid(),
    key         VARCHAR(100) NOT NULL,
    value       TEXT                  DEFAULT NULL,
    description VARCHAR(300)          DEFAULT NULL,
    created_by  UUID                  DEFAULT NULL,
    updated_by  UUID                  DEFAULT NULL,
    created_at  TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
    updated_at  TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
    deleted_at  TIMESTAMPTZ           DEFAULT NULL,
    CONSTRAINT pk_system_settings PRIMARY KEY (id)
);
CREATE TRIGGER trg_system_settings_updated_at
    BEFORE UPDATE
    ON system_settings
    FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

-- ── Auth: refresh_tokens ──────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS refresh_tokens
(
    id         UUID        NOT NULL DEFAULT gen_random_uuid(),
    token_hash VARCHAR(64) NOT NULL,
    user_id    UUID        NOT NULL,
    expires_at TIMESTAMPTZ NOT NULL,
    revoked    BOOLEAN     NOT NULL DEFAULT FALSE,
    user_agent VARCHAR(500)         DEFAULT NULL,
    ip_address VARCHAR(45)          DEFAULT NULL,
    created_by UUID                 DEFAULT NULL,
    updated_by UUID                 DEFAULT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    deleted_at TIMESTAMPTZ          DEFAULT NULL,
    CONSTRAINT pk_refresh_tokens PRIMARY KEY (id)
);
CREATE INDEX idx_refresh_tokens_user_id ON refresh_tokens (user_id);
CREATE TRIGGER trg_refresh_tokens_updated_at
    BEFORE UPDATE
    ON refresh_tokens
    FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

-- ── Views ─────────────────────────────────────────────────────────────────────
CREATE OR REPLACE VIEW v_products AS
SELECT p.id,
       p.name,
       p.description,
       pi.image_url  AS primary_image_url,
       p.is_featured,
       c.name        AS category_name,
       MIN(pv.price) AS price_from
FROM products p
         JOIN categories c ON c.id = p.category_id AND c.deleted_at IS NULL
         JOIN product_variants pv ON pv.product_id = p.id AND pv.deleted_at IS NULL AND pv.is_available = TRUE
         LEFT JOIN product_images pi ON pi.product_id = p.id AND pi.is_primary = TRUE AND pi.deleted_at IS NULL
WHERE p.is_available = TRUE
  AND p.deleted_at IS NULL
GROUP BY p.id, p.name, p.description, pi.image_url, p.is_featured, c.name;

CREATE OR REPLACE VIEW v_open_orders AS
SELECT o.id,
       o.order_number,
       o.customer_name,
       o.customer_phone,
       os.name AS status,
       ps.name AS payment_status,
       o.total_amount,
       dt.name AS delivery_type,
       o.created_at
FROM orders o
         JOIN order_statuses os ON os.id = o.status_id
         JOIN payment_statuses ps ON ps.id = o.payment_status_id
         JOIN delivery_types dt ON dt.id = o.delivery_type_id
WHERE o.status_id NOT IN (SELECT id
                          FROM order_statuses
                          WHERE name IN ('completed', 'cancelled'))
  AND o.deleted_at IS NULL
ORDER BY o.created_at DESC;
