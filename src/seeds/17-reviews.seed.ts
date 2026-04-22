import { DataSource } from 'typeorm';
import { ReviewEntity } from '../entities/review.entity';
import { SEED_PRODUCT_IDS, SEED_REVIEW_IDS, SEED_USER_IDS } from './constants';

export async function seedReviews(dataSource: DataSource): Promise<void> {
  const repo = dataSource.getRepository(ReviewEntity);

  type Row = Pick<
    ReviewEntity,
    'id' | 'productId' | 'customerId' | 'rating' | 'body' | 'isVisible'
  >;

  const reviews: Row[] = [
    // Sữa Chua Truyền Thống
    {
      id: SEED_REVIEW_IDS.REV_001,
      productId: SEED_PRODUCT_IDS.YG_ORIGINAL,
      customerId: SEED_USER_IDS.CUST_01,
      rating: 5,
      body: 'Sữa chua ngon lắm, chua thanh tự nhiên, không có mùi lạ. Mình mua nhiều lần rồi lần nào cũng đều chất lượng như vậy. Shop đóng gói cẩn thận, giao hàng nhanh!',
      isVisible: true,
    },
    {
      id: SEED_REVIEW_IDS.REV_002,
      productId: SEED_PRODUCT_IDS.YG_ORIGINAL,
      customerId: SEED_USER_IDS.CUST_03,
      rating: 4,
      body: 'Chất lượng tốt, sữa chua mịn và thơm. Chỉ hơi tiếc là hộp lớn (400g) hết hàng khá nhanh. Sẽ tiếp tục ủng hộ shop!',
      isVisible: true,
    },
    {
      id: SEED_REVIEW_IDS.REV_003,
      productId: SEED_PRODUCT_IDS.YG_ORIGINAL,
      customerId: SEED_USER_IDS.CUST_06,
      rating: 5,
      body: 'Đây là sữa chua handmade ngon nhất mình từng thử ở Đà Lạt. Vị thuần, không quá ngọt, ăn buổi sáng với granola thêm cực kỳ phù hợp.',
      isVisible: true,
    },

    // Sữa Chua Không Đường
    {
      id: SEED_REVIEW_IDS.REV_004,
      productId: SEED_PRODUCT_IDS.YG_NO_SUGAR,
      customerId: SEED_USER_IDS.CUST_05,
      rating: 5,
      body: 'Mình đang ăn clean nên tìm sữa chua không đường. Sản phẩm này hoàn hảo! Chua nhẹ, không cảm giác nhạt nhẽo, ăn cùng trái cây tươi thì khỏi chê.',
      isVisible: true,
    },
    {
      id: SEED_REVIEW_IDS.REV_005,
      productId: SEED_PRODUCT_IDS.YG_NO_SUGAR,
      customerId: SEED_USER_IDS.CUST_07,
      rating: 4,
      body: 'Sữa chua không đường đúng nghĩa, rất phù hợp để làm dressing salad. Texture mịn, ít nhớt hơn các loại khác trên thị trường.',
      isVisible: true,
    },

    // Sữa Chua Kem Vanilla
    {
      id: SEED_REVIEW_IDS.REV_006,
      productId: SEED_PRODUCT_IDS.YG_CREAM_VANILLA,
      customerId: SEED_USER_IDS.CUST_02,
      rating: 5,
      body: 'Lớp kem vanilla phủ trên mặt thật sự xuất sắc! Mềm tan trong miệng, thơm hương vanilla tự nhiên không phải hương liệu. Nhất định sẽ mua lại!',
      isVisible: true,
    },
    {
      id: SEED_REVIEW_IDS.REV_007,
      productId: SEED_PRODUCT_IDS.YG_CREAM_VANILLA,
      customerId: SEED_USER_IDS.CUST_09,
      rating: 5,
      body: 'Trước mình hay ăn sữa chua vinamilk nhưng từ khi thử loại này thì không muốn ăn loại khác nữa. Vị kem béo ngậy mà không ngán, ăn hoài không chán.',
      isVisible: true,
    },

    // Sữa Chua Kem Dâu Tây
    {
      id: SEED_REVIEW_IDS.REV_008,
      productId: SEED_PRODUCT_IDS.YG_CREAM_STRAWBERRY,
      customerId: SEED_USER_IDS.CUST_01,
      rating: 5,
      body: 'Dâu Đà Lạt tươi hẳn! Có thể ngửi thấy mùi dâu thật chứ không phải hương liệu. Sốt dâu đỏ đẹp, vị chua ngọt vừa phải. Đóng gói đẹp có thể làm quà tặng.',
      isVisible: true,
    },
    {
      id: SEED_REVIEW_IDS.REV_009,
      productId: SEED_PRODUCT_IDS.YG_CREAM_STRAWBERRY,
      customerId: SEED_USER_IDS.CUST_04,
      rating: 4,
      body: 'Ngon, dâu tươi nhiều. Tuy nhiên lần này mua cảm giác dâu hơi chua hơn lần trước. Nhìn chung vẫn rất ổn, sẽ tiếp tục ủng hộ.',
      isVisible: true,
    },

    // Sữa Chua Kem Vị Mặn
    {
      id: SEED_REVIEW_IDS.REV_010,
      productId: SEED_PRODUCT_IDS.YG_CREAM_SALTED,
      customerId: SEED_USER_IDS.CUST_06,
      rating: 5,
      body: 'Mình là fan cuồng salted cream từ Hàn Quốc và sản phẩm này không kém! Vị mặn nhạt đặc trưng, kem mịn béo ngậy. Đây là món yêu thích mới của mình rồi.',
      isVisible: true,
    },
    {
      id: SEED_REVIEW_IDS.REV_011,
      productId: SEED_PRODUCT_IDS.YG_CREAM_SALTED,
      customerId: SEED_USER_IDS.CUST_08,
      rating: 3,
      body: 'Thú thật là mình chưa quen vị mặn trong món ngọt này. Nhưng con gái mình thích lắm, nói là giống kem ở Seoul. Nếu bạn thích vị mới lạ thì nên thử.',
      isVisible: true,
    },

    // Sữa Chua Dâu Tây
    {
      id: SEED_REVIEW_IDS.REV_012,
      productId: SEED_PRODUCT_IDS.YG_FRUIT_STRAWBERRY,
      customerId: SEED_USER_IDS.CUST_03,
      rating: 5,
      body: 'Dâu tươi Đà Lạt đỉnh cao! Từng miếng dâu còn tươi roi rói, không bị nhũn hay chảy nước. Phần sữa chua bên dưới chua thanh hòa quyện rất ngon.',
      isVisible: true,
    },
    {
      id: SEED_REVIEW_IDS.REV_013,
      productId: SEED_PRODUCT_IDS.YG_FRUIT_STRAWBERRY,
      customerId: SEED_USER_IDS.CUST_07,
      rating: 4,
      body: 'Ngon! Dâu nhiều, sữa chua mịn. Lần sau mình sẽ gọi size lớn cho đã.',
      isVisible: true,
    },

    // Sữa Chua Xoài
    {
      id: SEED_REVIEW_IDS.REV_014,
      productId: SEED_PRODUCT_IDS.YG_FRUIT_MANGO,
      customerId: SEED_USER_IDS.CUST_02,
      rating: 5,
      body: 'Xoài cát chín ngọt lịm, cắt hình quân bài nhìn cực đẹp. Đặt làm gift cho bạn bè ai cũng khen. Shop đóng gói kỹ, giao đến nhà vẫn đẹp nguyên.',
      isVisible: true,
    },
    {
      id: SEED_REVIEW_IDS.REV_015,
      productId: SEED_PRODUCT_IDS.YG_FRUIT_MANGO,
      customerId: SEED_USER_IDS.CUST_05,
      rating: 5,
      body: 'Xoài thơm lừng, sữa chua chua nhẹ. Hai vị kết hợp với nhau cực kỳ hài hòa. Đây là sản phẩm tôi order nhiều nhất từ shop.',
      isVisible: true,
    },

    // Sữa Chua Việt Quất
    {
      id: SEED_REVIEW_IDS.REV_016,
      productId: SEED_PRODUCT_IDS.YG_FRUIT_BLUEBERRY,
      customerId: SEED_USER_IDS.CUST_09,
      rating: 5,
      body: 'Việt quất tươi mọng, sốt berry tím đậm rất đẹp mắt. Vị berry hơi chát đặc trưng kết hợp với sữa chua chua tạo nên hương vị rất riêng. Healthy và ngon!',
      isVisible: true,
    },

    // Sữa Chua Đào
    {
      id: SEED_REVIEW_IDS.REV_017,
      productId: SEED_PRODUCT_IDS.YG_FRUIT_PEACH,
      customerId: SEED_USER_IDS.CUST_01,
      rating: 4,
      body: 'Đào mọng nước, ngọt thanh. Nhìn rất sang. Chỉ hơi tiếc là mùa đào sắp hết nên không biết có được ăn tiếp không.',
      isVisible: true,
    },

    // Sữa Chua Granola Hoa Quả
    {
      id: SEED_REVIEW_IDS.REV_018,
      productId: SEED_PRODUCT_IDS.YG_GRANOLA_FRUIT,
      customerId: SEED_USER_IDS.CUST_03,
      rating: 5,
      body: 'Bữa sáng hoàn hảo! Granola giòn tan, trái cây sấy ngọt, sữa chua chua thanh. Đầy đủ chất, ngon, tiện. Mình đặt mua mỗi sáng thứ 2 đến thứ 6 cho cả tuần.',
      isVisible: true,
    },
    {
      id: SEED_REVIEW_IDS.REV_019,
      productId: SEED_PRODUCT_IDS.YG_GRANOLA_FRUIT,
      customerId: SEED_USER_IDS.CUST_06,
      rating: 4,
      body: 'Granola nhiều và đa dạng loại. Hơi tiếc granola để lâu trong hộp bị mất độ giòn. Nếu đặt ăn ngay thì ngon hơn. Nhìn chung rất tốt.',
      isVisible: true,
    },

    // Sữa Chua Granola Hạt
    {
      id: SEED_REVIEW_IDS.REV_020,
      productId: SEED_PRODUCT_IDS.YG_GRANOLA_NUT,
      customerId: SEED_USER_IDS.CUST_05,
      rating: 5,
      body: 'Mình tập gym nên rất cần protein và omega. Sản phẩm này xịn lắm! Hạnh nhân, hạt điều, hạt bí đều nguyên hạt to, thơm. Không bị dầu hay ẩm.',
      isVisible: true,
    },

    // Combo Sữa Chua Kem + Trái Cây
    {
      id: SEED_REVIEW_IDS.REV_021,
      productId: SEED_PRODUCT_IDS.COMBO_CREAM_FRUIT,
      customerId: SEED_USER_IDS.CUST_09,
      rating: 5,
      body: 'Combo giá trị, ăn 2 người vừa đủ no. Sữa chua kem mịn ngon, trái cây tươi theo mùa luôn thay đổi thú vị. Tiết kiệm hơn gọi riêng mà lại đủ no hơn!',
      isVisible: true,
    },
    {
      id: SEED_REVIEW_IDS.REV_022,
      productId: SEED_PRODUCT_IDS.COMBO_CREAM_FRUIT,
      customerId: SEED_USER_IDS.CUST_02,
      rating: 4,
      body: 'Ổn, nhưng lần này mình muốn hỏi được chọn hương vị kem không? Hi vọng shop có thể cho khách tùy chọn hương vị trong combo.',
      isVisible: true,
    },

    // Combo Sữa Chua Granola + Sinh Tố
    {
      id: SEED_REVIEW_IDS.REV_023,
      productId: SEED_PRODUCT_IDS.COMBO_GRANOLA_SMOOTHIE,
      customerId: SEED_USER_IDS.CUST_07,
      rating: 5,
      body: 'Combo năng lượng xịn! Granola hạt bùi thơm, sinh tố xoài đặc sánh. Uống xong là no cả buổi sáng luôn. Giá cũng rất hợp lý so với chất lượng.',
      isVisible: true,
    },

    // Nước Ép Cam Tươi
    {
      id: SEED_REVIEW_IDS.REV_024,
      productId: SEED_PRODUCT_IDS.DRK_ORANGE_JUICE,
      customerId: SEED_USER_IDS.CUST_04,
      rating: 4,
      body: 'Nước ép cam tươi thật sự, không pha nước. Ngọt thanh tự nhiên. Lần sau mình sẽ thêm vào combo nhé shop.',
      isVisible: true,
    },

    // Sinh Tố Xoài
    {
      id: SEED_REVIEW_IDS.REV_025,
      productId: SEED_PRODUCT_IDS.DRK_MANGO_SMOOTHIE,
      customerId: SEED_USER_IDS.CUST_08,
      rating: 5,
      body: 'Sinh tố xoài đặc sánh thơm lừng, uống một ngụm là cảm nhận được mùi xoài tươi. Không thêm đường hay syrup mà vẫn ngọt tự nhiên từ xoài chín. Rất thích!',
      isVisible: true,
    },
  ];

  for (const review of reviews) {
    await repo.upsert(review, ['id']);
  }

  console.log(`[seed] reviews — ${reviews.length} rows`);
}
