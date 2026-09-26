import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  PhoneCall,
  MapPin,
  Clock,
  ShieldCheck,
  Bike,
  Truck,
  RefreshCw,
  ArrowUpRight,
  ArrowRight,
  Calendar,
  ChevronRight,
  Navigation,
  BatteryCharging,
} from "lucide-react";

const PHONE_DISPLAY = "0985 327 910";
const PHONE_TEL = "0985327910";
const ADDRESS = "Tổ 5, Khu phố Ông Đông, Tân Hiệp, Bình Dương";

// Tất cả dữ liệu bên dưới là tĩnh — viết sẵn trong component,
// không gọi API/service nào cả.

const slides = [
  {
    url: "/img/pic1.jpg",
    alt: "Cửa hàng ắc quy Hưng Linh tại Tân Hiệp, Bình Dương",
  },
  {
    url: "/img/pic2.jpg",
    alt: "Ắc quy ô tô, xe tải chính hãng GS, Đồng Nai tại Bình Dương",
  },
  {
    url: "/img/pic3.jpg",
    alt: "Cứu hộ ắc quy tận nơi tại Thủ Dầu Một, Bến Cát, Tân Uyên",
  },
];

const services = [
  {
    icon: Truck,
    title: "Ắc quy ô tô, xe tải & công nghiệp",
    text: "Phân phối chính hãng GS, Đồng Nai dòng công suất lớn cho xe tải, máy phát, container.",
  },
  {
    icon: Bike,
    title: "Ắc quy xe máy & xe điện",
    text: "Đủ dòng cho tay ga, xe số, xe điện — kiểm tra và lắp tại chỗ nhanh chóng.",
  },
  {
    icon: RefreshCw,
    title: "Thu cũ đổi mới ắc quy",
    text: "Định giá bình ắc quy cũ tận nơi, trợ giá cao, trừ trực tiếp vào hóa đơn.",
  },
];

const serviceAreas = [
  { name: "Tân Hiệp", note: "Trụ sở chính", eta: "Có mặt ngay" },
  { name: "Thủ Dầu Một", note: "Trung tâm thành phố", eta: "~20 phút" },
  { name: "Bến Cát", note: "Khu công nghiệp & dân cư", eta: "~25 phút" },
  { name: "Tân Uyên", note: "Thành phố & các xã lân cận", eta: "~30 phút" },
  { name: "Thuận An", note: "Nội thị & vùng ven", eta: "~15 phút" },
  { name: "Dĩ An", note: "Giáp ranh TP.HCM", eta: "~25 phút" },
];

const marqueeItems = [
  "Ắc quy Bình Dương",
  "Ắc quy Tân Uyên",
  "Ắc quy Thủ Dầu Một",
  "Ắc quy Bến Cát",
  "Ắc quy Tân Hiệp",
  "Cứu hộ tận nơi 24/7",
];

const stats = [
  { value: "10+", label: "Năm phân phối ắc quy tại Bình Dương" },
  { value: "5.000+", label: "Khách hàng được cứu hộ & lắp đặt" },
  { value: "15'", label: "Thời gian có mặt trung bình" },
];

// Tin tức tĩnh — thay nội dung/ảnh thật vào đây khi cần,
// không có fetch, không có loading state.
const newsItems = [
  {
    id: 1,
    slug: "dau-hieu-nhan-biet-ac-quy-yeu",
    title: "5 dấu hiệu nhận biết ắc quy sắp hết",
    excerpt:
      "Xe khởi động chậm, đèn pha yếu, còi kêu nhỏ... là những dấu hiệu cho thấy ắc quy của bạn cần được kiểm tra sớm.",
    date: "12/09/2026",
    image: "/img/pic4.jpg",
  },
  {
    id: 2,
    slug: "cach-cham-soc-ac-quy-mua-mua",
    title: "Cách chăm sóc ắc quy ô tô trong mùa mưa",
    excerpt:
      "Độ ẩm cao và nhiệt độ thay đổi thất thường có thể làm giảm tuổi thọ ắc quy — đây là những lưu ý cần biết.",
    date: "28/08/2026",
    image: "/img/pic5.jpg",
  },
  {
    id: 3,
    slug: "nen-chon-ac-quy-gs-hay-dong-nai",
    title: "Nên chọn ắc quy GS hay Đồng Nai?",
    excerpt:
      "So sánh nhanh hai dòng ắc quy phổ biến nhất tại Bình Dương để chọn được sản phẩm phù hợp với xe của bạn.",
    date: "05/08/2026",
    image: "/img/pic6.jpg",
  },
];

const Sticker = ({ children }) => (
  <span className="inline-block bg-[#F5B400] text-[#14120D] text-sm font-bold px-3 py-1 -rotate-2 shadow-[3px_3px_0_#14120D]">
    {children}
  </span>
);

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-[#F3EFE4] text-[#14120D] min-h-screen overflow-x-hidden selection:bg-[#F5B400] selection:text-[#14120D]">
      <Helmet>
        <title>
          Ắc Quy Hưng Linh | Ắc Quy Bình Dương – Tân Uyên, Thủ Dầu Một, Bến Cát, Tân Hiệp
        </title>
        <meta
          name="description"
          content="Đại lý ắc quy Bình Dương chính hãng GS, Đồng Nai. Cứu hộ, kích bình, thay ắc quy tận nơi 24/7 tại Tân Hiệp, Thủ Dầu Một, Bến Cát, Tân Uyên, Thuận An, Dĩ An."
        />
        <meta
          name="keywords"
          content="ắc quy bình dương, ắc quy tân uyên, ắc quy thủ dầu một, ắc quy bến cát, ắc quy tân hiệp, đại lý ắc quy gs, ắc quy đồng nai, cứu hộ ắc quy"
        />
        <link rel="canonical" href="https://acquyhunglinh.com/" />
      </Helmet>

      <style>{`
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(245, 180, 0, 0.55); }
          50% { box-shadow: 0 0 0 14px rgba(245, 180, 0, 0); }
        }
        .animate-pulse-glow { animation: pulse-glow 2.2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        @keyframes hl-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .terminal-divider {
          height: 2px;
          background: repeating-linear-gradient(90deg, #14120D 0 14px, transparent 14px 24px);
          opacity: 0.15;
        }
      `}</style>

      {/* TOP HOTLINE BAR */}
      <div className="bg-[#14120D] text-[#F3EFE4]">
        <div className="max-w-6xl mx-auto px-5 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-[#F3EFE4]/75 text-center sm:text-left">
            Cứu hộ ắc quy Bình Dương tận nơi — {ADDRESS}
          </p>
          <a
            href={`tel:${PHONE_TEL}`}
            className="animate-pulse-glow shrink-0 bg-[#F5B400] text-[#14120D] pl-4 pr-5 py-2 rounded-full font-extrabold flex items-center gap-2 hover:bg-white transition-colors"
          >
            <PhoneCall size={18} />
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>

      {/* HERO SLIDESHOW */}
      <section className="relative h-[560px] md:h-[640px] overflow-hidden bg-[#14120D]">
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={slide.url}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.url}
                alt={slide.alt}
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#14120D] via-[#14120D]/60 to-transparent" />
            </div>
          ))}
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === currentSlide ? "w-8 bg-[#F5B400]" : "w-3 bg-white/40"
              }`}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto h-full flex items-center px-5">
          <div className="max-w-xl space-y-6">
            <div className="flex items-center gap-2 text-[#F5B400]">
              <BatteryCharging size={22} />
              <span className="text-sm font-semibold">
                Đại lý ắc quy Bình Dương chính hãng
              </span>
            </div>

            <h1 className="font-['Anton'] text-[#F3EFE4] text-4xl sm:text-5xl md:text-[3.4rem] leading-[1.05] tracking-tight">
              Ắc quy Hưng Linh ,
              <br />
              khởi động thật —{" "}
              <span className="text-[#F5B400]">không khởi động ảo.</span>
            </h1>

            <p className="text-[#F3EFE4]/75 text-base md:text-lg leading-relaxed">
              Phân phối ắc quy GS, Đồng Nai chính hãng và cứu hộ tận nơi cho
              ắc quy Tân Hiệp, ắc quy Thủ Dầu Một, ắc quy Bến Cát và ắc quy
              Tân Uyên trong vòng 30 phút.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => navigate("/san-pham")}
                className="bg-[#F5B400] text-[#14120D] px-7 py-3.5 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-white transition-colors group"
              >
                Xem sản phẩm
                <ChevronRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <a
                href={`tel:${PHONE_TEL}`}
                className="border border-[#F3EFE4]/25 text-[#F3EFE4] px-7 py-3.5 rounded-full font-bold text-center hover:border-[#F3EFE4] transition-colors"
              >
                Tư vấn miễn phí
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* KEYWORD MARQUEE */}
      <div className="bg-[#F5B400] text-[#14120D] overflow-hidden py-3 border-y-2 border-[#14120D]">
        <div className="flex w-max animate-[hl-marquee_28s_linear_infinite]">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center text-sm font-bold">
              {marqueeItems.map((t) => (
                <span key={t} className="px-6 whitespace-nowrap flex items-center gap-6">
                  {t}
                  <span className="w-6 h-[2px] bg-[#14120D]/40" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section id="san-pham" className="max-w-6xl mx-auto px-5 py-20">
        <div className="max-w-xl mb-12">
          <Sticker>Danh mục dịch vụ</Sticker>
          <h2 className="font-['Anton'] text-4xl md:text-5xl mt-4 mb-4 tracking-tight">
            Ắc quy Bình Dương chính hãng, GS & Đồng Nai
          </h2>
          <p className="text-[#14120D]/70 leading-relaxed">
            Giải pháp năng lượng cho ô tô, xe tải và thiết bị công nghiệp.
            Hàng chính hãng 100%, bảo hành dài hạn, lắp đặt tại chỗ.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div
            className="md:col-span-2 relative min-h-[300px] flex items-end p-8 bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: "url(/img/pic2.jpg)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#14120D] via-[#14120D]/50 to-transparent" />
            <div className="relative z-10">
              <ShieldCheck className="text-[#F5B400] mb-3" size={32} />
              <h3 className="text-[#F3EFE4] text-2xl md:text-3xl font-bold mb-2">
                Ắc quy ô tô & xe tải chuyên dụng
              </h3>
              <p className="text-[#F3EFE4]/80 text-sm md:text-base max-w-md leading-relaxed">
                Đủ dung lượng từ xe con đến container. Kiểm tra hệ thống sạc
                và lắp đặt hoàn toàn miễn phí.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {services.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="bg-white/50 border-l-4 border-[#14120D]/15 hover:border-[#F5B400] p-6 transition-colors"
              >
                <Icon size={22} className="text-[#B4451C] mb-3" />
                <h3 className="font-bold text-lg mb-1">{title}</h3>
                <p className="text-[#14120D]/70 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-5">
        <div className="terminal-divider" />
      </div>

      {/* SERVICE AREA */}
      <section className="max-w-6xl mx-auto px-5 py-20">
        <div className="max-w-xl mb-10">
          <Sticker>Khu vực phục vụ</Sticker>
          <h2 className="font-['Anton'] text-4xl md:text-5xl mt-4 mb-4 tracking-tight">
            Cứu hộ ắc quy tận nơi khắp Bình Dương
          </h2>
          <p className="text-[#14120D]/70 leading-relaxed">
            Từ Tân Hiệp, đội kỹ thuật có mặt nhanh tại Thủ Dầu Một, Bến Cát,
            Tân Uyên và các khu vực lân cận — gọi trước, chúng tôi lên đường
            ngay.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {serviceAreas.map(({ name, note, eta }) => (
            <div
              key={name}
              className="flex items-center justify-between gap-3 bg-[#14120D] text-[#F3EFE4] px-5 py-4"
            >
              <div className="flex items-start gap-3">
                <Navigation size={18} className="text-[#F5B400] mt-0.5 shrink-0" />
                <div>
                  <p className="font-bold">Ắc quy {name}</p>
                  <p className="text-[#F3EFE4]/60 text-xs">{note}</p>
                </div>
              </div>
              <span className="text-[#F5B400] text-sm font-bold whitespace-nowrap">
                {eta}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-6xl mx-auto px-5 pb-20">
        <div className="grid sm:grid-cols-3 gap-4">
          {stats.map(({ value, label }) => (
            <div key={label} className="bg-white/50 border-t-4 border-[#F5B400] p-8">
              <p className="font-['Anton'] text-4xl md:text-5xl mb-3">{value}</p>
              <p className="text-[#14120D]/70 font-medium text-sm md:text-base">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* NEWS SECTION — dữ liệu tĩnh, không fetch API */}
      <section className="py-20 bg-[#14120D] text-[#F3EFE4]">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex items-center justify-between mb-12 gap-4">
            <div>
              <Sticker>Tin tức</Sticker>
              <h2 className="font-['Anton'] text-3xl md:text-4xl mt-4 mb-2 tracking-tight">
                Tin tức mới nhất
              </h2>
              <p className="text-[#F3EFE4]/60">
                Cập nhật kiến thức về ắc quy Bình Dương
              </p>
            </div>
            <button
              onClick={() => navigate("/tin-tuc")}
              className="hidden md:flex items-center gap-2 text-[#F5B400] font-bold hover:text-white transition-colors group shrink-0"
            >
              Xem tất cả
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <article
                key={item.id}
                onClick={() => navigate(`/tin-tuc/${item.slug}`)}
                className="bg-white/5 hover:bg-white/10 overflow-hidden transition-colors cursor-pointer group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-[#F3EFE4]/50 mb-3">
                    <Calendar size={16} />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-3 line-clamp-2 group-hover:text-[#F5B400] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#F3EFE4]/60 text-sm line-clamp-3 mb-4">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center text-[#F5B400] font-semibold gap-2 group-hover:gap-3 transition-all">
                    Đọc thêm
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="md:hidden text-center mt-8">
            <button
              onClick={() => navigate("/tin-tuc")}
              className="inline-flex items-center gap-2 text-[#F5B400] font-bold"
            >
              Xem tất cả tin tức
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section className="bg-[#14120D] py-20 text-[#F3EFE4] border-t border-[#F3EFE4]/10">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Sticker>Liên hệ khẩn cấp</Sticker>
            <h2 className="font-['Anton'] text-4xl md:text-5xl mt-4 mb-5 leading-tight tracking-tight">
              Cần cứu hộ ắc quy Bình Dương?
              <br />
              <span className="text-[#F5B400]">Gọi ngay cho chúng tôi.</span>
            </h2>
            <p className="text-[#F3EFE4]/70 mb-8 max-w-md leading-relaxed">
              Đội kỹ thuật trực sẵn sàng hỗ trợ tại Tân Hiệp, Thuận An, Bến
              Cát, Tân Uyên, Thủ Dầu Một và Dĩ An.
            </p>

            <a
              href={`tel:${PHONE_TEL}`}
              className="animate-pulse-glow inline-flex items-center gap-3 bg-[#F5B400] text-[#14120D] px-8 py-4 rounded-full font-extrabold text-xl mb-8 hover:bg-white transition-colors"
            >
              <PhoneCall size={24} />
              {PHONE_DISPLAY}
            </a>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 bg-white/5 p-3.5 border-l-2 border-[#F5B400]">
                <MapPin size={18} className="text-[#F5B400] shrink-0 mt-0.5" />
                <span>{ADDRESS}</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 p-3.5 border-l-2 border-[#F3EFE4]/20">
                <Clock size={18} className="text-[#F5B400] shrink-0" />
                <span>7:00 – 20:00, kể cả Chủ Nhật & Lễ</span>
              </div>
            </div>
          </div>

          <div className="bg-[#F3EFE4] text-[#14120D] p-8 flex flex-col items-center justify-center text-center gap-4 shadow-[8px_8px_0_#F5B400]">
            <MapPin size={32} className="text-[#B4451C]" />
            <p className="font-bold text-lg">{ADDRESS}</p>
            <p className="text-[#14120D]/60 text-xs max-w-xs">
              Nhấn để mở chỉ đường Google Maps đến cửa hàng nhanh nhất.
            </p>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#14120D] text-[#F3EFE4] px-6 py-3 rounded-full font-bold text-sm mt-2 hover:bg-[#B4451C] transition-colors"
            >
              Xem bản đồ chỉ đường <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#14120D] text-[#F3EFE4]/50 text-xs py-6 border-t border-[#F3EFE4]/10">
        <div className="max-w-6xl mx-auto px-5 flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Ắc Quy Hưng Linh — Ắc quy Bình Dương</p>
          <p>Phục vụ: Tân Hiệp · Thủ Dầu Một · Bến Cát · Tân Uyên · Thuận An · Dĩ An</p>
        </div>
      </footer>

      {/* Nút gọi nổi — viết trực tiếp, không import component ngoài */}
      <a
        href={`tel:${PHONE_TEL}`}
        aria-label="Gọi ngay"
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-[#F5B400] text-[#14120D] flex items-center justify-center shadow-xl animate-pulse-glow"
      >
        <PhoneCall size={24} />
      </a>
    </main>
  );
};

export default Home;