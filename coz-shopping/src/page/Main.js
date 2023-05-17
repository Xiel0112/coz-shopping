import { useContext } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Product from "../component/Product";
import { ProuductsContext } from "../context/ProductsProvider";
import ProductBrand from "../component/ProductBrand";
import ProductExhibition from "../component/ProductExhibition";
import ProductCategory from "../component/ProductCategory";

function Main() {
  const products = useContext(ProuductsContext);
  const productList = products.slice(0, 4);

  return (
    <div>
      <Header />
      <main>
        <div>
          <h2>상품 리스트</h2>
          {productList.map((product, id) => {
            if (product.type === "Product") {
              return (
                <Product
                  key={id}
                  img={product.image_url}
                  title={product.title}
                  discountPercentage={product.discountPercentage}
                  price={product.price}
                />
              );
            }

            if (product.type === "Brand") {
              return (
                <ProductBrand
                  key={id}
                  img={product.brand_image_url}
                  title={product.brand_name}
                  follower={product.follower}
                />
              );
            }

            if (product.type === "Exhibition") {
              return (
                <ProductExhibition
                  key={id}
                  img={product.image_url}
                  title={product.title}
                  sub_title={product.sub_title}
                />
              );
            }

            if (product.type === "Category") {
              return <ProductCategory key={id} img={product.image_url} title={product.title} />;
            }
          })}
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
