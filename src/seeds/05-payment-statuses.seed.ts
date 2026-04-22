import { DataSource } from 'typeorm';
import { PaymentStatusEntity } from '../entities/payment-status.entity';
import { PaymentStatusName } from '../enums/payment-status.enums';
import { SEED_PAYMENT_STATUS_IDS } from './constants';

export async function seedPaymentStatuses(dataSource: DataSource): Promise<void> {
  const repo = dataSource.getRepository(PaymentStatusEntity);

  const statuses: Pick<PaymentStatusEntity, 'id' | 'name' | 'meaning'>[] = [
    {
      id: SEED_PAYMENT_STATUS_IDS.UNPAID,
      name: PaymentStatusName.UNPAID,
      meaning: 'Chưa thanh toán',
    },
    {
      id: SEED_PAYMENT_STATUS_IDS.PAID,
      name: PaymentStatusName.PAID,
      meaning: 'Đã thanh toán',
    },
    {
      id: SEED_PAYMENT_STATUS_IDS.REFUNDED,
      name: PaymentStatusName.REFUNDED,
      meaning: 'Đã hoàn tiền cho khách',
    },
  ];

  for (const status of statuses) {
    await repo.upsert(status, ['id']);
  }

  console.log(`[seed] payment_statuses — ${statuses.length} rows`);
}
