import { useContext } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Product from "../component/Product";
import { ProuductsContext } from "../context/ProductsProvider";
import "../page/Main.css";
import { BookmarkContext } from "../context/BookmarkProvider";

function Main() {
  const products = useContext(ProuductsContext);
  const { bookmarkArr } = useContext(BookmarkContext);

  const productList = products.slice(0, 4);
  const bookmarkList = bookmarkArr.slice(0, 4);

  // console.log("bookmarkArr:", bookmarkArr);

  return (
    <div className="main">
      <Header />
      <main className="main__content">
        <h2 className="content-title">상품 리스트</h2>
        <div className="content-poduct">
          {productList.map((product, id) => (
            <Product key={id} product={product} />
          ))}
        </div>
        <h2 className="content-title">북마크 리스트</h2>
        <div className="content-poduct">
          {bookmarkList.map((product, id) => (
            <Product key={id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Main;
