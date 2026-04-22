import { DataSource } from 'typeorm';
import { OrderStatusEntity } from '../entities/order-status.entity';
import { OrderStatusCode } from '../enums/order-status.enums';
import { SEED_ORDER_STATUS_IDS } from './constants';

export async function seedOrderStatuses(dataSource: DataSource): Promise<void> {
  const repo = dataSource.getRepository(OrderStatusEntity);

  const statuses: Pick<OrderStatusEntity, 'id' | 'code' | 'name' | 'meaning'>[] = [
    {
      id: SEED_ORDER_STATUS_IDS.PENDING,
      code: OrderStatusCode.CHO_XAC_NHAN,
      name: 'Chờ xác nhận',
      meaning: 'Vừa đặt, chờ xác nhận',
    },
    {
      id: SEED_ORDER_STATUS_IDS.CONFIRMED,
      code: OrderStatusCode.DA_XAC_NHAN,
      name: 'Đã xác nhận',
      meaning: 'Đã xác nhận bởi nhân viên',
    },
    {
      id: SEED_ORDER_STATUS_IDS.PREPARING,
      code: OrderStatusCode.DANG_CHUAN_BI,
      name: 'Đang chuẩn bị',
      meaning: 'Đang được chuẩn bị',
    },
    {
      id: SEED_ORDER_STATUS_IDS.READY,
      code: OrderStatusCode.SAN_SANG_GIAO,
      name: 'Sẵn sàng',
      meaning: 'Sẵn sàng để lấy hàng hoặc bàn giao cho shipper',
    },
    {
      id: SEED_ORDER_STATUS_IDS.DELIVERING,
      code: OrderStatusCode.DANG_GIAO_HANG,
      name: 'Đang giao hàng',
      meaning: 'Đang trên đường giao hàng',
    },
    {
      id: SEED_ORDER_STATUS_IDS.COMPLETED,
      code: OrderStatusCode.HOAN_THANH,
      name: 'Hoàn thành',
      meaning: 'Đã giao thành công',
    },
    {
      id: SEED_ORDER_STATUS_IDS.CANCELLED,
      code: OrderStatusCode.DA_HUY,
      name: 'Đã hủy',
      meaning: 'Đã hủy bởi khách hàng hoặc nhân viên',
    },
  ];

  for (const status of statuses) {
    await repo.upsert(status, ['id']);
  }

  console.log(`[seed] order_statuses — ${statuses.length} rows`);
}
