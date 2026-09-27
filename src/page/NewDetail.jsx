import { useNavigate, useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Calendar,
  ChevronRight,
  ChevronLeft,
  PhoneCall,
  MapPin,
  ArrowRight,
} from "lucide-react";
import newsData from "../data/news.json";

const PHONE_DISPLAY = "0985 327 910";
const PHONE_TEL = "0985327910";
const ADDRESS = "Tổ 5, Khu phố Ông Đông, Tân Hiệp, Bình Dương";

const Sticker = ({ children }) => (
  <span className="inline-block bg-[#F5B400] text-[#14120D] text-sm font-bold px-3 py-1 -rotate-2 shadow-[3px_3px_0_#14120D]">
    {children}
  </span>
);

const NewsDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const article = newsData.find((item) => item.slug === slug);

  // Không tìm thấy bài viết
  if (!article) {
    return (
      <main className="bg-[#F3EFE4] text-[#14120D] min-h-screen flex items-center justify-center px-5">
        <Helmet>
          <title>Không tìm thấy bài viết | Ắc Quy Hưng Linh</title>
        </Helmet>
        <div className="text-center max-w-md">
          <p className="font-['Anton'] text-3xl mb-4">
            Không tìm thấy bài viết
          </p>
          <p className="text-[#14120D]/60 mb-8">
            Bài viết bạn tìm có thể đã bị xóa hoặc đường dẫn không đúng.
          </p>
          <button
            onClick={() => navigate("/tin-tuc")}
            className="inline-flex items-center gap-2 bg-[#F5B400] text-[#14120D] px-6 py-3 rounded-full font-bold hover:bg-[#14120D] hover:text-[#F3EFE4] transition-colors"
          >
            <ChevronLeft size={18} />
            Quay lại trang tin tức
          </button>
        </div>
      </main>
    );
  }

  const relatedNews = newsData
    .filter((item) => item.slug !== article.slug)
    .slice(0, 3);

  return (
    <main className="bg-[#F3EFE4] text-[#14120D] min-h-screen selection:bg-[#F5B400] selection:text-[#14120D]">
      <Helmet>
        <title>{article.title} | Ắc Quy Hưng Linh</title>
        <meta name="description" content={article.excerpt} />
        <link
          rel="canonical"
          href={`https://acquyhunglinh.com/tin-tuc/${article.slug}`}
        />
      </Helmet>

      {/* TOP HOTLINE BAR */}
      <div className="bg-[#14120D] text-[#F3EFE4]">
        <div className="max-w-6xl mx-auto px-5 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-[#F3EFE4]/75 text-center sm:text-left">
            Cứu hộ ắc quy Bình Dương tận nơi — gọi là có mặt
          </p>
          <a
            href={`tel:${PHONE_TEL}`}
            className="shrink-0 bg-[#F5B400] text-[#14120D] pl-4 pr-5 py-2 rounded-full font-extrabold flex items-center gap-2 hover:bg-white transition-colors"
          >
            <PhoneCall size={18} />
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>

      {/* BREADCRUMB */}
      <div className="max-w-4xl mx-auto px-5 pt-8">
        <div className="flex items-center gap-2 text-sm text-[#14120D]/50 flex-wrap">
          <Link to="/" className="hover:text-[#B4451C] transition-colors">
            Trang chủ
          </Link>
          <ChevronRight size={14} />
          <Link
            to="/tin-tuc"
            className="hover:text-[#B4451C] transition-colors"
          >
            Tin tức
          </Link>
          <ChevronRight size={14} />
          <span className="text-[#14120D]/70 line-clamp-1">
            {article.title}
          </span>
        </div>
      </div>

      {/* ARTICLE HEADER */}
      <article className="max-w-4xl mx-auto px-5 py-8">
        <Sticker>Tin tức</Sticker>
        <h1 className="font-['Anton'] text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.1] mt-4 mb-5 tracking-tight">
          {article.title}
        </h1>
        <div className="flex items-center gap-2 text-[#14120D]/50 text-sm mb-8">
          <Calendar size={16} />
          <span>{article.date}</span>
        </div>

        <div className="w-full h-64 md:h-96 overflow-hidden shadow-[8px_8px_0_#F5B400] mb-10">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* NỘI DUNG */}
        <div className="space-y-5 text-[#14120D]/85 text-base md:text-lg leading-relaxed">
          {article.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* CTA GIỮA BÀI */}
        <div className="mt-12 bg-[#14120D] text-[#F3EFE4] p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[8px_8px_0_#F5B400]">
          <div>
            <p className="font-['Anton'] text-2xl mb-2 tracking-tight">
              Cần hỗ trợ ắc quy ngay?
            </p>
            <p className="text-[#F3EFE4]/70 text-sm flex items-center gap-2">
              <MapPin size={14} className="text-[#F5B400] shrink-0" />
              {ADDRESS}
            </p>
          </div>
          <a
            href={`tel:${PHONE_TEL}`}
            className="shrink-0 inline-flex items-center gap-2 bg-[#F5B400] text-[#14120D] px-6 py-3.5 rounded-full font-extrabold hover:bg-white transition-colors"
          >
            <PhoneCall size={20} />
            {PHONE_DISPLAY}
          </a>
        </div>

        {/* QUAY LẠI */}
        <button
          onClick={() => navigate("/tin-tuc")}
          className="mt-10 inline-flex items-center gap-2 font-bold text-[#B4451C] hover:gap-3 transition-all"
        >
          <ChevronLeft size={18} />
          Quay lại danh sách tin tức
        </button>
      </article>

      {/* BÀI VIẾT LIÊN QUAN */}
      {relatedNews.length > 0 && (
        <section className="py-16 bg-[#14120D] text-[#F3EFE4]">
          <div className="max-w-6xl mx-auto px-5">
            <div className="flex items-center justify-between mb-10 gap-4">
              <div>
                <Sticker>Có thể bạn quan tâm</Sticker>
                <h2 className="font-['Anton'] text-2xl md:text-3xl mt-4 tracking-tight">
                  Bài viết liên quan
                </h2>
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

            <div className="grid md:grid-cols-3 gap-6">
              {relatedNews.map((item) => (
                <article
                  key={item.id}
                  onClick={() => navigate(`/tin-tuc/${item.slug}`)}
                  className="bg-white/5 hover:bg-white/10 overflow-hidden transition-colors cursor-pointer group"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-[#F3EFE4]/50 mb-3">
                      <Calendar size={14} />
                      <span>{item.date}</span>
                    </div>
                    <h3 className="text-base font-bold mb-2 line-clamp-2 group-hover:text-[#F5B400] transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center text-[#F5B400] font-semibold text-sm gap-2 group-hover:gap-3 transition-all">
                      Đọc thêm
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

    </main>
  );
};

export default NewsDetail;