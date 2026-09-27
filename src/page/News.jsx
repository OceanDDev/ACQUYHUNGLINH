import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Calendar,
  ChevronRight,
  Search,
  PhoneCall,
} from "lucide-react";
import newsData from "../data/news.json";

const PHONE_DISPLAY = "0985 327 910";
const PHONE_TEL = "0985327910";

const Sticker = ({ children }) => (
  <span className="inline-block bg-[#F5B400] text-[#14120D] text-sm font-bold px-3 py-1 -rotate-2 shadow-[3px_3px_0_#14120D]">
    {children}
  </span>
);

const News = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNews = newsData.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleNewsClick = (slug) => {
    navigate(`/tin-tuc/${slug}`);
  };

  return (
    <main className="bg-[#F3EFE4] text-[#14120D] min-h-screen selection:bg-[#F5B400] selection:text-[#14120D]">
      <Helmet>
        <title>Tin Tức Ắc Quy | Ắc Quy Hưng Linh — Bình Dương</title>
        <meta
          name="description"
          content="Cập nhật tin tức, kinh nghiệm bảo dưỡng và chọn mua ắc quy ô tô, xe máy tại Bình Dương từ Ắc Quy Hưng Linh."
        />
        <link rel="canonical" href="https://acquyhunglinh.com/tin-tuc" />
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

      {/* HERO */}
      <section className="relative bg-[#14120D] text-[#F3EFE4] py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none [background-image:repeating-linear-gradient(90deg,#F3EFE4_0_1px,transparent_1px_28px)]" />
        <div className="relative max-w-6xl mx-auto px-5">
          <Sticker>Tin tức</Sticker>
          <h1 className="font-['Anton'] text-4xl md:text-5xl mt-4 mb-4 tracking-tight">
            Tin Tức & Kiến Thức Ắc Quy
          </h1>
          <p className="text-[#F3EFE4]/70 text-base md:text-lg max-w-xl leading-relaxed">
            Kinh nghiệm chọn mua, bảo dưỡng và xử lý sự cố ắc quy — cập nhật
            từ đội kỹ thuật Ắc Quy Hưng Linh tại Bình Dương.
          </p>
        </div>
      </section>

      {/* SEARCH BAR */}
      <section className="max-w-6xl mx-auto px-5 -mt-7 relative z-10">
        <div className="bg-white shadow-[6px_6px_0_#14120D] p-5 max-w-2xl">
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#14120D]/40"
              size={20}
            />
            <input
              type="text"
              placeholder="Tìm kiếm tin tức..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-[#14120D]/15 focus:ring-2 focus:ring-[#F5B400] focus:border-transparent outline-none rounded-none"
            />
          </div>
        </div>
      </section>

      {/* NEWS GRID */}
      <section className="max-w-6xl mx-auto px-5 py-14">
        {filteredNews.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-[#14120D]/50 text-lg">
              Không tìm thấy tin tức phù hợp
            </p>
          </div>
        ) : (
          <>
            {/* FEATURED — bài đầu tiên */}
            {filteredNews[0] && (
              <div
                onClick={() => handleNewsClick(filteredNews[0].slug)}
                className="bg-white shadow-[8px_8px_0_#F5B400] overflow-hidden mb-12 cursor-pointer hover:shadow-[10px_10px_0_#F5B400] transition-all group"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-full overflow-hidden">
                    <img
                      src={filteredNews[0].image}
                      alt={filteredNews[0].title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Sticker>Tin nổi bật</Sticker>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-[#14120D]/50 text-sm mb-3">
                      <Calendar size={16} />
                      <span>{filteredNews[0].date}</span>
                    </div>
                    <h2 className="font-['Anton'] text-2xl md:text-3xl mb-4 tracking-tight group-hover:text-[#B4451C] transition-colors">
                      {filteredNews[0].title}
                    </h2>
                    <p className="text-[#14120D]/70 line-clamp-3 mb-6 leading-relaxed">
                      {filteredNews[0].excerpt}
                    </p>
                    <div className="flex items-center text-[#B4451C] font-bold group-hover:gap-2 transition-all">
                      Đọc tiếp
                      <ChevronRight
                        size={20}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* GRID — các tin còn lại */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNews.slice(1).map((item) => (
                <article
                  key={item.id}
                  onClick={() => handleNewsClick(item.slug)}
                  className="bg-white/60 border-l-4 border-[#14120D]/15 hover:border-[#F5B400] overflow-hidden cursor-pointer transition-colors group"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-[#14120D]/50 text-sm mb-3">
                      <Calendar size={14} />
                      <span>{item.date}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-3 line-clamp-2 group-hover:text-[#B4451C] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[#14120D]/70 text-sm line-clamp-3 mb-4 leading-relaxed">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center text-[#B4451C] font-semibold text-sm group-hover:gap-2 transition-all">
                      Xem chi tiết
                      <ChevronRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </section>

    </main>
  );
};

export default News;