import { DataSource } from 'typeorm';
import { NotificationEntity } from '../entities/notification.entity';
import { SEED_USER_IDS, SEED_NOTIFICATION_IDS } from './constants';

export async function seedNotifications(dataSource: DataSource): Promise<void> {
  const repo = dataSource.getRepository(NotificationEntity);

  type Row = Pick<
    NotificationEntity,
    'id' | 'customerId' | 'type' | 'title' | 'body' | 'isRead' | 'readAt'
  >;

  const notifications: Row[] = [
    // ── CUST_01 ───────────────────────────────────────────────
    {
      id: SEED_NOTIFICATION_IDS.NOTIF_001,
      customerId: SEED_USER_IDS.CUST_01,
      type: 'order_confirmed',
      title: 'Đơn hàng đã được xác nhận',
      body: 'Đơn hàng YG-20240315001 của bạn đã được xác nhận. Chúng tôi đang chuẩn bị đơn hàng cho bạn.',
      isRead: true,
      readAt: new Date('2024-03-15T10:05:00+07:00'),
    },
    {
      id: SEED_NOTIFICATION_IDS.NOTIF_002,
      customerId: SEED_USER_IDS.CUST_01,
      type: 'order_completed',
      title: 'Đơn hàng đã hoàn thành',
      body: 'Đơn hàng YG-20240315001 đã được giao thành công. Cảm ơn bạn đã tin tưởng KD Yogurt!',
      isRead: true,
      readAt: new Date('2024-03-15T12:30:00+07:00'),
    },
    {
      id: SEED_NOTIFICATION_IDS.NOTIF_003,
      customerId: SEED_USER_IDS.CUST_01,
      type: 'promotion',
      title: 'Ưu đãi Flash Sale cuối tuần!',
      body: 'Chỉ còn 24 giờ! Dùng mã FLASH20 giảm ngay 20% cho đơn từ 80.000đ. Áp dụng cho 100 đơn đầu tiên.',
      isRead: false,
      readAt: null,
    },
    {
      id: SEED_NOTIFICATION_IDS.NOTIF_004,
      customerId: SEED_USER_IDS.CUST_01,
      type: 'loyalty_points',
      title: 'Bạn vừa nhận được điểm thưởng',
      body: 'Chúc mừng! Bạn vừa nhận được 130 điểm thưởng từ đơn hàng YG-20240320001. Tổng điểm hiện tại: 320 điểm.',
      isRead: false,
      readAt: null,
    },

    // ── CUST_02 ───────────────────────────────────────────────
    {
      id: SEED_NOTIFICATION_IDS.NOTIF_005,
      customerId: SEED_USER_IDS.CUST_02,
      type: 'order_confirmed',
      title: 'Đơn hàng đã được xác nhận',
      body: 'Đơn hàng YG-20240315002 của bạn đã được xác nhận. Vui lòng đến cửa hàng để nhận hàng.',
      isRead: true,
      readAt: new Date('2024-03-15T14:10:00+07:00'),
    },
    {
      id: SEED_NOTIFICATION_IDS.NOTIF_006,
      customerId: SEED_USER_IDS.CUST_02,
      type: 'order_ready',
      title: 'Đơn hàng của bạn đã sẵn sàng',
      body: 'Đơn hàng YG-20240320002 đã sẵn sàng để giao. Chúng tôi sẽ giao đến địa chỉ của bạn trong vòng 30-45 phút.',
      isRead: false,
      readAt: null,
    },
    {
      id: SEED_NOTIFICATION_IDS.NOTIF_007,
      customerId: SEED_USER_IDS.CUST_02,
      type: 'promotion',
      title: 'Mã giảm giá dành riêng cho bạn',
      body: 'Dùng mã LOYAL15K giảm ngay 15.000đ cho đơn từ 100.000đ. Hạn sử dụng: 31/12/2024.',
      isRead: false,
      readAt: null,
    },

    // ── CUST_03 ───────────────────────────────────────────────
    {
      id: SEED_NOTIFICATION_IDS.NOTIF_008,
      customerId: SEED_USER_IDS.CUST_03,
      type: 'order_confirmed',
      title: 'Đơn hàng đã được xác nhận',
      body: 'Đơn hàng YG-20240316001 của bạn đã được xác nhận. Mã giảm giá SUMMER10 đã được áp dụng, bạn tiết kiệm 14.500đ.',
      isRead: true,
      readAt: new Date('2024-03-16T09:15:00+07:00'),
    },
    {
      id: SEED_NOTIFICATION_IDS.NOTIF_009,
      customerId: SEED_USER_IDS.CUST_03,
      type: 'order_delivering',
      title: 'Đơn hàng đang được giao',
      body: 'Tài xế đang trên đường giao đơn hàng YG-20240321001. Dự kiến đến nơi lúc 10:30.',
      isRead: true,
      readAt: new Date('2024-03-21T10:05:00+07:00'),
    },
    {
      id: SEED_NOTIFICATION_IDS.NOTIF_010,
      customerId: SEED_USER_IDS.CUST_03,
      type: 'loyalty_points',
      title: 'Điểm thưởng tích lũy',
      body: 'Bạn đã tích lũy 480 điểm thưởng. Đổi điểm ngay để nhận ưu đãi hấp dẫn từ KD Yogurt!',
      isRead: false,
      readAt: null,
    },

    // ── CUST_04 ───────────────────────────────────────────────
    {
      id: SEED_NOTIFICATION_IDS.NOTIF_011,
      customerId: SEED_USER_IDS.CUST_04,
      type: 'order_cancelled',
      title: 'Đơn hàng đã bị hủy',
      body: 'Đơn hàng YG-20240316002 đã được hủy theo yêu cầu của bạn. Nếu có thắc mắc vui lòng liên hệ shop.',
      isRead: true,
      readAt: new Date('2024-03-16T16:30:00+07:00'),
    },
    {
      id: SEED_NOTIFICATION_IDS.NOTIF_012,
      customerId: SEED_USER_IDS.CUST_04,
      type: 'promotion',
      title: 'Chào Hè 2024 — Giảm 10%!',
      body: 'Mùa hè đến rồi! Dùng mã SUMMER10 giảm ngay 10% (tối đa 30.000đ) cho đơn từ 50.000đ. Hết hạn 31/08/2024.',
      isRead: false,
      readAt: null,
    },

    // ── CUST_05 ───────────────────────────────────────────────
    {
      id: SEED_NOTIFICATION_IDS.NOTIF_013,
      customerId: SEED_USER_IDS.CUST_05,
      type: 'order_confirmed',
      title: 'Đơn hàng đã được xác nhận',
      body: 'Đơn hàng YG-20240317001 đã được xác nhận. Vui lòng đến cửa hàng lúc 15:00.',
      isRead: true,
      readAt: new Date('2024-03-17T14:00:00+07:00'),
    },
    {
      id: SEED_NOTIFICATION_IDS.NOTIF_014,
      customerId: SEED_USER_IDS.CUST_05,
      type: 'order_cancelled',
      title: 'Đơn hàng đã bị hủy và hoàn tiền',
      body: 'Đơn hàng YG-20240322002 đã hủy và hoàn tiền 199.000đ về tài khoản của bạn trong 3-5 ngày làm việc.',
      isRead: true,
      readAt: new Date('2024-03-23T09:00:00+07:00'),
    },

    // ── CUST_06 ───────────────────────────────────────────────
    {
      id: SEED_NOTIFICATION_IDS.NOTIF_015,
      customerId: SEED_USER_IDS.CUST_06,
      type: 'order_completed',
      title: 'Đơn hàng hoàn thành — Cảm ơn bạn!',
      body: 'Đơn hàng YG-20240317002 đã giao thành công. Hãy để lại đánh giá để giúp shop cải thiện chất lượng nhé!',
      isRead: true,
      readAt: new Date('2024-03-17T18:00:00+07:00'),
    },
    {
      id: SEED_NOTIFICATION_IDS.NOTIF_016,
      customerId: SEED_USER_IDS.CUST_06,
      type: 'loyalty_points',
      title: 'Bạn là khách VIP của KD Yogurt!',
      body: 'Với 670 điểm tích lũy, bạn đã đạt hạng VIP. Tận hưởng ưu đãi thêm 5% cho mọi đơn hàng!',
      isRead: false,
      readAt: null,
    },
    {
      id: SEED_NOTIFICATION_IDS.NOTIF_017,
      customerId: SEED_USER_IDS.CUST_06,
      type: 'new_product',
      title: 'Sản phẩm mới: Sữa Chua Kem Vị Mặn',
      body: 'KD Yogurt ra mắt sản phẩm mới theo phong cách Hàn Quốc — Sữa Chua Kem Vị Mặn! Đặt ngay để thử hương vị độc đáo.',
      isRead: false,
      readAt: null,
    },

    // ── CUST_07 ───────────────────────────────────────────────
    {
      id: SEED_NOTIFICATION_IDS.NOTIF_018,
      customerId: SEED_USER_IDS.CUST_07,
      type: 'order_delivering',
      title: 'Đơn hàng đang được giao',
      body: 'Đơn hàng YG-20240318001 đang trên đường đến nhà bạn. Tài xế sẽ liên hệ khi đến nơi.',
      isRead: false,
      readAt: null,
    },
    {
      id: SEED_NOTIFICATION_IDS.NOTIF_019,
      customerId: SEED_USER_IDS.CUST_07,
      type: 'order_completed',
      title: 'Đơn hàng hoàn thành',
      body: 'Đơn hàng YG-20240323002 đã nhận thành công. Cảm ơn bạn Đặng Thị Kim Anh!',
      isRead: false,
      readAt: null,
    },

    // ── CUST_08 ───────────────────────────────────────────────
    {
      id: SEED_NOTIFICATION_IDS.NOTIF_020,
      customerId: SEED_USER_IDS.CUST_08,
      type: 'order_preparing',
      title: 'Đơn hàng đang được chuẩn bị',
      body: 'Đơn hàng YG-20240318002 đang được chúng tôi chuẩn bị. Dự kiến sẵn sàng lúc 10:30.',
      isRead: false,
      readAt: null,
    },
    {
      id: SEED_NOTIFICATION_IDS.NOTIF_021,
      customerId: SEED_USER_IDS.CUST_08,
      type: 'order_confirmed',
      title: 'Đơn hàng đã được xác nhận',
      body: 'Đơn hàng YG-20240324001 đã được xác nhận. Chúng tôi sẽ liên hệ để xác nhận thời gian giao hàng.',
      isRead: false,
      readAt: null,
    },

    // ── CUST_09 ───────────────────────────────────────────────
    {
      id: SEED_NOTIFICATION_IDS.NOTIF_022,
      customerId: SEED_USER_IDS.CUST_09,
      type: 'order_confirmed',
      title: 'Đơn hàng đã được xác nhận',
      body: 'Đơn hàng YG-20240319001 đã được xác nhận. Chúng tôi đang chuẩn bị đơn cho bạn.',
      isRead: true,
      readAt: new Date('2024-03-19T11:00:00+07:00'),
    },
    {
      id: SEED_NOTIFICATION_IDS.NOTIF_023,
      customerId: SEED_USER_IDS.CUST_09,
      type: 'promotion',
      title: 'Chúc mừng sinh nhật! Quà tặng từ KD Yogurt',
      body: 'Sinh nhật vui vẻ! Dùng mã BIRTHDAY25 giảm ngay 25% (tối đa 50.000đ) cho đơn của bạn hôm nay. Món quà từ KD Yogurt gửi đến bạn!',
      isRead: false,
      readAt: null,
    },
    {
      id: SEED_NOTIFICATION_IDS.NOTIF_024,
      customerId: SEED_USER_IDS.CUST_09,
      type: 'loyalty_points',
      title: 'Điểm thưởng được cập nhật',
      body: 'Bạn vừa tích lũy thêm 173 điểm từ đơn hàng YG-20240321001. Tổng điểm: 390 điểm.',
      isRead: false,
      readAt: null,
    },

    // ── CUST_10 ───────────────────────────────────────────────
    {
      id: SEED_NOTIFICATION_IDS.NOTIF_025,
      customerId: SEED_USER_IDS.CUST_10,
      type: 'promotion',
      title: 'Ưu đãi quay lại dành cho bạn',
      body: 'Chúng tôi nhớ bạn! Đặt hàng ngay hôm nay với mã SUMMER10 giảm 10% cho đơn từ 50.000đ.',
      isRead: false,
      readAt: null,
    },
    {
      id: SEED_NOTIFICATION_IDS.NOTIF_026,
      customerId: SEED_USER_IDS.CUST_10,
      type: 'order_pending',
      title: 'Đơn hàng đang chờ xác nhận',
      body: 'Đơn hàng YG-20240319002 đã được đặt và đang chờ xác nhận từ shop. Vui lòng chờ trong giây lát.',
      isRead: false,
      readAt: null,
    },

    // ── Broadcast to multiple users ───────────────────────────
    {
      id: SEED_NOTIFICATION_IDS.NOTIF_027,
      customerId: SEED_USER_IDS.CUST_03,
      type: 'new_product',
      title: 'Mới: Sữa Chua Granola Hạt Premium',
      body: 'KD Yogurt giới thiệu Sữa Chua Granola Hạt mới! Với hạnh nhân, hạt điều, hạt bí nguyên hạt cùng hạt chia — lựa chọn hoàn hảo cho người tập gym.',
      isRead: true,
      readAt: new Date('2024-03-10T09:00:00+07:00'),
    },
    {
      id: SEED_NOTIFICATION_IDS.NOTIF_028,
      customerId: SEED_USER_IDS.CUST_05,
      type: 'new_product',
      title: 'Mới: Sữa Chua Granola Hạt Premium',
      body: 'KD Yogurt giới thiệu Sữa Chua Granola Hạt mới! Với hạnh nhân, hạt điều, hạt bí nguyên hạt cùng hạt chia — lựa chọn hoàn hảo cho người tập gym.',
      isRead: false,
      readAt: null,
    },
    {
      id: SEED_NOTIFICATION_IDS.NOTIF_029,
      customerId: SEED_USER_IDS.CUST_01,
      type: 'system',
      title: 'Thông báo bảo trì hệ thống',
      body: 'Hệ thống sẽ bảo trì từ 23:00 đến 01:00 đêm ngày 25/03/2024. Xin lỗi vì sự bất tiện này.',
      isRead: true,
      readAt: new Date('2024-03-24T20:00:00+07:00'),
    },
    {
      id: SEED_NOTIFICATION_IDS.NOTIF_030,
      customerId: SEED_USER_IDS.CUST_06,
      type: 'system',
      title: 'Cập nhật chính sách giao hàng',
      body: 'Từ ngày 01/04/2024, KD Yogurt miễn phí giao hàng cho đơn từ 150.000đ trong bán kính 5km. Áp dụng mã FREESHIP khi đặt hàng.',
      isRead: false,
      readAt: null,
    },
  ];

  for (const notif of notifications) {
    await repo.upsert(notif, ['id']);
  }

  console.log(`[seed] notifications — ${notifications.length} rows`);
}
