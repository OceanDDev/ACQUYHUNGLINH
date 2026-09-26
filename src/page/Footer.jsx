const ADDRESS = "123 Đường ĐT743, Thuận An, Bình Dương";

const Footer = () => {
  return (
    <footer className="bg-[#0F0D0A] py-8">
      <div className="max-w-6xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[#F2EEE3]/60 text-sm">
        <span>© {new Date().getFullYear()} Ắc Quy Hưng Linh</span>
        <span>{ADDRESS}</span>
      </div>
    </footer>
  );
};

export default Footer;