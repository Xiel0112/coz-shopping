import { useContext } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Product from "../component/Product";
import { ProuductsContext } from "../context/ProductsProvider";

function Main() {
  const products = useContext(ProuductsContext);
  const productList = products.slice(0, 4);

  return (
    <div>
      <Header />
      <main>
        <div>
          <h2>상품 리스트</h2>
          {productList.map((product) => (
            <Product
              key={product.id}
              type={product.type}
              title={product.title}
              sub_title={product.sub_title}
              brand_name={product.brand_name}
              price={product.price}
              discountPercentage={product.discountPercentage}
              image_url={product.image_url}
              brand_image_url={product.brand_image_url}
              follower={product.follower}
            />
          ))}
        </div>
        <div>
          <h2>북마크 리스트</h2>
          <Product />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Main;
