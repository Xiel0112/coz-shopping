import { useContext } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Product from "../component/Product";
import { ProuductsContext } from "../context/ProductsProvider";

const Main = () => {
  const { products } = useContext(ProuductsContext);

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
