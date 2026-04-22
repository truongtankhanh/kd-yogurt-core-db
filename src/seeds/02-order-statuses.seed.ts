import { DataSource } from 'typeorm';
import { OrderStatusEntity } from '../entities/order-status.entity';
import { OrderStatusName } from '../enums/order-status.enums';
import { SEED_ORDER_STATUS_IDS } from './constants';

export async function seedOrderStatuses(dataSource: DataSource): Promise<void> {
  const repo = dataSource.getRepository(OrderStatusEntity);

  const statuses: Pick<OrderStatusEntity, 'id' | 'name' | 'meaning'>[] = [
    {
      id: SEED_ORDER_STATUS_IDS.PENDING,
      name: OrderStatusName.PENDING,
      meaning: 'Vừa đặt, chờ xác nhận',
    },
    {
      id: SEED_ORDER_STATUS_IDS.CONFIRMED,
      name: OrderStatusName.CONFIRMED,
      meaning: 'Đã xác nhận bởi nhân viên',
    },
    {
      id: SEED_ORDER_STATUS_IDS.PREPARING,
      name: OrderStatusName.PREPARING,
      meaning: 'Đang được chuẩn bị',
    },
    {
      id: SEED_ORDER_STATUS_IDS.READY,
      name: OrderStatusName.READY,
      meaning: 'Sẵn sàng để lấy hàng hoặc bàn giao cho shipper',
    },
    {
      id: SEED_ORDER_STATUS_IDS.DELIVERING,
      name: OrderStatusName.DELIVERING,
      meaning: 'Đang trên đường giao hàng',
    },
    {
      id: SEED_ORDER_STATUS_IDS.COMPLETED,
      name: OrderStatusName.COMPLETED,
      meaning: 'Đã giao thành công',
    },
    {
      id: SEED_ORDER_STATUS_IDS.CANCELLED,
      name: OrderStatusName.CANCELLED,
      meaning: 'Đã hủy bởi khách hàng hoặc nhân viên',
    },
  ];

  for (const status of statuses) {
    await repo.upsert(status, ['id']);
  }

  console.log(`[seed] order_statuses — ${statuses.length} rows`);
}
