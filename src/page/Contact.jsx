import { PhoneCall, MapPin, Clock, ExternalLink, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";

const PHONE_DISPLAY = "0985 327 910";
const PHONE_TEL = "0985327910";
const ADDRESS = "Tổ 5, Khu phố Ông Đông, Tân Hiệp, Bình Dương";

// Link mở trực tiếp Google Maps (đúng địa điểm "Ắc quy Hưng Linh" bạn cung cấp)
const mapLink =
  "https://www.google.com/maps?vet=10CAAQoqAOahcKEwiAkKmfi46XAxUAAAAAHQAAAAAQBw..i&udm&fvr=1&pvq=Cg0vZy8xMXg3cGhwdmt5IhkKE-G6r2MgcXV5IGjGsG5nIGxpbmgQAhgD&lqi=ChPhuq9jIHF1eSBoxrBuZyBsaW5oSL3U69eevICACFoxEAAQARACEAMYABgBGAIYAyIT4bqvYyBxdXkgaMawbmcgbGluaCoKCAIQABABEAIQA5IBFWNhcl9hY2Nlc3Nvcmllc19zdG9yZQ&cs=1&um=1&ie=UTF-8&fb=1&gl=vn&sa=X&ftid=0x3174d1d92165c965:0x4f0c430a91dcfaa9";

// Link nhúng iframe — dùng địa chỉ để nhúng ổn định, không cần API key.
// Nếu bạn có link "Chia sẻ > Nhúng bản đồ" riêng từ Google Maps cho đúng
// điểm ghim này, thay src bên dưới bằng link đó sẽ chính xác hơn.
const googleMapEmbed =
  "https://www.google.com/maps?q=" +
  encodeURIComponent("Ắc quy Hưng Linh, " + ADDRESS) +
  "&output=embed";

const Contacts = () => {
  return (
    <main className="bg-[#F3EFE4] text-[#14120D] min-h-screen pb-20">
      <Helmet>
        <title>Liên Hệ & Chỉ Đường | Ắc Quy Hưng Linh – Bình Dương</title>
        <meta
          name="description"
          content="Địa chỉ, số điện thoại và bản đồ chỉ đường đến Ắc Quy Hưng Linh — đại lý ắc quy GS, Đồng Nai chính hãng tại Tân Hiệp, Bình Dương."
        />
      </Helmet>

      {/* HEADER */}
      <section className="bg-[#14120D] py-16 px-5 text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-['Anton'] text-4xl md:text-5xl text-[#F3EFE4] mb-2 tracking-tight">
            Liên hệ &amp; chỉ đường
          </h1>
          <p className="text-[#F5B400] font-bold uppercase tracking-widest text-xs">
            Ắc quy chính hãng Hưng Linh — Tân Hiệp, Bình Dương
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* CỘT TRÁI: THÔNG TIN LIÊN HỆ */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white/70 p-8 border-l-4 border-[#F5B400] shadow-sm">
              <h2 className="font-['Anton'] text-2xl mb-8 tracking-tight">
                Thông tin liên hệ
              </h2>

              <div className="space-y-6">
                {/* Hotline */}
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="flex items-center gap-4 bg-[#14120D] p-5 group hover:bg-[#B4451C] transition-colors"
                >
                  <div className="bg-[#F5B400] p-3 text-[#14120D] shrink-0 rounded-full">
                    <PhoneCall size={22} className="animate-pulse" />
                  </div>
                  <div>
                    <p className="text-[#F3EFE4]/60 text-[10px] font-black uppercase">
                      Cứu hộ 24/7
                    </p>
                    <p className="text-2xl font-black text-[#F3EFE4] tracking-tight">
                      {PHONE_DISPLAY}
                    </p>
                  </div>
                </a>

                {/* Địa chỉ */}
                <div className="flex items-start gap-4">
                  <MapPin className="text-[#B4451C] shrink-0 mt-1" size={22} />
                  <div>
                    <p className="text-[#14120D]/40 text-[10px] font-black uppercase">
                      Vị trí
                    </p>
                    <p className="font-bold leading-snug">{ADDRESS}</p>
                  </div>
                </div>

                {/* Giờ làm việc */}
                <div className="flex items-start gap-4">
                  <Clock
                    className="text-[#14120D]/40 shrink-0 mt-1"
                    size={22}
                  />
                  <div>
                    <p className="text-[#14120D]/40 text-[10px] font-black uppercase">
                      Giờ làm việc
                    </p>
                    <p className="font-bold">
                      7:00 – 20:00, kể cả Chủ Nhật &amp; Lễ
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Nhận báo giá nhanh */}
            <div className="bg-[#14120D] p-8 text-[#F3EFE4]">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <Zap size={18} className="text-[#F5B400] fill-[#F5B400]" />
                Nhận báo giá nhanh
              </h3>
              <a
                href={`https://zalo.me/${PHONE_TEL}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#F5B400] hover:bg-white text-[#14120D] py-4 font-black transition-colors uppercase text-sm text-center rounded-full"
              >
                Chat Zalo ngay
              </a>
            </div>
          </div>

          {/* CỘT PHẢI: BẢN ĐỒ */}
          <div className="lg:col-span-7">
            <div className="bg-white/70 p-3 shadow-sm">
              <div className="relative group overflow-hidden h-[420px] md:h-[520px]">
                <iframe
                  src={googleMapEmbed}
                  className="w-full h-full border-0 pointer-events-none"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bản đồ Ắc Quy Hưng Linh"
                ></iframe>

                <a
                  href={mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-transparent hover:bg-[#14120D]/10 transition-colors flex flex-col items-center justify-center"
                >
                  <div className="bg-[#14120D] text-[#F3EFE4] px-8 py-4 font-black flex items-center gap-3 shadow-xl opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-500 rounded-full">
                    <ExternalLink size={18} className="text-[#F5B400]" />
                    Mở chỉ đường trên Google Maps
                  </div>

                  <div className="absolute top-4 left-4 right-4 md:right-auto md:w-max bg-[#F3EFE4]/95 px-6 py-3 shadow-[3px_3px_0_#14120D]">
                    <p className="text-[#B4451C] font-black text-[10px] uppercase tracking-tight">
                      Tân Hiệp, Bình Dương
                    </p>
                    <p className="font-bold text-xs">Ắc Quy Hưng Linh</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nút gọi nổi — viết trực tiếp, không import component ngoài */}
      <a
        href={`tel:${PHONE_TEL}`}
        aria-label="Gọi ngay"
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-[#F5B400] text-[#14120D] flex items-center justify-center shadow-xl"
      >
        <PhoneCall size={24} />
      </a>
    </main>
  );
};

export default Contacts;
