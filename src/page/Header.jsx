import { Link } from "react-router-dom";
import { PhoneCall } from "lucide-react";

const PHONE_DISPLAY = "0909 000 111";
const PHONE_TEL = "0909000111";

const navLinks = [
  { to: "/", label: "Trang chủ" },
  { to: "/product", label: "Sản phẩm" },
  { to: "/about", label: "Giới thiệu" },
  { to: "/contacts", label: "Liên hệ" },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-30 bg-[#15130F]/95 backdrop-blur border-b border-[#6B675C]/40">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="w-8 h-8 grid place-items-center bg-[#F5B400] text-[#15130F] font-black">
            HL
          </span>
          <span className="text-[#F2EEE3] font-bold tracking-tight">
            Hưng Linh
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-[#F2EEE3]/80">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="hover:text-[#F5B400] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={`tel:${PHONE_TEL}`}
          className="flex items-center gap-2 border border-[#F5B400] text-[#F5B400] px-4 py-2 text-sm font-semibold hover:bg-[#F5B400] hover:text-[#15130F] transition-colors"
        >
          <PhoneCall size={16} />
          {PHONE_DISPLAY}
        </a>
      </div>
    </header>
  );
};

export default Header;