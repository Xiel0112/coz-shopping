import { useContext, useState } from "react";
import Classification from "../component/Classification";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Product from "../component/Product";
import { ProuductsContext } from "../context/ProductsProvider";
import Modal from "../component/Modal";

function ProductList() {
  const products = useContext(ProuductsContext);
  const [modal, setModal] = useState(false);

  const handleOpenModal = () => setModal(true);

  return (
    <div>
      <Header />
      <main>
        <div>
          <Classification />
        </div>
        <div onClick={handleOpenModal}>
          {products.map((product, id) => (
            <Product
              key={id}
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
        {modal && <Modal setModal={setModal} />}
      </main>
      <Footer />
    </div>
  );
}

export default ProductList;
