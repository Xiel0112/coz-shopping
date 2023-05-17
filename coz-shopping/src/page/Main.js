import { useContext, useState } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Product from "../component/Product";
import { ProuductsContext } from "../context/ProductsProvider";
import ProductBrand from "../component/ProductBrand";
import ProductExhibition from "../component/ProductExhibition";
import ProductCategory from "../component/ProductCategory";
import Modal from "../component/Modal";

function Main() {
  const products = useContext(ProuductsContext);
  const [modal, setModal] = useState(false);

  const handleOpenModal = () => setModal(true);

  const productList = products.slice(0, 4);

  console.log(modal);

  return (
    <div>
      <Header />
      <main>
        <div>
          <h2>상품 리스트</h2>
          {productList.map((product, id) => {
            if (product.type === "Product") {
              return (
                <div key={id} onClick={handleOpenModal}>
                  <Product
                    img={product.image_url}
                    title={product.title}
                    discountPercentage={product.discountPercentage}
                    price={product.price}
                  />
                </div>
              );
            }
            if (product.type === "Brand") {
              return (
                <div key={id} onClick={handleOpenModal}>
                  <ProductBrand
                    key={id}
                    img={product.brand_image_url}
                    title={product.brand_name}
                    follower={product.follower}
                  />
                </div>
              );
            }
            if (product.type === "Exhibition") {
              return (
                <div key={id} onClick={handleOpenModal}>
                  <ProductExhibition
                    key={id}
                    img={product.image_url}
                    title={product.title}
                    sub_title={product.sub_title}
                  />
                </div>
              );
            }
            if (product.type === "Category") {
              <div key={id} onClick={handleOpenModal}>
                <ProductCategory key={id} img={product.image_url} title={product.title} />
              </div>;
            }
          })}
        </div>
        {modal && <Modal setModal={setModal} />}
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
