import { DataSource } from 'typeorm';
import { PaymentMethodEntity } from '../entities/payment-method.entity';
import { PaymentMethodName } from '../enums/payment-method.enums';
import { SEED_PAYMENT_METHOD_IDS } from './constants';

export async function seedPaymentMethods(dataSource: DataSource): Promise<void> {
  const repo = dataSource.getRepository(PaymentMethodEntity);

  const methods: Pick<PaymentMethodEntity, 'id' | 'name' | 'meaning'>[] = [
    {
      id: SEED_PAYMENT_METHOD_IDS.CASH,
      name: PaymentMethodName.CASH,
      meaning: 'Thanh toán tiền mặt khi nhận hàng hoặc tại quầy',
    },
    {
      id: SEED_PAYMENT_METHOD_IDS.BANK_TRANSFER,
      name: PaymentMethodName.BANK_TRANSFER,
      meaning: 'Chuyển khoản ngân hàng trực tiếp (qua ATM hoặc internet banking)',
    },
    {
      id: SEED_PAYMENT_METHOD_IDS.MOMO,
      name: PaymentMethodName.MOMO,
      meaning: 'Thanh toán qua ví điện tử MoMo',
    },
    {
      id: SEED_PAYMENT_METHOD_IDS.VNPAY,
      name: PaymentMethodName.VNPAY,
      meaning: 'Thanh toán qua cổng VNPay',
    },
    {
      id: SEED_PAYMENT_METHOD_IDS.ZALOPAY,
      name: PaymentMethodName.ZALOPAY,
      meaning: 'Thanh toán qua ví điện tử ZaloPay',
    },
  ];

  for (const method of methods) {
    await repo.upsert(method, ['id']);
  }

  console.log(`[seed] payment_methods — ${methods.length} rows`);
}
