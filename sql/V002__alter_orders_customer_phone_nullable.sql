-- V002: Make customer_phone nullable on orders table
-- Reason: Guest/walk-in POS orders do not always have a phone number.
ALTER TABLE orders ALTER COLUMN customer_phone DROP NOT NULL;
