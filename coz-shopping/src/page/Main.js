import { useContext, useState } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Product from "../component/Product";
import { ProuductsContext } from "../context/ProductsProvider";
import Modal from "../component/Modal";
import "../page/Main.css";
import { BookmarkContext } from "../context/BookmarkProvider";

function Main() {
  const [modal, setModal] = useState(false);
  const products = useContext(ProuductsContext);

  const handleOpenModal = () => setModal(true);

  const productList = products.slice(0, 4);

  return (
    <div className="main">
      <Header />
      <main className="main__content">
        <h2 className="product-list-title">상품 리스트</h2>
        <div className="product-list__products">
          {productList.map((product, id) => (
            <Product key={id} product={product} handleOpenModal={handleOpenModal} />
          ))}
        </div>
        {modal && <Modal setModal={setModal} />}
        <div>
          <h2>북마크 리스트</h2>
          {/* !!: <Product /> */}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Main;
