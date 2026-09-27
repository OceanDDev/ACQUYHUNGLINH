import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Footer from "./page/Footer";
import Header from "./page/Header";
import Product from "./page/Product";
import ProductDetail from "./page/Deltail";
import Contacts from "./page/Contact";
import News from "./page/News";
import NewsDetail from "./page/NewDetail";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/chi-tiet-san-pham/:slug" element={<ProductDetail />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/tin-tuc" element={<News />} />
                    <Route path="/tin-tuc/:slug" element={<NewsDetail />} />

          {/* Thêm route khi bạn tạo trang mới, ví dụ:
          <Route path="/san-pham" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          */}

          <Route
            path="*"
            element={
              <div style={{ padding: "50px", textAlign: "center" }}>
                <h1>404 - Không tìm thấy trang</h1>
              </div>
            }
          />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
