import { useContext, useState } from "react";
import FilterBtn from "../component/FilterBtn";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Product from "../component/Product";
import { ProuductsContext } from "../context/ProductsProvider";
import Modal from "../component/Modal";

const typeFilter = [
  { id: 0, type: "All", title: "전체" },
  { id: 1, type: "Product", title: "상품" },
  { id: 2, type: "Category", title: "카테고리" },
  { id: 3, type: "Exhibition", title: "기획전" },
  { id: 4, type: "Brand", title: "브랜드" },
];
function ProductList() {
  const products = useContext(ProuductsContext);
  const [modal, setModal] = useState(false);
  const [selectedType, setSelectedType] = useState("All");

  const filterProducts = products.filter((product) => product.type === selectedType);

  const handleOpenModal = () => setModal(true);

  return (
    <div>
      <Header />
      <main>
        <div>
          {typeFilter.map((type, id) => (
            <FilterBtn
              key={id}
              type={type.type}
              title={type.title}
              setSelectedType={setSelectedType}
            />
          ))}
        </div>
        <div onClick={handleOpenModal}>
          {filterProducts.map((product, id) => (
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
        {modal && <Modal setModal={setModal}/>}
      </main>
      <Footer />
    </div>
  );
}

export default ProductList;
