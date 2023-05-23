import { useContext, useState } from "react";
import FilterBtn from "../component/FilterBtn";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Product from "../component/Product";
import { ProuductsContext } from "../context/ProductsProvider";
import Modal from "../component/Modal";
import "./Bookmark.css";

const typeFilter = [
  { id: 0, type: "All", title: "전체" },
  { id: 1, type: "Product", title: "상품" },
  { id: 2, type: "Category", title: "카테고리" },
  { id: 3, type: "Exhibition", title: "기획전" },
  { id: 4, type: "Brand", title: "브랜드" },
];

function Bookmark() {
  const products = useContext(ProuductsContext);
  const [modal, setModal] = useState(false);
  const [selectedType, setSelectedType] = useState("All");

  // !!: type이 All일 때, 필터링되는 상품이 없음...
  const filterProducts =
    selectedType === "All" ? products : products.filter((product) => product.type === selectedType);

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
            <Product key={id} product={product} />
          ))}
        </div>
        {modal && <Modal setModal={setModal} />}
      </main>
      <Footer />
    </div>
  );
}

export default Bookmark;
