import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  PhoneCall,
  ChevronRight,
  BatteryCharging,
  ShieldCheck,
  MapPin,
} from "lucide-react";
// Dữ liệu tĩnh — cùng nguồn với Product.jsx, không gọi API nào cả.
import productsData from "../data/products.json";

const PHONE_DISPLAY = "0985 327 910";
const PHONE_TEL = "0985327910";

const { categories, products } = productsData;

const Sticker = ({ children }) => (
  <span className="inline-block bg-[#F5B400] text-[#14120D] text-sm font-bold px-3 py-1 -rotate-2 shadow-[3px_3px_0_#14120D]">
    {children}
  </span>
);

const ProductDetail = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="bg-[#F3EFE4] text-[#14120D] min-h-screen flex items-center justify-center px-5">
        <div className="text-center">
          <p className="font-['Anton'] text-3xl mb-3">Không tìm thấy sản phẩm</p>
          <p className="text-[#14120D]/60 mb-6">
            Mã sản phẩm này không tồn tại hoặc đã bị gỡ bỏ.
          </p>
          <Link
            to="/san-pham"
            className="inline-flex items-center gap-2 bg-[#F5B400] text-[#14120D] px-6 py-3 rounded-full font-bold"
          >
            ← Quay lại danh mục sản phẩm
          </Link>
        </div>
      </div>
    );
  }

  const category = categories.find((c) => c.id === product.category);

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4);

  return (
    <div className="bg-[#F3EFE4] text-[#14120D] min-h-screen pb-20">
      <Helmet>
        <title>
          {product.name} | Ắc Quy Hưng Linh – Đại lý ắc quy Bình Dương
        </title>
        <meta
          name="description"
          content={`${product.name}${
            category ? ` — ${category.name}` : ""
          }. Ắc quy chính hãng, giao lắp tận nơi tại Tân Hiệp, Thủ Dầu Một, Bến Cát, Tân Uyên, Bình Dương. Gọi ${PHONE_DISPLAY} để được báo giá.`}
        />
      </Helmet>

      {/* BREADCRUMB */}
      <div className="bg-[#14120D] text-[#F3EFE4]/70 py-4">
        <div className="max-w-6xl mx-auto px-5 flex items-center gap-2 text-sm flex-wrap">
          <Link to="/" className="hover:text-[#F5B400] transition-colors">
            Trang chủ
          </Link>
          <ChevronRight size={14} />
          <Link
            to="/san-pham"
            className="hover:text-[#F5B400] transition-colors"
          >
            Sản phẩm
          </Link>
          {category && (
            <>
              <ChevronRight size={14} />
              <span>{category.name}</span>
            </>
          )}
          <ChevronRight size={14} />
          <span className="text-[#F5B400] font-semibold">{product.name}</span>
        </div>
      </div>

      {/* PRODUCT MAIN */}
      <div className="max-w-6xl mx-auto px-5 mt-10">
        <div className="grid md:grid-cols-2 gap-10">
          {/* IMAGE */}
          <div className="bg-white/60 border border-[#14120D]/10 flex items-center justify-center overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full max-h-[440px] object-contain p-6"
            />
          </div>

          {/* INFO */}
          <div>
            {product.brand && <Sticker>{product.brand}</Sticker>}
            <h1 className="font-['Anton'] text-3xl md:text-4xl mt-4 mb-2 tracking-tight">
              {product.name}
            </h1>
            {category && (
              <p className="text-[#B4451C] font-semibold mb-6">
                {category.name}
              </p>
            )}

            <div className="grid grid-cols-2 gap-3 mb-8">
              <div className="bg-white/60 border-l-4 border-[#F5B400] p-4">
                <p className="text-xs text-[#14120D]/50 mb-1">Điện áp</p>
                <p className="font-bold text-lg">{product.voltage || "—"}</p>
              </div>
              <div className="bg-white/60 border-l-4 border-[#14120D]/15 p-4">
                <p className="text-xs text-[#14120D]/50 mb-1">Dung lượng</p>
                <p className="font-bold text-lg">
                  {product.capacity || "Liên hệ"}
                </p>
              </div>
            </div>

            <div className="bg-[#14120D] text-[#F3EFE4] p-6 mb-6">
              <p className="text-[#F3EFE4]/60 text-sm mb-1">Giá bán</p>
              <p className="font-['Anton'] text-2xl text-[#F5B400] mb-4">
                LIÊN HỆ BÁO GIÁ TỐT NHẤT
              </p>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 bg-[#F5B400] text-[#14120D] px-6 py-3 rounded-full font-bold"
              >
                <PhoneCall size={18} />
                Gọi ngay {PHONE_DISPLAY}
              </a>
            </div>

            <div className="space-y-3 text-sm text-[#14120D]/70">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#B4451C]" />
                Hàng chính hãng, đầy đủ tem bảo hành
              </div>
              <div className="flex items-center gap-2">
                <BatteryCharging size={16} className="text-[#B4451C]" />
                Kiểm tra hệ thống sạc, lắp đặt tại chỗ miễn phí
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-[#B4451C]" />
                Giao tận nơi: Tân Hiệp, Thủ Dầu Một, Bến Cát, Tân Uyên, Thuận
                An, Dĩ An
              </div>
            </div>
          </div>
        </div>

        {/* RELATED PRODUCTS */}
        {related.length > 0 && (
          <div className="mt-20">
            <Sticker>Cùng danh mục</Sticker>
            <h2 className="font-['Anton'] text-2xl md:text-3xl mt-4 mb-8 tracking-tight">
              Sản phẩm liên quan
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((item) => (
                <Link
                  to={`/chi-tiet-san-pham/${item.slug}`}
                  key={item.id}
                  className="bg-white/70 border border-[#14120D]/10 hover:border-[#F5B400] overflow-hidden group transition-colors flex flex-col"
                >
                  <div className="relative bg-[#14120D]/5 h-32 md:h-40 flex items-center justify-center overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {item.brand && (
                      <span className="absolute top-2 left-2 bg-[#F5B400] text-[#14120D] px-2 py-0.5 text-[10px] font-bold">
                        {item.brand}
                      </span>
                    )}
                  </div>
                  <div className="p-3 md:p-4">
                    <h3 className="text-sm font-bold line-clamp-2 group-hover:text-[#B4451C] transition-colors">
                      {item.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Nút gọi nổi */}
      <a
        href={`tel:${PHONE_TEL}`}
        aria-label="Gọi ngay"
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-[#F5B400] text-[#14120D] flex items-center justify-center shadow-xl"
      >
        <PhoneCall size={24} />
      </a>
    </div>
  );
};

export default ProductDetail;