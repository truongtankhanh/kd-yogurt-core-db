import { DataSource } from 'typeorm';
import { PaymentMethodEntity } from '../entities/payment-method.entity';
import { PaymentMethodCode } from '../enums/payment-method.enums';
import { SEED_PAYMENT_METHOD_IDS } from './constants';

export async function seedPaymentMethods(dataSource: DataSource): Promise<void> {
  const repo = dataSource.getRepository(PaymentMethodEntity);

  const methods: Pick<PaymentMethodEntity, 'id' | 'code' | 'name' | 'meaning'>[] = [
    {
      id: SEED_PAYMENT_METHOD_IDS.CASH,
      code: PaymentMethodCode.TIEN_MAT,
      name: 'Tiền mặt',
      meaning: 'Thanh toán tiền mặt khi nhận hàng hoặc tại quầy',
    },
    {
      id: SEED_PAYMENT_METHOD_IDS.BANK_TRANSFER,
      code: PaymentMethodCode.CHUYEN_KHOAN,
      name: 'Chuyển khoản',
      meaning: 'Chuyển khoản ngân hàng trực tiếp (qua ATM hoặc internet banking)',
    },
    {
      id: SEED_PAYMENT_METHOD_IDS.MOMO,
      code: PaymentMethodCode.MOMO,
      name: 'MoMo',
      meaning: 'Thanh toán qua ví điện tử MoMo',
    },
    {
      id: SEED_PAYMENT_METHOD_IDS.VNPAY,
      code: PaymentMethodCode.VNPAY,
      name: 'VNPay',
      meaning: 'Thanh toán qua cổng VNPay',
    },
    {
      id: SEED_PAYMENT_METHOD_IDS.ZALOPAY,
      code: PaymentMethodCode.ZALOPAY,
      name: 'ZaloPay',
      meaning: 'Thanh toán qua ví điện tử ZaloPay',
    },
  ];

  for (const method of methods) {
    await repo.upsert(method, ['id']);
  }

  console.log(`[seed] payment_methods — ${methods.length} rows`);
}
