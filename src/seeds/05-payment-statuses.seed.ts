import { DataSource } from 'typeorm';
import { PaymentStatusEntity } from '../entities/payment-status.entity';
import { PaymentStatusCode } from '../enums/payment-status.enums';
import { SEED_PAYMENT_STATUS_IDS } from './constants';

export async function seedPaymentStatuses(dataSource: DataSource): Promise<void> {
  const repo = dataSource.getRepository(PaymentStatusEntity);

  const statuses: Pick<PaymentStatusEntity, 'id' | 'code' | 'name' | 'meaning'>[] = [
    {
      id: SEED_PAYMENT_STATUS_IDS.UNPAID,
      code: PaymentStatusCode.CHUA_THANH_TOAN,
      name: 'Chưa thanh toán',
      meaning: 'Chưa thanh toán',
    },
    {
      id: SEED_PAYMENT_STATUS_IDS.PAID,
      code: PaymentStatusCode.DA_THANH_TOAN,
      name: 'Đã thanh toán',
      meaning: 'Đã thanh toán',
    },
    {
      id: SEED_PAYMENT_STATUS_IDS.REFUNDED,
      code: PaymentStatusCode.DA_HOAN_TIEN,
      name: 'Đã hoàn tiền',
      meaning: 'Đã hoàn tiền cho khách',
    },
  ];

  for (const status of statuses) {
    await repo.upsert(status, ['id']);
  }

  console.log(`[seed] payment_statuses — ${statuses.length} rows`);
}
