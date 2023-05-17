import Footer from "../component/Footer";
import Header from "../component/Header";
import Product from "../component/Product";

const Main = () => {
  return (
    <div>
      <Header />
      <main>
        <div>
          <h2>상품 리스트</h2>
          <Product />
        </div>
        <div>
          <h2>북마크 리스트</h2>
          <Product />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Main;
