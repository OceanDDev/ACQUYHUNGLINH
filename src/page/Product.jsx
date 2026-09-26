import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Search, Filter, PhoneCall, X } from "lucide-react";

// Tất cả dữ liệu bên dưới là tĩnh — viết sẵn trong component,
// không gọi productService / categoryService nào cả.

const PHONE_TEL = "0985327910";
const PER_PAGE = 9;

const categories = [
  { id: "oto", name: "Ắc quy ô tô" },
  { id: "xetai", name: "Ắc quy xe tải & công nghiệp" },
  { id: "xemay", name: "Ắc quy xe máy & xe điện" },
];

const products = [
  { id: 1, slug: "gs-ns40zl", name: "GS NS40ZL", category: "oto", brand: "GS", voltage: "12V", capacity: "35Ah", image: "/img/pic4.jpg" },
  { id: 2, slug: "gs-ns60", name: "GS NS60", category: "oto", brand: "GS", voltage: "12V", capacity: "45Ah", image: "/img/pic5.jpg" },
  { id: 3, slug: "dongnai-din55", name: "Đồng Nai DIN55", category: "oto", brand: "Đồng Nai", voltage: "12V", capacity: "55Ah", image: "/img/pic6.jpg" },
  { id: 4, slug: "gs-n70", name: "GS N70", category: "oto", brand: "GS", voltage: "12V", capacity: "70Ah", image: "/img/pic7.jpg" },
  { id: 5, slug: "gs-n100", name: "GS N100", category: "xetai", brand: "GS", voltage: "12V", capacity: "100Ah", image: "/img/pic8.jpg" },
  { id: 6, slug: "gs-n150", name: "GS N150", category: "xetai", brand: "GS", voltage: "12V", capacity: "150Ah", image: "/img/pic9.jpg" },
  { id: 7, slug: "dongnai-n200", name: "Đồng Nai N200", category: "xetai", brand: "Đồng Nai", voltage: "12V", capacity: "200Ah", image: "/img/pic4.jpg" },
  { id: 8, slug: "gs-24v-n120", name: "GS 24V N120", category: "xetai", brand: "GS", voltage: "24V", capacity: "120Ah", image: "/img/pic5.jpg" },
  { id: 9, slug: "gs-gtz5s", name: "GS GTZ5S", category: "xemay", brand: "GS", voltage: "12V", capacity: "4Ah", image: "/img/pic6.jpg" },
  { id: 10, slug: "gs-gtz6v", name: "GS GTZ6V", category: "xemay", brand: "GS", voltage: "12V", capacity: "5Ah", image: "/img/pic7.jpg" },
  { id: 11, slug: "dongnai-gtz7s", name: "Đồng Nai GTZ7S", category: "xemay", brand: "Đồng Nai", voltage: "12V", capacity: "6Ah", image: "/img/pic8.jpg" },
  { id: 12, slug: "gs-xe-dien-12ah", name: "GS Xe điện 12Ah", category: "xemay", brand: "GS", voltage: "12V", capacity: "12Ah", image: "/img/pic9.jpg" },
];

const Sticker = ({ children }) => (
  <span className="inline-block bg-[#F5B400] text-[#14120D] text-sm font-bold px-3 py-1 -rotate-2 shadow-[3px_3px_0_#14120D]">
    {children}
  </span>
);

const Product = () => {
  const [searchInput, setSearchInput] = useState("");
  const [categoryId, setCategoryId] = useState(null);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = !categoryId || p.category === categoryId;
      const matchesSearch = p.name
        .toLowerCase()
        .includes(searchInput.trim().toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchInput, categoryId]);

  const lastPage = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const currentPage = Math.min(page, lastPage);
  const paginated = filtered.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE
  );

  const handleCategoryFilter = (id) => {
    setCategoryId((prev) => (prev === id ? null : id));
    setPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
    setPage(1);
  };

  const clearFilters = () => {
    setCategoryId(null);
    setSearchInput("");
    setPage(1);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const hasActiveFilters = categoryId || searchInput;

  return (
    <div className="bg-[#F3EFE4] text-[#14120D] min-h-screen pb-20">
      <Helmet>
        <title>Sản Phẩm Ắc Quy GS, Đồng Nai Chính Hãng | Ắc Quy Hưng Linh</title>
        <meta
          name="description"
          content="Danh mục ắc quy GS, Đồng Nai chính hãng tại Bình Dương: ắc quy ô tô, xe tải, xe máy. Đầy đủ mã bình N70, N100, N150, N200. Giao lắp tận nơi Tân Hiệp, Thủ Dầu Một, Bến Cát, Tân Uyên."
        />
      </Helmet>

      {/* PAGE HEADER */}
      <div className="bg-[#14120D] text-[#F3EFE4] py-14">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <Sticker>Danh mục sản phẩm</Sticker>
          <h1 className="font-['Anton'] text-4xl md:text-5xl mt-5 tracking-tight">
            Ắc quy GS &amp; Đồng Nai chính hãng
          </h1>
          <p className="text-[#F3EFE4]/70 max-w-2xl mx-auto mt-4">
            Đầy đủ dòng ắc quy cho ô tô, xe tải và xe máy — giao lắp tận nơi
            tại Tân Hiệp, Thủ Dầu Một, Bến Cát, Tân Uyên và Bình Dương.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 mt-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* SIDEBAR */}
          <aside className="lg:w-1/4 space-y-6">
            <div className="bg-white/60 p-6 border-l-4 border-[#F5B400]">
              <div className="flex items-center gap-2 font-bold mb-4">
                <Search size={18} className="text-[#B4451C]" />
                <span>Tìm kiếm</span>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Tìm sản phẩm..."
                  value={searchInput}
                  onChange={handleSearchChange}
                  className="w-full px-4 py-3 pr-10 border border-[#14120D]/15 bg-white focus:outline-none focus:border-[#F5B400] transition-colors"
                />
                <Search
                  size={16}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#14120D]/40"
                />
              </div>
            </div>

            <div className="bg-white/60 p-6 border-l-4 border-[#14120D]/15">
              <div className="flex items-center gap-2 font-bold mb-5">
                <Filter size={18} className="text-[#B4451C]" />
                <span>Danh mục</span>
              </div>
              <div className="space-y-3">
                {categories.map((category) => (
                  <label
                    key={category.id}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      className="w-4 h-4 accent-[#F5B400]"
                      checked={categoryId === category.id}
                      onChange={() => handleCategoryFilter(category.id)}
                    />
                    <span className="text-sm text-[#14120D]/70 group-hover:text-[#14120D] transition-colors">
                      {category.name}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="w-full flex items-center justify-center gap-2 bg-[#B4451C]/10 text-[#B4451C] py-3 px-4 font-bold text-sm hover:bg-[#B4451C]/15 transition-colors"
              >
                <X size={16} /> Xóa bộ lọc
              </button>
            )}
          </aside>

          {/* PRODUCT GRID */}
          <div className="lg:w-3/4">
            {hasActiveFilters && (
              <div className="mb-6 flex flex-wrap gap-2">
                {searchInput && (
                  <span className="bg-[#14120D] text-[#F3EFE4] px-4 py-1.5 text-sm font-medium flex items-center gap-2">
                    <Search size={14} /> "{searchInput}"
                  </span>
                )}
                {categoryId && (
                  <span className="bg-[#F5B400] text-[#14120D] px-4 py-1.5 text-sm font-bold">
                    {categories.find((c) => c.id === categoryId)?.name}
                  </span>
                )}
              </div>
            )}

            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-[#14120D]/50 text-lg">
                  Không tìm thấy sản phẩm nào
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {paginated.map((item) => (
                    <Link
                      to={`/chi-tiet-san-pham/${item.slug}`}
                      key={item.id}
                      className="bg-white/70 border border-[#14120D]/10 hover:border-[#F5B400] overflow-hidden group transition-colors flex flex-col"
                    >
                      <div className="relative bg-[#14120D]/5 h-36 md:h-48 flex items-center justify-center overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                        />
                        <span className="absolute top-2 left-2 bg-[#F5B400] text-[#14120D] px-2 py-0.5 text-[10px] font-bold">
                          {item.brand}
                        </span>
                      </div>

                      <div className="p-3 md:p-5 flex-grow flex flex-col">
                        <h3 className="text-sm md:text-lg font-bold mb-1 line-clamp-2 group-hover:text-[#B4451C] transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-[#B4451C] text-xs md:text-sm font-semibold mb-3">
                          {item.capacity} — {item.voltage}
                        </p>
                        <div className="mt-auto bg-[#14120D] group-hover:bg-[#B4451C] text-[#F3EFE4] text-center py-2 px-3 text-xs md:text-sm font-bold transition-colors">
                          Liên hệ báo giá
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {lastPage > 1 && (
                  <div className="mt-12 flex justify-center items-center gap-2">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`px-4 py-2 font-bold text-sm transition-colors ${
                        currentPage === 1
                          ? "bg-white/40 text-[#14120D]/30 cursor-not-allowed"
                          : "bg-white text-[#14120D] hover:bg-[#14120D] hover:text-[#F3EFE4] border border-[#14120D]/15"
                      }`}
                    >
                      ← Trước
                    </button>

                    <div className="flex gap-2">
                      {Array.from({ length: lastPage }, (_, i) => i + 1).map(
                        (p) => (
                          <button
                            key={p}
                            onClick={() => handlePageChange(p)}
                            className={`w-10 h-10 font-bold text-sm transition-colors ${
                              currentPage === p
                                ? "bg-[#F5B400] text-[#14120D]"
                                : "bg-white text-[#14120D] hover:bg-[#14120D]/5 border border-[#14120D]/15"
                            }`}
                          >
                            {p}
                          </button>
                        )
                      )}
                    </div>

                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === lastPage}
                      className={`px-4 py-2 font-bold text-sm transition-colors ${
                        currentPage === lastPage
                          ? "bg-white/40 text-[#14120D]/30 cursor-not-allowed"
                          : "bg-white text-[#14120D] hover:bg-[#14120D] hover:text-[#F3EFE4] border border-[#14120D]/15"
                      }`}
                    >
                      Sau →
                    </button>
                  </div>
                )}

                <div className="mt-6 text-center text-[#14120D]/60 text-sm">
                  Hiển thị <span className="font-bold">{paginated.length}</span>{" "}
                  trong tổng số{" "}
                  <span className="font-bold">{filtered.length}</span> sản phẩm
                  <span className="mx-2">•</span>
                  Trang <span className="font-bold">{currentPage}</span> /{" "}
                  {lastPage}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Nút gọi nổi — viết trực tiếp, không import component ngoài */}
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

export default Product;