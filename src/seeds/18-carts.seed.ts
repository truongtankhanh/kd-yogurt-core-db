import { DataSource } from 'typeorm';
import { CartEntity } from '../entities/cart.entity';
import { SEED_USER_IDS, SEED_CART_IDS } from './constants';

export async function seedCarts(dataSource: DataSource): Promise<void> {
  const repo = dataSource.getRepository(CartEntity);

  type Row = Pick<CartEntity, 'id' | 'customerId' | 'sessionKey' | 'expiresAt'>;

  const carts: Row[] = [
    {
      id: SEED_CART_IDS.CART_CUST01,
      customerId: SEED_USER_IDS.CUST_01,
      sessionKey: null,
      expiresAt: null,
    },
    {
      id: SEED_CART_IDS.CART_CUST02,
      customerId: SEED_USER_IDS.CUST_02,
      sessionKey: null,
      expiresAt: null,
    },
    {
      id: SEED_CART_IDS.CART_CUST03,
      customerId: SEED_USER_IDS.CUST_03,
      sessionKey: null,
      expiresAt: null,
    },
    {
      id: SEED_CART_IDS.CART_CUST04,
      customerId: SEED_USER_IDS.CUST_04,
      sessionKey: null,
      expiresAt: null,
    },
    {
      id: SEED_CART_IDS.CART_CUST05,
      customerId: SEED_USER_IDS.CUST_05,
      sessionKey: null,
      expiresAt: null,
    },
  ];

  for (const cart of carts) {
    await repo.upsert(cart, ['id']);
  }

  console.log(`[seed] carts — ${carts.length} rows`);
}
