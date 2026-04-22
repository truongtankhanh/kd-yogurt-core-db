import { DataSource } from 'typeorm';
import { ProductEntity } from '../entities/product.entity';
import { SEED_CATEGORY_IDS, SEED_PRODUCT_IDS } from './constants';

export async function seedProducts(dataSource: DataSource): Promise<void> {
  const repo = dataSource.getRepository(ProductEntity);

  type Row = Pick<
    ProductEntity,
    'id' | 'categoryId' | 'name' | 'description' | 'isAvailable' | 'isFeatured' | 'sortOrder'
  >;

  const products: Row[] = [
    // ── Sữa Chua Truyền Thống ────────────────────────────────
    {
      id: SEED_PRODUCT_IDS.YG_ORIGINAL,
      categoryId: SEED_CATEGORY_IDS.YG_ORIGINAL,
      name: 'Sữa Chua Truyền Thống',
      description:
        'Sữa chua truyền thống được làm từ 100% sữa bò tươi nguyên chất, lên men tự nhiên 8 giờ. Vị chua thanh, ngọt nhẹ đặc trưng — tinh túy của nghề làm sữa chua handmade KD.',
      isAvailable: true,
      isFeatured: true,
      sortOrder: 1,
    },
    {
      id: SEED_PRODUCT_IDS.YG_NO_SUGAR,
      categoryId: SEED_CATEGORY_IDS.YG_ORIGINAL,
      name: 'Sữa Chua Không Đường',
      description:
        'Sữa chua không đường thuần khiết, phù hợp với người ăn kiêng, ăn clean hay bổ sung probiotic hàng ngày. Giàu protein và lợi khuẩn có lợi cho đường tiêu hóa.',
      isAvailable: true,
      isFeatured: false,
      sortOrder: 2,
    },
    // ── Sữa Chua Kem ─────────────────────────────────────────
    {
      id: SEED_PRODUCT_IDS.YG_CREAM_VANILLA,
      categoryId: SEED_CATEGORY_IDS.YG_CREAM,
      name: 'Sữa Chua Kem Vanilla',
      description:
        'Sữa chua kem béo mịn hương vanilla Madagascar thơm dịu. Lớp kem phủ trên mặt mềm tan, kết hợp cùng phần sữa chua chua thanh bên dưới tạo nên hương vị đặc biệt.',
      isAvailable: true,
      isFeatured: true,
      sortOrder: 1,
    },
    {
      id: SEED_PRODUCT_IDS.YG_CREAM_STRAWBERRY,
      categoryId: SEED_CATEGORY_IDS.YG_CREAM,
      name: 'Sữa Chua Kem Dâu Tây',
      description:
        'Sữa chua kem kết hợp với sốt dâu tây tươi đỏ rực. Vị chua ngọt của dâu hòa quyện cùng kem sữa béo ngậy, điểm thêm những miếng dâu tươi nguyên trái trên mặt.',
      isAvailable: true,
      isFeatured: true,
      sortOrder: 2,
    },
    {
      id: SEED_PRODUCT_IDS.YG_CREAM_SALTED,
      categoryId: SEED_CATEGORY_IDS.YG_CREAM,
      name: 'Sữa Chua Kem Vị Mặn',
      description:
        'Sữa chua kem phong cách Hàn Quốc với lớp kem phủ mặn nhạt đặc trưng, thêm chút muối hồng Himalaya và caramen. Vị ngọt — mặn — béo hòa quyện tạo nét riêng độc đáo.',
      isAvailable: true,
      isFeatured: false,
      sortOrder: 3,
    },
    // ── Sữa Chua Trái Cây ─────────────────────────────────────
    {
      id: SEED_PRODUCT_IDS.YG_FRUIT_STRAWBERRY,
      categoryId: SEED_CATEGORY_IDS.YG_FRUIT,
      name: 'Sữa Chua Dâu Tây',
      description:
        'Sữa chua tươi kết hợp dâu tây Đà Lạt thơm ngon theo mùa. Dâu được cắt nhỏ và rưới lên trên cùng sốt dâu tự làm, đảm bảo 100% từ trái cây tươi không phẩm màu.',
      isAvailable: true,
      isFeatured: true,
      sortOrder: 1,
    },
    {
      id: SEED_PRODUCT_IDS.YG_FRUIT_MANGO,
      categoryId: SEED_CATEGORY_IDS.YG_FRUIT,
      name: 'Sữa Chua Xoài',
      description:
        'Sữa chua tươi phủ sốt xoài cát chín thơm lừng. Những miếng xoài Cát Hòa Lộc ngọt lịm được cắt hình quân bài trông vừa đẹp mắt vừa đượm hương vị miền Nam.',
      isAvailable: true,
      isFeatured: true,
      sortOrder: 2,
    },
    {
      id: SEED_PRODUCT_IDS.YG_FRUIT_BLUEBERRY,
      categoryId: SEED_CATEGORY_IDS.YG_FRUIT,
      name: 'Sữa Chua Việt Quất',
      description:
        'Sữa chua tươi với việt quất nhập khẩu chín mọng đặt trên lớp sốt berry tím đậm. Việt quất giàu chất chống oxy hóa, kết hợp cùng sữa chua tạo nên bữa ăn nhẹ lành mạnh tuyệt vời.',
      isAvailable: true,
      isFeatured: false,
      sortOrder: 3,
    },
    {
      id: SEED_PRODUCT_IDS.YG_FRUIT_PEACH,
      categoryId: SEED_CATEGORY_IDS.YG_FRUIT,
      name: 'Sữa Chua Đào',
      description:
        'Sữa chua tươi với đào vàng Hà Nội mọng nước thơm ngọt. Những lát đào tươi được sắp xếp đẹp mắt trên nền sữa chua trắng ngần, điểm thêm sốt đào mật ong.',
      isAvailable: true,
      isFeatured: false,
      sortOrder: 4,
    },
    // ── Sữa Chua Granola ──────────────────────────────────────
    {
      id: SEED_PRODUCT_IDS.YG_GRANOLA_FRUIT,
      categoryId: SEED_CATEGORY_IDS.YG_GRANOLA,
      name: 'Sữa Chua Granola Hoa Quả',
      description:
        'Sữa chua tươi kết hợp granola yến mạch nướng mật ong giòn tan cùng hỗn hợp trái cây sấy khô như cranberry, nho khô, mơ sấy. Bữa sáng dinh dưỡng hoàn hảo.',
      isAvailable: true,
      isFeatured: true,
      sortOrder: 1,
    },
    {
      id: SEED_PRODUCT_IDS.YG_GRANOLA_NUT,
      categoryId: SEED_CATEGORY_IDS.YG_GRANOLA,
      name: 'Sữa Chua Granola Hạt',
      description:
        'Sữa chua tươi phủ granola hạt hỗn hợp gồm hạt điều, hạnh nhân, hạt bí, hạt hướng dương và hạt chia. Giàu protein, chất xơ và omega-3 — lựa chọn lý tưởng cho người tập gym.',
      isAvailable: true,
      isFeatured: false,
      sortOrder: 2,
    },
    // ── Combo ─────────────────────────────────────────────────
    {
      id: SEED_PRODUCT_IDS.COMBO_CREAM_FRUIT,
      categoryId: SEED_CATEGORY_IDS.COMBO,
      name: 'Combo Sữa Chua Kem + Trái Cây',
      description:
        'Combo tiết kiệm gồm 1 ly sữa chua kem hương vị tùy chọn và 1 phần topping trái cây tươi theo mùa. Tiết kiệm hơn 15% so với gọi riêng lẻ.',
      isAvailable: true,
      isFeatured: true,
      sortOrder: 1,
    },
    {
      id: SEED_PRODUCT_IDS.COMBO_GRANOLA_SMOOTHIE,
      categoryId: SEED_CATEGORY_IDS.COMBO,
      name: 'Combo Sữa Chua Granola + Sinh Tố',
      description:
        'Combo năng lượng cho buổi sáng gồm 1 phần sữa chua granola và 1 ly sinh tố trái cây tươi. Bộ đôi hoàn hảo giúp bạn khởi đầu ngày mới đầy năng lượng.',
      isAvailable: true,
      isFeatured: true,
      sortOrder: 2,
    },
    // ── Nước Ép ───────────────────────────────────────────────
    {
      id: SEED_PRODUCT_IDS.DRK_ORANGE_JUICE,
      categoryId: SEED_CATEGORY_IDS.DRK_JUICE,
      name: 'Nước Ép Cam Tươi',
      description:
        'Nước ép cam vắt tươi tại chỗ 100% không thêm nước, không đường, không chất bảo quản. Sử dụng cam Valencia nhập khẩu nhiều nước, ngọt thanh tự nhiên.',
      isAvailable: true,
      isFeatured: false,
      sortOrder: 1,
    },
    // ── Sinh Tố ───────────────────────────────────────────────
    {
      id: SEED_PRODUCT_IDS.DRK_MANGO_SMOOTHIE,
      categoryId: SEED_CATEGORY_IDS.DRK_SMOOTHIE,
      name: 'Sinh Tố Xoài',
      description:
        'Sinh tố xoài xay đặc sánh từ xoài chín cây nguyên chất kết hợp sữa tươi không đường và đá xay. Không dùng syrup hay hương liệu nhân tạo — đậm đà hương xoài thiên nhiên.',
      isAvailable: true,
      isFeatured: false,
      sortOrder: 1,
    },
  ];

  for (const product of products) {
    await repo.upsert(product, ['id']);
  }

  console.log(`[seed] products — ${products.length} rows`);
}
